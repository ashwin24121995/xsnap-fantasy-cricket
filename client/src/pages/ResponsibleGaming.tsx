import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="flex items-center space-x-4 mb-8">
            <Heart className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold">Responsible Gaming</h1>
          </div>
          
          <Card className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                XSNAP Fantasy Cricket is designed as a free-to-play educational platform. 
                We promote responsible gaming practices and ensure our platform remains a 
                source of entertainment and learning, not addiction or financial stress.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Age Verification</h2>
              <p className="text-muted-foreground leading-relaxed">
                Only users 18 years and older are permitted to use our platform. We verify 
                age during registration to ensure compliance with legal requirements and 
                protect minors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">No Real Money Involved</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Our platform eliminates financial risk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>100% free to play - no deposits required</li>
                <li>No monetary prizes or withdrawals</li>
                <li>Recognition on leaderboards only</li>
                <li>Focus on skill development and entertainment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Healthy Gaming Habits</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Set time limits for platform usage</li>
                <li>Balance gaming with other activities</li>
                <li>Remember it's for entertainment and education</li>
                <li>Don't let gaming interfere with daily responsibilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">State Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                We comply with all government regulations. Our platform is not available in 
                Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim due to state 
                laws regarding fantasy sports.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Support</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have concerns about your gaming habits or need support, please contact 
                us at support@xsnaplive.com. We're here to help ensure your experience remains positive.
              </p>
            </section>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
