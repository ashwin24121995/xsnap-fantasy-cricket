import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";

export default function FairPlay() {
  const { t } = useTranslation();
  const sections = t("fairPlay.sections", {}, { returnObjects: true });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">{t("fairPlay.title")}</h1>
          </div>

          <div className="space-y-6">
            {Array.isArray(sections) && sections.map((section, idx) => (
              <Card key={idx} className="p-6">
                <h2 className="text-xl font-bold mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
