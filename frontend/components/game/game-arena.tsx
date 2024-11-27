import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function GameArena() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <Card className="lg:col-span-9 aspect-video border border-[#9D00FF] bg-opacity-20">
        <div className="h-full flex items-center justify-center">
          <span className="text-[#00F0FF]">Game Canvas Will Render Here</span>
        </div>
      </Card>
      <div className="lg:col-span-3 space-y-4">
        <Card className="border border-[#9D00FF] bg-opacity-20">
          <div className="p-4 space-y-4">
            <h3 className="text-lg font-bold text-[#FF1B8D]">Game Controls</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="border-[#39FF14] text-[#39FF14]"
              >
                YOLO Mode
              </Button>
              <Button
                variant="outline"
                className="border-[#39FF14] text-[#39FF14]"
              >
                APE IN
              </Button>
            </div>
          </div>
        </Card>
        <Card className="border border-[#9D00FF] bg-opacity-20">
          <div className="p-4">
            <h3 className="text-lg font-bold text-[#FF1B8D]">Game Stats</h3>
            {/* Add stats here */}
          </div>
        </Card>
      </div>
    </div>
  );
}
