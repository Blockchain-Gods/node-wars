export type Player = "P1" | "P2";

export interface Cell {
  atoms: number;
  owner: Player | null;
}

export interface GameState {
  grid: Cell[][];
  currentPlayer: Player;
  winner: Player | null;
  status: "playing" | "finished";
}

export type GameAction =
  | { type: "MAKE_MOVE"; row: number; col: number }
  | { type: "RESET_GAME" };
