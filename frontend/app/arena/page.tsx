import { GameArena } from "@/components/game/game-arena";
import { MatchList } from "@/components/game/match-list";
import { GameMatch } from "@/types";

const MOCK_MATCHES: GameMatch[] = [
  {
    id: "1",
    player1: {
      address: "0x1234567890abcdef",
      ready: true,
    },
    stakes: 100,
    status: "waiting",
    createdAt: new Date(),
    spectators: 3,
  },
];

export default function ArenaPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-[#39FF14]">Game Arena</h1>
      <MatchList matches={MOCK_MATCHES} />
    </div>
  );
}
