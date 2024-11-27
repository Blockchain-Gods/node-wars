import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TournamentCard() {
  return (
    <Card className="border border-[#9D00FF] bg-opacity-20">
      <CardHeader>
        <CardTitle className="text-[#00F0FF]">Daily Tournament</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Prize Pool:</span>
            <span className="text-[#39FF14]">1000 $GODS</span>
          </div>
          <div className="flex justify-between">
            <span>Players:</span>
            <span>24/32</span>
          </div>
          <Button className="w-full bg-[#FF1B8D] hover:bg-[#FF1B8D]/80">
            Join Tournament
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
