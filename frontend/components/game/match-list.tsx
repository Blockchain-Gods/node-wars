import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GameMatch } from "@/types";
import Link from "next/link";

export function MatchList({ matches }: { matches: GameMatch[] }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#39FF14]">Open Matches</h2>
        <Link href="/arena/new">
          <Button className="bg-[#FF1B8D] hover:bg-[#FF1B8D]/80">
            Create New Match
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <Card
            key={match.id}
            className="border border-[#9D00FF] bg-opacity-20"
          >
            <CardHeader>
              <CardTitle className="text-[#00F0FF]">
                Match #{match.id}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Stakes:</span>
                  <span className="text-[#39FF14]">{match.stakes} $GODS</span>
                </div>
                <div className="flex justify-between">
                  <span>Player 1:</span>
                  <span className="text-[#FF1B8D]">
                    {match.player1.address.slice(0, 6)}...
                    {match.player1.address.slice(-4)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Spectators:</span>
                  <span>{match.spectators}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button className="w-full bg-[#39FF14] hover:bg-[#39FF14]/80">
                    Join Match
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[#00F0FF] text-[#00F0FF]"
                  >
                    Spectate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
