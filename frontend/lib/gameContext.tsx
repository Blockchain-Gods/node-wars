// app/lib/gameContext.tsx
"use client";
import { createContext, useContext, useReducer } from "react";
import { Cell, GameState, GameAction, Player } from "@/types";

const ROWS = 8;
const COLS = 6;

const createInitialGrid = (): Cell[][] => {
  return Array(ROWS)
    .fill(null)
    .map(() =>
      Array(COLS)
        .fill(null)
        .map(() => ({
          atoms: 0,
          owner: null,
        }))
    );
};

const initialState: GameState = {
  grid: createInitialGrid(),
  currentPlayer: "P1",
  winner: null,
  status: "playing",
};

const getMaxAtoms = (row: number, col: number): number => {
  // Corner cells
  if ((row === 0 || row === ROWS - 1) && (col === 0 || col === COLS - 1)) {
    return 1;
  }
  // Edge cells
  if (row === 0 || row === ROWS - 1 || col === 0 || col === COLS - 1) {
    return 2;
  }
  // Middle cells
  return 3;
};

const getAdjacentCells = (row: number, col: number): [number, number][] => {
  const adjacent: [number, number][] = [];

  if (row > 0) adjacent.push([row - 1, col]);
  if (row < ROWS - 1) adjacent.push([row + 1, col]);
  if (col > 0) adjacent.push([row, col - 1]);
  if (col < COLS - 1) adjacent.push([row, col + 1]);

  return adjacent;
};

const explodeCell = (
  grid: Cell[][],
  row: number,
  col: number,
  player: Player
): void => {
  const cell = grid[row][col];
  const maxAtoms = getMaxAtoms(row, col);

  if (cell.atoms >= maxAtoms) {
    // Reset the current cell
    cell.atoms = 0;

    // Distribute atoms to adjacent cells
    getAdjacentCells(row, col).forEach(([adjRow, adjCol]) => {
      const adjCell = grid[adjRow][adjCol];
      adjCell.atoms++;
      adjCell.owner = player;

      // Check if this causes a chain reaction
      if (adjCell.atoms >= getMaxAtoms(adjRow, adjCol)) {
        explodeCell(grid, adjRow, adjCol, player);
      }
    });
  }
};

const checkWinner = (grid: Cell[][]): Player | null => {
  let p1Exists = false;
  let p2Exists = false;
  let bothPlayersJoined = false;

  // First pass: check if both players have made moves
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = grid[row][col];
      if (cell.atoms > 0) {
        if (cell.owner === "P1") p1Exists = true;
        if (cell.owner === "P2") p2Exists = true;
        if (p1Exists && p2Exists) {
          bothPlayersJoined = true;
          break;
        }
      }
    }
    if (bothPlayersJoined) break;
  }

  // Only check for winner if both players have joined the game
  if (bothPlayersJoined) {
    // Second pass: check current state
    p1Exists = false;
    p2Exists = false;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const cell = grid[row][col];
        if (cell.atoms > 0) {
          if (cell.owner === "P1") p1Exists = true;
          if (cell.owner === "P2") p2Exists = true;
        }
      }
    }

    // Return winner only if one player has been eliminated
    if (p1Exists && !p2Exists) return "P1";
    if (p2Exists && !p1Exists) return "P2";
  }

  return null;
};

const isValidMove = (cell: Cell, currentPlayer: Player): boolean => {
  return cell.owner === null || cell.owner === currentPlayer;
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case "MAKE_MOVE": {
      if (state.status !== "playing") return state;

      const { row, col } = action;
      const cell = state.grid[row][col];

      // Check if move is valid
      if (!isValidMove(cell, state.currentPlayer)) {
        return state;
      }

      // Create new grid to maintain immutability
      const newGrid = JSON.parse(JSON.stringify(state.grid));
      const targetCell = newGrid[row][col];

      // Add atom and set owner
      targetCell.atoms++;
      targetCell.owner = state.currentPlayer;

      // Check for explosions
      if (targetCell.atoms >= getMaxAtoms(row, col)) {
        explodeCell(newGrid, row, col, state.currentPlayer);
      }

      // Check for winner after explosions are done
      const winner = checkWinner(newGrid);
      const newStatus = winner ? "finished" : "playing";

      return {
        grid: newGrid,
        currentPlayer: state.currentPlayer === "P1" ? "P2" : "P1",
        winner,
        status: newStatus,
      };
    }

    case "RESET_GAME":
      return {
        ...initialState,
        grid: createInitialGrid(),
      };

    default:
      return state;
  }
};

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
