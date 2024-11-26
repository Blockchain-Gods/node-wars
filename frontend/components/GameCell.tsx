"use client";
import { motion, AnimatePresence } from "motion/react";
import { Cell, Player } from "@/types";

interface GameCellProps {
  cell: Cell;
  row: number;
  col: number;
  onClick: (row: number, col: number) => void;
  currentPlayer: Player;
}

export default function GameCell({
  cell,
  row,
  col,
  onClick,
  currentPlayer,
}: GameCellProps) {
  const isPlayable = !cell.owner || cell.owner === currentPlayer;
  const color = cell.owner === "P1" ? "red" : "blue";
  const getAtomColor = (owner: Player | null) => {
    return owner === "P1" ? "#EF4444" : "#3B82F6";
  };
  return (
    <div
      className={`relative border border-gray-200 aspect-square 
                  ${
                    isPlayable
                      ? "cursor-pointer hover:bg-gray-100"
                      : "cursor-not-allowed"
                  }`}
      onClick={() => isPlayable && onClick(row, col)}
    >
      <AnimatePresence>
        {Array(cell.atoms)
          .fill(null)
          .map((_, index) => (
            <motion.div
              key={`${row}-${col}-${index}`}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: cell.owner
                  ? getAtomColor(cell.owner)
                  : "#9CA3AF",
                left: `${index * 25 + 25}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}
