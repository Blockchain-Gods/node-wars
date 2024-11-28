"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function CreateMatch() {
  const [stakes, setStakes] = useState<number>(0);

  const handleCreateMatch = () => {
    // Handle match creation logic
  };

  return (
    <Card className="max-w-md mx-auto border border-[#9D00FF] bg-opacity-20">
      <CardHeader>
        <CardTitle className="text-[#00F0FF]">Create New Match</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="stakes" className="text-[#39FF14]">
              Stakes ($GODS)
            </Label>
            <Input
              id="stakes"
              type="number"
              value={stakes}
              onChange={(e) => setStakes(Number(e.target.value))}
              className="border-[#9D00FF]"
            />
          </div>
          <Button
            onClick={handleCreateMatch}
            className="w-full bg-[#FF1B8D] hover:bg-[#FF1B8D]/80"
          >
            Create Match
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
