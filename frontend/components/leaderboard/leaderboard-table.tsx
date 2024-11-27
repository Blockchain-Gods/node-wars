import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function LeaderboardTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-[#9D00FF]">
          <TableHead className="text-[#00F0FF]">Rank</TableHead>
          <TableHead className="text-[#00F0FF]">Player</TableHead>
          <TableHead className="text-[#00F0FF]">Wins</TableHead>
          <TableHead className="text-[#00F0FF]">$GODS Earned</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border-[#9D00FF]">
          <TableCell className="font-medium">#1</TableCell>
          <TableCell>0xDe...4d2</TableCell>
          <TableCell>42</TableCell>
          <TableCell className="text-[#39FF14]">15,000</TableCell>
        </TableRow>
        {/* Add more rows as needed */}
      </TableBody>
    </Table>
  );
}
