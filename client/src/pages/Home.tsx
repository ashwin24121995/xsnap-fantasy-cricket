import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Trophy, 
  Users, 
  Shield, 
  Sparkles, 
  TrendingUp,
  Target,
  Award,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState({ users: 0, teams: 0, matches: 0 });

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCount({
        users: Math.floor(10000 * progress),
        teams: Math.floor(50000 * progress),
        matches: Math.floor(500 * progress)
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section - Unique Diagonal Split Design */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-900 animate-gradient-shift" />
        
        {/* Diagonal Overlay with Clip Path */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/30"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
          }}
        />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-lg rotate-45 animate-spin-slow" />

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                <span className="text-sm font-medium">100% Free To Play • No Real Money</span>
              </div>

              {/* Main Heading with Gradient Text */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Play Fantasy
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-accent animate-gradient-x">
                    Cricket,
                  </span>
                </h1>
                <h2 className="text-4xl lg:text-6xl font-bold">
                  Learn & Have Fun!
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
                India's premier free-to-play fantasy cricket platform. Build your dream team, 
                compete with friends, and master the game of cricket strategy.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-6 text-lg group">
                    Start Playing Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-6 text-lg"
                  >
                    How It Works
                  </Button>
                </Link>
              </div>

              {/* Stats Counter */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{count.users.toLocaleString()}+</div>
                  <div className="text-sm text-white/70">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{count.teams.toLocaleString()}+</div>
                  <div className="text-sm text-white/70">Teams Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{count.matches}+</div>
                  <div className="text-sm text-white/70">Matches</div>
                </div>
              </div>
            </div>

            {/* Right Content - Floating Cards */}
            <div className="relative h-[600px] hidden lg:block">
              {/* Main Hero Image with 3D Transform */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full perspective-1000">
                  <img
                    src="/assets/hero_homepage.png"
                    alt="Fantasy Cricket"
                    className="w-full h-full object-contain rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Player Card 1 */}
                  <Card className="absolute top-10 -left-10 p-4 bg-white/95 backdrop-blur-md shadow-xl hover-lift animate-float w-48">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Top Scorer</div>
                        <div className="font-bold">V. Kohli</div>
                        <div className="text-sm text-primary">850 pts</div>
                      </div>
                    </div>
                  </Card>

                  {/* Floating Player Card 2 */}
                  <Card className="absolute bottom-20 -right-10 p-4 bg-white/95 backdrop-blur-md shadow-xl hover-lift animate-float-delayed w-48">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Best Bowler</div>
                        <div className="font-bold">J. Bumrah</div>
                        <div className="text-sm text-accent">780 pts</div>
                      </div>
                    </div>
                  </Card>

                  {/* Floating Stats Badge */}
                  <div className="absolute top-1/2 -right-5 transform -translate-y-1/2">
                    <div className="bg-gradient-to-br from-accent to-yellow-500 text-primary p-6 rounded-2xl shadow-2xl animate-pulse-slow">
                      <div className="text-4xl font-bold">18+</div>
                      <div className="text-xs font-medium mt-1">Age Verified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="hsl(var(--background))"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Why Choose XSNAP</Badge>
            <h2 className="text-4xl font-bold mb-4">Built for Cricket Fans</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience fantasy cricket the right way - free, fair, and focused on learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Free",
                description: "No deposits, no withdrawals. Pure entertainment and education.",
                color: "text-primary"
              },
              {
                icon: Trophy,
                title: "Skill-Based",
                description: "Compete on strategy and cricket knowledge, not luck.",
                color: "text-accent"
              },
              {
                icon: Users,
                title: "Safe & Legal",
                description: "Fully compliant with Indian regulations. 18+ only.",
                color: "text-green-600"
              },
              {
                icon: Target,
                title: "Learn & Grow",
                description: "Master fantasy cricket strategy without financial pressure.",
                color: "text-purple-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover-lift cursor-pointer group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Simple Process</Badge>
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get started in minutes and start building winning teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                icon: Users,
                title: "Create Account",
                description: "Sign up for free with just your email. Age and state verification included."
              },
              {
                step: "02",
                icon: Target,
                title: "Build Your Team",
                description: "Select 11 players within budget. Choose your captain and vice-captain wisely."
              },
              {
                step: "03",
                icon: Award,
                title: "Compete & Win",
                description: "Earn points based on real match performance. Climb the leaderboard!"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 hover-lift h-full">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-to-play">
              <Button size="lg" variant="outline" className="group">
                Learn More About Scoring
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Badges Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <div className="font-bold text-lg">Fair Play</div>
                <div className="text-sm text-muted-foreground">Certified Platform</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">18+</span>
              </div>
              <div>
                <div className="font-bold text-lg">Age Restricted</div>
                <div className="text-sm text-muted-foreground">Adults Only</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <div className="font-bold text-lg">Compliant</div>
                <div className="text-sm text-muted-foreground">Government Approved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900" />
        <div className="absolute inset-0 bg-[url('/assets/illustration_how_to_play.png')] opacity-5 bg-cover bg-center" />
        
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of cricket fans learning and competing on India's premier 
            free-to-play fantasy cricket platform.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-12 py-6 text-lg">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
