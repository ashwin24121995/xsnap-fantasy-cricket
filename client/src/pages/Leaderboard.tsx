import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

export default function Leaderboard() {
  const leaders = [
    { rank: 1, name: "Rajesh Kumar", points: 1250, teams: 5 },
    { rank: 2, name: "Priya Sharma", points: 1180, teams: 4 },
    { rank: 3, name: "Amit Patel", points: 1150, teams: 6 },
    { rank: 4, name: "Sneha Reddy", points: 1120, teams: 3 },
    { rank: 5, name: "Vikram Singh", points: 1100, teams: 5 },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Award className="h-6 w-6 text-amber-600" />;
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>
          
          <Card className="p-6">
            <div className="space-y-4">
              {leaders.map((leader) => (
                <div
                  key={leader.rank}
                  className={`p-4 rounded-lg border ${
                    leader.rank <= 3 ? "bg-primary/5 border-primary/30" : "bg-background"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12">
                        {getRankIcon(leader.rank) || (
                          <span className="text-2xl font-bold text-muted-foreground">
                            {leader.rank}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{leader.name}</p>
                        <p className="text-sm text-muted-foreground">{leader.teams} teams</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{leader.points}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Rankings are updated after each match completion</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
