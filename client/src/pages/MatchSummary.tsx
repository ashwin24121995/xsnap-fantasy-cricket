import { useParams } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, TrendingUp, Crown, Shield, ArrowLeft, Loader2, Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import { useLocation } from "wouter";

export default function MatchSummary() {
  const params = useParams<{ matchId: string }>();
  const [, navigate] = useLocation();
  const matchApiId = params.matchId;

  // Fetch match from database (for basic info)
  const { data: dbMatch, isLoading: dbLoading } = trpc.matches.getByApiId.useQuery(
    { matchApiId: matchApiId || "" },
    { enabled: !!matchApiId }
  );

  // Fetch detailed match info from Cricket API (for complete data)
  const { data: apiMatch, isLoading: apiLoading } = trpc.matches.getMatchInfo.useQuery(
    { matchId: matchApiId || "" },
    { enabled: !!matchApiId }
  );

  // Use API data if available, fallback to DB data
  const match = apiMatch || dbMatch;
  const matchLoading = dbLoading || apiLoading;

  const { data: matchPoints, isLoading: pointsLoading } = trpc.matches.getMatchPoints.useQuery(
    { matchApiId: matchApiId || "" },
    { enabled: !!matchApiId }
  );

  if (matchLoading || pointsLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading match summary...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!match) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Card className="p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Match Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The match you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate("/matches")}>
              Browse Matches
            </Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Handle both API format (dateTimeGMT, teams array) and DB format (matchDate, teams JSON string)
  const matchDate = match.dateTimeGMT ? new Date(match.dateTimeGMT) : (match.matchDate ? new Date(match.matchDate) : null);
  const teams = typeof match.teams === 'string' ? JSON.parse(match.teams || "[]") : (match.teams || []);
  const score = typeof match.score === 'string' ? JSON.parse(match.score || "[]") : (match.score || []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/my-teams")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to My Teams
          </Button>

          {/* Match Header */}
          <Card className="p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {match.matchType?.toUpperCase() || 'T20'}
                </Badge>
                <h1 className="text-3xl font-bold">{match.name}</h1>
              </div>
              <Badge className="bg-green-500 text-white text-lg px-4 py-2">
                ✓ COMPLETED
              </Badge>
            </div>

            {/* Match Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              {matchDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{format(matchDate, 'MMM dd, yyyy • hh:mm a')}</span>
                </div>
              )}
              {match.venue && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{match.venue}</span>
                </div>
              )}
            </div>
          </Card>

          {/* Match Result */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              Match Result
            </h2>

            {/* Teams & Scores */}
            <div className="space-y-4">
              {score.map((inning: any, index: number) => (
                <div key={index} className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{inning.inning || `Inning ${index + 1}`}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {teams[index] || 'Team'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-primary">
                        {inning.r || 0}/{inning.w || 0}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {inning.o || 0} overs
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Match Status */}
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-center font-semibold text-green-800">
                {match.status}
              </p>
            </div>
          </Card>

          {/* Fantasy Points */}
          {matchPoints && matchPoints.players && matchPoints.players.length > 0 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-blue-500" />
                Fantasy Points Breakdown
              </h2>

              <Tabs defaultValue="all">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Players</TabsTrigger>
                  <TabsTrigger value="top">Top Performers</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="space-y-3">
                    {matchPoints.players
                      .sort((a: any, b: any) => (b.points || 0) - (a.points || 0))
                      .map((player: any, index: number) => (
                        <PlayerPointsCard key={player.id || index} player={player} rank={index + 1} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="top">
                  <div className="space-y-3">
                    {matchPoints.players
                      .sort((a: any, b: any) => (b.points || 0) - (a.points || 0))
                      .slice(0, 10)
                      .map((player: any, index: number) => (
                        <PlayerPointsCard key={player.id || index} player={player} rank={index + 1} isTopPerformer />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Captain/Vice-Captain Multiplier Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-blue-50 border border-yellow-200 rounded-lg">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Fantasy Points Multipliers
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Crown className="h-4 w-4 text-yellow-500" />
                    <span><strong>Captain:</strong> Points × 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span><strong>Vice-Captain:</strong> Points × 1.5</span>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Player Points Card Component
function PlayerPointsCard({ 
  player, 
  rank, 
  isTopPerformer = false 
}: { 
  player: any; 
  rank: number; 
  isTopPerformer?: boolean;
}) {
  const getRankBadge = () => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return rank;
  };

  return (
    <div className={`p-4 rounded-lg border-2 transition-all ${
      isTopPerformer 
        ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300' 
        : 'bg-white border-border hover:border-primary/50'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* Rank */}
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
            {getRankBadge()}
          </div>

          {/* Player Info */}
          <div className="flex-1">
            <h4 className="font-bold text-lg">{player.name || 'Unknown Player'}</h4>
            
            {/* Performance Stats */}
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
              {player.batting && (player.batting.runs > 0 || player.batting.balls > 0) && (
                <span>
                  🏏 {player.batting.runs} runs ({player.batting.balls} balls)
                  {player.batting.fours > 0 && ` • ${player.batting.fours}×4`}
                  {player.batting.sixes > 0 && ` • ${player.batting.sixes}×6`}
                </span>
              )}
              {player.bowling && player.bowling.wickets > 0 && (
                <span>
                  ⚾ {player.bowling.wickets} wickets ({player.bowling.overs} overs)
                </span>
              )}
              {player.fielding && player.fielding.catches > 0 && (
                <span>
                  🧤 {player.fielding.catches} catches
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Points */}
        <div className="text-right">
          <p className="text-3xl font-bold text-primary">
            {player.points || 0}
          </p>
          <p className="text-xs text-muted-foreground">points</p>
        </div>
      </div>
    </div>
  );
}
