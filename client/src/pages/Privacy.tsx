import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last Updated: December 2024
            </p>
            <p className="text-muted-foreground mt-4">
              Your privacy is important to us. This Privacy Policy explains how XSNAP IMAGING PRIVATE LIMITED 
              collects, uses, protects, and shares your personal information.
            </p>
          </div>

          <Card className="p-8 space-y-8">
            {/* Section 1 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect various types of information in connection with the services we provide:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information You Provide:</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• <strong>Name:</strong> Your full name for account identification</li>
                    <li>• <strong>Email Address:</strong> For account recovery, notifications, and communication</li>
                    <li>• <strong>Password:</strong> Encrypted and used for account security</li>
                    <li>• <strong>Age Verification:</strong> Date of birth to confirm 18+ eligibility</li>
                    <li>• <strong>State of Residence:</strong> To verify geographic eligibility</li>
                    <li>• <strong>Phone Number (Optional):</strong> For account recovery and support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Gameplay & Activity Information:</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• <strong>Team Selections:</strong> Players you select and team compositions</li>
                    <li>• <strong>Captain & Vice-Captain Choices:</strong> Your leadership decisions</li>
                    <li>• <strong>Match Participation:</strong> Which matches you create teams for</li>
                    <li>• <strong>Leaderboard Rankings:</strong> Your scores and positions</li>
                    <li>• <strong>Account Activity:</strong> Login times, team creation times, edits</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Technical Information:</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• <strong>Device Information:</strong> Device type, OS, browser, screen resolution</li>
                    <li>• <strong>IP Address:</strong> For security and fraud detection</li>
                    <li>• <strong>Cookies & Tracking:</strong> Session data and user preferences</li>
                    <li>• <strong>Usage Analytics:</strong> Pages visited, time spent, features used</li>
                    <li>• <strong>Error Logs:</strong> Technical errors and crash reports</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Communication Information:</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• <strong>Support Communications:</strong> Messages sent to support team</li>
                    <li>• <strong>Feedback & Suggestions:</strong> User-provided feedback</li>
                    <li>• <strong>Email Communications:</strong> Newsletters and notifications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="text-primary font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold">Service Provision</h3>
                    <p className="text-muted-foreground text-sm">To create and maintain your account, process team selections, calculate scores, and provide leaderboard rankings</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold">Eligibility Verification</h3>
                    <p className="text-muted-foreground text-sm">To verify your age (18+) and state of residence for compliance with regulations</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold">Security & Fraud Prevention</h3>
                    <p className="text-muted-foreground text-sm">To detect and prevent fraud, unauthorized access, and suspicious activities</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold">Communication</h3>
                    <p className="text-muted-foreground text-sm">To send important updates, match notifications, leaderboard changes, and support responses</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold">Service Improvement</h3>
                    <p className="text-muted-foreground text-sm">To analyze usage patterns, improve user experience, and develop new features</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold">Legal Compliance</h3>
                    <p className="text-muted-foreground text-sm">To comply with legal obligations, respond to lawful requests, and enforce our terms</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-primary font-bold">✓</div>
                  <div>
                    <h3 className="font-semibold">Analytics & Reporting</h3>
                    <p className="text-muted-foreground text-sm">To generate anonymized reports and understand platform usage trends</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Data Security & Protection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement comprehensive security measures to protect your personal information:
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Encryption</h3>
                    <p className="text-muted-foreground text-sm">All data transmission uses SSL/TLS encryption (HTTPS). Passwords are hashed using bcrypt, one of the most secure algorithms.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Access Control</h3>
                    <p className="text-muted-foreground text-sm">Access to personal data is restricted to authorized personnel only. All staff sign confidentiality agreements.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Secure Storage</h3>
                    <p className="text-muted-foreground text-sm">Data is stored on secure servers with firewalls and intrusion detection systems.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Regular Audits</h3>
                    <p className="text-muted-foreground text-sm">We conduct regular security audits and penetration testing to identify and address vulnerabilities.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Incident Response</h3>
                    <p className="text-muted-foreground text-sm">We have procedures in place to respond to security incidents and notify affected users promptly.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> While we implement strong security measures, no system is 100% secure. 
                  We encourage you to use strong passwords and keep your account credentials confidential.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing & Third Parties</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are committed to protecting your privacy and do not sell, trade, or rent your personal information to third parties.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">We DO NOT Share Your Data With:</h3>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Marketing companies or advertisers</li>
                    <li>• Data brokers or information resellers</li>
                    <li>• Third-party apps or services (without your consent)</li>
                    <li>• Social media platforms (unless you authorize)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">We MAY Share Data With:</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• <strong>Service Providers:</strong> Cloud hosting, email services, analytics tools (under strict confidentiality agreements)</li>
                    <li>• <strong>Legal Authorities:</strong> When required by law or court order</li>
                    <li>• <strong>Business Partners:</strong> Only with your explicit consent</li>
                    <li>• <strong>Aggregated Data:</strong> Anonymous, aggregated statistics for research (cannot identify individuals)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Cookies & Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience:
              </p>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold mb-1">Essential Cookies</h3>
                  <p className="text-muted-foreground text-sm">Required for login, security, and basic functionality</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Performance Cookies</h3>
                  <p className="text-muted-foreground text-sm">Help us understand how users interact with the platform</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Preference Cookies</h3>
                  <p className="text-muted-foreground text-sm">Remember your language preference and settings</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect platform functionality.
              </p>
            </section>

            {/* Section 6 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights & Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>

              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• <strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li>• <strong>Right to Correction:</strong> Update or correct inaccurate information</li>
                <li>• <strong>Right to Deletion:</strong> Request deletion of your account and data</li>
                <li>• <strong>Right to Portability:</strong> Receive your data in a portable format</li>
                <li>• <strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li>• <strong>Right to Object:</strong> Object to certain data processing activities</li>
              </ul>

              <p className="text-muted-foreground text-sm mt-4">
                To exercise these rights, contact us at support@xsnaplive.com with your request.
              </p>
            </section>

            {/* Section 7 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
              </p>

              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• <strong>Active Accounts:</strong> Data retained while your account is active</li>
                <li>• <strong>Deleted Accounts:</strong> Data deleted within 30 days of account deletion</li>
                <li>• <strong>Legal Requirements:</strong> Data retained as required by law (typically 7 years)</li>
                <li>• <strong>Backup Data:</strong> May be retained in backups for up to 90 days</li>
              </ul>

              <p className="text-muted-foreground text-sm mt-4">
                After the retention period, data is securely deleted or anonymized.
              </p>
            </section>

            {/* Section 8 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                XSNAP Fantasy Cricket is not intended for users under 18 years of age. We do not knowingly collect personal 
                information from children under 18. If we become aware that a child has provided us with personal information, 
                we will immediately delete such information and terminate the child's account. Parents or guardians who believe 
                their child has provided information should contact us immediately at support@xsnaplive.com.
              </p>
            </section>

            {/* Section 9 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your personal information is primarily stored and processed in India. If we transfer data internationally, 
                we ensure appropriate safeguards are in place to protect your information in accordance with applicable laws.
              </p>
            </section>

            {/* Section 10 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Platform may contain links to third-party websites. We are not responsible for the privacy practices of 
                external sites. We encourage you to review the privacy policies of any third-party sites before providing 
                personal information.
              </p>
            </section>

            {/* Section 11 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                We will notify you of significant changes by posting the updated policy on our Platform and updating the 
                "Last Updated" date. Your continued use of the Platform following such notification constitutes your 
                acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>

              <div className="space-y-2 text-muted-foreground ml-4">
                <p><strong>Email:</strong> support@xsnaplive.com</p>
                <p><strong>Company:</strong> XSNAP IMAGING PRIVATE LIMITED</p>
                <p><strong>CIN:</strong> U31909MH2019PTC325365</p>
                <p><strong>Address:</strong> House No. 260, Near Sai Papers, Jambhall, Badalpur, Thane, Maharashtra 421503</p>
              </div>

              <p className="text-muted-foreground text-sm mt-4">
                We will respond to your inquiry within 7 business days.
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
