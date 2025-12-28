import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Understanding Fantasy Cricket Scoring",
      excerpt: "Learn how points are calculated and maximize your team's performance...",
      author: "XSNAP Team",
      date: "Dec 20, 2025",
      image: "/assets/hero_dashboard.png"
    },
    {
      id: 2,
      title: "Top 10 Tips for Building Winning Teams",
      excerpt: "Expert strategies to help you climb the leaderboard...",
      author: "XSNAP Team",
      date: "Dec 15, 2025",
      image: "/assets/hero_team_builder.png"
    },
    {
      id: 3,
      title: "Captain Selection Guide",
      excerpt: "Choosing the right captain can double your points. Here's how...",
      author: "XSNAP Team",
      date: "Dec 10, 2025",
      image: "/assets/illustration_how_to_play.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">Blog & Updates</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover-lift cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Button variant="link" className="mt-4 px-0">
                    Read More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
