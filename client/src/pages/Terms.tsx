import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <Card className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using XSNAP Fantasy Cricket, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You must be 18 years or older to use this platform</li>
                <li>You must be a resident of India (excluding restricted states)</li>
                <li>This platform is NOT available in: Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim</li>
                <li>You must provide accurate and complete registration information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Free-to-Play Nature</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                XSNAP Fantasy Cricket is a 100% free-to-play platform:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>No real money deposits or withdrawals</li>
                <li>No monetary prizes or rewards</li>
                <li>Recognition on leaderboards only</li>
                <li>Educational and entertainment purposes only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Users agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Not create multiple accounts</li>
                <li>Not use automated systems or bots</li>
                <li>Not engage in any form of cheating or unfair practices</li>
                <li>Respect other users and maintain appropriate conduct</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality on this platform are owned by XSNAP IMAGING PRIVATE LIMITED 
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                XSNAP Fantasy Cricket is provided "as is" without warranties of any kind. We shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages resulting from your use 
                of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the platform after 
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms & Conditions, please contact us at support@xsnaplive.com
              </p>
            </section>

            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                <strong>Company:</strong> XSNAP IMAGING PRIVATE LIMITED<br />
                <strong>CIN:</strong> U31909MH2019PTC325365<br />
                <strong>Last Updated:</strong> December 2025
              </p>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
