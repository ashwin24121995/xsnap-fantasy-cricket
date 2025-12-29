import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, RefreshCw } from "lucide-react";
import { useLocation } from "wouter";
import { trpc } from '@/lib/trpc';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { LiveMatchCard } from '@/components/LiveMatchCard';

export default function Matches() {
  const [, navigate] = useLocation();
  
  // Get upcoming matches (today + future only, no completed)
  const { data: upcomingMatches, isLoading: upcomingLoading, refetch: refetchUpcoming } = trpc.matches.getUpcoming.useQuery(
    undefined,
    {
      refetchInterval: 5 * 60 * 1000, // Auto-refresh every 5 minutes
      refetchOnWindowFocus: true,
    }
  );

  // Get live matches (currently in progress)
  const { data: liveMatches, refetch: refetchLive } = trpc.matches.getLive.useQuery(
    undefined,
    {
      refetchInterval: 2 * 60 * 1000, // Auto-refresh every 2 minutes for live scores
      refetchOnWindowFocus: true,
    }
  );

  // Manual refresh function
  const handleRefresh = () => {
    refetchUpcoming();
    refetchLive();
  };

  if (upcomingLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-muted/30">
          <div className="container max-w-6xl">
            <h1 className="text-4xl font-bold mb-8">Select a Match</h1>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 animate-pulse">
                  <div className="h-32 bg-muted rounded"></div>
                </Card>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const hasMatches = (liveMatches && liveMatches.length > 0) || (upcomingMatches && upcomingMatches.length > 0);

  if (!hasMatches) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-muted/30">
          <div className="container max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold">Select a Match</h1>
              <Button onClick={handleRefresh} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
            <Card className="p-12 text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No Upcoming Matches</h3>
              <p className="text-muted-foreground">
                Check back soon for new cricket matches to join!
              </p>
            </Card>
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
            <h1 className="text-4xl font-bold">Select a Match</h1>
            <Button onClick={handleRefresh} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>

          {/* Live Matches Section */}
          {liveMatches && liveMatches.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></span>
                Live Matches
              </h2>
              <div className="space-y-6">
                {liveMatches.map((match) => (
                  <LiveMatchCard key={match.id} match={match} />
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Matches Section */}
          {upcomingMatches && upcomingMatches.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Upcoming Matches</h2>
              <div className="space-y-6">
                {upcomingMatches.map((match) => (
                  <MatchCard key={match.id} match={match} isLive={false} navigate={navigate} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Match Card Component
function MatchCard({ match, isLive, navigate }: { match: any; isLive: boolean; navigate: (path: string) => void }) {
  const matchDate = new Date(match.dateTimeGMT);
  const teams = match.teams || [];
  const teamInfo = match.teamInfo || [];

  // Get match type badge color
  const getMatchTypeBadge = (type: string) => {
    switch (type.toLowerCase()) {
      case 't20':
        return <Badge variant="secondary" className="bg-blue-500 text-white">T20</Badge>;
      case 'odi':
        return <Badge variant="secondary" className="bg-green-500 text-white">ODI</Badge>;
      case 'test':
        return <Badge variant="secondary" className="bg-purple-500 text-white">TEST</Badge>;
      default:
        return <Badge variant="secondary">{type.toUpperCase()}</Badge>;
    }
  };

  return (
    <Card className="p-6 hover-lift cursor-pointer" onClick={() => navigate(`/team-builder?matchId=${match.id}`)}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {/* Match Type and Status Badges */}
          <div className="flex items-center space-x-4 mb-4">
            {getMatchTypeBadge(match.matchType)}
            {isLive && (
              <Badge variant="destructive" className="animate-pulse">
                🔴 LIVE
              </Badge>
            )}
            {!isLive && (
              <Badge variant="outline">
                UPCOMING
              </Badge>
            )}
            {match.fantasyEnabled && (
              <Badge variant="secondary" className="bg-gold text-black">
                Fantasy Enabled
              </Badge>
            )}
          </div>

          {/* Match Name */}
          <h3 className="text-xl font-bold mb-3">{match.name}</h3>

          {/* Teams */}
          <div className="flex items-center space-x-6 mb-4">
            {teamInfo.length >= 2 ? (
              <>
                <div className="flex items-center space-x-3">
                  {teamInfo[0].img && (
                    <img src={teamInfo[0].img} alt={teamInfo[0].name} className="w-10 h-10 rounded-full" />
                  )}
                  <span className="font-semibold">{teamInfo[0].shortname || teamInfo[0].name}</span>
                </div>
                <span className="text-2xl font-bold text-muted-foreground">VS</span>
                <div className="flex items-center space-x-3">
                  {teamInfo[1].img && (
                    <img src={teamInfo[1].img} alt={teamInfo[1].name} className="w-10 h-10 rounded-full" />
                  )}
                  <span className="font-semibold">{teamInfo[1].shortname || teamInfo[1].name}</span>
                </div>
              </>
            ) : (
              <span className="font-semibold">{teams.join(' vs ')}</span>
            )}
          </div>

          {/* Live Score */}
          {isLive && match.score && match.score.length > 0 && (
            <div className="mb-4 p-4 bg-muted rounded-lg">
              <div className="space-y-2">
                {match.score.map((innings: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{innings.inning}</span>
                    <span className="text-lg font-bold">
                      {innings.r}/{innings.w} ({innings.o} ov)
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">{match.status}</p>
            </div>
          )}

          {/* Match Details */}
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{format(matchDate, 'MMM dd, yyyy • hh:mm a')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{match.venue}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="ml-6">
          {!isLive ? (
            <Button size="lg" className="glossy-button">
              Create Team
            </Button>
          ) : (
            <Button size="lg" variant="outline" disabled>
              Match Started
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
