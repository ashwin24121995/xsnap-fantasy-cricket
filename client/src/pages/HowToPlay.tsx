import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Zap, AlertCircle } from "lucide-react";

export default function HowToPlay() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">{t("howToPlay.title")}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("howToPlay.subtitle")}
            </p>
          </div>

          <div className="space-y-8">
            {/* Getting Started */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("howToPlay.gettingStarted.title")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5].map((step) => (
                  <Card key={step} className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                          {step}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          {t(`howToPlay.gettingStarted.step${step}.title`)}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t(`howToPlay.gettingStarted.step${step}.desc`)}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Scoring System */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("howToPlay.scoringSystem.title")}</h2>
              <p className="text-muted-foreground mb-6">{t("howToPlay.scoringSystem.intro")}</p>
              
              <Tabs defaultValue="batting" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="batting">Batting</TabsTrigger>
                  <TabsTrigger value="bowling">Bowling</TabsTrigger>
                  <TabsTrigger value="fielding">Fielding</TabsTrigger>
                </TabsList>
                
                <TabsContent value="batting" className="space-y-4">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">{t("howToPlay.scoringSystem.batting.title")}</h3>
                    <div className="space-y-2 text-sm">
                      <p>• {t("howToPlay.scoringSystem.batting.runs")}</p>
                      <p>• {t("howToPlay.scoringSystem.batting.boundary")}</p>
                      <p>• {t("howToPlay.scoringSystem.batting.six")}</p>
                      <p>• {t("howToPlay.scoringSystem.batting.fifty")}</p>
                      <p>• {t("howToPlay.scoringSystem.batting.century")}</p>
                      <p>• {t("howToPlay.scoringSystem.batting.duck")}</p>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="bowling" className="space-y-4">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">{t("howToPlay.scoringSystem.bowling.title")}</h3>
                    <div className="space-y-2 text-sm">
                      <p>• {t("howToPlay.scoringSystem.bowling.wicket")}</p>
                      <p>• {t("howToPlay.scoringSystem.bowling.lbw")}</p>
                      <p>• {t("howToPlay.scoringSystem.bowling.bowled")}</p>
                      <p>• {t("howToPlay.scoringSystem.bowling.caught")}</p>
                      <p>• {t("howToPlay.scoringSystem.bowling.economy")}</p>
                      <p>• {t("howToPlay.scoringSystem.bowling.maiden")}</p>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="fielding" className="space-y-4">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">{t("howToPlay.scoringSystem.fielding.title")}</h3>
                    <div className="space-y-2 text-sm">
                      <p>• {t("howToPlay.scoringSystem.fielding.catch")}</p>
                      <p>• {t("howToPlay.scoringSystem.fielding.runOut")}</p>
                      <p>• {t("howToPlay.scoringSystem.fielding.stumping")}</p>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Player Roles */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("howToPlay.playerRoles.title")}</h2>
              <p className="text-muted-foreground mb-6">{t("howToPlay.playerRoles.intro")}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["batsman", "bowler", "allRounder", "wicketKeeper"].map((role) => (
                  <Card key={role} className="p-6">
                    <h3 className="font-semibold mb-2">{t(`howToPlay.playerRoles.${role}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`howToPlay.playerRoles.${role}.desc`)}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pro Tips */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("howToPlay.proTips.title")}</h2>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5, 6].map((tip) => (
                  <Card key={tip} className="p-4">
                    <div className="flex gap-3">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold">{t(`howToPlay.proTips.tip${tip}.title`)}</h3>
                        <p className="text-sm text-muted-foreground">{t(`howToPlay.proTips.tip${tip}.desc`)}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Important Rules */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("howToPlay.importantRules.title")}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["teamComposition", "creditBudget", "captainSelection", "deadlines", "scoring"].map((rule) => (
                  <Card key={rule} className="p-6">
                    <h3 className="font-semibold mb-3">{t(`howToPlay.importantRules.${rule}.title`)}</h3>
                    <div className="space-y-2 text-sm">
                      {[1, 2, 3, 4, 5].map((i) => {
                        const key = `howToPlay.importantRules.${rule}.rule${i}`;
                        const text = t(key, "");
                        return text ? (
                          <div key={i} className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{text}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Important Notice */}
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Important</h3>
                  <p className="text-sm text-yellow-800">
                    Always check the match deadline before finalizing your team. Once submitted, your team cannot be changed. 
                    Make sure all players are fit and available to play.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
