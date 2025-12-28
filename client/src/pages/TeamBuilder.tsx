import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Star, Shield, Trophy, AlertCircle } from "lucide-react";

export default function TeamBuilder() {
  const [, setLocation] = useLocation();
  // Get matchId from URL query params (e.g., /team-builder?matchId=abc-123)
  const searchParams = new URLSearchParams(window.location.search);
  const matchApiId = searchParams.get('matchId') || '';

  const [selectedPlayers, setSelectedPlayers] = useState<any[]>([]);
  const [captainId, setCaptainId] = useState<string | null>(null);
  const [viceCaptainId, setViceCaptainId] = useState<string | null>(null);
  const [teamName, setTeamName] = useState('');
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  // Get match details and players from Cricket API
  const { data: matches } = trpc.matches.getUpcoming.useQuery();
  const match = matches?.find(m => m.id === matchApiId);
  const { data: players, isLoading } = trpc.players.getByMatch.useQuery(
    { matchApiId },
    { enabled: !!matchApiId }
  );
  const createTeamMutation = trpc.teams.create.useMutation();

  const usedCredits = selectedPlayers.reduce((sum, p) => sum + parseFloat(p.credits), 0);
  const remainingCredits = 100 - usedCredits;

  const handleSelectPlayer = (player: any) => {
    const isSelected = selectedPlayers.some(p => p.id === player.id);
    
    if (isSelected) {
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
      if (captainId === player.id) setCaptainId(null);
      if (viceCaptainId === player.id) setViceCaptainId(null);
    } else {
      if (selectedPlayers.length >= 11) {
        toast.error("You can only select 11 players");
        return;
      }
      if (usedCredits + parseFloat(player.credits) > 100) {
        toast.error("Not enough credits");
        return;
      }
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleSetCaptain = (playerId: number) => {
    if (viceCaptainId === playerId) {
      toast.error("Player is already vice-captain");
      return;
    }
    setCaptainId(playerId);
    toast.success("Captain set! Will get 2x points");
  };

  const handleSetViceCaptain = (playerId: number) => {
    if (captainId === playerId) {
      toast.error("Player is already captain");
      return;
    }
    setViceCaptainId(playerId);
    toast.success("Vice-captain set! Will get 1.5x points");
  };

  const handleSaveTeam = async () => {
    if (selectedPlayers.length !== 11) {
      toast.error("Please select exactly 11 players");
      return;
    }
    if (!captainId || !viceCaptainId) {
      toast.error("Please select captain and vice-captain");
      return;
    }
    if (!teamName.trim()) {
      toast.error("Please enter a team name");
      return;
    }

    try {
      await createTeamMutation.mutateAsync({
        matchId,
        teamName: teamName.trim(),
        captainId,
        viceCaptainId,
        playerIds: selectedPlayers.map(p => p.id),
      });

      toast.success("Team created successfully!");
      setShowSaveDialog(false);
      setLocation("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Failed to create team");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-muted/30">
          <div className="container max-w-6xl">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-1/4"></div>
              <div className="h-64 bg-muted rounded"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Build Your Team</h1>
              {match && <p className="text-muted-foreground">{match.name}</p>}
            </div>
            <Card className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Credits Remaining</p>
              <p className={`text-2xl font-bold ${remainingCredits < 0 ? 'text-destructive' : ''}`}>
                {remainingCredits.toFixed(1)} CR
              </p>
              <p className="text-xs text-muted-foreground">Players: {selectedPlayers.length}/11</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Available Players</h2>
                {!players || players.length === 0 ? (
                  <p className="text-center text-muted-foreground py-12">
                    No players available for this match yet
                  </p>
                ) : (
                  <div className="space-y-3">
                    {players.map((player) => {
                      const isSelected = selectedPlayers.some(p => p.id === player.id);
                      const canAfford = usedCredits + parseFloat(player.credits) <= 100;
                      
                      return (
                        <div
                          key={player.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            isSelected ? "border-primary bg-primary/5" : "hover:border-primary/50"
                          }`}
                          onClick={() => handleSelectPlayer(player)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="font-semibold">{player.name}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="secondary" className="text-xs">{player.role}</Badge>
                                <span className="text-xs text-muted-foreground">{player.country}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <p className="font-bold">{parseFloat(player.credits).toFixed(1)} CR</p>
                                {isSelected && (
                                  <div className="flex gap-1 mt-1">
                                    {captainId === player.id && (
                                      <Badge variant="default" className="text-xs">
                                        <Star className="w-3 h-3 mr-1" />C
                                      </Badge>
                                    )}
                                    {viceCaptainId === player.id && (
                                      <Badge variant="secondary" className="text-xs">
                                        <Shield className="w-3 h-3 mr-1" />VC
                                      </Badge>
                                    )}
                                  </div>
                                )}
                              </div>
                              {isSelected && (
                                <div className="flex gap-1">
                                  <Button
                                    size="sm"
                                    variant={captainId === player.id ? "default" : "outline"}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSetCaptain(player.id);
                                    }}
                                  >
                                    <Star className="w-3 h-3" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant={viceCaptainId === player.id ? "default" : "outline"}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleSetViceCaptain(player.id);
                                    }}
                                  >
                                    <Shield className="w-3 h-3" />
                                  </Button>
                                </div>
                              )}
                              {!isSelected && !canAfford && (
                                <Badge variant="destructive" className="text-xs">
                                  Can't afford
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
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
                    {selectedPlayers.map((player) => (
                      <div key={player.id} className="text-sm flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span>{player.name}</span>
                          {captainId === player.id && (
                            <Badge variant="default" className="text-xs h-5">C</Badge>
                          )}
                          {viceCaptainId === player.id && (
                            <Badge variant="secondary" className="text-xs h-5">VC</Badge>
                          )}
                        </div>
                        <span className="text-muted-foreground">{parseFloat(player.credits).toFixed(1)} CR</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {selectedPlayers.length === 11 && (
                  <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
                    <DialogTrigger asChild>
                      <Button className="w-full glossy-btn" size="lg">
                        <Trophy className="w-4 h-4 mr-2" />
                        Save Team
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Save Your Team</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <Label htmlFor="teamName">Team Name</Label>
                          <Input
                            id="teamName"
                            placeholder="Enter team name"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                          />
                        </div>
                        {(!captainId || !viceCaptainId) && (
                          <div className="flex items-start gap-2 p-3 bg-destructive/10 rounded-lg">
                            <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                            <p className="text-sm">
                              Please select a captain (2x points) and vice-captain (1.5x points) from your team
                            </p>
                          </div>
                        )}
                        <Button
                          className="w-full"
                          onClick={handleSaveTeam}
                          disabled={createTeamMutation.isPending || !captainId || !viceCaptainId || !teamName.trim()}
                        >
                          {createTeamMutation.isPending ? "Saving..." : "Confirm & Save"}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}

                {selectedPlayers.length < 11 && (
                  <Button
                    className="w-full glossy-btn"
                    disabled
                  >
                    Select {11 - selectedPlayers.length} more player{11 - selectedPlayers.length !== 1 ? 's' : ''}
                  </Button>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
