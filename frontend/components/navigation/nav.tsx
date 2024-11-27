import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-[#9D00FF] bg-[#0A192F]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A192F]/60">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#39FF14]">GODS</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link href="/arena">
            <Button
              variant="ghost"
              className="text-[#00F0FF] hover:text-[#00F0FF]/80"
            >
              Arena
            </Button>
          </Link>
          <Link href="/tournaments">
            <Button
              variant="ghost"
              className="text-[#00F0FF] hover:text-[#00F0FF]/80"
            >
              Tournaments
            </Button>
          </Link>
          <Link href="/leaderboard">
            <Button
              variant="ghost"
              className="text-[#00F0FF] hover:text-[#00F0FF]/80"
            >
              Leaderboard
            </Button>
          </Link>
          <Button className="bg-[#FF1B8D] hover:bg-[#FF1B8D]/80">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
}
