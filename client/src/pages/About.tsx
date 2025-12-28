import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">About XSNAP Fantasy Cricket</h1>
          
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                XSNAP Fantasy Cricket is India's premier free-to-play fantasy cricket platform, 
                dedicated to providing cricket enthusiasts with an educational and entertaining 
                experience without any financial pressure. We believe in promoting cricket knowledge, 
                strategic thinking, and fair play.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Why Free-to-Play?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are backed by investors who believe in fantasy sports as an educational tool. 
                Our platform allows users to learn cricket strategy, understand player performance, 
                and enjoy the game without the stress of real money transactions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>100% free forever - no hidden charges</li>
                <li>No real money deposits or withdrawals</li>
                <li>Focus on learning and entertainment</li>
                <li>Safe and secure platform for all ages 18+</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">Company Name:</strong> XSNAP IMAGING PRIVATE LIMITED</p>
                <p><strong className="text-foreground">CIN:</strong> U31909MH2019PTC325365</p>
                <p><strong className="text-foreground">PAN:</strong> AAACX2946B</p>
                <p><strong className="text-foreground">Head Office:</strong><br />
                  House No. 260, Near Sai Papers, Jambhall, Badalpur,<br />
                  Thane, Maharashtra, India, 421503
                </p>
                <p><strong className="text-foreground">Regional Office:</strong><br />
                  53/35, Ramjas Rd, Block 53, Karol Bagh,<br />
                  New Delhi, Delhi 110005, India
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Fair Play</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparent rules and equal opportunities for all players
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Helping users understand cricket strategy and player performance
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Responsible Gaming</h3>
                  <p className="text-sm text-muted-foreground">
                    Age verification and state compliance for user safety
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Building a vibrant community of cricket enthusiasts
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
