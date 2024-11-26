// app/components/GameBoard.tsx
"use client";
import { useGame } from "@/lib/gameContext";
import GameCell from "./GameCell";

export default function GameBoard() {
  const { state, dispatch } = useGame();

  const handleCellClick = (row: number, col: number) => {
    dispatch({ type: "MAKE_MOVE", row, col });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4 text-center">
        {state.status === "playing" ? (
          <div className="text-xl font-bold">
            Current Player: {state.currentPlayer === "P1" ? "Red" : "Blue"}
          </div>
        ) : (
          <div className="text-2xl font-bold text-green-600">
            Winner: {state.winner === "P1" ? "Red" : "Blue"}!
          </div>
        )}
      </div>

      <div
        className="grid gap-1 rounded-lg p-4 shadow-lg"
        style={{
          gridTemplateColumns: `repeat(6, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(8, minmax(0, 1fr))`,
        }}
      >
        {state.grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <GameCell
              key={`${rowIndex}-${colIndex}`}
              cell={cell}
              row={rowIndex}
              col={colIndex}
              onClick={handleCellClick}
              currentPlayer={state.currentPlayer}
            />
          ))
        )}
      </div>

      {state.status === "finished" && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => dispatch({ type: "RESET_GAME" })}
        >
          Play Again
        </button>
      )}
    </div>
  );
}
