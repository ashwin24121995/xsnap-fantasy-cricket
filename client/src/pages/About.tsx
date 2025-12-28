import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Users, Target, Shield, Lightbulb, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">About XSNAP Fantasy Cricket</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              India's premier free-to-play fantasy cricket platform dedicated to providing cricket enthusiasts 
              with an educational and entertaining experience without any financial pressure or real money involvement.
            </p>
          </div>

          <div className="space-y-8">
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-transparent border-blue-200">
                <div className="flex items-start gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-semibold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  XSNAP Fantasy Cricket is committed to revolutionizing how cricket enthusiasts engage with the sport. 
                  Our mission is to create a safe, transparent, and educational platform where users can:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Learn cricket strategy and player performance analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Build fantasy teams without financial pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Compete fairly with other cricket enthusiasts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>Enjoy pure entertainment and skill-based competition</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-amber-50 to-transparent border-amber-200">
                <div className="flex items-start gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-semibold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We envision a future where fantasy cricket is recognized as a legitimate educational tool that:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Promotes cricket knowledge and strategic thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Engages millions of cricket fans across India</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Maintains highest standards of fairness and compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                    <span>Sets industry benchmarks for responsible gaming</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Why Free-to-Play */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Why 100% Free-to-Play?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                XSNAP Fantasy Cricket is backed by investors who genuinely believe in fantasy sports as an educational tool 
                and entertainment medium. Unlike traditional fantasy cricket platforms, we have made a strategic decision to 
                keep our platform completely free because:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2 text-lg">Financial Accessibility</h3>
                  <p className="text-muted-foreground text-sm">
                    We believe everyone should have access to fantasy cricket regardless of their financial situation. 
                    Our free model eliminates barriers and ensures inclusive participation.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2 text-lg">Focus on Learning</h3>
                  <p className="text-muted-foreground text-sm">
                    Without financial stakes, users can focus purely on learning cricket strategy, understanding player 
                    performance, and developing their analytical skills.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2 text-lg">Stress-Free Entertainment</h3>
                  <p className="text-muted-foreground text-sm">
                    Enjoy the thrill of fantasy cricket without the anxiety of losing money. Pure entertainment and 
                    friendly competition without financial pressure.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2 text-lg">Regulatory Compliance</h3>
                  <p className="text-muted-foreground text-sm">
                    By eliminating real money transactions, we ensure full compliance with all Indian gaming regulations 
                    and state-specific restrictions.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Key Commitment:</strong> We guarantee 100% free access forever with no hidden charges, 
                  no real money deposits or withdrawals, and no premium features that require payment. This is our commitment to making 
                  fantasy cricket accessible to everyone.
                </p>
              </div>
            </Card>

            {/* Company Information */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Legal Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Company Name</p>
                      <p className="font-semibold">XSNAP IMAGING PRIVATE LIMITED</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">CIN (Corporate Identification Number)</p>
                      <p className="font-semibold font-mono">U31909MH2019PTC325365</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">PAN (Permanent Account Number)</p>
                      <p className="font-semibold font-mono">AAACX2946B</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Company Type</p>
                      <p className="font-semibold">Private Limited Company</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Registration Year</p>
                      <p className="font-semibold">2019</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold mb-2">Head Office</p>
                      <p className="text-muted-foreground leading-relaxed">
                        House No. 260, Near Sai Papers, Jambhall, Badalpur,<br />
                        Thane, Maharashtra, India, 421503
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold mb-2">Regional Office</p>
                      <p className="text-muted-foreground leading-relaxed">
                        53/35, Ramjas Rd, Block 53, Karol Bagh,<br />
                        New Delhi, Delhi 110005, India
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold mb-2">Email</p>
                      <p className="font-semibold">support@xsnaplive.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Core Values */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Fair Play & Integrity</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We maintain transparent rules, equal opportunities for all players, and strict anti-fraud measures. 
                    Every player has the same chance to succeed based on their skills and knowledge of cricket.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Education & Learning</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We are committed to helping users understand cricket strategy, player performance analysis, 
                    and the nuances of the game. Learning is at the heart of everything we do.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <Heart className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Responsible Gaming</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Age verification (18+), state compliance, mental health resources, and responsible gaming practices 
                    are fundamental to our platform. We prioritize user safety and wellbeing.
                  </p>
                </div>

                <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <Users className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Community & Inclusion</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We are building a vibrant, inclusive community of cricket enthusiasts from all backgrounds. 
                    Everyone is welcome to participate and enjoy the game.
                  </p>
                </div>
              </div>
            </Card>

            {/* Compliance & Certifications */}
            <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <h2 className="text-2xl font-semibold mb-6">Compliance & Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-600">✓</Badge>
                  <span className="text-sm font-medium">18+ Age Verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-600">✓</Badge>
                  <span className="text-sm font-medium">State Compliance (6 Restricted States)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-600">✓</Badge>
                  <span className="text-sm font-medium">Free-to-Play Model</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-600">✓</Badge>
                  <span className="text-sm font-medium">No Real Money Transactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-600">✓</Badge>
                  <span className="text-sm font-medium">Fair Play Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-600">✓</Badge>
                  <span className="text-sm font-medium">Responsible Gaming</span>
                </div>
              </div>
            </Card>

            {/* Why Choose XSNAP */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Why Choose XSNAP Fantasy Cricket?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-primary min-w-fit">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Completely Free Forever</h3>
                    <p className="text-muted-foreground text-sm">
                      No registration fees, no hidden charges, no premium subscriptions. Play fantasy cricket completely free.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-primary min-w-fit">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">100% Safe & Secure</h3>
                    <p className="text-muted-foreground text-sm">
                      Advanced security measures, data encryption, and strict privacy policies protect your information.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-primary min-w-fit">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Educational Platform</h3>
                    <p className="text-muted-foreground text-sm">
                      Learn cricket strategy, player analysis, and team building without financial pressure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-primary min-w-fit">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Fair Competition</h3>
                    <p className="text-muted-foreground text-sm">
                      Transparent rules, anti-fraud measures, and equal opportunities for all players.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl font-bold text-primary min-w-fit">✓</div>
                  <div>
                    <h3 className="font-semibold mb-1">Fully Compliant</h3>
                    <p className="text-muted-foreground text-sm">
                      Age verification (18+), state restrictions, and full regulatory compliance across India.
                    </p>
                  </div>
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
