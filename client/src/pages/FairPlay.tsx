import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function FairPlay() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="flex items-center space-x-4 mb-8">
            <Shield className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold">Fair Play Policy</h1>
          </div>
          
          <Card className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to Fair Play</h2>
              <p className="text-muted-foreground leading-relaxed">
                XSNAP Fantasy Cricket is committed to providing a fair, transparent, and enjoyable 
                gaming experience for all users. We believe in skill-based competition with equal 
                opportunities for everyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Creating multiple accounts to gain unfair advantage</li>
                <li>Using automated bots or scripts</li>
                <li>Collusion with other users</li>
                <li>Exploiting bugs or glitches</li>
                <li>Sharing account credentials</li>
                <li>Any form of cheating or manipulation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Transparent Rules</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                All game rules, scoring systems, and player selection criteria are clearly documented:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Consistent scoring across all matches</li>
                <li>Real-time point updates</li>
                <li>Clear player pricing and budget constraints</li>
                <li>Transparent leaderboard calculations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Enforcement</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Violations of fair play policy may result in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Warning and account review</li>
                <li>Temporary suspension</li>
                <li>Permanent account termination</li>
                <li>Removal from leaderboards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Reporting Violations</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you suspect any user of violating our fair play policy, please report it to 
                support@xsnap.in with relevant details. All reports are investigated confidentially.
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
