import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Search } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "What is XSNAP Fantasy Cricket?",
          a: "XSNAP Fantasy Cricket is a completely free-to-play online platform where cricket fans can create virtual teams of real cricket players and earn points based on their actual performance in live matches. Unlike other fantasy platforms, we don't involve any real money—it's purely for education, entertainment, and testing your cricket knowledge."
        },
        {
          q: "Is XSNAP really 100% free? Are there any hidden charges?",
          a: "Yes, XSNAP is completely free with absolutely no hidden charges. There are no premium memberships, no entry fees, no in-app purchases, and no paid features. You can create unlimited teams, participate in all matches, and compete on leaderboards without spending a single rupee. We're committed to keeping fantasy cricket accessible to everyone."
        },
        {
          q: "How do I create an account?",
          a: "Creating an account is simple: (1) Click 'Register' or 'Get Started' on the homepage, (2) Enter your email address and create a strong password, (3) Provide your name, age (must be 18+), and select your state, (4) Verify your email address through the link sent to your inbox, (5) Complete your profile and start playing! The entire process takes less than 2 minutes."
        },
        {
          q: "What are the age requirements?",
          a: "You must be at least 18 years old to use XSNAP Fantasy Cricket. This is a legal requirement to ensure responsible platform usage. During registration, you'll be asked to confirm your age. We take age verification seriously and may request additional verification if needed."
        },
        {
          q: "Which states in India can access XSNAP?",
          a: "XSNAP is available in most Indian states except Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. These restrictions are in place to comply with state-specific regulations regarding skill-based gaming platforms. If you're located in one of these states, you won't be able to register or access the platform."
        },
        {
          q: "Do I need to download an app?",
          a: "No, XSNAP is a web-based platform that works directly in your browser on any device (desktop, laptop, tablet, or smartphone). Simply visit xsnaplive.com and start playing. There's no need to download or install any app, which saves storage space on your device and ensures you always have the latest version."
        }
      ]
    },
    {
      title: "Team Building",
      questions: [
        {
          q: "How many players can I select in my team?",
          a: "You must select exactly 11 players to form your fantasy cricket team. This mirrors a real cricket team composition. You cannot have more or fewer than 11 players."
        },
        {
          q: "What is the credit budget system?",
          a: "Each fantasy team has a budget of 100 credits. Every player has a credit value (ranging typically from 7 to 11 credits) based on their recent performance, reputation, and role. You must build your 11-player team within this 100-credit budget. This creates strategic depth—you can't simply pick all the star players; you need to balance expensive stars with budget-friendly performers."
        },
        {
          q: "How are player credit values determined?",
          a: "Player credit values are calculated based on multiple factors: recent match performance (last 5-10 matches), batting/bowling averages, strike rates, economy rates, consistency, international reputation, and current form. Values are updated regularly to reflect player performance trends. Star players in excellent form will have higher credit values (10-11 credits), while emerging or inconsistent players will have lower values (7-8 credits)."
        },
        {
          q: "What is the team composition rule?",
          a: "You must select: (1) 1-4 Wicket-Keepers, (2) 3-6 Batsmen, (3) 1-4 All-Rounders, (4) 3-6 Bowlers. Additionally, you can select a maximum of 7 players from a single team—this ensures you include players from both competing teams and prevents over-reliance on one team's performance."
        },
        {
          q: "Can I create multiple teams for the same match?",
          a: "Yes! You can create multiple fantasy teams for the same match with different player combinations and strategies. This allows you to experiment with different approaches—for example, one team focused on batsmen and another on bowlers. Each team competes independently on the leaderboard."
        },
        {
          q: "When does team editing lock?",
          a: "Team editing locks at the scheduled match start time. Once the match begins, you cannot make any changes to your team, including player selections or captain/vice-captain choices. Make sure to finalize your team before the match starts. We recommend completing your team at least 30 minutes before the match to avoid last-minute issues."
        },
        {
          q: "What happens if a player in my team doesn't play the match?",
          a: "If a player in your fantasy team doesn't play the actual match (due to injury, team selection, or other reasons), they will score 0 points. This is why it's important to check team news and probable playing XI before finalizing your team. Always monitor official team announcements close to match time."
        },
        {
          q: "Can I edit my team after creating it but before the match starts?",
          a: "Yes, you can edit your team as many times as you want before the match starts. You can change player selections, adjust your captain and vice-captain, and modify your strategy. However, once the match begins, the team is locked and no further changes are possible."
        }
      ]
    },
    {
      title: "Captain & Vice-Captain",
      questions: [
        {
          q: "What is the role of Captain and Vice-Captain?",
          a: "The Captain and Vice-Captain are special designations that multiply the points earned by those players. Your Captain earns 2x points (double) for all their actions, while your Vice-Captain earns 1.5x points. This strategic choice can significantly impact your total score. For example, if your Captain scores 100 base points, they'll actually contribute 200 points to your team total."
        },
        {
          q: "How should I choose my Captain?",
          a: "Choose your Captain based on: (1) Recent form and consistency, (2) Match conditions (pitch, weather, venue), (3) Head-to-head record against the opposition, (4) Player's role in the team (opening batsmen and all-rounders are often good choices), (5) Historical performance at the venue. All-rounders can be excellent captain choices because they have multiple opportunities to score points through both batting and bowling."
        },
        {
          q: "Can I change my Captain after the match starts?",
          a: "No, you cannot change your Captain or Vice-Captain once the match starts. This decision is final when the match begins, so choose carefully based on your analysis and research."
        },
        {
          q: "Should I pick Captain and Vice-Captain from different teams?",
          a: "This is a strategic decision. Picking them from different teams diversifies your risk—if one team performs poorly, you still have a chance with the other. However, if you're confident one team will dominate, picking both from that team can maximize points. There's no single correct answer; it depends on your match analysis."
        },
        {
          q: "What if my Captain doesn't play the match?",
          a: "If your Captain doesn't play the match, they score 0 points, and the 2x multiplier is wasted. This is a significant loss, so always verify the playing XI before the match starts. Check official team announcements and cricket news sources for the latest updates."
        }
      ]
    },
    {
      title: "Scoring & Points",
      questions: [
        {
          q: "How is scoring calculated?",
          a: "Points are calculated based on real match performance across multiple categories: Batting (runs, boundaries, sixes, centuries, half-centuries), Bowling (wickets, maiden overs, economy rate), Fielding (catches, run-outs, stumpings), and Performance bonuses (strike rate, economy rate). Each action has a specific point value. For example, every run = +1 point, every wicket = +25 points, every catch = +8 points."
        },
        {
          q: "What are the main ways to earn points?",
          a: "The main point-earning actions are: (1) Batting: Runs (+1 per run), Boundaries (+1 bonus), Sixes (+2 bonus), Half-century (+8), Century (+16), (2) Bowling: Wickets (+25 each), Maiden overs (+12), 4-wicket haul (+8 bonus), 5-wicket haul (+16 bonus), (3) Fielding: Catches (+8), Stumpings/Run-outs (+12), (4) Bonuses: Strike rate bonuses (for batsmen), Economy rate bonuses (for bowlers)."
        },
        {
          q: "Are there negative points?",
          a: "Yes, certain poor performances result in negative points: (1) Duck (batsman dismissed for 0 runs): -2 points, (2) Poor economy rate (bowlers conceding 10+ runs per over): -2 to -6 points, (3) Poor strike rate (batsmen scoring below 50 runs per 100 balls): -2 to -6 points. These penalties encourage strategic player selection and reward good cricket knowledge."
        },
        {
          q: "How do strike rate and economy rate bonuses work?",
          a: "Strike Rate (for batsmen, minimum 10 balls faced): Above 170 = +6 points, 150-170 = +4 points, 130-150 = +2 points, 60-70 = -2 points, 50-60 = -4 points, Below 50 = -6 points. Economy Rate (for bowlers, minimum 2 overs): Below 5 = +6 points, 5-6 = +4 points, 6-7 = +2 points, 10-11 = -2 points, 11-12 = -4 points, Above 12 = -6 points."
        },
        {
          q: "When are points updated?",
          a: "Points are updated in real-time as the match progresses. You can track your team's performance live during the match. Final points are calculated and displayed on the leaderboard immediately after the match concludes."
        },
        {
          q: "Can I see a detailed breakdown of how my points were calculated?",
          a: "Yes, after the match, you can view a detailed breakdown showing each player's actions and corresponding points. This transparency helps you understand what worked and what didn't, allowing you to improve your strategy for future matches."
        }
      ]
    },
    {
      title: "Matches & Formats",
      questions: [
        {
          q: "What cricket formats are available on XSNAP?",
          a: "XSNAP supports all major cricket formats: T20 (Twenty20), ODI (One Day International), and Test matches. You can create fantasy teams for international matches, domestic leagues (like IPL, Big Bash League, SA20, ILT20), and other major cricket tournaments."
        },
        {
          q: "How do I find upcoming matches?",
          a: "Navigate to the 'Matches' page from the main menu. You'll see a list of all upcoming matches organized by date. Each match card shows the teams, format, venue, and scheduled time. You can filter by format (T20, ODI, Test) and view match details before creating your team."
        },
        {
          q: "Can I create teams for matches that have already started?",
          a: "No, you cannot create or edit teams once a match has started. Team creation and editing locks at the scheduled match start time. This ensures fairness and prevents users from making changes based on early match events."
        },
        {
          q: "What if a match is cancelled or postponed?",
          a: "If a match is cancelled, postponed, or abandoned before completion, all fantasy teams for that match are voided and no points are awarded. If a match is rescheduled, you'll have the opportunity to create a new team for the rescheduled match date."
        },
        {
          q: "Are points calculated differently for different formats?",
          a: "The core scoring system remains the same across all formats, but the strategic approach differs. T20 matches favor aggressive batsmen and wicket-taking bowlers. ODI matches reward consistency and all-rounders. Test matches value patience, high scores, and five-wicket hauls. Adjust your team selection based on the format."
        }
      ]
    },
    {
      title: "Leaderboard & Rankings",
      questions: [
        {
          q: "How does the leaderboard work?",
          a: "After each match, all users' fantasy teams are ranked based on total points scored. The leaderboard displays rankings from highest to lowest points. You can see your rank, points, and compare your performance with other users. Leaderboards are match-specific—each match has its own leaderboard."
        },
        {
          q: "Are there any prizes or rewards?",
          a: "No, XSNAP is a completely free-to-play educational platform with no prizes, rewards, or real money involved. The satisfaction comes from competing on the leaderboard, improving your cricket knowledge, and testing your strategic skills against other cricket fans."
        },
        {
          q: "Can I see other users' teams?",
          a: "After the match concludes, you can view the teams of top performers on the leaderboard. This allows you to learn from successful strategies and understand what made their teams perform well. However, you cannot see teams before or during the match to ensure fair competition."
        },
        {
          q: "Is there an overall ranking across all matches?",
          a: "Currently, rankings are match-specific. Each match has its own leaderboard. We may introduce overall rankings and seasonal leaderboards in the future based on user feedback."
        }
      ]
    },
    {
      title: "Account & Profile",
      questions: [
        {
          q: "How do I reset my password?",
          a: "If you've forgotten your password: (1) Click 'Login' and then 'Forgot Password', (2) Enter your registered email address, (3) Check your email for a password reset link, (4) Click the link and create a new password, (5) Log in with your new password. The reset link is valid for 1 hour."
        },
        {
          q: "Can I change my email address?",
          a: "Yes, you can update your email address in your Profile settings. Navigate to Profile → Edit Profile → Change Email. You'll need to verify the new email address before the change takes effect."
        },
        {
          q: "Can I change my age or state after registration?",
          a: "No, age and state cannot be changed after registration because they're used for legal compliance and eligibility verification. If you entered incorrect information, please contact support@xsnaplive.com for assistance."
        },
        {
          q: "How do I delete my account?",
          a: "To delete your account, go to Profile → Account Settings → Delete Account. This action is permanent and cannot be undone. All your teams, match history, and profile data will be permanently deleted."
        },
        {
          q: "Is my personal information secure?",
          a: "Yes, we take data security seriously. All personal information is encrypted and stored securely. We use industry-standard security measures to protect your data. We never share your personal information with third parties without your consent. Read our Privacy Policy for complete details."
        }
      ]
    },
    {
      title: "Technical & Support",
      questions: [
        {
          q: "Which browsers are supported?",
          a: "XSNAP works on all modern browsers including Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, and Opera. We recommend using the latest version of your browser for the best experience. The platform is also mobile-responsive and works on smartphones and tablets."
        },
        {
          q: "Why is the website loading slowly?",
          a: "Slow loading can be caused by: (1) Poor internet connection, (2) Browser cache issues (try clearing cache), (3) Using an outdated browser (update to the latest version), (4) High traffic during popular matches. If the issue persists, try using a different browser or device."
        },
        {
          q: "I found a bug or error. How do I report it?",
          a: "We appreciate bug reports! Please email us at support@xsnaplive.com with: (1) Description of the bug, (2) Steps to reproduce it, (3) Screenshots if possible, (4) Your browser and device information. We'll investigate and fix the issue as soon as possible."
        },
        {
          q: "How do I contact support?",
          a: "You can reach our support team at support@xsnaplive.com or through the Contact Us page on our website. We typically respond within 24-48 hours. For urgent issues, please mention 'URGENT' in the subject line."
        },
        {
          q: "Is there a mobile app?",
          a: "Currently, XSNAP is a web-based platform accessible through any browser. We may develop a dedicated mobile app in the future based on user demand. The web version is fully mobile-responsive and works seamlessly on smartphones."
        }
      ]
    },
    {
      title: "Legal & Compliance",
      questions: [
        {
          q: "Is fantasy cricket legal in India?",
          a: "Yes, skill-based fantasy sports are legal in India as per the Supreme Court ruling. Fantasy cricket is considered a game of skill, not chance. However, some states have specific regulations, which is why XSNAP is not available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim."
        },
        {
          q: "Why is XSNAP not available in certain states?",
          a: "Some Indian states have enacted laws restricting or prohibiting online gaming platforms, even skill-based ones. To comply with these state-specific regulations, XSNAP is not available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. We respect and adhere to all local laws."
        },
        {
          q: "Is XSNAP a gambling platform?",
          a: "No, XSNAP is not a gambling platform. We are a 100% free-to-play educational platform with no real money involved. There are no entry fees, no prizes, and no monetary transactions. It's purely for entertainment and skill development."
        },
        {
          q: "What data do you collect and how is it used?",
          a: "We collect basic information necessary for account creation (name, email, age, state) and usage data to improve the platform. We never sell your data to third parties. All data is encrypted and stored securely. Please read our Privacy Policy for complete details on data collection, usage, and protection."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      searchQuery === "" ||
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <Badge className="mb-4 text-lg px-6 py-2">Help Center</Badge>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Find answers to common questions about XSNAP Fantasy Cricket. Can't find what you're looking for? 
              Contact our support team.
            </p>

            {/* Search Box */}
            <Card className="p-4 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for questions..."
                  className="w-full pl-12 pr-4 py-3 text-lg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </Card>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, idx) => (
                <Card key={idx} className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <HelpCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((q, qIdx) => (
                      <AccordionItem key={qIdx} value={`${idx}-${qIdx}`}>
                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                          {q.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-4">
                          {q.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              ))
            ) : (
              <Card className="p-12 text-center">
                <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try different keywords or browse all categories above.
                </p>
              </Card>
            )}
          </div>

          {/* Still Have Questions */}
          <Card className="mt-12 p-10 text-center bg-gradient-to-r from-primary/10 to-accent/10">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
