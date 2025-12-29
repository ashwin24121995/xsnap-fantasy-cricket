import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, Calendar, Radio, CheckCircle2, Trophy, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";
import { useLocation } from "wouter";

export default function Matches() {
  const [, navigate] = useLocation();
  const [refreshing, setRefreshing] = useState(false);
  
  const { data: upcomingMatches, isLoading: upcomingLoading, refetch: refetchUpcoming } = trpc.matches.getUpcoming.useQuery(
    undefined,
    {
      refetchInterval: 2 * 60 * 1000, // Auto-refresh every 2 minutes
      refetchOnWindowFocus: true,
    }
  );

  const { data: liveMatches, isLoading: liveLoading, refetch: refetchLive } = trpc.matches.getLive.useQuery(
    undefined,
    {
      refetchInterval: 30 * 1000, // Auto-refresh every 30 seconds for live matches
      refetchOnWindowFocus: true,
    }
  );

  const { data: completedMatches, isLoading: completedLoading, refetch: refetchCompleted } = trpc.matches.getCompleted.useQuery();

  const handleRefresh = async () => {
    setRefreshing(true);
    await Promise.all([refetchUpcoming(), refetchLive(), refetchCompleted()]);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Cricket Matches</h1>
              <p className="text-muted-foreground">
                Select a match to create your fantasy team
              </p>
            </div>
            <Button
              onClick={handleRefresh}
              disabled={refreshing}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>

          {/* Tabs for Upcoming, Live, Completed */}
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="upcoming" className="gap-2">
                <Calendar className="h-4 w-4" />
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="live" className="gap-2">
                <Radio className="h-4 w-4" />
                Live
              </TabsTrigger>
              <TabsTrigger value="completed" className="gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Completed
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Matches Tab */}
            <TabsContent value="upcoming" className="space-y-4">
              {upcomingLoading ? (
                <div className="grid gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="p-6 animate-pulse">
                      <div className="h-32 bg-muted rounded"></div>
                    </Card>
                  ))}
                </div>
              ) : !upcomingMatches || upcomingMatches.length === 0 ? (
                <Card className="p-12 text-center border-2 border-dashed">
                  <Clock className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-2xl font-bold mb-2">No Upcoming Matches</h3>
                  <p className="text-muted-foreground">
                    Check back soon for new matches!
                  </p>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {upcomingMatches.map((match) => (
                    <UpcomingMatchCard key={match.id} match={match} navigate={navigate} />
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Live Matches Tab */}
            <TabsContent value="live" className="space-y-4">
              {liveLoading ? (
                <div className="grid gap-4">
                  {[1, 2].map((i) => (
                    <Card key={i} className="p-6 animate-pulse">
                      <div className="h-32 bg-muted rounded"></div>
                    </Card>
                  ))}
                </div>
              ) : !liveMatches || liveMatches.length === 0 ? (
                <Card className="p-12 text-center border-2 border-dashed">
                  <Radio className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-2xl font-bold mb-2">No Live Matches</h3>
                  <p className="text-muted-foreground">
                    Live matches will appear here when they start
                  </p>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {liveMatches.map((match) => (
                    <LiveMatchCard key={match.id} match={match} navigate={navigate} />
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Completed Matches Tab */}
            <TabsContent value="completed" className="space-y-4">
              {completedLoading ? (
                <div className="grid gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="p-6 animate-pulse">
                      <div className="h-40 bg-muted rounded"></div>
                    </Card>
                  ))}
                </div>
              ) : !completedMatches || completedMatches.length === 0 ? (
                <Card className="p-12 text-center border-2 border-dashed">
                  <CheckCircle2 className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-2xl font-bold mb-2">No Completed Matches</h3>
                  <p className="text-muted-foreground">
                    Completed matches will appear here
                  </p>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {completedMatches.map((match) => (
                    <CompletedMatchCard key={match.id} match={match} navigate={navigate} />
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

// Upcoming Match Card Component
function UpcomingMatchCard({ match, navigate }: { match: any; navigate: any }) {
  const team1 = match.teamInfo?.[0] || { name: match.teams[0], shortname: match.teams[0].substring(0, 3).toUpperCase(), img: '' };
  const team2 = match.teamInfo?.[1] || { name: match.teams[1], shortname: match.teams[1].substring(0, 3).toUpperCase(), img: '' };
  
  const matchDate = new Date(match.dateTimeGMT);
  const formattedDate = format(matchDate, 'MMM dd, yyyy');
  const formattedTime = format(matchDate, 'hh:mm a');

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
      <div className="p-6">
        {/* Match Type Badge */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="uppercase">
            {match.matchType}
          </Badge>
          <Badge className="bg-accent text-accent-foreground">
            UPCOMING
          </Badge>
        </div>

        {/* Match Title */}
        <h3 className="text-lg font-semibold mb-4 text-center">{match.name}</h3>

        {/* Teams Side by Side */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-6">
          {/* Team 1 */}
          <div className="flex flex-col items-center text-center">
            {team1.img ? (
              <img 
                src={team1.img} 
                alt={team1.name}
                className="w-16 h-16 object-contain mb-2"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary">{team1.shortname[0]}</span>
              </div>
            )}
            <p className="font-bold text-sm">{team1.shortname}</p>
            <p className="text-xs text-muted-foreground line-clamp-1">{team1.name}</p>
          </div>

          {/* VS */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">VS</span>
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex flex-col items-center text-center">
            {team2.img ? (
              <img 
                src={team2.img} 
                alt={team2.name}
                className="w-16 h-16 object-contain mb-2"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary">{team2.shortname[0]}</span>
              </div>
            )}
            <p className="font-bold text-sm">{team2.shortname}</p>
            <p className="text-xs text-muted-foreground line-clamp-1">{team2.name}</p>
          </div>
        </div>

        {/* Match Info */}
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate} • {formattedTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{match.venue}</span>
        </div>

        {/* Create Team Button */}
        <Button 
          className="w-full" 
          size="lg"
          onClick={() => navigate(`/create-team/${match.id}`)}
        >
          Create Team
        </Button>
      </div>
    </Card>
  );
}

// Live Match Card Component
function LiveMatchCard({ match, navigate }: { match: any; navigate: any }) {
  const team1 = match.teamInfo?.[0] || { name: match.teams[0], shortname: match.teams[0].substring(0, 3).toUpperCase(), img: '' };
  const team2 = match.teamInfo?.[1] || { name: match.teams[1], shortname: match.teams[1].substring(0, 3).toUpperCase(), img: '' };
  
  const team1Score = match.score?.find((s: any) => s.inning.includes(team1.name));
  const team2Score = match.score?.find((s: any) => s.inning.includes(team2.name));

  return (
    <Card className="overflow-hidden border-2 border-red-500 shadow-lg animate-pulse-border">
      <div className="p-6">
        {/* Match Type Badge */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="uppercase">
            {match.matchType}
          </Badge>
          <Badge className="bg-red-500 text-white animate-pulse">
            <Radio className="h-3 w-3 mr-1" />
            LIVE
          </Badge>
        </div>

        {/* Match Title */}
        <h3 className="text-lg font-semibold mb-4 text-center">{match.name}</h3>

        {/* Teams Side by Side with Scores */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-6">
          {/* Team 1 */}
          <div className="flex flex-col items-center text-center">
            {team1.img ? (
              <img 
                src={team1.img} 
                alt={team1.name}
                className="w-16 h-16 object-contain mb-2"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary">{team1.shortname[0]}</span>
              </div>
            )}
            <p className="font-bold text-sm">{team1.shortname}</p>
            {team1Score && (
              <p className="text-2xl font-bold text-primary">
                {team1Score.r}/{team1Score.w}
                <span className="text-sm text-muted-foreground ml-1">({team1Score.o})</span>
              </p>
            )}
          </div>

          {/* VS */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-sm">VS</span>
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex flex-col items-center text-center">
            {team2.img ? (
              <img 
                src={team2.img} 
                alt={team2.name}
                className="w-16 h-16 object-contain mb-2"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary">{team2.shortname[0]}</span>
              </div>
            )}
            <p className="font-bold text-sm">{team2.shortname}</p>
            {team2Score && (
              <p className="text-2xl font-bold text-primary">
                {team2Score.r}/{team2Score.w}
                <span className="text-sm text-muted-foreground ml-1">({team2Score.o})</span>
              </p>
            )}
          </div>
        </div>

        {/* Match Status */}
        <div className="text-center mb-4">
          <p className="text-sm font-medium text-muted-foreground">{match.status}</p>
        </div>

        {/* View Details Button */}
        <Button 
          className="w-full" 
          size="lg"
          variant="outline"
          onClick={() => navigate(`/match/${match.id}`)}
        >
          View Live Score
        </Button>
      </div>
    </Card>
  );
}

// Completed Match Card Component
function CompletedMatchCard({ match, navigate }: { match: any; navigate: any }) {
  const team1 = match.teamInfo?.[0] || { name: match.teams[0], shortname: match.teams[0].substring(0, 3).toUpperCase(), img: '' };
  const team2 = match.teamInfo?.[1] || { name: match.teams[1], shortname: match.teams[1].substring(0, 3).toUpperCase(), img: '' };
  
  const team1Score = match.score?.find((s: any) => s.inning.includes(team1.name));
  const team2Score = match.score?.find((s: any) => s.inning.includes(team2.name));

  const matchDate = new Date(match.dateTimeGMT);
  const formattedDate = format(matchDate, 'MMM dd, yyyy');

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2">
      <div className="p-6">
        {/* Match Type Badge */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="uppercase">
            {match.matchType}
          </Badge>
          <Badge variant="outline" className="text-green-600 border-green-600">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            COMPLETED
          </Badge>
        </div>

        {/* Match Title */}
        <h3 className="text-lg font-semibold mb-4 text-center">{match.name}</h3>

        {/* Teams Side by Side with Final Scores */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-6">
          {/* Team 1 */}
          <div className="flex flex-col items-center text-center">
            {team1.img ? (
              <img 
                src={team1.img} 
                alt={team1.name}
                className="w-16 h-16 object-contain mb-2"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary">{team1.shortname[0]}</span>
              </div>
            )}
            <p className="font-bold text-sm">{team1.shortname}</p>
            {team1Score && (
              <p className="text-2xl font-bold">
                {team1Score.r}/{team1Score.w}
                <span className="text-sm text-muted-foreground ml-1">({team1Score.o})</span>
              </p>
            )}
          </div>

          {/* VS with Trophy */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex flex-col items-center text-center">
            {team2.img ? (
              <img 
                src={team2.img} 
                alt={team2.name}
                className="w-16 h-16 object-contain mb-2"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary">{team2.shortname[0]}</span>
              </div>
            )}
            <p className="font-bold text-sm">{team2.shortname}</p>
            {team2Score && (
              <p className="text-2xl font-bold">
                {team2Score.r}/{team2Score.w}
                <span className="text-sm text-muted-foreground ml-1">({team2Score.o})</span>
              </p>
            )}
          </div>
        </div>

        {/* Match Result */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
          <p className="text-center text-sm font-semibold text-green-800">{match.status}</p>
        </div>

        {/* Match Info */}
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{match.venue}</span>
          </div>
        </div>

        {/* View Details Button */}
        <Button 
          className="w-full" 
          size="lg"
          variant="outline"
          onClick={() => navigate(`/match/${match.id}`)}
        >
          View Full Scorecard
        </Button>
      </div>
    </Card>
  );
}
