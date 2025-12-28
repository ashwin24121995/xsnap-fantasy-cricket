import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Trophy, Users, Shield, Zap, TrendingUp, Award } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const features = [
    {
      icon: Trophy,
      title: "Free To Play",
      description: "100% free fantasy cricket platform with no real money involved. Play for fun and education!",
    },
    {
      icon: Users,
      title: "Build Your Team",
      description: "Select your dream team from real cricket players and compete with others.",
    },
    {
      icon: Shield,
      title: "Fair Play Guaranteed",
      description: "Skill-based gameplay with transparent rules and fair competition for all users.",
    },
    {
      icon: Zap,
      title: "Live Scoring",
      description: "Track your team's performance in real-time with live match updates.",
    },
    {
      icon: TrendingUp,
      title: "Leaderboards",
      description: "Climb the rankings and showcase your cricket knowledge to the community.",
    },
    {
      icon: Award,
      title: "Learn & Improve",
      description: "Educational platform designed to help you understand cricket strategy better.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Register",
      description: "Create your free account in minutes. Must be 18+ and from an eligible state.",
    },
    {
      step: "2",
      title: "Select Match",
      description: "Choose from upcoming cricket matches across various formats.",
    },
    {
      step: "3",
      title: "Build Team",
      description: "Pick 11 players within budget constraints and select captain & vice-captain.",
    },
    {
      step: "4",
      title: "Compete",
      description: "Watch your team score points based on real match performance.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-up">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <img src="/assets/badge_18plus.png" alt="18+" className="h-6 w-auto" />
                  <span className="text-sm font-medium">Free To Play • No Real Money</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Play Fantasy Cricket,<br />
                  <span className="text-accent">Learn & Have Fun!</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/90">
                  India's premier free-to-play fantasy cricket platform. Build your dream team, 
                  compete with friends, and master the game of cricket strategy.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 glossy-btn text-lg px-8">
                      Start Playing Free
                    </Button>
                  </Link>
                  <Link href="/how-to-play">
                    <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8">
                      How It Works
                    </Button>
                  </Link>
                </div>
                
                <div className="flex items-center space-x-6 pt-4">
                  <div>
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-sm text-white/80">Free Forever</p>
                  </div>
                  <div className="h-12 w-px bg-white/30"></div>
                  <div>
                    <p className="text-3xl font-bold">18+</p>
                    <p className="text-sm text-white/80">Age Verified</p>
                  </div>
                  <div className="h-12 w-px bg-white/30"></div>
                  <div>
                    <p className="text-3xl font-bold">0₹</p>
                    <p className="text-sm text-white/80">No Money</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="/assets/hero_homepage.png"
                  alt="Fantasy Cricket"
                  className="rounded-2xl shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Why Choose <span className="gradient-text">XSNAP Fantasy Cricket</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the thrill of fantasy cricket without any financial pressure. 
                Learn, compete, and enjoy the game!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover-lift cursor-pointer border-2 hover:border-primary/50 transition-all"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 section-alt">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started in just 4 simple steps and begin your fantasy cricket journey today!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -z-10"></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/register">
                <Button size="lg" className="glossy-btn text-lg px-8">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-8 text-center hover-lift">
                  <img src="/assets/badge_18plus.png" alt="18+" className="h-20 w-auto mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Age Restricted</h3>
                  <p className="text-muted-foreground">
                    Only users 18 years and older are permitted to play on our platform.
                  </p>
                </Card>
                
                <Card className="p-8 text-center hover-lift">
                  <img src="/assets/badge_fair_play.png" alt="Fair Play" className="h-20 w-auto mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fair Play Certified</h3>
                  <p className="text-muted-foreground">
                    Transparent rules, skill-based gameplay, and equal opportunities for all players.
                  </p>
                </Card>
              </div>
              
              <div className="mt-8 bg-warning/10 border border-warning/30 rounded-lg p-6">
                <p className="text-sm text-center">
                  <strong>Important:</strong> This platform is not available in Andhra Pradesh, Assam, 
                  Odisha, Telangana, Nagaland, and Sikkim due to government compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Fantasy Cricket Journey?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of cricket fans who are already enjoying free-to-play fantasy cricket. 
              No credit card required, no hidden fees!
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 glossy-btn text-lg px-12">
                Create Free Account
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
