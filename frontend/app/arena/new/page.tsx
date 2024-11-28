import { CreateMatch } from "@/components/game/create-match";

export default function CreateMatchPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-[#39FF14]">Create New Match</h1>
      <CreateMatch />
    </div>
  );
}
