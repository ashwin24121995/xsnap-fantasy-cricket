import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, Zap, AlertCircle, Users, Trophy, Target, 
  TrendingUp, Shield, Clock, Star, Award, BookOpen 
} from "lucide-react";

export default function HowToPlay() {
  const { t } = useTranslation();

  const scoringRules = [
    { category: "Batting", rules: [
      { action: "Run", points: "+1 point per run" },
      { action: "Boundary Bonus (4 runs)", points: "+1 point" },
      { action: "Six Bonus", points: "+2 points" },
      { action: "Half Century (50 runs)", points: "+8 points" },
      { action: "Century (100 runs)", points: "+16 points" },
      { action: "Dismissal for Duck (Batsman)", points: "-2 points" },
    ]},
    { category: "Bowling", rules: [
      { action: "Wicket (excluding run out)", points: "+25 points" },
      { action: "Bonus (LBW / Bowled)", points: "+8 points" },
      { action: "3 Wicket Bonus", points: "+4 points" },
      { action: "4 Wicket Bonus", points: "+8 points" },
      { action: "5 Wicket Bonus", points: "+16 points" },
      { action: "Maiden Over", points: "+12 points" },
    ]},
    { category: "Fielding", rules: [
      { action: "Catch", points: "+8 points" },
      { action: "3 Catch Bonus", points: "+4 points" },
      { action: "Stumping / Run Out", points: "+12 points" },
    ]},
    { category: "Economy Rate (Min 2 overs)", rules: [
      { action: "Below 5 runs per over", points: "+6 points" },
      { action: "Between 5-5.99 runs per over", points: "+4 points" },
      { action: "Between 6-7 runs per over", points: "+2 points" },
      { action: "Between 10-11 runs per over", points: "-2 points" },
      { action: "Between 11.01-12 runs per over", points: "-4 points" },
      { action: "Above 12 runs per over", points: "-6 points" },
    ]},
    { category: "Strike Rate (Min 10 balls)", rules: [
      { action: "Above 170 runs per 100 balls", points: "+6 points" },
      { action: "Between 150.01-170 runs per 100 balls", points: "+4 points" },
      { action: "Between 130-150 runs per 100 balls", points: "+2 points" },
      { action: "Between 60-70 runs per 100 balls", points: "-2 points" },
      { action: "Between 50-59.99 runs per 100 balls", points: "-4 points" },
      { action: "Below 50 runs per 100 balls", points: "-6 points" },
    ]},
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-6xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <Badge className="mb-4 text-lg px-6 py-2">Complete Guide</Badge>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How To Play Fantasy Cricket
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Master the art of fantasy cricket with our comprehensive step-by-step guide. 
              Learn team building, scoring systems, and winning strategies.
            </p>
          </div>

          <div className="space-y-12">
            {/* Quick Start Guide */}
            <Card className="p-10 bg-white/80 backdrop-blur">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Quick Start Guide</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-transparent border-blue-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="font-bold text-xl mb-3">Create Account</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sign up with your email and verify your age (18+). Select your state during registration. 
                    The platform is not available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-50 to-transparent border-green-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-600 text-white font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="font-bold text-xl mb-3">Choose Match</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Browse upcoming cricket matches from various formats (T20, ODI, Test). Select any match you want 
                    to create a fantasy team for. View match details, venue, and scheduled time.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-50 to-transparent border-purple-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 text-white font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="font-bold text-xl mb-3">Build Team</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Select 11 players from both teams within a budget of 100 credits. Choose a balanced mix of 
                    batsmen, bowlers, all-rounders, and wicket-keepers based on their recent form and match conditions.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-orange-50 to-transparent border-orange-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-600 text-white font-bold text-xl mb-4">
                    4
                  </div>
                  <h3 className="font-bold text-xl mb-3">Pick Captain & Vice-Captain</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Choose one Captain (2x points) and one Vice-Captain (1.5x points). This strategic decision can 
                    significantly impact your total score. Pick players likely to perform well in the match.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-pink-50 to-transparent border-pink-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-600 text-white font-bold text-xl mb-4">
                    5
                  </div>
                  <h3 className="font-bold text-xl mb-3">Track Performance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Watch the live match and track your team's performance in real-time. Points are calculated 
                    automatically based on player actions (runs, wickets, catches, etc.).
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-cyan-50 to-transparent border-cyan-200">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-600 text-white font-bold text-xl mb-4">
                    6
                  </div>
                  <h3 className="font-bold text-xl mb-3">Check Leaderboard</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    After the match, check the leaderboard to see your ranking. Learn from top performers and 
                    improve your strategy for future matches. Compete for glory, not money!
                  </p>
                </Card>
              </div>
            </Card>

            {/* Team Building Rules */}
            <Card className="p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-green-600/10 rounded-xl">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">Team Building Rules</h2>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-transparent rounded-lg border border-blue-200">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Total Players
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      You must select exactly <strong className="text-foreground">11 players</strong> to form your fantasy cricket team. 
                      No more, no less.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-50 to-transparent rounded-lg border border-green-200">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Credit Budget
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      You have a budget of <strong className="text-foreground">100 credits</strong>. Each player has a credit value 
                      based on their recent performance and reputation.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-purple-50 to-transparent rounded-lg border border-purple-200">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Wicket-Keepers
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Select <strong className="text-foreground">1-4 wicket-keepers</strong>. Wicket-keepers earn points for 
                      batting, catches, and stumpings.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-orange-50 to-transparent rounded-lg border border-orange-200">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Batsmen
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Select <strong className="text-foreground">3-6 batsmen</strong>. Batsmen earn points primarily through 
                      runs, boundaries, and strike rate bonuses.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-pink-50 to-transparent rounded-lg border border-pink-200">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      All-Rounders
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Select <strong className="text-foreground">1-4 all-rounders</strong>. All-rounders can earn points 
                      through both batting and bowling performances.
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-cyan-50 to-transparent rounded-lg border border-cyan-200">
                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Bowlers
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Select <strong className="text-foreground">3-6 bowlers</strong>. Bowlers earn points through wickets, 
                      maiden overs, and economy rate bonuses.
                    </p>
                  </div>
                </div>

                <Card className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Team Composition Rule</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        You can select a maximum of <strong className="text-foreground">7 players from a single team</strong>. 
                        This ensures balanced team composition and prevents over-reliance on one team's performance. 
                        You must include players from both competing teams.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Captain & Vice-Captain */}
            <Card className="p-10 bg-gradient-to-br from-purple-50 to-transparent">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-purple-600/10 rounded-xl">
                  <Trophy className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold">Captain & Vice-Captain Strategy</h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Choosing the right Captain and Vice-Captain is crucial to maximizing your fantasy cricket score. 
                  These multipliers can significantly boost your total points.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-8 bg-white border-2 border-yellow-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-yellow-100 rounded-full">
                        <Star className="w-8 h-8 text-yellow-600" />
                      </div>
                      <h3 className="font-bold text-2xl">Captain (C)</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <p className="text-3xl font-bold text-yellow-600 mb-2">2x Points</p>
                        <p className="text-muted-foreground">
                          Your Captain earns double points for all their actions during the match.
                        </p>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong className="text-foreground">Strategy Tips:</strong></p>
                        <p>• Choose a player in excellent recent form</p>
                        <p>• Consider the pitch and weather conditions</p>
                        <p>• Pick players who perform well at the venue</p>
                        <p>• All-rounders can be great captain choices</p>
                        <p>• Check head-to-head records against opposition</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8 bg-white border-2 border-blue-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Award className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-2xl">Vice-Captain (VC)</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600 mb-2">1.5x Points</p>
                        <p className="text-muted-foreground">
                          Your Vice-Captain earns 1.5 times points for all their actions during the match.
                        </p>
                      </div>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong className="text-foreground">Strategy Tips:</strong></p>
                        <p>• Pick your second-best performing player</p>
                        <p>• Diversify risk by choosing from opposite team</p>
                        <p>• Consider players with consistent performance</p>
                        <p>• Balance between batting and bowling options</p>
                        <p>• Check player's role in team strategy</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Important Note</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        You <strong className="text-foreground">cannot change your Captain or Vice-Captain</strong> after 
                        the match starts. Choose wisely based on your analysis and gut feeling. This decision can make or 
                        break your fantasy team's performance!
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Scoring System */}
            <Card className="p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-600/10 rounded-xl">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">Complete Scoring System</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Understanding the scoring system is essential to building winning fantasy cricket teams. Points are 
                awarded based on real match performance across batting, bowling, and fielding categories.
              </p>
              <div className="space-y-8">
                {scoringRules.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{idx + 1}</span>
                      </div>
                      {category.category}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-muted">
                            <th className="text-left p-4 font-semibold border">Action</th>
                            <th className="text-left p-4 font-semibold border">Points</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.rules.map((rule, ruleIdx) => (
                            <tr key={ruleIdx} className="border-b hover:bg-muted/50">
                              <td className="p-4 border">{rule.action}</td>
                              <td className="p-4 border">
                                <span className={`font-semibold ${
                                  rule.points.startsWith('+') ? 'text-green-600' : 
                                  rule.points.startsWith('-') ? 'text-red-600' : 
                                  'text-foreground'
                                }`}>
                                  {rule.points}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Points Calculation Example</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      If your Captain scores 75 runs with 6 fours and 2 sixes, takes 2 catches, and has a strike rate of 160:
                    </p>
                    <div className="space-y-1 text-muted-foreground">
                      <p>• Runs: 75 × 1 = 75 points</p>
                      <p>• Fours: 6 × 1 = 6 points</p>
                      <p>• Sixes: 2 × 2 = 4 points</p>
                      <p>• Half Century Bonus: 8 points</p>
                      <p>• Catches: 2 × 8 = 16 points</p>
                      <p>• Strike Rate Bonus (160+): 6 points</p>
                      <p className="font-semibold text-foreground pt-2">Base Total: 115 points</p>
                      <p className="font-bold text-primary text-lg">Captain Multiplier (2x): 230 points!</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Pro Tips */}
            <Card className="p-10 bg-gradient-to-br from-green-50 to-transparent">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-green-600/10 rounded-xl">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">Pro Tips for Success</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Research Player Form
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Check recent match statistics, player form, and performance trends. Players in good form are more 
                    likely to score high points. Look at their last 5-10 matches.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Consider Pitch Conditions
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Batting-friendly pitches favor batsmen and all-rounders. Bowling-friendly pitches favor bowlers. 
                    Adjust your team composition based on expected pitch behavior.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Check Weather Forecast
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rain can affect match outcomes. Overcast conditions favor swing bowlers. Hot, dry conditions favor 
                    spinners. Weather plays a crucial role in player performance.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Balance Your Team
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Don't overload on batsmen or bowlers. A balanced team with quality all-rounders provides multiple 
                    point-scoring opportunities throughout the match.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Monitor Team News
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Check for last-minute injuries, player availability, and team composition changes before the match 
                    starts. Late changes can significantly impact your strategy.
                  </p>
                </Card>

                <Card className="p-6 bg-white">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Learn from Mistakes
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Analyze your team's performance after each match. Understand what worked and what didn't. 
                    Continuous learning is key to improving your fantasy cricket skills.
                  </p>
                </Card>
              </div>
            </Card>

            {/* Important Rules */}
            <Card className="p-10 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-600/10 rounded-xl">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold">Important Rules & Restrictions</h2>
              </div>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Team Lock Time:</strong> You cannot edit your team once the 
                    match starts. Ensure your team is finalized before the scheduled match time.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Player Substitutions:</strong> If a player in your team doesn't 
                    play the match, they will score 0 points. Choose players likely to be in the playing XI.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Fair Play:</strong> Any attempt to manipulate the system, use 
                    multiple accounts, or engage in unfair practices will result in account suspension.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Educational Purpose:</strong> XSNAP is designed for learning 
                    and entertainment. There is no real money involved, and no prizes are awarded.
                  </p>
                </div>
              </div>
            </Card>

            {/* Get Started CTA */}
            <Card className="p-10 text-center bg-gradient-to-r from-primary/10 to-accent/10">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your First Team?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Put your cricket knowledge to the test and compete on the leaderboard!
              </p>
              <a 
                href="/matches" 
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Browse Matches
              </a>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
