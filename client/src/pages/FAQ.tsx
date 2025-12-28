import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      icon: "🚀",
      faqs: [
        {
          question: "Is XSNAP Fantasy Cricket really 100% free?",
          answer: "Yes! XSNAP Fantasy Cricket is completely free to play with no hidden charges whatsoever. There are no registration fees, no deposits required, and no real money involved. We are backed by investors who genuinely believe in fantasy sports as an educational and entertainment tool. Every feature on our platform is available to all users at no cost."
        },
        {
          question: "Do I need to be 18+ to play?",
          answer: "Yes, you must be 18 years or older to register and play on our platform. Age verification is mandatory during the registration process. This is a legal requirement to ensure compliance with gaming regulations across India. We take this requirement seriously and verify all users during signup."
        },
        {
          question: "Which states are restricted?",
          answer: "Due to government compliance and state-specific gaming regulations, our platform is not available in the following states: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana. If you are located in any of these states, you will not be able to register or access the platform. This restriction is in place to ensure full compliance with local laws."
        },
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple: (1) Click 'Get Started' on the homepage, (2) Enter your email address, (3) Create a strong password, (4) Verify your age (18+), (5) Select your state of residence, (6) Accept our Terms & Conditions, (7) Verify your email by clicking the link sent to your inbox. Your account will be ready to use immediately after email verification."
        },
        {
          question: "Is my personal information safe?",
          answer: "Yes, your personal information is completely safe with us. We use industry-standard encryption (SSL/TLS) to protect all data transmission. Your passwords are hashed using bcrypt, one of the most secure password hashing algorithms. We follow strict data privacy policies and never share your information with third parties. Read our Privacy Policy for complete details."
        }
      ]
    },
    {
      category: "Gameplay & Teams",
      icon: "🏏",
      faqs: [
        {
          question: "How do I create a fantasy team?",
          answer: "To create a fantasy team: (1) Select a match from the available matches, (2) Browse the player pool for that match, (3) Select 11 players within the credit budget (typically 100 credits), (4) Ensure proper team composition (batsmen, bowlers, all-rounders, wicket-keeper), (5) Choose 1 captain and 1 vice-captain, (6) Review your team and submit before the match deadline. You can edit your team until the match starts."
        },
        {
          question: "What is the credit budget for team creation?",
          answer: "Each match has a credit budget (typically 100 credits) that you must work within when selecting your 11 players. Each player has a credit value based on their experience, recent form, and performance. Star players cost more credits while emerging talents cost fewer credits. You must select exactly 11 players whose combined credit value equals or is less than the budget limit."
        },
        {
          question: "How many players of each type do I need?",
          answer: "Your team must have a balanced composition: (1) Minimum 3 batsmen, maximum 8 batsmen, (2) Minimum 3 bowlers, maximum 8 bowlers, (3) Minimum 1 wicket-keeper, maximum 4 wicket-keepers, (4) All-rounders can count as either batsmen or bowlers. The exact composition depends on the match format and available players, but you must have exactly 11 players total."
        },
        {
          question: "What's the difference between captain and vice-captain?",
          answer: "Your captain and vice-captain earn bonus points during the match: (1) Captain earns 2x points - all points (runs, wickets, catches, etc.) are doubled, (2) Vice-captain earns 1.5x points - all points are multiplied by 1.5, (3) Other players earn 1x points (normal points). Choosing the right captain and vice-captain is crucial for maximizing your team's score."
        },
        {
          question: "Can I edit my team after creating it?",
          answer: "Yes, you can edit your team at any time until the match starts. Once the match begins, your team is locked and cannot be changed. You can change players, captain, vice-captain, or any other aspect of your team as long as it's before the match deadline. Always double-check your team before the match starts."
        },
        {
          question: "How many teams can I create?",
          answer: "You can create multiple teams for different matches. There is no limit to the number of teams you can have. Each team is independent and competes separately on the leaderboard. This allows you to experiment with different strategies and player combinations."
        },
        {
          question: "What happens if a player doesn't play in the match?",
          answer: "If a selected player doesn't play in the match (due to injury, illness, or team decision), they will score 0 points. This is why it's important to stay updated on team news and player availability before the match starts. Always have backup options in mind in case of last-minute changes."
        },
        {
          question: "Can I create a team with players from both teams?",
          answer: "Yes, absolutely! You can select players from both the teams playing in the match. In fact, this is encouraged as it allows you to build a balanced team based on form and matchup. There's no restriction on selecting players from one team or the other."
        }
      ]
    },
    {
      category: "Scoring System",
      icon: "📊",
      faqs: [
        {
          question: "How are points calculated?",
          answer: "Points are awarded based on real player performances during the match. Batting points: 1 point per run, +1 for boundaries, +2 for sixes, +8 for half-centuries, +16 for centuries, -2 for wickets, -5 for ducks. Bowling points: +25 for wickets, +8 for maiden overs, +1 for dot balls, +16/24/32 for 3/4/5 wicket hauls, -1 per run conceded. Fielding points: +8 for catches, +12 for stumpings/run-outs, +4 for direct hits."
        },
        {
          question: "What is a dot ball and how many points does it give?",
          answer: "A dot ball is a ball bowled where no runs are scored - the batter doesn't hit the ball or hits it but doesn't cross the crease. Bowlers earn +1 point for each dot ball bowled. This encourages defensive bowling and rewards bowlers who can restrict the opposition's scoring. Dot balls are crucial in building bowling figures."
        },
        {
          question: "How much do boundaries and sixes give?",
          answer: "Boundaries (4 runs) give: 4 points for the runs + 1 bonus point = 5 points total. Sixes give: 6 points for the runs + 2 bonus points = 8 points total. These bonus points reward aggressive batting and are crucial for accumulating high scores. A player hitting multiple sixes can significantly boost their team's total."
        },
        {
          question: "What are milestone bonuses?",
          answer: "Milestone bonuses are awarded when batsmen reach significant scoring milestones: (1) Half-century (50 runs): +8 bonus points, (2) Century (100 runs): +16 bonus points. These bonuses reward consistent batting and are in addition to the points earned for individual runs. A century-maker can earn 100+ points from a single innings."
        },
        {
          question: "How many points do bowlers get for wickets?",
          answer: "Bowlers earn +25 points for each wicket taken. Additionally, they get bonus points for multiple wickets in an innings: (1) 3 wickets: +16 bonus points, (2) 4 wickets: +24 bonus points, (3) 5 wickets: +32 bonus points. A bowler taking 5 wickets can earn 125+ points (25×5 + 32 bonus)."
        },
        {
          question: "What is a maiden over?",
          answer: "A maiden over is an over (6 balls) where no runs are scored by the batting team. Bowlers earn +8 bonus points for bowling a maiden over. Maiden overs are valuable in cricket as they restrict the opposition's scoring. Multiple maiden overs in a spell indicate excellent bowling performance."
        },
        {
          question: "How are fielding points awarded?",
          answer: "Fielding points are awarded for: (1) Catches: +8 points per catch, (2) Stumpings (wicket-keeper): +12 points, (3) Run-outs: +12 points, (4) Direct hits: +4 bonus points. Fielders can accumulate significant points through multiple catches or stumpings during a match."
        },
        {
          question: "What happens if a batsman gets out?",
          answer: "When a batsman gets out, they lose -2 points. Additionally, if they score 0 runs (a duck), they lose an additional -5 points for a total of -7 points. This penalty encourages selecting batsmen in good form and discourages picking out-of-form players."
        },
        {
          question: "How do captain and vice-captain multipliers work?",
          answer: "Captain and vice-captain earn bonus multipliers on ALL their points: (1) Captain: 2x multiplier - all points are doubled, (2) Vice-captain: 1.5x multiplier - all points are multiplied by 1.5. For example, if your captain scores 50 runs (50 points), they earn 100 points instead. This makes captain selection crucial."
        }
      ]
    },
    {
      category: "Leaderboard & Competition",
      icon: "🏆",
      faqs: [
        {
          question: "How does the leaderboard work?",
          answer: "The leaderboard ranks all players based on their team's total points in each match. After a match ends, teams are ranked from highest to lowest score. You can see your rank, your team's total points, and how you compare to other players. The leaderboard is updated in real-time as the match progresses."
        },
        {
          question: "Can I win real money or prizes?",
          answer: "No. XSNAP Fantasy Cricket is a free-to-play educational platform with no real money involved. Winners are recognized on the leaderboard and receive recognition within the community, but there are no monetary rewards or prizes. This ensures the platform remains free and compliant with regulations."
        },
        {
          question: "How are ties handled on the leaderboard?",
          answer: "If two teams have the same total points, they are ranked based on secondary criteria such as: (1) Head-to-head comparison, (2) Total points in previous matches, (3) Time of submission. The exact tie-breaking rules are detailed in our Fair Play Policy."
        },
        {
          question: "Is the leaderboard fair and transparent?",
          answer: "Yes, absolutely. Our leaderboard is completely fair and transparent. All scoring is automated based on real match data, and we have strict anti-fraud measures in place. We monitor for suspicious activity and maintain the integrity of the competition. Every player has an equal chance to succeed based on their skills and knowledge."
        },
        {
          question: "Can I see detailed statistics about my performance?",
          answer: "Yes, after each match, you can view detailed statistics about your team's performance including: (1) Individual player scores, (2) Points breakdown by category (batting, bowling, fielding), (3) Captain and vice-captain contributions, (4) Comparison with other teams, (5) Historical performance trends."
        }
      ]
    },
    {
      category: "Account & Security",
      icon: "🔒",
      faqs: [
        {
          question: "How do I reset my password?",
          answer: "To reset your password: (1) Click 'Forgot Password' on the login page, (2) Enter your registered email address, (3) Check your email for a password reset link, (4) Click the link and create a new password, (5) Use your new password to login. The reset link expires in 24 hours for security."
        },
        {
          question: "What should I do if I forget my email?",
          answer: "If you forget the email associated with your account, please contact our support team at support@xsnaplive.com with details like your username or any other identifying information. Our team will help you recover your account. Always keep your email address updated in your profile."
        },
        {
          question: "Can I change my email address?",
          answer: "Yes, you can change your email address in your account settings. Go to Profile > Account Settings > Change Email, enter your new email, and verify it. Your old email will no longer be associated with your account. You'll need to use your new email for future logins and password resets."
        },
        {
          question: "How do I delete my account?",
          answer: "To delete your account: (1) Go to Profile > Account Settings > Delete Account, (2) Read the deletion notice carefully, (3) Confirm deletion. Once deleted, your account and all associated data will be permanently removed. This action cannot be undone, so please be certain before proceeding."
        },
        {
          question: "Is my account secure from hackers?",
          answer: "Yes, we use industry-standard security measures to protect your account: (1) SSL/TLS encryption for all data transmission, (2) Bcrypt password hashing, (3) Regular security audits, (4) Fraud detection systems, (5) Secure session management. Never share your password with anyone, and always use a strong, unique password."
        },
        {
          question: "What should I do if I suspect unauthorized access?",
          answer: "If you suspect unauthorized access to your account: (1) Change your password immediately, (2) Review your recent activity, (3) Contact support at support@xsnaplive.com with details, (4) Do not share your login credentials with anyone. Our security team will investigate and help secure your account."
        }
      ]
    },
    {
      category: "Matches & Formats",
      icon: "🎯",
      faqs: [
        {
          question: "What cricket formats are available?",
          answer: "XSNAP Fantasy Cricket supports multiple cricket formats: (1) T20 (Twenty20) - 20 overs per side, fast-paced and exciting, (2) ODI (One Day International) - 50 overs per side, traditional format, (3) Test Cricket - 5 days per side, longest format. Each format has different strategies and player values."
        },
        {
          question: "How do I find upcoming matches?",
          answer: "You can find upcoming matches by: (1) Going to the 'Matches' section, (2) Browsing by date or format, (3) Searching for specific teams, (4) Filtering by competition (IPL, International, etc.). Each match shows the teams, venue, start time, and deadline for team creation."
        },
        {
          question: "When is the deadline for team creation?",
          answer: "The team creation deadline for each match is typically 30 minutes before the match starts. This gives the platform time to finalize all teams and prepare for live scoring. Always check the specific deadline for each match as it may vary. Late submissions are not accepted."
        },
        {
          question: "Can I create a team after the match has started?",
          answer: "No, you cannot create a team after the match has started. The deadline is strictly enforced to ensure fairness. Once the match begins, all teams are locked and no new teams can be created. Plan ahead and create your team well before the deadline."
        },
        {
          question: "What happens if a match is postponed or cancelled?",
          answer: "If a match is postponed, the team creation deadline is extended accordingly, and all teams remain valid for the rescheduled date. If a match is cancelled, all teams for that match are voided, and no points are awarded. You can then create teams for other available matches."
        }
      ]
    },
    {
      category: "Responsible Gaming",
      icon: "❤️",
      faqs: [
        {
          question: "Is this platform suitable for everyone?",
          answer: "XSNAP Fantasy Cricket is designed for cricket enthusiasts aged 18 and above. It's an educational platform focused on learning cricket strategy and player analysis. However, like any competitive activity, it should be enjoyed responsibly. If you feel gaming is affecting your mental health or daily life, please reach out to our support team or seek professional help."
        },
        {
          question: "What resources are available for responsible gaming?",
          answer: "We provide several resources: (1) Responsible Gaming Policy with guidelines, (2) Mental health resources and support information, (3) Contact information for counseling services, (4) Self-assessment tools to evaluate your gaming habits, (5) Support team available at support@xsnaplive.com. Your wellbeing is our priority."
        },
        {
          question: "Can I set limits on my gameplay?",
          answer: "Yes, we encourage responsible gaming. While XSNAP is free-to-play with no financial stakes, we recommend: (1) Setting time limits for daily gameplay, (2) Taking regular breaks, (3) Not neglecting other responsibilities, (4) Maintaining a healthy balance between gaming and other activities. Contact support if you need help setting up usage limits."
        },
        {
          question: "What should I do if I'm struggling with gaming habits?",
          answer: "If you're struggling with gaming habits: (1) Contact our support team at support@xsnaplive.com, (2) Reach out to mental health professionals, (3) Call the National Council for Mental Wellbeing (India), (4) Consider taking a break from the platform. We're here to help and support your wellbeing."
        }
      ]
    },
    {
      category: "Technical Support",
      icon: "💻",
      faqs: [
        {
          question: "The website is loading slowly. What should I do?",
          answer: "If the website is loading slowly: (1) Check your internet connection speed, (2) Clear your browser cache and cookies, (3) Try a different browser, (4) Disable browser extensions, (5) Try accessing from a different device. If the problem persists, contact support at support@xsnaplive.com."
        },
        {
          question: "I'm getting an error message. What does it mean?",
          answer: "Error messages provide specific information about what went wrong. Common errors: (1) 'Invalid credentials' - check your email/password, (2) 'Team already submitted' - you've already created a team for this match, (3) 'Deadline passed' - you missed the submission deadline. For other errors, note the error code and contact support."
        },
        {
          question: "Why can't I see live match updates?",
          answer: "If you're not seeing live updates: (1) Refresh the page, (2) Check your internet connection, (3) Clear browser cache, (4) Try a different browser, (5) Check if the match has started. Live updates are only available during active matches. Contact support if the issue persists."
        },
        {
          question: "Is the platform mobile-friendly?",
          answer: "Yes, XSNAP Fantasy Cricket is fully responsive and works on all devices including smartphones, tablets, and desktops. The mobile version has all the features of the desktop version. You can create teams, check leaderboards, and view live updates on your phone."
        },
        {
          question: "Which browsers are supported?",
          answer: "XSNAP Fantasy Cricket works on all modern browsers: (1) Chrome (recommended), (2) Firefox, (3) Safari, (4) Edge. For the best experience, keep your browser updated to the latest version. If you experience issues, try a different browser."
        }
      ]
    },
    {
      category: "Contact & Support",
      icon: "📧",
      faqs: [
        {
          question: "How do I contact customer support?",
          answer: "You can reach our customer support team at: (1) Email: support@xsnaplive.com, (2) Contact form on the website, (3) Support section in your account. Our team typically responds within 24 hours. For urgent issues, please provide as much detail as possible."
        },
        {
          question: "What are the support hours?",
          answer: "Our support team is available during business hours (Monday to Friday, 9 AM to 6 PM IST). For non-urgent issues, you can email us anytime and we'll respond within 24 hours. For urgent issues, please mark your email as 'URGENT' and we'll prioritize it."
        },
        {
          question: "How can I provide feedback or suggestions?",
          answer: "We love hearing from our users! You can provide feedback by: (1) Emailing support@xsnaplive.com with your suggestions, (2) Using the feedback form in your account, (3) Reaching out on social media. All feedback is reviewed and helps us improve the platform."
        },
        {
          question: "How do I report a bug or technical issue?",
          answer: "To report a bug: (1) Email support@xsnaplive.com with details, (2) Include screenshots or error messages, (3) Describe the steps to reproduce the issue, (4) Mention your browser and device. Our technical team will investigate and work on a fix."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    faqs: cat.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.faqs.length > 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about XSNAP Fantasy Cricket. Can't find what you're looking for? 
              Contact our support team at support@xsnaplive.com
            </p>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, catIndex) => (
                <Card key={catIndex} className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${catIndex}-${faqIndex}`}
                        className="border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              ))
            ) : (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground mb-4">
                  No FAQs found matching "{searchTerm}". Try searching for different keywords.
                </p>
              </Card>
            )}
          </div>

          {/* Still Have Questions */}
          <Card className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help! Reach out to us and we'll be happy to assist you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:support@xsnaplive.com"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Email Support
              </a>
              <a
                href="/contact"
                className="px-6 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contact Form
              </a>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
