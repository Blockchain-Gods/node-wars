import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
      <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-[#FF1B8D] to-[#39FF14] text-transparent bg-clip-text">
        BLOCKCHAIN GODS: Node Wars
      </h1>
      <Card className="w-full max-w-md border border-[#9D00FF] bg-opacity-20">
        <CardHeader>
          <CardTitle className="text-center text-[#00F0FF]">
            Enter the Arena
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/arena">
            <Button className="w-full bg-[#FF1B8D] hover:bg-[#FF1B8D]/80">
              Play Now
            </Button>
          </Link>
          <Link href="/tournaments">
            <Button
              variant="outline"
              className="w-full border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/20"
            >
              Tournaments
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
