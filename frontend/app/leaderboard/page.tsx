import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table";

export default function LeaderboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-[#39FF14]">Leaderboard</h1>
      <LeaderboardTable />
    </div>
  );
}
