import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, AlertCircle, Phone, MessageSquare } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Heart className="w-12 h-12 text-red-600" />
              <h1 className="text-5xl font-bold">Responsible Gaming</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Last Updated: December 2024
            </p>
            <p className="text-muted-foreground mt-4">
              Your wellbeing is our priority. XSNAP Fantasy Cricket is committed to promoting responsible gaming 
              practices and providing support for users who may need help.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Our Philosophy on Responsible Gaming</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                XSNAP Fantasy Cricket is designed as a free-to-play educational and entertainment platform. 
                We are committed to ensuring that gaming remains enjoyable and does not negatively impact users' 
                mental health, finances, relationships, or daily responsibilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our core principle is that gaming should be a source of fun and learning, never a source of 
                stress, financial burden, or addiction. We actively promote healthy gaming habits and provide 
                resources for users who may be struggling.
              </p>
            </Card>

            {/* Section 2 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Why XSNAP is Safe & Responsible</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Badge className="bg-green-600 flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold mb-1">100% Free-to-Play</h3>
                    <p className="text-muted-foreground text-sm">
                      No real money deposits, withdrawals, or financial transactions. Zero financial risk.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Badge className="bg-green-600 flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold mb-1">18+ Age Requirement</h3>
                    <p className="text-muted-foreground text-sm">
                      Mandatory age verification during registration protects minors from gaming.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Badge className="bg-green-600 flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold mb-1">No Monetary Prizes</h3>
                    <p className="text-muted-foreground text-sm">
                      Winners are recognized on leaderboards only, eliminating financial incentives.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Badge className="bg-green-600 flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold mb-1">Educational Focus</h3>
                    <p className="text-muted-foreground text-sm">
                      Platform emphasizes learning cricket strategy and player analysis over competition.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Badge className="bg-green-600 flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold mb-1">State Compliance</h3>
                    <p className="text-muted-foreground text-sm">
                      Restricted in states with stricter gaming regulations to ensure full compliance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Badge className="bg-green-600 flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold mb-1">Support Resources</h3>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive mental health resources and support available to all users.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Section 3 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Healthy Gaming Habits</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We recommend these practices to ensure gaming remains enjoyable and healthy:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Set Time Limits</h3>
                  <p className="text-muted-foreground text-sm">
                    Decide how much time you'll spend gaming daily and stick to it. Gaming should not interfere 
                    with work, studies, sleep, or relationships.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Take Regular Breaks</h3>
                  <p className="text-muted-foreground text-sm">
                    Take breaks every 30-60 minutes. Step away from the screen, stretch, and rest your eyes. 
                    This prevents fatigue and maintains perspective.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Maintain Balance</h3>
                  <p className="text-muted-foreground text-sm">
                    Ensure gaming doesn't replace other important activities like exercise, socializing, 
                    family time, and hobbies.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Play for Fun</h3>
                  <p className="text-muted-foreground text-sm">
                    Remember that the primary goal is entertainment and learning, not winning or competing. 
                    Enjoy the experience without pressure.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Never Gamble</h3>
                  <p className="text-muted-foreground text-sm">
                    XSNAP is free-to-play with no real money involved. If you feel tempted to bet money 
                    on games, seek help immediately.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Avoid Escapism</h3>
                  <p className="text-muted-foreground text-sm">
                    If you're using gaming to escape from stress, depression, or anxiety, consider seeking 
                    professional support instead.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 4 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-600" />
                Warning Signs of Problem Gaming
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you experience any of these signs, you may be developing unhealthy gaming habits:
              </p>

              <div className="space-y-2 text-muted-foreground ml-4">
                <p>• <strong>Preoccupation:</strong> Constantly thinking about gaming even when not playing</p>
                <p>• <strong>Tolerance:</strong> Needing to spend increasing amounts of time gaming for satisfaction</p>
                <p>• <strong>Loss of Control:</strong> Unable to stop or reduce gaming despite wanting to</p>
                <p>• <strong>Withdrawal:</strong> Feeling anxious, irritable, or sad when not gaming</p>
                <p>• <strong>Escape:</strong> Using gaming to avoid problems or negative emotions</p>
                <p>• <strong>Deception:</strong> Lying to family or friends about gaming habits</p>
                <p>• <strong>Neglect:</strong> Ignoring work, school, or relationships due to gaming</p>
                <p>• <strong>Continued Use:</strong> Gaming despite knowing it's causing problems</p>
                <p>• <strong>Jeopardized Opportunities:</strong> Risking or losing important relationships or opportunities</p>
              </div>

              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>If you recognize these signs in yourself, please seek help immediately.</strong> 
                  Contact a mental health professional or use the resources provided below.
                </p>
              </div>
            </Card>

            {/* Section 5 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Mental Health & Wellbeing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gaming should enhance your life, not detract from it. If you're struggling with mental health issues:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Seek Professional Help</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    If you're experiencing depression, anxiety, or other mental health concerns, please reach out to:
                  </p>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Your doctor or mental health professional</li>
                    <li>• Local mental health clinics or hospitals</li>
                    <li>• Teletherapy services for convenient access</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Talk to Someone</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    Sometimes just talking helps. Consider reaching out to:
                  </p>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Family members or trusted friends</li>
                    <li>• Counselors or therapists</li>
                    <li>• Support groups for gaming or mental health</li>
                    <li>• Crisis hotlines (available 24/7)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Take Breaks</h3>
                  <p className="text-muted-foreground text-sm">
                    If gaming is affecting your mental health, take a break. Stepping away can help you gain 
                    perspective and focus on other important aspects of life.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 6 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Support Resources</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide several resources to support your wellbeing:
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Crisis Hotlines (India)
                  </h3>
                  <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                    <li>• <strong>AASRA:</strong> 9820466726 (24/7)</li>
                    <li>• <strong>iCall:</strong> 9152987821 (24/7)</li>
                    <li>• <strong>Vandrevala Foundation:</strong> 9999 77 6555 (24/7)</li>
                    <li>• <strong>HELPLINE:</strong> 1860 2662 345 (24/7)</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Mental Health Organizations
                  </h3>
                  <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                    <li>• <strong>National Institute of Mental Health:</strong> nimh.org.in</li>
                    <li>• <strong>Indian Psychiatric Society:</strong> indianpsychiatry.org</li>
                    <li>• <strong>Mental Health Foundation:</strong> mentalhealth.org.uk</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Gaming Addiction Support</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                    <li>• <strong>Internet & Gaming Addiction:</strong> Seek help from addiction specialists</li>
                    <li>• <strong>Support Groups:</strong> Join online or offline support communities</li>
                    <li>• <strong>Rehabilitation:</strong> Professional treatment programs available</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Section 7 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Account Management Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide tools to help you manage your gaming:
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <Badge className="bg-primary flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Account Pause</h3>
                    <p className="text-muted-foreground text-sm">
                      Temporarily disable your account if you need a break from gaming.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Badge className="bg-primary flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Account Deletion</h3>
                    <p className="text-muted-foreground text-sm">
                      Permanently delete your account if you decide to stop using the platform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Badge className="bg-primary flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Self-Exclusion</h3>
                    <p className="text-muted-foreground text-sm">
                      Request to be blocked from creating new accounts for a specified period.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Badge className="bg-primary flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Activity Tracking</h3>
                    <p className="text-muted-foreground text-sm">
                      Monitor your gaming activity and set personal limits.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mt-4">
                To access these tools, go to your account settings or contact support@xsnaplive.com
              </p>
            </Card>

            {/* Section 8 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">For Family & Friends</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're concerned about a loved one's gaming habits:
              </p>

              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• <strong>Talk Openly:</strong> Have a non-judgmental conversation about your concerns</li>
                <li>• <strong>Listen:</strong> Understand their perspective and feelings</li>
                <li>• <strong>Encourage Help:</strong> Suggest professional support or counseling</li>
                <li>• <strong>Set Boundaries:</strong> Establish healthy limits on gaming time</li>
                <li>• <strong>Support Recovery:</strong> Help them find and access treatment resources</li>
                <li>• <strong>Take Care of Yourself:</strong> Seek support for yourself as well</li>
              </ul>
            </Card>

            {/* Section 9 */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Us for Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have concerns about your gaming habits or need support, please reach out to us:
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-muted-foreground text-sm"><strong>Email:</strong> support@xsnaplive.com</p>
                  <p className="text-muted-foreground text-sm">Subject: "Responsible Gaming Support"</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm"><strong>Response Time:</strong> Within 24 hours</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Remember:</strong> Your wellbeing is our priority. We're here to help and support you. 
                  Gaming should be fun and enriching, never harmful. If you need help, please reach out.
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
