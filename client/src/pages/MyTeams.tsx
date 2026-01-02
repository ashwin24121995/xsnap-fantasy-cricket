import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Users, Calendar, MapPin, Star, Crown, Shield, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";

export default function MyTeams() {
  const [, navigate] = useLocation();
  const { user, isLoading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("upcoming");

  // Redirect to login if not authenticated
  if (!authLoading && !user) {
    navigate("/login");
    return null;
  }

  const { data: teams, isLoading: teamsLoading } = trpc.teams.getMyTeams.useQuery(
    undefined,
    {
      enabled: !!user,
      refetchInterval: 60 * 1000, // Refresh every minute
    }
  );

  if (authLoading || teamsLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading your teams...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Separate teams by match status
  const upcomingTeams = teams?.filter(t => t.match?.status === 'upcoming') || [];
  const liveTeams = teams?.filter(t => t.match?.status === 'live') || [];
  const completedTeams = teams?.filter(t => t.match?.status === 'completed') || [];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">My Fantasy Teams</h1>
            <p className="text-lg text-muted-foreground">
              View and manage all your fantasy cricket teams
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{upcomingTeams.length}</p>
                  <p className="text-sm text-muted-foreground">Upcoming Matches</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{liveTeams.length}</p>
                  <p className="text-sm text-muted-foreground">Live Matches</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{completedTeams.length}</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Teams Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upcoming">
                Upcoming ({upcomingTeams.length})
              </TabsTrigger>
              <TabsTrigger value="live">
                Live ({liveTeams.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({completedTeams.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              {upcomingTeams.length === 0 ? (
                <Card className="p-12 text-center border-2 border-dashed">
                  <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-2xl font-bold mb-2">No Upcoming Teams</h3>
                  <p className="text-muted-foreground mb-6">
                    Create your first fantasy team for an upcoming match!
                  </p>
                  <Button onClick={() => navigate("/matches")}>
                    Browse Matches
                  </Button>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {upcomingTeams.map((team) => (
                    <TeamCard key={team.id} team={team} navigate={navigate} />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="live">
              {liveTeams.length === 0 ? (
                <Card className="p-12 text-center border-2 border-dashed">
                  <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-2xl font-bold mb-2">No Live Matches</h3>
                  <p className="text-muted-foreground">
                    Your teams will appear here when matches start
                  </p>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {liveTeams.map((team) => (
                    <TeamCard key={team.id} team={team} navigate={navigate} isLive />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="completed">
              {completedTeams.length === 0 ? (
                <Card className="p-12 text-center border-2 border-dashed">
                  <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-2xl font-bold mb-2">No Completed Matches</h3>
                  <p className="text-muted-foreground">
                    Your completed teams will appear here
                  </p>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {completedTeams.map((team) => (
                    <TeamCard key={team.id} team={team} navigate={navigate} isCompleted />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Team Card Component
function TeamCard({ 
  team, 
  navigate, 
  isLive = false, 
  isCompleted = false 
}: { 
  team: any; 
  navigate: any; 
  isLive?: boolean; 
  isCompleted?: boolean;
}) {
  const match = team.match;
  const matchDate = match?.dateTimeGMT ? new Date(match.dateTimeGMT) : null;

  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow border-2 ${
      isLive ? 'border-red-500/50' : isCompleted ? 'border-green-500/50' : ''
    }`}>
      <div className="p-6">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="uppercase">
            {match?.matchType || 'T20'}
          </Badge>
          {isLive && (
            <Badge className="bg-red-500 text-white animate-pulse">
              🔴 LIVE
            </Badge>
          )}
          {isCompleted && (
            <Badge className="bg-green-500 text-white">
              ✓ COMPLETED
            </Badge>
          )}
        </div>

        {/* Match Name */}
        <h3 className="text-lg font-semibold mb-4">{match?.name || 'Match'}</h3>

        {/* Team Name */}
        <div className="bg-primary/5 rounded-lg p-4 mb-4">
          <p className="text-sm text-muted-foreground mb-1">Team Name</p>
          <p className="font-bold text-lg">{team.name}</p>
        </div>

        {/* Captain & Vice Captain */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Crown className="h-4 w-4 text-yellow-500" />
            <div>
              <p className="text-xs text-muted-foreground">Captain</p>
              <p className="text-sm font-semibold">Player #{team.captainApiId?.slice(0, 8)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-xs text-muted-foreground">Vice Captain</p>
              <p className="text-sm font-semibold">Player #{team.viceCaptainApiId?.slice(0, 8)}</p>
            </div>
          </div>
        </div>

        {/* Match Info */}
        {matchDate && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{format(matchDate, 'MMM dd, hh:mm a')}</span>
            </div>
          </div>
        )}

        {match?.venue && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{match.venue}</span>
          </div>
        )}

        {/* Total Points (for completed matches) */}
        {isCompleted && team.totalPoints !== undefined && (
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Total Fantasy Points</span>
              <span className="text-2xl font-bold text-green-600">{team.totalPoints}</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => navigate(`/teams/${team.id}`)}
          >
            View Team
          </Button>
          {isCompleted && (
            <Button 
              className="flex-1"
              onClick={() => navigate(`/match/${match?.id}/summary`)}
            >
              Match Summary
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
