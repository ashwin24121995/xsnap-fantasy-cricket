import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, AlertTriangle } from "lucide-react";

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12">
            <Badge className="mb-4 text-lg px-6 py-2">Legal</Badge>
            <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last Updated: January 3, 2026
            </p>
            <Card className="mt-6 p-6 bg-yellow-50 border-yellow-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  Please read these Terms and Conditions carefully before using XSNAP Fantasy Cricket. 
                  By accessing or using our platform, you agree to be bound by these terms. If you disagree 
                  with any part of these terms, you may not access the platform.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            {/* 1. Acceptance of Terms */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  1
                </div>
                <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  By creating an account, accessing, or using XSNAP Fantasy Cricket (the "Platform"), you acknowledge 
                  that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our 
                  Privacy Policy, Fair Play Policy, and Responsible Gaming guidelines. These terms constitute a legally 
                  binding agreement between you and XSNAP IMAGING PRIVATE LIMITED ("we," "us," or "our").
                </p>
                <p>
                  If you do not agree to these terms, you must immediately discontinue use of the Platform. We reserve 
                  the right to modify these terms at any time. Continued use of the Platform after changes are posted 
                  constitutes your acceptance of the modified terms.
                </p>
              </div>
            </Card>

            {/* 2. Eligibility */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  2
                </div>
                <h2 className="text-2xl font-bold">Eligibility Requirements</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  To use XSNAP Fantasy Cricket, you must meet the following eligibility criteria:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                  <p><strong className="text-foreground">Age Requirement:</strong> You must be at least 18 years of age. By registering, you represent and warrant that you are 18 years or older.</p>
                  <p><strong className="text-foreground">Geographic Restriction:</strong> You must not be a resident of Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, or Sikkim. The Platform is not available in these states due to local regulations.</p>
                  <p><strong className="text-foreground">Legal Capacity:</strong> You must have the legal capacity to enter into binding contracts under applicable law.</p>
                  <p><strong className="text-foreground">Account Authenticity:</strong> You must provide accurate, current, and complete information during registration and maintain the accuracy of such information.</p>
                </div>
                <p>
                  We reserve the right to verify your eligibility at any time. Failure to meet these requirements may 
                  result in immediate account suspension or termination without notice.
                </p>
              </div>
            </Card>

            {/* 3. Account Registration */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  3
                </div>
                <h2 className="text-2xl font-bold">Account Registration and Security</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When you create an account on XSNAP, you agree to:
                </p>
                <div className="space-y-3">
                  <p><strong className="text-foreground">Provide Accurate Information:</strong> Supply truthful, accurate, current, and complete information about yourself as prompted by the registration form.</p>
                  <p><strong className="text-foreground">Maintain Account Security:</strong> Keep your password confidential and secure. You are responsible for all activities that occur under your account.</p>
                  <p><strong className="text-foreground">Single Account Policy:</strong> Maintain only one account. Creating multiple accounts is strictly prohibited and may result in permanent ban.</p>
                  <p><strong className="text-foreground">Notify of Unauthorized Access:</strong> Immediately notify us of any unauthorized use of your account or any other breach of security.</p>
                  <p><strong className="text-foreground">Account Non-Transferability:</strong> Your account is personal to you and may not be transferred, sold, or assigned to any other person or entity.</p>
                </div>
                <p>
                  We reserve the right to refuse registration, suspend, or terminate accounts at our sole discretion, 
                  particularly if we suspect fraudulent activity, violation of these terms, or misuse of the Platform.
                </p>
              </div>
            </Card>

            {/* 4. Platform Usage */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  4
                </div>
                <h2 className="text-2xl font-bold">Platform Usage and Conduct</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  XSNAP Fantasy Cricket is a free-to-play, skill-based fantasy sports platform designed for educational 
                  and entertainment purposes. When using the Platform, you agree to:
                </p>
                <div className="bg-green-50 p-6 rounded-lg space-y-3 border border-green-200">
                  <p className="font-semibold text-foreground">Permitted Uses:</p>
                  <p>• Create fantasy cricket teams based on real cricket matches</p>
                  <p>• Participate in match-based competitions on the leaderboard</p>
                  <p>• Track your team's performance and improve your cricket knowledge</p>
                  <p>• Access educational content about cricket strategy and fantasy sports</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg space-y-3 border border-red-200 mt-4">
                  <p className="font-semibold text-foreground">Prohibited Activities:</p>
                  <p>• Using automated scripts, bots, or any automated means to access the Platform</p>
                  <p>• Attempting to manipulate, exploit, or circumvent the scoring system</p>
                  <p>• Creating multiple accounts to gain unfair advantages</p>
                  <p>• Sharing or selling account credentials</p>
                  <p>• Engaging in any form of cheating, fraud, or collusion</p>
                  <p>• Reverse engineering, decompiling, or attempting to extract source code</p>
                  <p>• Using the Platform for any illegal or unauthorized purpose</p>
                  <p>• Harassing, threatening, or abusing other users</p>
                  <p>• Posting or transmitting any harmful, offensive, or inappropriate content</p>
                </div>
                <p>
                  Violation of these usage terms may result in immediate account suspension, permanent ban, and potential 
                  legal action.
                </p>
              </div>
            </Card>

            {/* 5. Free-to-Play Nature */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  5
                </div>
                <h2 className="text-2xl font-bold">Free-to-Play and No Monetary Transactions</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  XSNAP Fantasy Cricket is a completely free-to-play platform. You explicitly acknowledge and agree that:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg space-y-3 border border-blue-200">
                  <p><strong className="text-foreground">No Entry Fees:</strong> There are no entry fees, participation fees, or any charges to create teams or compete in matches.</p>
                  <p><strong className="text-foreground">No Prizes or Rewards:</strong> No cash prizes, monetary rewards, or any form of financial compensation is offered for winning or performing well on the Platform.</p>
                  <p><strong className="text-foreground">No Real Money Involved:</strong> The Platform does not involve any real money transactions, deposits, withdrawals, or gambling of any kind.</p>
                  <p><strong className="text-foreground">Educational Purpose:</strong> The Platform is designed purely for educational and entertainment purposes to enhance cricket knowledge and strategic thinking.</p>
                  <p><strong className="text-foreground">No Expectation of Compensation:</strong> You have no expectation of receiving any monetary benefit, prize, or reward from using the Platform.</p>
                </div>
                <p>
                  This Platform is not a gambling or betting platform. It is a skill-based educational tool for cricket 
                  enthusiasts to test and improve their cricket knowledge.
                </p>
              </div>
            </Card>

            {/* 6. Intellectual Property */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  6
                </div>
                <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All content, features, and functionality on the Platform, including but not limited to text, graphics, 
                  logos, icons, images, audio clips, video clips, data compilations, software, and the compilation thereof 
                  (collectively, the "Content"), are the exclusive property of XSNAP IMAGING PRIVATE LIMITED or its content 
                  suppliers and are protected by Indian and international copyright, trademark, patent, trade secret, and 
                  other intellectual property laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the 
                  Platform for personal, non-commercial purposes only. You may not:
                </p>
                <div className="space-y-2">
                  <p>• Reproduce, distribute, modify, create derivative works of, publicly display, or publicly perform any Content</p>
                  <p>• Use any Content for commercial purposes without express written permission</p>
                  <p>• Remove, alter, or obscure any copyright, trademark, or other proprietary notices</p>
                  <p>• Use our trademarks, service marks, or trade names without prior written consent</p>
                </div>
                <p>
                  Cricket match data, player statistics, and related information are sourced from third-party cricket data 
                  providers and are used under appropriate licenses. Player names, team names, and logos are trademarks of 
                  their respective owners.
                </p>
              </div>
            </Card>

            {/* 7. User Content */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  7
                </div>
                <h2 className="text-2xl font-bold">User-Generated Content</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you submit, post, or transmit any content on the Platform (such as team names, profile information, 
                  or feedback), you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to 
                  use, reproduce, modify, adapt, publish, translate, distribute, and display such content in any media.
                </p>
                <p>
                  You represent and warrant that you own or have the necessary rights to any content you submit, and that 
                  such content does not violate any third-party rights or applicable laws. We reserve the right to remove 
                  any content that violates these terms or is otherwise objectionable.
                </p>
              </div>
            </Card>

            {/* 8. Privacy and Data Protection */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  8
                </div>
                <h2 className="text-2xl font-bold">Privacy and Data Protection</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Your use of the Platform is also governed by our Privacy Policy, which explains how we collect, use, 
                  and protect your personal information. By using the Platform, you consent to our collection and use of 
                  personal data as described in the Privacy Policy.
                </p>
                <p>
                  We implement industry-standard security measures to protect your data. However, no method of transmission 
                  over the internet or electronic storage is 100% secure. While we strive to protect your personal information, 
                  we cannot guarantee absolute security.
                </p>
              </div>
            </Card>

            {/* 9. Disclaimer of Warranties */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  9
                </div>
                <h2 className="text-2xl font-bold">Disclaimer of Warranties</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER 
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
                  PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                </p>
                <p>
                  We do not warrant that:
                </p>
                <div className="space-y-2">
                  <p>• The Platform will function uninterrupted, secure, or error-free</p>
                  <p>• Defects will be corrected</p>
                  <p>• The Platform or servers are free of viruses or harmful components</p>
                  <p>• Results obtained from using the Platform will be accurate or reliable</p>
                  <p>• Cricket data, scores, or statistics will be completely accurate or up-to-date</p>
                </div>
                <p>
                  You use the Platform at your own risk. We are not responsible for any errors, omissions, interruptions, 
                  deletions, defects, delays in operation or transmission, or any technical issues.
                </p>
              </div>
            </Card>

            {/* 10. Limitation of Liability */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  10
                </div>
                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL XSNAP IMAGING PRIVATE LIMITED, ITS DIRECTORS, 
                  EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, 
                  OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <div className="space-y-2">
                  <p>• Your access to or use of or inability to access or use the Platform</p>
                  <p>• Any conduct or content of any third party on the Platform</p>
                  <p>• Any content obtained from the Platform</p>
                  <p>• Unauthorized access, use, or alteration of your transmissions or content</p>
                </div>
                <p>
                  Our total liability to you for all claims arising from or related to the Platform shall not exceed 
                  INR 1,000 (One Thousand Indian Rupees).
                </p>
              </div>
            </Card>

            {/* 11. Indemnification */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  11
                </div>
                <h2 className="text-2xl font-bold">Indemnification</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You agree to indemnify, defend, and hold harmless XSNAP IMAGING PRIVATE LIMITED, its officers, directors, 
                  employees, agents, licensors, and suppliers from and against all losses, expenses, damages, costs, claims, 
                  and demands, including reasonable attorneys' fees, arising out of or relating to:
                </p>
                <div className="space-y-2">
                  <p>• Your use or misuse of the Platform</p>
                  <p>• Your violation of these Terms and Conditions</p>
                  <p>• Your violation of any rights of another party</p>
                  <p>• Your violation of any applicable laws or regulations</p>
                </div>
              </div>
            </Card>

            {/* 12. Termination */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  12
                </div>
                <h2 className="text-2xl font-bold">Termination</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We reserve the right to suspend or terminate your account and access to the Platform at any time, with 
                  or without cause, with or without notice, effective immediately. Grounds for termination include, but 
                  are not limited to:
                </p>
                <div className="space-y-2">
                  <p>• Violation of these Terms and Conditions</p>
                  <p>• Fraudulent, abusive, or illegal activity</p>
                  <p>• Requests by law enforcement or government agencies</p>
                  <p>• Discontinuation or material modification of the Platform</p>
                  <p>• Unexpected technical or security issues</p>
                </div>
                <p>
                  Upon termination, your right to use the Platform will immediately cease. All provisions of these Terms 
                  that by their nature should survive termination shall survive, including ownership provisions, warranty 
                  disclaimers, indemnity, and limitations of liability.
                </p>
              </div>
            </Card>

            {/* 13. Governing Law */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  13
                </div>
                <h2 className="text-2xl font-bold">Governing Law and Jurisdiction</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India, 
                  without regard to its conflict of law provisions. Any disputes arising out of or related to these terms 
                  or the Platform shall be subject to the exclusive jurisdiction of the courts in Thane, Maharashtra, India.
                </p>
                <p>
                  You agree to submit to the personal and exclusive jurisdiction of the courts located in Thane, Maharashtra, 
                  and waive any jurisdictional, venue, or inconvenient forum objections to such courts.
                </p>
              </div>
            </Card>

            {/* 14. Changes to Terms */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  14
                </div>
                <h2 className="text-2xl font-bold">Changes to Terms and Conditions</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We reserve the right to modify or replace these Terms and Conditions at any time at our sole discretion. 
                  If we make material changes, we will notify you by updating the "Last Updated" date at the top of this 
                  page and, where appropriate, by sending you an email notification.
                </p>
                <p>
                  Your continued use of the Platform after any such changes constitutes your acceptance of the new Terms 
                  and Conditions. It is your responsibility to review these terms periodically for changes.
                </p>
              </div>
            </Card>

            {/* 15. Contact Information */}
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  15
                </div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-white p-6 rounded-lg space-y-2">
                  <p><strong className="text-foreground">Company:</strong> XSNAP IMAGING PRIVATE LIMITED</p>
                  <p><strong className="text-foreground">Email:</strong> support@xsnaplive.com</p>
                  <p><strong className="text-foreground">Address:</strong> House No. 260, Near Sai Papers, Jambhall, Badalpur, Thane, Maharashtra 421503, India</p>
                  <p><strong className="text-foreground">Website:</strong> https://xsnaplive.com</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Acknowledgment */}
          <Card className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Acknowledgment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By using XSNAP Fantasy Cricket, you acknowledge that you have read, understood, and agree to be bound 
                  by these Terms and Conditions. If you do not agree to these terms, please do not use the Platform.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
