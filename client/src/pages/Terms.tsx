import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground text-lg">
              Last Updated: December 2024
            </p>
            <p className="text-muted-foreground mt-4">
              Please read these Terms & Conditions carefully before using XSNAP Fantasy Cricket. 
              By accessing and using our platform, you agree to be bound by these terms.
            </p>
          </div>

          <Card className="p-8 space-y-8">
            {/* Section 1 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing, browsing, and using XSNAP Fantasy Cricket (the "Platform"), you acknowledge that you have read, 
                understood, and agree to be bound by all the terms and conditions contained in this agreement. These terms 
                constitute a legally binding agreement between you and XSNAP IMAGING PRIVATE LIMITED (the "Company").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you do not agree to any part of these terms, you must immediately cease using the Platform. Your continued 
                use of the Platform following any modifications to these terms constitutes your acceptance of the modified terms.
              </p>
            </section>

            {/* Section 2 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility & User Requirements</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">To use XSNAP Fantasy Cricket, you must:</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Be at least 18 years of age (mandatory requirement)</li>
                    <li>• Be a resident of India (excluding restricted states)</li>
                    <li>• Provide accurate, current, and complete registration information</li>
                    <li>• Maintain the confidentiality of your account credentials</li>
                    <li>• Accept full responsibility for all activities under your account</li>
                    <li>• Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Geographic Restrictions:</h3>
                  <p className="text-muted-foreground mb-2">
                    The Platform is NOT available in the following states due to government compliance regulations:
                  </p>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Andhra Pradesh</li>
                    <li>• Assam</li>
                    <li>• Nagaland</li>
                    <li>• Odisha</li>
                    <li>• Sikkim</li>
                    <li>• Telangana</li>
                  </ul>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Users attempting to access from these states will be blocked. We take regulatory compliance seriously.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Free-to-Play Nature & No Real Money</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  XSNAP Fantasy Cricket is a 100% free-to-play platform. This is a fundamental aspect of our service:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• <strong>No Registration Fees:</strong> Creating an account is completely free</li>
                  <li>• <strong>No Deposits Required:</strong> You never need to deposit money to play</li>
                  <li>• <strong>No Real Money Transactions:</strong> The platform does not accept, process, or handle real money</li>
                  <li>• <strong>No Monetary Prizes:</strong> Winners do not receive cash prizes or monetary rewards</li>
                  <li>• <strong>No Premium Features:</strong> All features are available to all users at no cost</li>
                  <li>• <strong>Educational Purpose:</strong> The platform is designed for learning cricket strategy and entertainment</li>
                </ul>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Guarantee:</strong> We commit to keeping XSNAP Fantasy Cricket 100% free forever. 
                    If we ever introduce paid features, we will provide 30 days' notice and allow users to opt-out.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">4. User Conduct & Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use the Platform only for lawful purposes and in a way that does not infringe upon the rights 
                of others or restrict their use and enjoyment of the Platform. Prohibited behavior includes:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Harassing, threatening, or abusing other users</li>
                <li>• Creating multiple accounts to manipulate leaderboards or gain unfair advantage</li>
                <li>• Using automated tools, bots, or scripts to access the Platform</li>
                <li>• Attempting to hack, reverse-engineer, or compromise Platform security</li>
                <li>• Sharing false information or spreading misinformation</li>
                <li>• Engaging in fraud, collusion, or match-fixing</li>
                <li>• Violating intellectual property rights</li>
                <li>• Posting obscene, defamatory, or offensive content</li>
                <li>• Attempting to access restricted areas of the Platform</li>
                <li>• Reselling or transferring your account to another person</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Violation of these rules may result in account suspension or permanent ban without notice.
              </p>
            </section>

            {/* Section 5 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Account Security & Responsibility</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities 
                  that occur under your account. You agree to:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Create a strong, unique password and keep it confidential</li>
                  <li>• Never share your login credentials with anyone</li>
                  <li>• Immediately notify us of any unauthorized access or security breach</li>
                  <li>• Log out from your account when using shared devices</li>
                  <li>• Accept full responsibility for all activities under your account</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The Company is not liable for any loss or damage resulting from your failure to maintain account security 
                  or unauthorized use of your account.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on the Platform, including but not limited to text, graphics, logos, images, software, and 
                databases, is the property of XSNAP IMAGING PRIVATE LIMITED or its content suppliers and is protected by 
                international copyright laws.
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• You may not reproduce, modify, distribute, or transmit any content without permission</li>
                <li>• Cricket-related data and statistics are sourced from official cricket boards and are subject to their rights</li>
                <li>• Player names, images, and statistics are used under fair use for educational purposes</li>
                <li>• You grant the Company a license to use your user-generated content</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Scoring & Leaderboard Integrity</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  All scoring is automated and based on real match data from official sources. We maintain strict standards 
                  to ensure fair competition:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Scoring is calculated automatically based on official match statistics</li>
                  <li>• Leaderboard rankings are transparent and based on total points</li>
                  <li>• We monitor for suspicious activity and fraud</li>
                  <li>• Accounts engaged in collusion or manipulation will be banned</li>
                  <li>• Leaderboard positions are final after match conclusion</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The Company reserves the right to investigate and take action against any suspected fraud or unfair play.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TO THE FULLEST EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>• Loss of data, revenue, or profits</li>
                <li>• Service interruptions or technical errors</li>
                <li>• Third-party actions or content</li>
                <li>• Errors in scoring or leaderboard calculations (except in cases of gross negligence)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The Company's total liability shall not exceed the amount you have paid (if any) in the 12 months preceding 
                the claim. Since XSNAP is free-to-play, this liability is effectively zero.
              </p>
            </section>

            {/* Section 9 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. 
                THE COMPANY DISCLAIMS ALL WARRANTIES INCLUDING:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Warranties of merchantability or fitness for a particular purpose</li>
                <li>• Warranties that the Platform will be uninterrupted or error-free</li>
                <li>• Warranties regarding the accuracy of content or data</li>
                <li>• Warranties that defects will be corrected</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Your use of the Platform is at your own risk. The Company does not guarantee specific results or outcomes.
              </p>
            </section>

            {/* Section 10 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Termination of Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company reserves the right to terminate or suspend your account and access to the Platform at any time, 
                with or without cause, with or without notice. Reasons for termination may include:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Violation of these Terms & Conditions</li>
                <li>• Engagement in fraudulent or illegal activity</li>
                <li>• Harassment or abuse of other users or staff</li>
                <li>• Violation of fair play policies</li>
                <li>• Inactivity for extended periods</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Upon termination, all rights granted to you are immediately revoked, and you must cease all use of the Platform.
              </p>
            </section>

            {/* Section 11 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Privacy & Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of the Platform is also governed by our Privacy Policy. Please review the Privacy Policy to understand 
                our practices regarding the collection and use of your personal information. By using the Platform, you consent 
                to the collection and use of your information as described in the Privacy Policy.
              </p>
            </section>

            {/* Section 12 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Third-Party Links & Content</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Platform may contain links to third-party websites and services. The Company is not responsible for the 
                content, accuracy, or practices of these external sites. Your use of third-party services is governed by their 
                terms and conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Company does not endorse any third-party products or services and is not liable for any transactions or 
                interactions with third parties.
              </p>
            </section>

            {/* Section 13 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Company may modify these Terms & Conditions at any time. Changes will be effective immediately upon posting 
                to the Platform. Your continued use of the Platform following any modifications constitutes your acceptance of 
                the modified terms. We recommend reviewing these terms periodically to stay informed of any changes.
              </p>
            </section>

            {/* Section 14 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Governing Law & Jurisdiction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms & Conditions are governed by and construed in accordance with the laws of India, without regard 
                to its conflict of law provisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You agree to submit to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India for the 
                resolution of any disputes arising out of or relating to these terms or your use of the Platform.
              </p>
            </section>

            {/* Section 15 */}
            <section className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions or need to report a violation, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground ml-4">
                <p><strong>Email:</strong> support@xsnaplive.com</p>
                <p><strong>Company:</strong> XSNAP IMAGING PRIVATE LIMITED</p>
                <p><strong>CIN:</strong> U31909MH2019PTC325365</p>
                <p><strong>Address:</strong> House No. 260, Near Sai Papers, Jambhall, Badalpur, Thane, Maharashtra 421503</p>
              </div>
            </section>

            {/* Important Notice */}
            <section className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Important Notice</h3>
                  <p className="text-sm text-muted-foreground">
                    By accepting these Terms & Conditions, you acknowledge that you have read them carefully and understand 
                    all the terms, conditions, and obligations. If you do not agree with any part of these terms, you must 
                    immediately stop using the Platform.
                  </p>
                </div>
              </div>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
