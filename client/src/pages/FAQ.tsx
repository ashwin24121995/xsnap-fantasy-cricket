import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Is XSNAP Fantasy Cricket really free?",
      answer: "Yes! Our platform is 100% free to play. There are no hidden charges, no deposits, and no real money involved. We are backed by investors who believe in fantasy sports as an educational tool."
    },
    {
      question: "Do I need to be 18+ to play?",
      answer: "Yes, you must be 18 years or older to register and play on our platform. Age verification is mandatory during registration."
    },
    {
      question: "Which states are restricted?",
      answer: "Due to government compliance, our platform is not available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim."
    },
    {
      question: "How do I create a team?",
      answer: "Select a match, choose 11 players within the 100 credit budget, and designate a captain and vice-captain. Your team must include batsmen, bowlers, all-rounders, and a wicket-keeper."
    },
    {
      question: "How are points calculated?",
      answer: "Points are awarded based on real match performance: runs scored, wickets taken, catches, boundaries, and more. Captain gets 2x points and vice-captain gets 1.5x points."
    },
    {
      question: "Can I win real money?",
      answer: "No. This is a free-to-play educational platform with no real money involved. Winners are recognized on the leaderboard but do not receive monetary rewards."
    },
    {
      question: "Can I edit my team after creating it?",
      answer: "Yes, you can edit your team until the match starts. Once the match begins, your team is locked."
    },
    {
      question: "How many teams can I create?",
      answer: "You can create multiple teams for different matches. There's no limit to the number of teams you can have."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}
