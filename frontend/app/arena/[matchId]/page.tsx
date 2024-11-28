import { MatchLobby } from "@/components/game/match-lobby";
import { GameArena } from "@/components/game/game-arena";
import { GameMatch } from "@/types";

export default function MatchPage({ params }: { params: { matchId: string } }) {
  const mockMatch: GameMatch = {
    id: params.matchId,
    player1: {
      address: "0x1234567890abcdef",
      ready: true,
    },
    stakes: 100,
    status: "waiting",
    createdAt: new Date(),
    spectators: 3,
  };

  return (
    <div className="space-y-8">
      {mockMatch.status === "waiting" ? (
        <MatchLobby match={mockMatch} />
      ) : (
        <GameArena />
      )}
    </div>
  );
}
