import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "wouter";
import {
  Trophy,
  Users,
  TrendingUp,
  Calendar,
  Plus,
  ArrowRight,
  Activity,
  Target,
  Award,
  Clock
} from "lucide-react";
import { format } from "date-fns";

export default function Dashboard() {
  const [, navigate] = useLocation();
  const { user } = useAuth();
  
  // Fetch user statistics
  const { data: stats, isLoading: statsLoading } = trpc.users.getStats.useQuery();
  
  // Fetch user's recent teams
  const { data: recentTeams, isLoading: teamsLoading } = trpc.teams.getMyTeams.useQuery();
  
  // Fetch upcoming matches
  const { data: upcomingMatches, isLoading: matchesLoading } = trpc.matches.getUpcoming.useQuery();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Please Login</h2>
          <p className="text-muted-foreground mb-6">You need to be logged in to view your dashboard</p>
          <Button onClick={() => navigate('/login')}>Login Now</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-white py-12">
      <div className="container">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Here's your fantasy cricket overview
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Total Teams */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <Badge variant="secondary">All Time</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Teams</p>
              {statsLoading ? (
                <div className="h-8 w-16 bg-muted animate-pulse rounded"></div>
              ) : (
                <p className="text-3xl font-bold">{stats?.totalTeams || 0}</p>
              )}
            </div>
          </Card>

          {/* Matches Played */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <Badge variant="secondary">Completed</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Matches Played</p>
              {statsLoading ? (
                <div className="h-8 w-16 bg-muted animate-pulse rounded"></div>
              ) : (
                <p className="text-3xl font-bold">{stats?.matchesPlayed || 0}</p>
              )}
            </div>
          </Card>

          {/* Average Points */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <Badge variant="secondary">Avg</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Avg Fantasy Points</p>
              {statsLoading ? (
                <div className="h-8 w-16 bg-muted animate-pulse rounded"></div>
              ) : (
                <p className="text-3xl font-bold">{stats?.avgPoints?.toFixed(1) || '0.0'}</p>
              )}
            </div>
          </Card>

          {/* Best Score */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <Badge className="bg-yellow-500 text-white">Best</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Highest Score</p>
              {statsLoading ? (
                <div className="h-8 w-16 bg-muted animate-pulse rounded"></div>
              ) : (
                <p className="text-3xl font-bold">{stats?.bestScore || 0}</p>
              )}
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card 
                  className="p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-105"
                  onClick={() => navigate('/matches')}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Plus className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Create Team</h3>
                      <p className="text-sm text-muted-foreground">Build your dream XI</p>
                    </div>
                  </div>
                </Card>

                <Card 
                  className="p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-105"
                  onClick={() => navigate('/leaderboard')}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-4 bg-yellow-100 rounded-full">
                      <Trophy className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Leaderboard</h3>
                      <p className="text-sm text-muted-foreground">View rankings</p>
                    </div>
                  </div>
                </Card>

                <Card 
                  className="p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-105"
                  onClick={() => navigate('/matches')}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <Calendar className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Browse Matches</h3>
                      <p className="text-sm text-muted-foreground">Find upcoming games</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Recent Activity</h2>
                <Button variant="ghost" onClick={() => navigate('/my-teams')}>
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {teamsLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="p-6 animate-pulse">
                      <div className="h-20 bg-muted rounded"></div>
                    </Card>
                  ))}
                </div>
              ) : recentTeams && recentTeams.length > 0 ? (
                <div className="space-y-4">
                  {recentTeams.slice(0, 5).map((team) => (
                    <Card 
                      key={team.id} 
                      className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => navigate(`/teams/${team.id}`)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Activity className="h-5 w-5 text-primary" />
                            <h3 className="font-bold text-lg">{team.name}</h3>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {format(new Date(team.createdAt), 'MMM dd, yyyy')}
                            </span>
                            <span className="flex items-center gap-1">
                              <Target className="h-4 w-4" />
                              {team.totalPoints || 0} pts
                            </span>
                          </div>
                        </div>
                        <Badge 
                          variant={
                            team.matchStatus === 'completed' ? 'default' : 
                            team.matchStatus === 'live' ? 'destructive' : 
                            'secondary'
                          }
                        >
                          {team.matchStatus || 'upcoming'}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center border-2 border-dashed">
                  <Activity className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-bold mb-2">No Activity Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Start by creating your first fantasy team!
                  </p>
                  <Button onClick={() => navigate('/matches')}>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Your First Team
                  </Button>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-8">
            {/* Upcoming Matches */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Upcoming Matches</h2>
              {matchesLoading ? (
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <Card key={i} className="p-4 animate-pulse">
                      <div className="h-16 bg-muted rounded"></div>
                    </Card>
                  ))}
                </div>
              ) : upcomingMatches && upcomingMatches.length > 0 ? (
                <div className="space-y-4">
                  {upcomingMatches.slice(0, 3).map((match) => (
                    <Card 
                      key={match.id} 
                      className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => navigate(`/team-builder?matchId=${match.id}`)}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {match.matchType.toUpperCase()}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {format(new Date(match.dateTimeGMT), 'MMM dd')}
                          </span>
                        </div>
                        <div className="text-sm font-semibold">
                          {match.teams.join(' vs ')}
                        </div>
                        <Button size="sm" className="w-full" variant="outline">
                          Create Team
                        </Button>
                      </div>
                    </Card>
                  ))}
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => navigate('/matches')}
                  >
                    View All Matches <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Card className="p-8 text-center border-2 border-dashed">
                  <Calendar className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    No upcoming matches
                  </p>
                </Card>
              )}
            </div>

            {/* Performance Tips */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Pro Tips
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Choose captain wisely - they earn 2x points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Balance your team with all-rounders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Check player form before selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Consider pitch and weather conditions</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
