import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, AlertCircle, CheckCircle2, Clock, Shield, HelpCircle } from "lucide-react";

export default function ResponsibleGaming() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12">
            <Badge className="mb-4 text-lg px-6 py-2">User Wellbeing</Badge>
            <h1 className="text-5xl font-bold mb-6">Responsible Gaming</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last Updated: January 3, 2026
            </p>
            <Card className="mt-6 p-6 bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  At XSNAP Fantasy Cricket, your wellbeing is our priority. While our platform is completely free and 
                  involves no real money, we believe in promoting healthy, balanced engagement with fantasy sports. 
                  This page provides guidelines for responsible platform usage.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Our Philosophy */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Philosophy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  XSNAP Fantasy Cricket is designed as an educational and entertainment platform to enhance your cricket 
                  knowledge and strategic thinking. We want you to enjoy fantasy cricket in a healthy, balanced way that 
                  enriches your life rather than dominates it.
                </p>
                <p>
                  Because our platform is 100% free-to-play with no real money involved, we've eliminated the financial 
                  risks associated with traditional fantasy sports. However, we still encourage responsible usage to ensure 
                  fantasy cricket remains a positive part of your life.
                </p>
              </div>
            </Card>

            {/* Healthy Gaming Practices */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-600/10 rounded-xl">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">Healthy Gaming Practices</h2>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Follow these guidelines to maintain a healthy relationship with fantasy cricket:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <h3 className="font-bold text-lg text-foreground">Set Time Limits</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Decide how much time you want to spend on fantasy cricket each day or week. Set reminders to take 
                      breaks and avoid spending excessive time on the platform.
                    </p>
                  </Card>

                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="w-5 h-5 text-red-600" />
                      <h3 className="font-bold text-lg text-foreground">Balance with Life</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ensure fantasy cricket doesn't interfere with work, studies, relationships, or other important 
                      aspects of your life. It should complement, not replace, real-world activities.
                    </p>
                  </Card>

                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <h3 className="font-bold text-lg text-foreground">Play for Fun</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Remember that XSNAP is for entertainment and education. Don't let leaderboard rankings or team 
                      performance affect your mood or self-worth.
                    </p>
                  </Card>

                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-purple-600" />
                      <h3 className="font-bold text-lg text-foreground">Know Your Limits</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Be aware of how fantasy cricket affects you emotionally. If you find yourself getting overly 
                      stressed or frustrated, take a break.
                    </p>
                  </Card>

                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <HelpCircle className="w-5 h-5 text-orange-600" />
                      <h3 className="font-bold text-lg text-foreground">Learn from Losses</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Poor team performance is a learning opportunity, not a failure. Analyze what went wrong and improve 
                      your strategy for next time.
                    </p>
                  </Card>

                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="w-5 h-5 text-pink-600" />
                      <h3 className="font-bold text-lg text-foreground">Take Regular Breaks</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Step away from the platform regularly. Don't feel obligated to create teams for every match. 
                      It's okay to skip matches.
                    </p>
                  </Card>
                </div>
              </div>
            </Card>

            {/* Warning Signs */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-600/10 rounded-xl">
                  <AlertCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold">Warning Signs of Unhealthy Usage</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  While XSNAP doesn't involve real money, excessive or compulsive use of any platform can be problematic. 
                  Watch for these warning signs:
                </p>
                <div className="space-y-3 mt-6">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p><strong className="text-foreground">• Neglecting Responsibilities:</strong> Missing work, skipping studies, or ignoring family/friends to focus on fantasy cricket</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p><strong className="text-foreground">• Emotional Distress:</strong> Feeling anxious, depressed, or irritable when not playing or after poor team performance</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p><strong className="text-foreground">• Loss of Interest:</strong> Losing interest in other hobbies, activities, or social interactions</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p><strong className="text-foreground">• Compulsive Checking:</strong> Constantly checking scores, leaderboards, or match updates throughout the day</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p><strong className="text-foreground">• Sleep Disruption:</strong> Staying up late to create teams or watch matches, affecting your sleep schedule</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p><strong className="text-foreground">• Inability to Stop:</strong> Trying to reduce usage but finding it difficult to control your time on the platform</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p><strong className="text-foreground">• Relationship Strain:</strong> Conflicts with family or friends due to time spent on fantasy cricket</p>
                  </div>
                </div>
                <p className="mt-6">
                  If you recognize these signs in yourself, it may be time to take a break or seek support.
                </p>
              </div>
            </Card>

            {/* Taking Control */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600/10 rounded-xl">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">Taking Control</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you feel your fantasy cricket usage is becoming problematic, here are steps you can take:
                </p>
                <div className="space-y-4 mt-6">
                  <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-lg mb-2 text-foreground">1. Self-Assessment</h3>
                    <p>
                      Honestly evaluate how fantasy cricket is affecting your life. Keep a log of time spent and how it 
                      makes you feel.
                    </p>
                  </div>
                  <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-bold text-lg mb-2 text-foreground">2. Set Boundaries</h3>
                    <p>
                      Establish clear rules for yourself: specific times for platform usage, maximum number of teams per 
                      week, or designated "no fantasy cricket" days.
                    </p>
                  </div>
                  <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-lg mb-2 text-foreground">3. Take a Break</h3>
                    <p>
                      Consider taking a temporary break from the platform—a week, a month, or longer. This can help reset 
                      your relationship with fantasy cricket.
                    </p>
                  </div>
                  <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h3 className="font-bold text-lg mb-2 text-foreground">4. Seek Support</h3>
                    <p>
                      Talk to friends, family, or a mental health professional about your concerns. They can provide 
                      perspective and support.
                    </p>
                  </div>
                  <div className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                    <h3 className="font-bold text-lg mb-2 text-foreground">5. Delete Your Account</h3>
                    <p>
                      If necessary, you can permanently delete your account. Go to Profile → Account Settings → Delete 
                      Account. This action is irreversible.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* For Parents & Guardians */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-600/10 rounded-xl">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold">For Parents & Guardians</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  XSNAP is designed for users 18 years and older. However, if you're a parent or guardian concerned about 
                  a young adult's fantasy cricket usage:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                  <p>• <strong className="text-foreground">Open Communication:</strong> Have honest conversations about their platform usage and how it affects their life</p>
                  <p>• <strong className="text-foreground">Set Expectations:</strong> Establish clear boundaries around time spent on fantasy cricket</p>
                  <p>• <strong className="text-foreground">Monitor Behavior:</strong> Watch for warning signs of excessive or compulsive usage</p>
                  <p>• <strong className="text-foreground">Encourage Balance:</strong> Promote a healthy mix of activities including sports, hobbies, and social time</p>
                  <p>• <strong className="text-foreground">Seek Help:</strong> If concerned, consult with a mental health professional</p>
                </div>
              </div>
            </Card>

            {/* Resources */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-600/10 rounded-xl">
                  <HelpCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">Support Resources</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you're struggling with compulsive behavior or need mental health support, these resources can help:
                </p>
                <div className="space-y-4 mt-6">
                  <Card className="p-6 bg-white">
                    <h3 className="font-bold text-lg mb-2 text-foreground">NIMHANS (National Institute of Mental Health and Neurosciences)</h3>
                    <p className="text-sm mb-2">India's premier mental health institution offering counseling and treatment</p>
                    <p className="text-sm"><strong>Helpline:</strong> 080-46110007</p>
                    <p className="text-sm"><strong>Website:</strong> https://nimhans.ac.in</p>
                  </Card>

                  <Card className="p-6 bg-white">
                    <h3 className="font-bold text-lg mb-2 text-foreground">Vandrevala Foundation</h3>
                    <p className="text-sm mb-2">24/7 mental health helpline providing free counseling</p>
                    <p className="text-sm"><strong>Helpline:</strong> 1860-2662-345 or 1800-2333-330</p>
                    <p className="text-sm"><strong>Website:</strong> https://www.vandrevalafoundation.com</p>
                  </Card>

                  <Card className="p-6 bg-white">
                    <h3 className="font-bold text-lg mb-2 text-foreground">iCall (TISS)</h3>
                    <p className="text-sm mb-2">Psychosocial helpline by Tata Institute of Social Sciences</p>
                    <p className="text-sm"><strong>Helpline:</strong> 9152987821</p>
                    <p className="text-sm"><strong>Email:</strong> icall@tiss.edu</p>
                  </Card>

                  <Card className="p-6 bg-white">
                    <h3 className="font-bold text-lg mb-2 text-foreground">Your Local Mental Health Professional</h3>
                    <p className="text-sm">Consider consulting a psychologist, psychiatrist, or counselor in your area for personalized support.</p>
                  </Card>
                </div>
              </div>
            </Card>

            {/* Contact Us */}
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">We're Here to Help</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you have concerns about your usage or need assistance with account management, please contact us:
                </p>
                <div className="bg-white p-6 rounded-lg space-y-2">
                  <p><strong className="text-foreground">Email:</strong> support@xsnaplive.com</p>
                  <p><strong className="text-foreground">Company:</strong> XSNAP IMAGING PRIVATE LIMITED</p>
                  <p><strong className="text-foreground">Website:</strong> https://xsnaplive.com</p>
                </div>
                <p className="mt-4">
                  Your wellbeing matters to us. We're committed to providing a safe, healthy platform for all users.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
