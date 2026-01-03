import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, CheckCircle2, XCircle, Scale } from "lucide-react";

export default function FairPlay() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12">
            <Badge className="mb-4 text-lg px-6 py-2">Platform Integrity</Badge>
            <h1 className="text-5xl font-bold mb-6">Fair Play Policy</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last Updated: January 3, 2026
            </p>
            <Card className="mt-6 p-6 bg-green-50 border-green-200">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  XSNAP Fantasy Cricket is committed to maintaining a fair, transparent, and ethical platform where all 
                  users compete on equal terms based purely on cricket knowledge and strategic skills. This Fair Play 
                  Policy outlines our commitment to integrity and the rules all users must follow.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Our Commitment */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Commitment to Fair Play</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We believe that fantasy cricket should be a level playing field where success depends solely on cricket 
                  knowledge, strategic thinking, and analytical skills—not on unfair advantages, manipulation, or deception. 
                  We are committed to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <h3 className="font-bold text-lg text-foreground">Transparent Rules</h3>
                    </div>
                    <p className="text-sm">All scoring rules, team building constraints, and competition mechanics are publicly documented and consistently applied.</p>
                  </Card>
                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <h3 className="font-bold text-lg text-foreground">Equal Access</h3>
                    </div>
                    <p className="text-sm">Every user has access to the same information, features, and opportunities. No premium tiers or paid advantages.</p>
                  </Card>
                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <h3 className="font-bold text-lg text-foreground">Anti-Fraud Measures</h3>
                    </div>
                    <p className="text-sm">Advanced detection systems identify and prevent cheating, manipulation, and unfair practices.</p>
                  </Card>
                  <Card className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <h3 className="font-bold text-lg text-foreground">Swift Action</h3>
                    </div>
                    <p className="text-sm">Violations are investigated promptly and appropriate action is taken to maintain platform integrity.</p>
                  </Card>
                </div>
              </div>
            </Card>

            {/* Prohibited Activities */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-600/10 rounded-xl">
                  <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold">Prohibited Activities</h2>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  The following activities are strictly prohibited and will result in immediate action:
                </p>

                <div className="space-y-4">
                  <Card className="p-6 bg-red-50 border-red-200">
                    <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Multiple Accounts
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Creating or operating multiple accounts to gain unfair advantages, manipulate leaderboards, or 
                      circumvent restrictions. Each user is permitted only ONE account.
                    </p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Automated Tools & Bots
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Using scripts, bots, automated tools, or any software to create teams, access the platform, or 
                      perform actions automatically. All interactions must be manual and human-initiated.
                    </p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      System Manipulation
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Attempting to exploit bugs, glitches, or vulnerabilities in the scoring system, team builder, or 
                      any platform feature to gain unfair advantages.
                    </p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Collusion & Coordination
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Coordinating with other users to manipulate leaderboards, share accounts, or engage in any form of 
                      collusion that undermines fair competition.
                    </p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Account Sharing or Trading
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sharing account credentials, selling accounts, or allowing others to access your account. Accounts 
                      are personal and non-transferable.
                    </p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Data Scraping
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Scraping, harvesting, or extracting data from the platform using automated means without explicit 
                      written permission.
                    </p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Reverse Engineering
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Attempting to reverse engineer, decompile, disassemble, or extract source code from the platform.
                    </p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      False Information
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Providing false, misleading, or inaccurate information during registration or at any time while 
                      using the platform.
                    </p>
                  </Card>

                  <Card className="p-6 bg-red-50 border-red-200">
                    <h3 className="font-bold text-lg mb-3 text-foreground flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Harassment & Abuse
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Harassing, threatening, abusing, or engaging in any form of inappropriate behavior toward other 
                      users or platform staff.
                    </p>
                  </Card>
                </div>
              </div>
            </Card>

            {/* Detection & Monitoring */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600/10 rounded-xl">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">Detection & Monitoring</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We employ multiple layers of detection and monitoring to identify unfair practices:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                  <p>• <strong className="text-foreground">Automated Systems:</strong> AI-powered algorithms detect unusual patterns, suspicious activity, and potential violations</p>
                  <p>• <strong className="text-foreground">Manual Reviews:</strong> Our team manually investigates flagged accounts and reported violations</p>
                  <p>• <strong className="text-foreground">User Reports:</strong> Community members can report suspicious behavior for investigation</p>
                  <p>• <strong className="text-foreground">IP Tracking:</strong> Monitor IP addresses to detect multiple accounts from the same source</p>
                  <p>• <strong className="text-foreground">Behavioral Analysis:</strong> Analyze user behavior patterns to identify automation or manipulation</p>
                  <p>• <strong className="text-foreground">Device Fingerprinting:</strong> Track device characteristics to prevent multi-accounting</p>
                </div>
              </div>
            </Card>

            {/* Consequences */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-600/10 rounded-xl">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold">Consequences of Violations</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Violations of this Fair Play Policy will result in appropriate action based on the severity and frequency 
                  of the violation:
                </p>
                <div className="space-y-4 mt-6">
                  <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h3 className="font-bold text-lg mb-2 text-foreground">First Warning</h3>
                    <p>
                      Minor first-time violations may result in a warning and temporary restriction of certain features. 
                      The user will be notified via email with details of the violation.
                    </p>
                  </div>
                  <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="font-bold text-lg mb-2 text-foreground">Temporary Suspension</h3>
                    <p>
                      Repeated minor violations or moderate violations result in temporary account suspension (7-30 days). 
                      During suspension, the user cannot access the platform.
                    </p>
                  </div>
                  <div className="p-6 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-bold text-lg mb-2 text-foreground">Permanent Ban</h3>
                    <p>
                      Serious violations (multiple accounts, automation, system manipulation) result in immediate permanent 
                      ban. All associated accounts will be terminated, and the user is prohibited from creating new accounts.
                    </p>
                  </div>
                  <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-lg mb-2 text-foreground">Legal Action</h3>
                    <p>
                      In cases involving fraud, hacking, data theft, or other illegal activities, we reserve the right to 
                      pursue legal action and cooperate with law enforcement authorities.
                    </p>
                  </div>
                </div>
                <p className="mt-6">
                  All decisions regarding violations are final and at our sole discretion. We do not provide detailed 
                  explanations of our detection methods to prevent circumvention.
                </p>
              </div>
            </Card>

            {/* Reporting Violations */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-600/10 rounded-xl">
                  <AlertTriangle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">Reporting Violations</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you suspect another user is violating this Fair Play Policy, please report it to us immediately. 
                  We take all reports seriously and investigate them promptly.
                </p>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-6">
                  <h3 className="font-bold text-lg mb-3 text-foreground">How to Report:</h3>
                  <div className="space-y-2">
                    <p>1. Email us at support@xsnaplive.com with subject line "Fair Play Violation Report"</p>
                    <p>2. Include the username of the suspected violator</p>
                    <p>3. Describe the violation with as much detail as possible</p>
                    <p>4. Provide evidence if available (screenshots, timestamps, etc.)</p>
                    <p>5. Include your contact information for follow-up questions</p>
                  </div>
                </div>
                <p className="mt-4">
                  All reports are confidential. We do not disclose the identity of reporters to the accused users. 
                  False or malicious reports may result in action against the reporter.
                </p>
              </div>
            </Card>

            {/* Appeals Process */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-600/10 rounded-xl">
                  <Scale className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold">Appeals Process</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you believe your account was suspended or banned in error, you may appeal the decision:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                  <p>1. Email support@xsnaplive.com with subject line "Fair Play Appeal"</p>
                  <p>2. Include your username and registered email address</p>
                  <p>3. Explain why you believe the action was incorrect</p>
                  <p>4. Provide any evidence supporting your appeal</p>
                  <p>5. Wait for our review team to investigate (typically 7-14 days)</p>
                </div>
                <p className="mt-4">
                  Appeals are reviewed by a different team member than the one who made the original decision. However, 
                  our decisions are generally final, and we reserve the right to deny appeals without detailed explanation.
                </p>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Contact Us</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For questions about this Fair Play Policy or to report violations:
                </p>
                <div className="bg-white p-6 rounded-lg space-y-2">
                  <p><strong className="text-foreground">Email:</strong> support@xsnaplive.com</p>
                  <p><strong className="text-foreground">Company:</strong> XSNAP IMAGING PRIVATE LIMITED</p>
                  <p><strong className="text-foreground">Website:</strong> https://xsnaplive.com</p>
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
