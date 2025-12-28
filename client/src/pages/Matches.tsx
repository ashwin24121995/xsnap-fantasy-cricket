import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Matches() {
  const matches = [
    {
      id: 1,
      team1: "India",
      team2: "Australia",
      format: "T20",
      venue: "Mumbai",
      date: "Dec 30, 2025",
      time: "7:30 PM IST",
      status: "upcoming"
    },
    {
      id: 2,
      team1: "England",
      team2: "Pakistan",
      format: "ODI",
      venue: "Dubai",
      date: "Dec 31, 2025",
      time: "2:00 PM IST",
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">Select a Match</h1>
          
          <div className="space-y-6">
            {matches.map((match) => (
              <Card key={match.id} className="p-6 hover-lift">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary">{match.format}</Badge>
                      <Badge variant="outline">{match.status}</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-8 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold">{match.team1}</p>
                      </div>
                      <div className="text-muted-foreground font-semibold">VS</div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">{match.team2}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{match.venue}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{match.date} • {match.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link href={`/team-builder/${match.id}`}>
                    <Button size="lg" className="glossy-btn">
                      Create Team
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center text-muted-foreground">
            <p>More matches will be available soon. Check back later!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
