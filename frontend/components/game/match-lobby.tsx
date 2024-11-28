import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GameMatch } from "@/types";

export function MatchLobby({ match }: { match: GameMatch }) {
  return (
    <Card className="max-w-2xl mx-auto border border-[#9D00FF] bg-opacity-20">
      <CardHeader>
        <CardTitle className="text-[#00F0FF]">
          Match Lobby #{match.id}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[#39FF14]">Player 1</h3>
              <p className="text-[#FF1B8D]">
                {match.player1.address.slice(0, 6)}...
                {match.player1.address.slice(-4)}
              </p>
              {match.player1.ready && (
                <span className="text-[#39FF14]">Ready</span>
              )}
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-[#39FF14]">Player 2</h3>
              {match.player2 ? (
                <>
                  <p className="text-[#FF1B8D]">
                    {match.player2.address.slice(0, 6)}...
                    {match.player2.address.slice(-4)}
                  </p>
                  {match.player2.ready && (
                    <span className="text-[#39FF14]">Ready</span>
                  )}
                </>
              ) : (
                <p className="text-gray-400">Waiting for player...</p>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[#00F0FF]">Stakes: </span>
              <span className="text-[#39FF14]">{match.stakes} $GODS</span>
            </div>
            <div>
              <span className="text-[#00F0FF]">Spectators: </span>
              <span>{match.spectators}</span>
            </div>
          </div>
          <Button className="w-full bg-[#39FF14] hover:bg-[#39FF14]/80">
            Ready
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
