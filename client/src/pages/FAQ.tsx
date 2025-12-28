import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">{t("faq.title")}</h1>
            <p className="text-xl text-muted-foreground">{t("faq.subtitle")}</p>
          </div>

          <div className="space-y-6">
            {Object.entries(t("faq.categories", {}, { returnObjects: true })).map(([categoryKey, category]) => (
              <div key={categoryKey}>
                <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((q, idx) => (
                    <AccordionItem key={idx} value={`${categoryKey}-${idx}`}>
                      <AccordionTrigger className="text-left">{q.q}</AccordionTrigger>
                      <AccordionContent>{q.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
