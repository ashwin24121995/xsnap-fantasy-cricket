import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">How To Play Fantasy Cricket</h1>
          
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Create Your Account</h3>
                    <p className="text-muted-foreground">
                      Register with your email, verify your age (18+), and select your state. 
                      The platform is not available in certain states due to compliance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Select a Match</h3>
                    <p className="text-muted-foreground">
                      Browse upcoming cricket matches across various formats (T20, ODI, Test). 
                      Choose the match you want to create a team for.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Build Your Team</h3>
                    <p className="text-muted-foreground">
                      Select 11 players within a budget of 100 credits. Your team must include 
                      batsmen, bowlers, all-rounders, and a wicket-keeper.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Choose Captain & Vice-Captain</h3>
                    <p className="text-muted-foreground">
                      Select a captain (2x points) and vice-captain (1.5x points) to maximize your score.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Track Performance</h3>
                    <p className="text-muted-foreground">
                      Watch the match live and track your team's performance in real-time. 
                      Points are awarded based on actual player performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Check Leaderboard</h3>
                    <p className="text-muted-foreground">
                      After the match, see your rank on the leaderboard. Top performers get recognition!
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Scoring System</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Batting Points</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Run: +1 point per run</li>
                    <li>Boundary (4): +1 bonus point</li>
                    <li>Six: +2 bonus points</li>
                    <li>Half-century (50 runs): +8 bonus points</li>
                    <li>Century (100 runs): +16 bonus points</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Bowling Points</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Wicket: +25 points</li>
                    <li>3 wickets: +8 bonus points</li>
                    <li>5 wickets: +16 bonus points</li>
                    <li>Maiden over: +12 points</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Fielding Points</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Catch: +8 points</li>
                    <li>Stumping: +12 points</li>
                    <li>Run out: +6 points</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Link href="/register">
                <Button size="lg" className="glossy-btn">
                  Start Playing Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
