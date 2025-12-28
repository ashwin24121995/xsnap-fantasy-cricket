import { useState, useEffect } from "react";
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
  Target,
  Award,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Heart,
  Zap
} from "lucide-react";

const heroImages = [
  "/hero-cricket-2.jpg",
  "/hero-cricket-3.jpg",
  "/hero-cricket-4.jpg"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                <Link href="/register">
                  <Button size="lg" className="glossy-button group">
                    Start Playing Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button size="lg" variant="outline" className="border-2">
                    How It Works
                  </Button>
                </Link>
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

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
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
            <Link href="/register">
              <Button size="lg" className="glossy-button">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Master Fantasy Cricket?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of players learning cricket strategy through our free-to-play platform
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary" className="glossy-button">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="XSNAP" className="h-12 mb-4" />
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
