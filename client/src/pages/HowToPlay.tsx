import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Users, Zap, TrendingUp, Shield } from "lucide-react";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">How To Play Fantasy Cricket</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Master the art of fantasy cricket with our comprehensive guide. Learn how to build teams, 
              understand scoring, and compete with other enthusiasts on XSNAP Fantasy Cricket.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step-by-Step Guide */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-8">Step-by-Step Guide to Getting Started</h2>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4 pb-6 border-b last:border-b-0">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Create Your Account</h3>
                    <p className="text-muted-foreground mb-3">
                      Start your fantasy cricket journey by creating a free account on XSNAP. Here's what you need to do:
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                      <li>• <strong>Visit the Registration Page:</strong> Click on "Get Started" button on the homepage</li>
                      <li>• <strong>Enter Your Email:</strong> Provide a valid email address for account recovery and notifications</li>
                      <li>• <strong>Create a Password:</strong> Set a strong password with at least 8 characters, including uppercase, lowercase, and numbers</li>
                      <li>• <strong>Age Verification:</strong> Confirm that you are 18 years or older (mandatory requirement)</li>
                      <li>• <strong>Select Your State:</strong> Choose your state of residence. Note: The platform is not available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana</li>
                      <li>• <strong>Accept Terms:</strong> Read and accept our Terms & Conditions, Privacy Policy, and Fair Play Policy</li>
                      <li>• <strong>Complete Registration:</strong> Verify your email by clicking the verification link sent to your inbox</li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-muted-foreground">
                      <strong>💡 Tip:</strong> Use a strong, unique password and keep your login credentials secure. We recommend enabling two-factor authentication when available.
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 pb-6 border-b last:border-b-0">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Browse & Select a Match</h3>
                    <p className="text-muted-foreground mb-3">
                      Once logged in, explore available cricket matches and choose one to create your fantasy team:
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                      <li>• <strong>View Matches:</strong> Go to the "Matches" section to see all available cricket matches</li>
                      <li>• <strong>Match Types:</strong> Choose from various formats - T20 (20 overs), ODI (50 overs), or Test (5 days)</li>
                      <li>• <strong>Match Details:</strong> View match information including teams, venue, start time, and format</li>
                      <li>• <strong>Deadline:</strong> Note the team creation deadline - you must create your team before the match starts</li>
                      <li>• <strong>Select Match:</strong> Click on the match you want to create a team for</li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-muted-foreground">
                      <strong>💡 Tip:</strong> Check match details carefully. Different formats have different player pools and scoring systems.
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 pb-6 border-b last:border-b-0">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Build Your Fantasy Team</h3>
                    <p className="text-muted-foreground mb-3">
                      Create your dream team with careful player selection and strategic positioning:
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                      <li>• <strong>Team Composition:</strong> Select 11 players from the available player pool</li>
                      <li>• <strong>Player Roles:</strong> Choose appropriate distribution of batsmen, bowlers, and all-rounders</li>
                      <li>• <strong>Budget Management:</strong> Each player has a credit value - manage your budget to fit 11 players within the credit limit</li>
                      <li>• <strong>Captain Selection:</strong> Choose 1 captain (earns 2x points) and 1 vice-captain (earns 1.5x points)</li>
                      <li>• <strong>Player Research:</strong> Check recent form, injury status, and head-to-head records</li>
                      <li>• <strong>Bench Players:</strong> Select substitute players in case of injuries or last-minute changes</li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-muted-foreground">
                      <strong>💡 Tip:</strong> Balance your team - don't pick all star players. Include consistent performers and emerging talents for better balance.
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 pb-6 border-b last:border-b-0">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Submit Your Team</h3>
                    <p className="text-muted-foreground mb-3">
                      Finalize and submit your team before the match deadline:
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                      <li>• <strong>Review Team:</strong> Double-check all player selections and captain choices</li>
                      <li>• <strong>Verify Budget:</strong> Ensure your team is within the credit limit</li>
                      <li>• <strong>Check Deadlines:</strong> Submit before the match start time - late submissions are not accepted</li>
                      <li>• <strong>Confirm Submission:</strong> Click the submit button to finalize your team</li>
                      <li>• <strong>Confirmation:</strong> You'll receive a confirmation with your team details</li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-muted-foreground">
                      <strong>💡 Tip:</strong> Submit your team early to avoid last-minute technical issues. You can edit your team until the deadline.
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Track Performance & Compete</h3>
                    <p className="text-muted-foreground mb-3">
                      Watch your team's performance and compete on the leaderboard:
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                      <li>• <strong>Live Updates:</strong> Get real-time updates of player performances during the match</li>
                      <li>• <strong>Points Accumulation:</strong> Watch your team accumulate points based on player performances</li>
                      <li>• <strong>Leaderboard Ranking:</strong> See how your team ranks against other players</li>
                      <li>• <strong>Final Results:</strong> After the match, view final scores and rankings</li>
                      <li>• <strong>Performance Analysis:</strong> Review detailed statistics and player performances</li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-muted-foreground">
                      <strong>💡 Tip:</strong> Learn from each match. Analyze what worked and what didn't to improve your future team selections.
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Scoring System */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-8">Detailed Scoring System</h2>
              <p className="text-muted-foreground mb-6">
                Points are awarded based on real player performances during the match. Here's the complete breakdown:
              </p>

              <Tabs defaultValue="batting" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="batting">Batting</TabsTrigger>
                  <TabsTrigger value="bowling">Bowling</TabsTrigger>
                  <TabsTrigger value="fielding">Fielding</TabsTrigger>
                </TabsList>

                <TabsContent value="batting" className="space-y-4 mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-3 font-semibold">Action</th>
                          <th className="text-right py-2 px-3 font-semibold">Points</th>
                          <th className="text-left py-2 px-3 font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-2 px-3">Runs Scored</td>
                          <td className="text-right py-2 px-3">1 point per run</td>
                          <td className="py-2 px-3 text-muted-foreground">Every run scored by the batter</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Boundary (4 runs)</td>
                          <td className="text-right py-2 px-3">+1 bonus point</td>
                          <td className="py-2 px-3 text-muted-foreground">Additional point for hitting a four</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Six</td>
                          <td className="text-right py-2 px-3">+2 bonus points</td>
                          <td className="py-2 px-3 text-muted-foreground">Additional points for hitting a six</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Half Century (50 runs)</td>
                          <td className="text-right py-2 px-3">+8 bonus points</td>
                          <td className="py-2 px-3 text-muted-foreground">Milestone bonus for reaching 50 runs</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Century (100 runs)</td>
                          <td className="text-right py-2 px-3">+16 bonus points</td>
                          <td className="py-2 px-3 text-muted-foreground">Major milestone bonus for reaching 100 runs</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Wicket Lost</td>
                          <td className="text-right py-2 px-3">-2 points</td>
                          <td className="py-2 px-3 text-muted-foreground">Penalty for getting out</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Duck (0 runs out)</td>
                          <td className="text-right py-2 px-3">-5 points</td>
                          <td className="py-2 px-3 text-muted-foreground">Additional penalty for scoring zero</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="bowling" className="space-y-4 mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-3 font-semibold">Action</th>
                          <th className="text-right py-2 px-3 font-semibold">Points</th>
                          <th className="text-left py-2 px-3 font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-2 px-3">Wicket Taken</td>
                          <td className="text-right py-2 px-3">+25 points</td>
                          <td className="py-2 px-3 text-muted-foreground">Major points for taking a wicket</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Maiden Over</td>
                          <td className="text-right py-2 px-3">+8 points</td>
                          <td className="py-2 px-3 text-muted-foreground">Bonus for bowling an over without runs</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Dot Ball</td>
                          <td className="text-right py-2 px-3">+1 point</td>
                          <td className="py-2 px-3 text-muted-foreground">Each ball bowled without runs conceded</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">3 Wickets (Haul)</td>
                          <td className="text-right py-2 px-3">+16 bonus points</td>
                          <td className="py-2 px-3 text-muted-foreground">Bonus for taking 3 wickets in an innings</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">4 Wickets (Haul)</td>
                          <td className="text-right py-2 px-3">+24 bonus points</td>
                          <td className="py-2 px-3 text-muted-foreground">Bonus for taking 4 wickets in an innings</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">5 Wickets (Haul)</td>
                          <td className="text-right py-2 px-3">+32 bonus points</td>
                          <td className="py-2 px-3 text-muted-foreground">Major bonus for taking 5 wickets in an innings</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Runs Conceded</td>
                          <td className="text-right py-2 px-3">-1 point per run</td>
                          <td className="py-2 px-3 text-muted-foreground">Penalty for runs conceded while bowling</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="fielding" className="space-y-4 mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-3 font-semibold">Action</th>
                          <th className="text-right py-2 px-3 font-semibold">Points</th>
                          <th className="text-left py-2 px-3 font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-2 px-3">Catch Taken</td>
                          <td className="text-right py-2 px-3">+8 points</td>
                          <td className="py-2 px-3 text-muted-foreground">Points for taking a catch</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Stumping</td>
                          <td className="text-right py-2 px-3">+12 points</td>
                          <td className="py-2 px-3 text-muted-foreground">Bonus for a stumping (wicket-keeper)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Run Out</td>
                          <td className="text-right py-2 px-3">+12 points</td>
                          <td className="py-2 px-3 text-muted-foreground">Points for a run-out</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Direct Hit</td>
                          <td className="text-right py-2 px-3">+4 points</td>
                          <td className="py-2 px-3 text-muted-foreground">Bonus for a direct throw run-out</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Captain & Vice-Captain Multipliers
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Your selected captain and vice-captain earn bonus points:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Captain:</strong> Earns 2x points (all points doubled)</li>
                  <li>• <strong>Vice-Captain:</strong> Earns 1.5x points (all points multiplied by 1.5)</li>
                  <li>• <strong>Other Players:</strong> Earn 1x points (normal points)</li>
                </ul>
              </div>
            </Card>

            {/* Player Roles */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Understanding Player Roles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-blue-600">BAT</Badge>
                    <span>Batsmen</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Players who primarily focus on batting and scoring runs.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Primary role: Scoring runs</li>
                    <li>• Earn points for runs and boundaries</li>
                    <li>• Lose points for getting out</li>
                    <li>• Ideal for consistent performers</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-green-600">BOWL</Badge>
                    <span>Bowlers</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Players who primarily focus on bowling and taking wickets.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Primary role: Taking wickets</li>
                    <li>• Earn points for wickets and dot balls</li>
                    <li>• Lose points for runs conceded</li>
                    <li>• Ideal for consistent bowlers</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-purple-600">ALL</Badge>
                    <span>All-Rounders</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Players who excel at both batting and bowling.
                  </p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Dual role: Batting and bowling</li>
                    <li>• Earn points from both disciplines</li>
                    <li>• Higher value due to versatility</li>
                    <li>• Great for team balance</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-orange-600">WK</Badge>
                    <span>Wicket-Keepers</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Specialist fielders who keep wickets and also bat.
                  </p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Primary role: Wicket-keeping</li>
                    <li>• Earn bonus points for stumpings</li>
                    <li>• Also earn batting points</li>
                    <li>• Essential for team balance</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Pro Tips */}
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <h2 className="text-2xl font-semibold mb-6">Pro Tips for Success</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="font-semibold mb-1">Research Players</h3>
                    <p className="text-sm text-muted-foreground">
                      Check recent form, head-to-head records, and playing conditions before selecting players.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">⚖️</div>
                  <div>
                    <h3 className="font-semibold mb-1">Balance Your Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Mix star players with consistent performers for better overall performance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">👑</div>
                  <div>
                    <h3 className="font-semibold mb-1">Captain Wisely</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose your captain based on form, venue, and opposition. Captain earns 2x points!
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h3 className="font-semibold mb-1">Analyze Trends</h3>
                    <p className="text-sm text-muted-foreground">
                      Study player performance trends and venue-specific statistics for better predictions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">🔄</div>
                  <div>
                    <h3 className="font-semibold mb-1">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep track of injuries, team changes, and last-minute updates before match start.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-2xl">📈</div>
                  <div>
                    <h3 className="font-semibold mb-1">Learn & Improve</h3>
                    <p className="text-sm text-muted-foreground">
                      Analyze your previous teams and learn from mistakes to improve future selections.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Important Rules */}
            <Card className="p-8 border-red-200 bg-red-50">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-600" />
                Important Rules & Restrictions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Team Size & Composition</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                    <li>• Your team must have exactly 11 players</li>
                    <li>• Minimum 3 batsmen, maximum 8 batsmen</li>
                    <li>• Minimum 3 bowlers, maximum 8 bowlers</li>
                    <li>• Minimum 1 wicket-keeper, maximum 4 wicket-keepers</li>
                    <li>• All-rounders count as batsmen or bowlers based on their role</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Captain & Vice-Captain</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                    <li>• You must select 1 captain and 1 vice-captain</li>
                    <li>• Captain and vice-captain must be different players</li>
                    <li>• Both must be in your playing XI</li>
                    <li>• Captain earns 2x points, vice-captain earns 1.5x points</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Submission Deadline</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                    <li>• Teams must be submitted before the match starts</li>
                    <li>• No late submissions are accepted</li>
                    <li>• You can edit your team until the deadline</li>
                    <li>• Check the exact deadline for each match</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Player Eligibility</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                    <li>• Only players from the two playing teams are eligible</li>
                    <li>• Injured or unavailable players cannot be selected</li>
                    <li>• Players must be in the official squad list</li>
                    <li>• Substitute players can be selected if available</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
