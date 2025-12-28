import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function FairPlay() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-12 h-12 text-primary" />
              <h1 className="text-5xl font-bold">Fair Play Policy</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Last Updated: December 2024
            </p>
            <p className="text-muted-foreground mt-4">
              XSNAP Fantasy Cricket is committed to maintaining the highest standards of integrity, fairness, 
              and transparency in all competitive activities. This policy outlines our commitment to fair play 
              and the measures we take to ensure equal opportunities for all users.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Our Commitment to Fair Play
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At XSNAP Fantasy Cricket, we believe that fair competition is the foundation of an enjoyable and 
                trustworthy gaming experience. We are committed to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• <strong>Skill-Based Competition:</strong> Success is determined by knowledge, strategy, and analytical skills</li>
                <li>• <strong>Equal Opportunities:</strong> Every player has the same chance to succeed regardless of background</li>
                <li>• <strong>Transparent Rules:</strong> All rules, scoring systems, and procedures are clearly documented</li>
                <li>• <strong>Consistent Application:</strong> Rules are applied uniformly to all players</li>
                <li>• <strong>Integrity:</strong> We maintain the highest ethical standards in all operations</li>
                <li>• <strong>Accountability:</strong> We are responsible for our actions and decisions</li>
              </ul>
            </Card>

            {/* Section 2 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Prohibited Activities & Cheating
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following activities are strictly prohibited and will result in account suspension or permanent ban:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Account & Identity Fraud</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Creating multiple accounts to gain unfair advantage or bypass restrictions</li>
                    <li>• Using fake or false identity information</li>
                    <li>• Sharing account credentials with other users</li>
                    <li>• Account takeover or unauthorized access</li>
                    <li>• Creating accounts for underage users</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Technical Manipulation</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Using automated bots, scripts, or tools to create teams</li>
                    <li>• Exploiting bugs, glitches, or vulnerabilities</li>
                    <li>• Attempting to hack or compromise platform security</li>
                    <li>• Reverse-engineering or tampering with platform code</li>
                    <li>• Using VPNs to bypass geographic restrictions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Collusion & Match-Fixing</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Coordinating with other users to manipulate leaderboards</li>
                    <li>• Sharing team information to gain unfair advantage</li>
                    <li>• Deliberately losing or not participating to benefit another player</li>
                    <li>• Engaging in any form of match-fixing or result manipulation</li>
                    <li>• Price-fixing or collusion on player selections</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Information Abuse</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Using insider information to gain unfair advantage</li>
                    <li>• Accessing non-public match information before team deadline</li>
                    <li>• Using privileged information about player availability</li>
                    <li>• Spreading false information about matches or players</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Behavioral Violations</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Harassing, threatening, or abusing other users</li>
                    <li>• Posting offensive, defamatory, or hate speech content</li>
                    <li>• Spamming or flooding the platform with messages</li>
                    <li>• Impersonating staff or other users</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Section 3 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Transparent Rules & Scoring</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We maintain complete transparency in all game rules and scoring mechanisms:
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <Badge className="bg-primary flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Consistent Scoring</h3>
                    <p className="text-muted-foreground text-sm">Identical scoring rules apply to all players across all matches</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Badge className="bg-primary flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Real-Time Updates</h3>
                    <p className="text-muted-foreground text-sm">Points are calculated and displayed in real-time as matches progress</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Badge className="bg-primary flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Clear Player Pricing</h3>
                    <p className="text-muted-foreground text-sm">Player credit values are clearly displayed and consistent throughout</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Badge className="bg-primary flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Budget Constraints</h3>
                    <p className="text-muted-foreground text-sm">All players operate within the same credit budget limits</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Badge className="bg-primary flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Transparent Leaderboards</h3>
                    <p className="text-muted-foreground text-sm">Leaderboard calculations are transparent and verifiable</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Badge className="bg-primary flex-shrink-0">✓</Badge>
                  <div>
                    <h3 className="font-semibold">Documented Rules</h3>
                    <p className="text-muted-foreground text-sm">All rules are published and easily accessible to all users</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Section 4 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Fraud Detection & Prevention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We employ sophisticated systems to detect and prevent fraudulent activities:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Monitoring Systems</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Real-time monitoring of account activities and patterns</li>
                    <li>• Detection of suspicious team selections or betting patterns</li>
                    <li>• IP address tracking to identify multiple accounts</li>
                    <li>• Device fingerprinting to prevent account duplication</li>
                    <li>• Behavioral analysis to identify collusion</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Investigation Process</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Suspected fraud triggers automated alerts</li>
                    <li>• Manual investigation by our compliance team</li>
                    <li>• Evidence collection and analysis</li>
                    <li>• User notification and opportunity to respond</li>
                    <li>• Final determination and action</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Enforcement Actions</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Account suspension (temporary or permanent)</li>
                    <li>• Leaderboard score voiding</li>
                    <li>• IP address banning</li>
                    <li>• Reporting to relevant authorities if necessary</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Section 5 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Data Integrity & Scoring Verification</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We ensure the integrity of all match data and scoring:
              </p>

              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• <strong>Official Data Sources:</strong> All scoring data comes from official cricket boards and verified sources</li>
                <li>• <strong>Automated Scoring:</strong> Points are calculated by automated systems, eliminating human error</li>
                <li>• <strong>Audit Trail:</strong> All scoring changes are logged and auditable</li>
                <li>• <strong>Verification Process:</strong> Scores are verified against multiple sources</li>
                <li>• <strong>Dispute Resolution:</strong> Clear process for resolving scoring disputes</li>
                <li>• <strong>Correction Protocol:</strong> Any errors are corrected promptly and transparently</li>
              </ul>
            </Card>

            {/* Section 6 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a user of XSNAP Fantasy Cricket, you agree to:
              </p>

              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Play fairly and in the spirit of the game</li>
                <li>• Maintain account security and not share credentials</li>
                <li>• Report suspected fraud or violations</li>
                <li>• Accept all decisions made by our compliance team</li>
                <li>• Comply with all applicable laws and regulations</li>
                <li>• Treat other players with respect and dignity</li>
              </ul>
            </Card>

            {/* Section 7 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Reporting Violations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you suspect a violation of this Fair Play Policy, please report it immediately:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">How to Report</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Email: support@xsnaplive.com with subject "Fair Play Violation"</li>
                    <li>• Include specific details and evidence if possible</li>
                    <li>• Provide usernames or account IDs involved</li>
                    <li>• Describe the suspected violation clearly</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Investigation Confidentiality</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• All reports are treated confidentially</li>
                    <li>• Reporters are protected from retaliation</li>
                    <li>• Investigation details are kept private</li>
                    <li>• Results are communicated to relevant parties</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Section 8 */}
            <Card className="p-8 border-b pb-8">
              <h2 className="text-2xl font-semibold mb-6">Consequences of Violations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Violations of this Fair Play Policy may result in:
              </p>

              <div className="space-y-3">
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold mb-1">First Violation</h3>
                  <p className="text-muted-foreground text-sm">Warning and temporary account suspension (7-30 days)</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold mb-1">Second Violation</h3>
                  <p className="text-muted-foreground text-sm">Extended suspension (30-90 days) and leaderboard score removal</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold mb-1">Serious or Repeated Violations</h3>
                  <p className="text-muted-foreground text-sm">Permanent account ban and IP address blocking</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mt-4">
                Serious violations (fraud, hacking, collusion) may result in immediate permanent ban without warning.
              </p>
            </Card>

            {/* Section 9 */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Appeals Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you believe you have been unfairly penalized, you may appeal:
              </p>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold mb-2">Appeal Process</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                    <li>• Submit appeal within 7 days of penalty notification</li>
                    <li>• Email support@xsnaplive.com with "Appeal" in subject</li>
                    <li>• Provide detailed explanation and supporting evidence</li>
                    <li>• Our appeals committee will review within 14 days</li>
                    <li>• Decision is final and binding</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Appeals are only available for penalties. Serious violations resulting in 
                    permanent bans are not subject to appeal.
                  </p>
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
