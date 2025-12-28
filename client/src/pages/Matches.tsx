import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy } from "lucide-react";
import { Link } from "wouter";
import { trpc } from '@/lib/trpc';
import { format } from 'date-fns';

export default function Matches() {
  const { data: matches, isLoading } = trpc.matches.getUpcoming.useQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-muted/30">
          <div className="container max-w-6xl">
            <h1 className="text-4xl font-bold mb-8">Select a Match</h1>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 animate-pulse">
                  <div className="h-32 bg-muted rounded"></div>
                </Card>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!matches || matches.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-muted/30">
          <div className="container max-w-6xl">
            <h1 className="text-4xl font-bold mb-8">Select a Match</h1>
            <Card className="p-12 text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No Upcoming Matches</h3>
              <p className="text-muted-foreground">
                Check back soon for new cricket matches to join!
              </p>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">Select a Match</h1>
          
          <div className="space-y-6">
            {matches.map((match) => {
              const teams = JSON.parse(match.teams as string) as string[];
              const matchDate = new Date(match.matchDate);
              const isLive = match.status.toLowerCase().includes('progress');
              const isUpcoming = match.status.toLowerCase().includes('not started');

              return (
                <Card key={match.id} className="p-6 hover-lift">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="secondary">{match.matchType.toUpperCase()}</Badge>
                        <Badge variant={isLive ? 'destructive' : 'outline'}>
                          {isLive ? 'LIVE' : isUpcoming ? 'UPCOMING' : 'COMPLETED'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-8 mb-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{teams[0]}</p>
                        </div>
                        <div className="text-muted-foreground font-semibold">VS</div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{teams[1]}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{match.venue}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{format(matchDate, 'PPp')}</span>
                        </div>
                      </div>
                    </div>
                    
                    {match.fantasyEnabled && isUpcoming && (
                      <Link href={`/team-builder/${match.id}`}>
                        <Button size="lg" className="glossy-btn">
                          Create Team
                        </Button>
                      </Link>
                    )}

                    {match.fantasyEnabled && isLive && (
                      <Link href={`/team-builder/${match.id}`}>
                        <Button size="lg" variant="outline">
                          View Match
                        </Button>
                      </Link>
                    )}

                    {!match.fantasyEnabled && (
                      <Button size="lg" variant="secondary" disabled>
                        Fantasy Not Available
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
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
