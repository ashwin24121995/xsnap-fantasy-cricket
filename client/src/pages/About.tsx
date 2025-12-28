import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Users, Target, Shield, Lightbulb, Heart } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">{t("about.title")}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("about.subtitle")}
            </p>
          </div>

          <div className="space-y-8">
            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-transparent border-blue-200">
                <div className="flex items-start gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-semibold">{t("about.mission.title")}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("about.mission.intro")}
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-green-50 to-transparent border-green-200">
                <div className="flex items-start gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-semibold">{t("about.vision.title")}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.vision.intro")}
                </p>
              </Card>
            </div>

            {/* Why Free to Play */}
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-transparent border-purple-200">
              <div className="flex items-start gap-3 mb-4">
                <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-semibold">{t("about.whyFreeToPlay.title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.whyFreeToPlay.intro")}
              </p>
            </Card>

            {/* Company Information */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">{t("about.company.title")}</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Company Name:</strong> {t("about.company.name")}</p>
                <p><strong>Headquarters:</strong> Mumbai, India</p>
                <p><strong>Focus:</strong> Free-to-play fantasy cricket platform</p>
                <p><strong>Mission:</strong> Making fantasy cricket accessible and educational for all</p>
              </div>
            </Card>

            {/* Core Values */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">{t("about.values.title")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Transparency</h3>
                  <p className="text-sm text-muted-foreground">All rules, scoring, and data are transparent and publicly available.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Fairness</h3>
                  <p className="text-sm text-muted-foreground">Every player has equal opportunity and access to information.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">We promote learning about cricket strategy and player analysis.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Responsibility</h3>
                  <p className="text-sm text-muted-foreground">We prioritize responsible gaming and mental health.</p>
                </Card>
              </div>
            </div>

            {/* Compliance */}
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-transparent border-orange-200">
              <h2 className="text-2xl font-semibold mb-4">{t("about.compliance.title")}</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>✓ 100% Free-to-Play - No real money involved</p>
                <p>✓ Age-Verified - 18+ only for legal compliance</p>
                <p>✓ State-Restricted - Available in allowed states only</p>
                <p>✓ Fair Play Certified - Anti-fraud measures in place</p>
                <p>✓ Data Secure - Encrypted and protected</p>
              </div>
            </Card>

            {/* Why Choose XSNAP */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">{t("about.whyChoose.title")}</h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">100% Free Forever</p>
                    <p className="text-sm text-muted-foreground">No charges, no hidden fees, no real money required</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Educational Value</p>
                    <p className="text-sm text-muted-foreground">Learn cricket strategy, player analysis, and game dynamics</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Fair Competition</p>
                    <p className="text-sm text-muted-foreground">Equal budget, equal information, transparent scoring</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Responsible Gaming</p>
                    <p className="text-sm text-muted-foreground">Mental health support, account controls, no financial risk</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Community</p>
                    <p className="text-sm text-muted-foreground">Connect with cricket enthusiasts and share strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
