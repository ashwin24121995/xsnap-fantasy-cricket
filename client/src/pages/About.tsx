import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, Heart, Shield, Users, Award, TrendingUp, BookOpen } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-6xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <Badge className="mb-4 text-lg px-6 py-2">About XSNAP Fantasy Cricket</Badge>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Revolutionizing Fantasy Cricket
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              A completely free-to-play fantasy cricket platform designed to make cricket strategy accessible, 
              educational, and enjoyable for every cricket enthusiast in India.
            </p>
          </div>

          <div className="space-y-12">
            {/* Our Story */}
            <Card className="p-10 bg-white/80 backdrop-blur">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-primary" />
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  XSNAP Fantasy Cricket was born from a simple observation: fantasy cricket platforms in India had become 
                  increasingly focused on real-money gaming, creating barriers for cricket fans who simply wanted to test 
                  their cricket knowledge and strategic thinking without financial risk.
                </p>
                <p>
                  Founded in 2024 by XSNAP IMAGING PRIVATE LIMITED, we set out to create something different—a platform 
                  where cricket strategy, player analysis, and match prediction skills take center stage, not wallet size. 
                  We believe that the joy of fantasy cricket should be accessible to everyone, from college students learning 
                  the game to seasoned cricket analysts honing their skills.
                </p>
                <p>
                  Today, XSNAP serves as an educational platform where users can build teams, compete on leaderboards, and 
                  improve their understanding of cricket dynamics—all without spending a single rupee. We're proud to be 
                  100% free-to-play, with no hidden charges, no premium tiers, and no pressure to spend money.
                </p>
              </div>
            </Card>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-10 bg-gradient-to-br from-blue-50 to-transparent border-blue-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To democratize fantasy cricket by providing a completely free, transparent, and educational platform 
                  where cricket fans can develop strategic thinking skills, deepen their understanding of the game, and 
                  compete based purely on cricket knowledge—not financial investment.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Make fantasy cricket accessible to all age groups (18+) and economic backgrounds</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Promote cricket education through hands-on team building and strategy development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Foster a healthy, competitive community free from gambling pressures</p>
                  </div>
                </div>
              </Card>

              <Card className="p-10 bg-gradient-to-br from-green-50 to-transparent border-green-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-green-600/10 rounded-xl">
                    <Lightbulb className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To become India's most trusted educational fantasy cricket platform, recognized for transparency, 
                  fairness, and commitment to responsible gaming. We envision a future where fantasy cricket is seen 
                  as a skill-building tool rather than a gambling avenue.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Build the largest free-to-play fantasy cricket community in India</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Partner with cricket academies and educational institutions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Set new standards for ethical fantasy sports platforms</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Why Free to Play */}
            <Card className="p-10 bg-gradient-to-br from-purple-50 to-transparent border-purple-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-purple-600/10 rounded-xl">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold">Why 100% Free-to-Play?</h2>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We made a conscious decision to keep XSNAP completely free because we believe fantasy cricket should be 
                  about skill, strategy, and passion for the game—not about how much money you can afford to risk. Here's 
                  why being free-to-play matters:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-6 bg-white rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-xl mb-3 text-foreground">No Financial Pressure</h3>
                    <p className="text-base">
                      Users can experiment with different strategies, learn from mistakes, and improve their skills without 
                      worrying about losing money. This creates a stress-free learning environment.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-xl mb-3 text-foreground">Equal Opportunity</h3>
                    <p className="text-base">
                      Whether you're a student, working professional, or retiree, everyone has the same access to features, 
                      matches, and competitions. Success depends only on cricket knowledge.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-xl mb-3 text-foreground">Educational Focus</h3>
                    <p className="text-base">
                      Without money at stake, users focus on learning cricket strategy, understanding player form, pitch 
                      conditions, and match dynamics—the true essence of fantasy cricket.
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-xl mb-3 text-foreground">Responsible Gaming</h3>
                    <p className="text-base">
                      By eliminating real money, we remove the risk of gambling addiction and financial harm, promoting 
                      healthy engagement with fantasy sports.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Core Values */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Transparency</h3>
                  <p className="text-muted-foreground">
                    All rules, scoring systems, and data sources are publicly available. No hidden algorithms or secret formulas.
                  </p>
                </Card>

                <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Fairness</h3>
                  <p className="text-muted-foreground">
                    Every player has equal access to information, features, and opportunities. Success is based purely on skill.
                  </p>
                </Card>

                <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Education</h3>
                  <p className="text-muted-foreground">
                    We promote learning about cricket strategy, player analysis, and match prediction through hands-on experience.
                  </p>
                </Card>

                <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    We foster a supportive community where cricket fans can connect, compete, and learn from each other.
                  </p>
                </Card>
              </div>
            </div>

            {/* Company Information */}
            <Card className="p-10 bg-gradient-to-br from-gray-50 to-transparent">
              <h2 className="text-3xl font-bold mb-8">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Legal Entity</h3>
                    <p className="text-muted-foreground">XSNAP IMAGING PRIVATE LIMITED</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Corporate Identification Number (CIN)</h3>
                    <p className="text-muted-foreground">U31909MH2019PTC325365</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Permanent Account Number (PAN)</h3>
                    <p className="text-muted-foreground">AAACX2946B</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Founded</h3>
                    <p className="text-muted-foreground">2019 (Fantasy Cricket Platform launched 2024)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Head Office</h3>
                    <p className="text-muted-foreground">
                      House No. 260, Near Sai Papers<br />
                      Jambhall, Badalpur<br />
                      Thane, Maharashtra 421503<br />
                      India
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contact</h3>
                    <p className="text-muted-foreground">
                      Email: support@xsnaplive.com<br />
                      Website: https://xsnaplive.com
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Compliance & Legal */}
            <Card className="p-10 bg-gradient-to-br from-orange-50 to-transparent border-orange-200">
              <h2 className="text-3xl font-bold mb-6">Compliance & Legal Standards</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  XSNAP Fantasy Cricket operates in full compliance with Indian laws and regulations governing skill-based 
                  gaming platforms. We maintain the highest standards of legal and ethical operation:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">100% Free-to-Play</h3>
                      <p className="text-base">No real money involved at any stage. Completely free platform with no hidden charges.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Age Verification</h3>
                      <p className="text-base">Strict 18+ age verification during registration to comply with legal requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">State Restrictions</h3>
                      <p className="text-base">Not available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Data Protection</h3>
                      <p className="text-base">Industry-standard encryption and security measures to protect user data.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Fair Play Certified</h3>
                      <p className="text-base">Anti-fraud measures and transparent scoring systems ensure fair competition.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Responsible Gaming</h3>
                      <p className="text-base">Promoting healthy engagement and providing resources for responsible platform use.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact CTA */}
            <Card className="p-10 text-center bg-gradient-to-r from-primary/10 to-accent/10">
              <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                We're here to help! Reach out to our support team for any queries or feedback.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
