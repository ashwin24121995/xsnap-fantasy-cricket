import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Users, 
  Shield, 
  Sparkles, 
  Target,
  Award,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Heart,
  Zap,
  Star,
  Clock,
  TrendingUp,
  Lock,
  FileCheck,
  HelpCircle,
  MessageCircle,
  BarChart3,
  Gamepad2,
  MapPin,
  Calendar
} from "lucide-react";

const heroImages = [
  "/hero-cricket-2.webp",
  "/hero-cricket-3.webp",
  "/hero-cricket-4.webp"
];

function LiveMatchesSection() {
  const [, navigate] = useLocation();
  // Get live matches (currently in progress)
  const { data: matches, isLoading } = trpc.matches.getLive.useQuery(
    undefined,
    {
      refetchInterval: 30 * 1000, // Refresh every 30 seconds for live matches
      refetchOnWindowFocus: true,
    }
  );

  // Don't show section if no live matches
  if (isLoading || !matches || matches.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-500 text-white animate-pulse">🔴 Live Now</Badge>
          <h2 className="text-4xl font-bold mb-4">Live Matches</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch these matches happening right now and track your team's performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {matches.slice(0, 4).map((match) => (
            <Card key={match.id} className="p-6 hover:shadow-lg transition-shadow border-2 border-red-500/20">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="text-xs">{match.matchType}</Badge>
                <Badge className="bg-red-500 text-white text-xs animate-pulse">LIVE</Badge>
              </div>
              
              <h3 className="font-bold text-lg mb-3">{match.name}</h3>
              
              <div className="flex items-center justify-center gap-6 mb-4">
                {/* Team 1 */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  {match.teamInfo && match.teamInfo[0]?.img && (
                    <img 
                      src={match.teamInfo[0].img} 
                      alt={match.teamInfo[0].name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <p className="font-bold text-sm text-center">
                    {match.teamInfo && match.teamInfo[0]?.shortname ? match.teamInfo[0].shortname : match.teams[0]}
                  </p>
                </div>
                
                <span className="text-2xl font-bold text-muted-foreground">vs</span>
                
                {/* Team 2 */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  {match.teamInfo && match.teamInfo[1]?.img && (
                    <img 
                      src={match.teamInfo[1].img} 
                      alt={match.teamInfo[1].name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <p className="font-bold text-sm text-center">
                    {match.teamInfo && match.teamInfo[1]?.shortname ? match.teamInfo[1].shortname : match.teams[1]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{match.venue}</span>
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => navigate(`/match-summary/${match.id}`)}
                >
                  View Details
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-red-500 hover:bg-red-600"
                  onClick={() => navigate(`/team-builder?matchId=${match.id}`)}
                >
                  Create Team
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingMatchesSection() {
  const [, navigate] = useLocation();
  // Get real-time upcoming matches from Cricket API (auto-refresh every 5 min)
  const { data: matches, isLoading } = trpc.matches.getUpcoming.useQuery(
    undefined,
    {
      refetchInterval: 5 * 60 * 1000,
      refetchOnWindowFocus: true,
    }
  );

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 animate-pulse">Live Updates</Badge>
            <h2 className="text-4xl font-bold mb-4">Upcoming Cricket Matches</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-32 bg-muted rounded"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!matches || matches.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Live Updates</Badge>
            <h2 className="text-4xl font-bold mb-4">Upcoming Cricket Matches</h2>
          </div>
          <Card className="p-12 text-center border-2 border-dashed">
            <div className="max-w-md mx-auto">
              <Clock className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-bold mb-4">No Matches Available</h3>
              <p className="text-muted-foreground">
                Check back soon for upcoming cricket matches!
              </p>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4 animate-pulse">Live Updates</Badge>
          <h2 className="text-4xl font-bold mb-4">Upcoming Cricket Matches</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create your fantasy team for these exciting upcoming matches
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {matches.slice(0, 4).map((match) => {
            const teams = match.teams || [];
            const teamInfo = match.teamInfo || [];
            const matchDate = new Date(match.dateTimeGMT);
            return (
              <Card key={match.id} className="p-6 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigate(`/team-builder?matchId=${match.id}`)}>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{match.matchType.toUpperCase()}</Badge>
                  {match.fantasyEnabled && (
                    <Badge className="bg-gold text-black">Fantasy</Badge>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-3">{match.name}</h3>
                
                {/* Teams */}
                <div className="flex items-center justify-center space-x-6 mb-4">
                  {teamInfo.length >= 2 ? (
                    <>
                      {/* Team 1 */}
                      <div className="flex flex-col items-center gap-2 flex-1">
                        {teamInfo[0].img && (
                          <img 
                            src={teamInfo[0].img} 
                            alt={teamInfo[0].name}
                            className="w-12 h-12 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                        <span className="font-semibold text-sm text-center">{teamInfo[0].shortname || teams[0]}</span>
                      </div>
                      
                      <span className="text-2xl font-bold text-muted-foreground">vs</span>
                      
                      {/* Team 2 */}
                      <div className="flex flex-col items-center gap-2 flex-1">
                        {teamInfo[1].img && (
                          <img 
                            src={teamInfo[1].img} 
                            alt={teamInfo[1].name}
                            className="w-12 h-12 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                        <span className="font-semibold text-sm text-center">{teamInfo[1].shortname || teams[1]}</span>
                      </div>
                    </>
                  ) : (
                    <span className="font-semibold text-sm">{teams.join(' vs ')}</span>
                  )}
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{match.venue}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{format(matchDate, 'MMM dd, yyyy • hh:mm a')}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-4 glossy-button">
                  Create Team
                </Button>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/matches')}
          >
            View All Matches
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [, navigate] = useLocation();
  const { user } = useAuth();

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section - Clean White Background with Image Carousel */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">100% Free To Play • No Real Money</span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Play Fantasy{" "}
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
                    Cricket,
                  </span>
                  <br />
                  Learn & Have Fun!
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl">
                  India's premier free-to-play fantasy cricket platform. Build your dream team, compete with friends, and master the game of cricket strategy.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="glossy-button group" 
                  onClick={() => navigate(user ? '/matches' : '/register')}
                >
                  {user ? 'Browse Matches' : 'Start Playing Free'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2" onClick={() => navigate('/how-to-play')}>
                  How It Works
                </Button>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Learn Strategy
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Heart className="mr-2 h-4 w-4" />
                  No Pressure
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Zap className="mr-2 h-4 w-4" />
                  Pure Fun
                </Badge>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="relative">
              {/* 18+ Badge */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="bg-gradient-to-br from-accent to-yellow-500 rounded-2xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="text-center">
                    <div className="text-4xl font-black text-primary">18+</div>
                    <div className="text-xs font-semibold text-primary mt-1">Age Verified</div>
                  </div>
                </div>
              </div>

              {/* Image Carousel Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                {/* Images with Fade Transition */}
                {heroImages.map((image, index) => (
                  <div
                    key={image}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Cricket action ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Gradient Overlay for Better Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-12 bg-white border-y">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <p className="font-semibold text-sm">100% Secure</p>
              <p className="text-xs text-muted-foreground">Data Protected</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <FileCheck className="h-8 w-8 text-blue-600" />
              </div>
              <p className="font-semibold text-sm">Verified Platform</p>
              <p className="text-xs text-muted-foreground">Age 18+ Only</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <p className="font-semibold text-sm">Fair Play</p>
              <p className="text-xs text-muted-foreground">Transparent Rules</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                <Lock className="h-8 w-8 text-orange-600" />
              </div>
              <p className="font-semibold text-sm">State Compliant</p>
              <p className="text-xs text-muted-foreground">Legal & Safe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose XSNAP?</Badge>
            <h2 className="text-4xl font-bold mb-4">Built for Learning, Designed for Fun</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience fantasy cricket without financial pressure. Focus on strategy, skill, and enjoyment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-2">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Trophy className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Free to Play</h3>
              <p className="text-muted-foreground">
                No real money involved. Play for fun, learn strategies, and compete on leaderboards without any financial risk.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-2">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build Your Dream Team</h3>
              <p className="text-muted-foreground">
                Select players, manage budgets, and create winning combinations. Master the art of team building and strategy.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-2">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe & Compliant</h3>
              <p className="text-muted-foreground">
                Age-verified platform (18+) with state compliance. Fair play guaranteed with transparent rules and policies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Match Updates Section */}
      <UpcomingMatchesSection />

      {/* Live Matches Section */}
      <LiveMatchesSection />


      {/* Game Formats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Multiple Formats</Badge>
            <h2 className="text-4xl font-bold mb-4">Play Across All Cricket Formats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create teams for T20, ODI, and Test matches. Each format offers unique challenges and strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* T20 Format */}
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">T20</h3>
                  <p className="text-sm text-muted-foreground">Fast-Paced Action</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Quick 20-over matches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Aggressive batting strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">High-scoring entertainment</span>
                </li>
              </ul>
            </Card>

            {/* ODI Format */}
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">ODI</h3>
                  <p className="text-sm text-muted-foreground">Balanced Cricket</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">50-over strategic battles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Balanced team composition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Tactical decision-making</span>
                </li>
              </ul>
            </Card>

            {/* Test Format */}
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Test</h3>
                  <p className="text-sm text-muted-foreground">Ultimate Challenge</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Multi-day cricket mastery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Endurance and consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Deep strategic planning</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes and begin your fantasy cricket journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Register Free</h3>
              <p className="text-sm text-muted-foreground">
                Create your account in seconds with email verification
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Select Match</h3>
              <p className="text-sm text-muted-foreground">
                Choose from upcoming cricket matches to join
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Build Team</h3>
              <p className="text-sm text-muted-foreground">
                Pick 11 players within budget and formation rules
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Compete & Learn</h3>
              <p className="text-sm text-muted-foreground">
                Watch your team perform and climb the leaderboard
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="glossy-button" 
              onClick={() => navigate(user ? '/matches' : '/register')}
            >
              {user ? 'Create Your Team' : 'Get Started Now'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed Benefits */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Advantages</Badge>
            <h2 className="text-4xl font-bold mb-4">Why XSNAP Stands Out</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another fantasy platform. We're committed to education, fair play, and responsible gaming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Educational Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn cricket analytics, player statistics, and strategic decision-making
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefit 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Zero Financial Risk</h4>
                  <p className="text-sm text-muted-foreground">
                    Play without worrying about money. Focus purely on strategy and fun
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefit 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Community Driven</h4>
                  <p className="text-sm text-muted-foreground">
                    Join a community of cricket enthusiasts learning together
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefit 4 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Track Your Progress</h4>
                  <p className="text-sm text-muted-foreground">
                    Detailed analytics and performance tracking for continuous improvement
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefit 5 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Responsible Gaming</h4>
                  <p className="text-sm text-muted-foreground">
                    Age verification, state compliance, and fair play policies
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefit 6 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Multiple Contests</h4>
                  <p className="text-sm text-muted-foreground">
                    Participate in various contests and leagues across all formats
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Got Questions?</Badge>
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about XSNAP Fantasy Cricket
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Is XSNAP really free to play?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! XSNAP is 100% free to play. There's no real money involved, no entry fees, and no hidden charges. 
                    Our platform is designed for learning and entertainment only.
                  </p>
                </div>
              </div>
            </Card>

            {/* FAQ 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Who can play on XSNAP?</h4>
                  <p className="text-sm text-muted-foreground">
                    Users must be 18 years or older to register. The platform is NOT available in Andhra Pradesh, Assam, 
                    Odisha, Telangana, Nagaland, and Sikkim due to state regulations.
                  </p>
                </div>
              </div>
            </Card>

            {/* FAQ 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">How do I create a fantasy cricket team?</h4>
                  <p className="text-sm text-muted-foreground">
                    After registration, select an upcoming match, choose 11 players within the budget, assign a captain and 
                    vice-captain, and submit your team before the match deadline.
                  </p>
                </div>
              </div>
            </Card>

            {/* FAQ 4 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Are there any prizes or rewards?</h4>
                  <p className="text-sm text-muted-foreground">
                    No monetary prizes or rewards. Winners are recognized on our leaderboard. The platform is purely for 
                    skill development and entertainment.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => navigate('/faq')}>
              View All FAQs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Join Our Community</Badge>
              <h2 className="text-4xl font-bold mb-6">Be Part of Something Special</h2>
              <p className="text-lg text-blue-100 mb-8">
                Connect with fellow cricket enthusiasts, share strategies, discuss player performances, and learn from 
                experienced fantasy cricket players in our growing community.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Active Discussions</p>
                    <p className="text-sm text-blue-100">Share tips and strategies</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Performance Analytics</p>
                    <p className="text-sm text-blue-100">Track and improve your skills</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Leaderboard Rankings</p>
                    <p className="text-sm text-blue-100">Compete with the best</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">Growing Community</p>
                      <p className="text-blue-100">Cricket enthusiasts learning together</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                    <div>
                      <p className="text-3xl font-bold">24/7</p>
                      <p className="text-sm text-blue-100">Platform Access</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">100%</p>
                      <p className="text-sm text-blue-100">Free to Play</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Master Fantasy Cricket?</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join our platform and start learning cricket strategy through our free-to-play fantasy cricket experience
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="glossy-button" 
              onClick={() => navigate(user ? '/my-teams' : '/register')}
            >
              {user ? 'View My Teams' : 'Create Free Account'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2" onClick={() => navigate('/about')}>
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.webp" alt="XSNAP" className="h-12 mb-4" />
              <p className="text-sm">
                India's premier free-to-play fantasy cricket platform for learning and entertainment.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/how-to-play" className="hover:text-white">How To Play</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/fair-play" className="hover:text-white">Fair Play</Link></li>
                <li><Link href="/responsible-gaming" className="hover:text-white">Responsible Gaming</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: support@xsnaplive.com</li>
                <li><Link href="/contact" className="hover:text-white">Contact Form</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p>© 2024 XSNAP IMAGING PRIVATE LIMITED. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Badge variant="secondary">18+</Badge>
                <Badge variant="secondary">Fair Play</Badge>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Legal Disclaimer: This platform is NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. 
              Only users 18 years and older are permitted. This is a skill-based, free-to-play platform with no real money involved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
