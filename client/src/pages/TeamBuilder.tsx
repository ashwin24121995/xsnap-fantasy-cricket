import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";

export default function TeamBuilder() {
  const [budget] = useState(100);
  const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);

  const players = [
    { id: 1, name: "Virat Kohli", role: "Batsman", credits: 11, points: 850 },
    { id: 2, name: "Rohit Sharma", role: "Batsman", credits: 10.5, points: 820 },
    { id: 3, name: "Jasprit Bumrah", role: "Bowler", credits: 10, points: 780 },
    { id: 4, name: "Hardik Pandya", role: "All-rounder", credits: 9.5, points: 750 },
    { id: 5, name: "KL Rahul", role: "Wicket-keeper", credits: 9, points: 720 },
  ];

  const handleSelectPlayer = (playerId: number) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter(id => id !== playerId));
    } else if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, playerId]);
    } else {
      toast.error("You can only select 11 players");
    }
  };

  const usedCredits = selectedPlayers.reduce((sum, id) => {
    const player = players.find(p => p.id === id);
    return sum + (player?.credits || 0);
  }, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Build Your Team</h1>
              <p className="text-muted-foreground">Select 11 players within budget</p>
            </div>
            <Card className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Budget Remaining</p>
              <p className="text-2xl font-bold">{(budget - usedCredits).toFixed(1)} CR</p>
              <p className="text-xs text-muted-foreground">Players: {selectedPlayers.length}/11</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Available Players</h2>
                <div className="space-y-3">
                  {players.map((player) => {
                    const isSelected = selectedPlayers.includes(player.id);
                    return (
                      <div
                        key={player.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          isSelected ? "border-primary bg-primary/5" : "hover:border-primary/50"
                        }`}
                        onClick={() => handleSelectPlayer(player.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{player.name}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="secondary" className="text-xs">{player.role}</Badge>
                              <span className="text-xs text-muted-foreground">{player.points} pts</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{player.credits} CR</p>
                            {isSelected && (
                              <Badge variant="default" className="mt-1">Selected</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-6 sticky top-6">
                <h2 className="text-xl font-semibold mb-4">Your Team</h2>
                {selectedPlayers.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    Select players to build your team
                  </p>
                ) : (
                  <div className="space-y-2 mb-6">
                    {selectedPlayers.map((id) => {
                      const player = players.find(p => p.id === id);
                      return player ? (
                        <div key={id} className="text-sm flex justify-between">
                          <span>{player.name}</span>
                          <span className="text-muted-foreground">{player.credits} CR</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
                
                <Button
                  className="w-full glossy-btn"
                  disabled={selectedPlayers.length !== 11}
                  onClick={() => toast.success("Team saved! Now select captain & vice-captain")}
                >
                  Continue
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
