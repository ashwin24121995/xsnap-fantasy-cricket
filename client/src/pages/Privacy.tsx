import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <Card className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We collect the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Name and email address</li>
                <li>Age and state of residence</li>
                <li>Team selections and gameplay data</li>
                <li>Device and usage information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide and maintain our service</li>
                <li>To verify age and state eligibility</li>
                <li>To calculate scores and maintain leaderboards</li>
                <li>To communicate important updates</li>
                <li>To improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information. 
                Passwords are encrypted using industry-standard methods. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share aggregated, non-personally identifiable data for analytics purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies to maintain your session and improve user experience. 
                You can disable cookies in your browser settings, but this may affect functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service is not intended for users under 18 years of age. We do not knowingly 
                collect personal information from children under 18.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify users of 
                any material changes via email or platform notification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions or to exercise your rights, contact us at support@xsnaplive.com
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
