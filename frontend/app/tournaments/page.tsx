import { TournamentCard } from "@/components/tournaments/tournament-card";

export default function TournamentsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-[#39FF14]">Active Tournaments</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
      </div>
    </div>
  );
}
