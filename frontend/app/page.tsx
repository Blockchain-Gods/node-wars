import GameBoard from "@/components/GameBoard";
import { GameProvider } from "@/lib/gameContext";

export default function Home() {
  return (
    <GameProvider>
      <main className="min-h-screen bg-gray-50 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Chain Reaction</h1>
        <GameBoard />
      </main>
    </GameProvider>
  );
}
