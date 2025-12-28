import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, TrendingUp, Plus } from "lucide-react";
import { Link } from "wouter";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Ready to build your winning team?</p>
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
                  <p className="text-3xl font-bold">0</p>
                </div>
                <Users className="h-10 w-10 text-primary opacity-20" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Best Rank</p>
                  <p className="text-3xl font-bold">-</p>
                </div>
                <Trophy className="h-10 w-10 text-primary opacity-20" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Points</p>
                  <p className="text-3xl font-bold">0</p>
                </div>
                <TrendingUp className="h-10 w-10 text-primary opacity-20" />
              </div>
            </Card>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">My Teams</h2>
            <div className="text-center py-12">
              <img
                src="/assets/illustration_how_to_play.webp"
                alt="No teams"
                className="w-64 h-64 mx-auto mb-6 opacity-50"
              />
              <p className="text-muted-foreground mb-6">
                You haven't created any teams yet. Start by selecting an upcoming match!
              </p>
              <Link href="/matches">
                <Button size="lg" className="glossy-btn">
                  Browse Matches
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
