import { useState } from "react";
import { trpc } from "@/lib/trpc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Loader2 } from "lucide-react";

interface MatchSquadDialogProps {
  matchId: string;
  matchName: string;
}

interface Player {
  id: string;
  name: string;
  role?: string;
  battingStyle?: string;
  bowlingStyle?: string;
  country?: string;
  playerImg?: string;
}

interface TeamSquad {
  teamName: string;
  shortname: string;
  img: string;
  players: Player[];
}

export function MatchSquadDialog({ matchId, matchName }: MatchSquadDialogProps) {
  const [open, setOpen] = useState(false);
  
  const { data: squadData, isLoading } = trpc.matches.getMatchSquad.useQuery(
    { matchId },
    { enabled: open } // Only fetch when dialog is opened
  );

  // squadData is an array of teams
  const teams: TeamSquad[] = Array.isArray(squadData) ? squadData : [];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Users className="h-4 w-4" />
          View Squad
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{matchName}</DialogTitle>
          <DialogDescription>
            Complete player squads for both teams
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : teams.length > 0 ? (
          <div className="space-y-6">
            {teams.map((team) => (
              <div key={team.teamName}>
                {/* Team Header */}
                <div className="flex items-center gap-3 mb-4">
                  {team.img && (
                    <img
                      src={team.img}
                      alt={team.teamName}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      {team.teamName}
                      <Badge variant="secondary" className="ml-2">
                        {team.players?.length || 0} Players
                      </Badge>
                    </h3>
                    <p className="text-sm text-muted-foreground">{team.shortname}</p>
                  </div>
                </div>

                {/* Players Grid */}
                {team.players && team.players.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {team.players.map((player) => (
                      <Card key={player.id} className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          {/* Player Image */}
                          <div className="flex-shrink-0">
                            {player.playerImg && !player.playerImg.includes('icon512.png') ? (
                              <img
                                src={player.playerImg}
                                alt={player.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                                onError={(e) => {
                                  // Fallback to initials if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.nextElementSibling as HTMLElement;
                                  if (fallback) fallback.classList.remove('hidden');
                                }}
                              />
                            ) : null}
                            <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ${player.playerImg && !player.playerImg.includes('icon512.png') ? 'hidden' : ''}`}>
                              <span className="text-sm font-bold text-primary">
                                {player.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
                              </span>
                            </div>
                          </div>

                          {/* Player Info */}
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm truncate">{player.name}</p>
                            {player.role && (
                              <p className="text-xs text-muted-foreground truncate">{player.role}</p>
                            )}
                            {player.country && (
                              <p className="text-xs text-muted-foreground truncate">{player.country}</p>
                            )}
                          </div>
                        </div>

                        {/* Player Details */}
                        {(player.battingStyle || player.bowlingStyle) && (
                          <div className="mt-3 pt-3 border-t space-y-1">
                            {player.battingStyle && (
                              <p className="text-xs text-muted-foreground">
                                <span className="font-medium">Bat:</span> {player.battingStyle}
                              </p>
                            )}
                            {player.bowlingStyle && (
                              <p className="text-xs text-muted-foreground">
                                <span className="font-medium">Bowl:</span> {player.bowlingStyle}
                              </p>
                            )}
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-4 text-muted-foreground">No players available</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No squad data available for this match
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
