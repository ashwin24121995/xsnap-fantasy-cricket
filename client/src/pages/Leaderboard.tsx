import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Leaderboard() {
  const { data: leaders, isLoading } = trpc.leaderboard.getGlobal.useQuery({ limit: 100 });

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Award className="h-6 w-6 text-amber-600" />;
    return null;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-muted/30">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>
            <Card className="p-6">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-20 bg-muted rounded animate-pulse"></div>
                ))}
              </div>
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
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Global Leaderboard</h1>
          
          <Card className="p-6">
            {!leaders || leaders.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No Rankings Yet</h3>
                <p className="text-muted-foreground">
                  Be the first to create a team and compete!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {leaders.map((leader, index) => {
                  const rank = index + 1;
                  return (
                    <div
                      key={leader.id}
                      className={`p-4 rounded-lg border ${
                        rank <= 3 ? "bg-primary/5 border-primary/30" : "bg-background"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-12">
                            {getRankIcon(rank) || (
                              <span className="text-2xl font-bold text-muted-foreground">
                                {rank}
                              </span>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-lg">{leader.name}</p>
                            <p className="text-sm text-muted-foreground">{leader.email}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">{leader.totalPoints || 0}</p>
                          <p className="text-sm text-muted-foreground">points</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
