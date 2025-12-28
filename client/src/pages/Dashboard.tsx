import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, TrendingUp, Plus, Star, Shield } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/contexts/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const { data: teams, isLoading } = trpc.teams.getMyTeams.useQuery(undefined, {
    enabled: !!user,
  });

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-muted/30">
          <div className="container max-w-6xl">
            <Card className="p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Please Login</h2>
              <p className="text-muted-foreground mb-6">
                You need to login to view your dashboard
              </p>
              <Link href="/login">
                <Button size="lg">Login</Button>
              </Link>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-muted/30">
          <div className="container max-w-6xl">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-1/4"></div>
              <div className="grid grid-cols-3 gap-6">
                <div className="h-32 bg-muted rounded"></div>
                <div className="h-32 bg-muted rounded"></div>
                <div className="h-32 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const totalPoints = teams?.reduce((sum, team) => sum + (team.totalPoints || 0), 0) || 0;
  const bestRank = teams && teams.length > 0 ? Math.min(...teams.map(t => t.totalPoints || 0)) : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}!</p>
            </div>
            <Link href="/matches">
              <Button size="lg" className="glossy-btn">
                <Plus className="h-5 w-5 mr-2" />
                Create New Team
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Teams</p>
                  <p className="text-3xl font-bold">{teams?.length || 0}</p>
                </div>
                <Users className="h-10 w-10 text-primary opacity-20" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Points</p>
                  <p className="text-3xl font-bold">{totalPoints}</p>
                </div>
                <Trophy className="h-10 w-10 text-primary opacity-20" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Best Score</p>
                  <p className="text-3xl font-bold">{bestRank || '-'}</p>
                </div>
                <TrendingUp className="h-10 w-10 text-primary opacity-20" />
              </div>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>My Teams</CardTitle>
            </CardHeader>
            <CardContent>
              {!teams || teams.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No Teams Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Create your first fantasy cricket team to get started!
                  </p>
                  <Link href="/matches">
                    <Button size="lg" className="glossy-btn">
                      <Plus className="h-5 w-5 mr-2" />
                      Create Team
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {teams.map((team) => (
                    <Card key={team.id} className="p-4 hover-lift">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{team.teamName}</h3>
                            <Badge variant="outline">Match #{team.matchId}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              <span>Captain: Player #{team.captainId}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Shield className="w-4 h-4" />
                              <span>VC: Player #{team.viceCaptainId}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground mb-1">Points</p>
                          <p className="text-2xl font-bold">{team.totalPoints || 0}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
