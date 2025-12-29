import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { trpc } from '@/lib/trpc';
import { Activity, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { LiveScoreboard } from './LiveScoreboard';

interface LiveMatchCardProps {
  match: {
    id: string;
    name: string;
    matchType: string;
    status: string;
    venue: string;
    dateTimeGMT: string;
    teams: string[];
    score?: Array<{
      r: number;
      w: number;
      o: number;
      inning: string;
    }>;
  };
}

export function LiveMatchCard({ match }: LiveMatchCardProps) {
  // Fetch live score with auto-refresh every 30 seconds
  const { data: liveScore, refetch } = trpc.matches.getLiveScore.useQuery(
    { matchApiId: match.id },
    {
      refetchInterval: 30000, // Refresh every 30 seconds
      refetchIntervalInBackground: true,
    }
  );

  // Use live score data if available, otherwise use match data
  const currentMatch = liveScore || match;
  const scores = currentMatch.score || [];

  // Get team names
  const team1 = currentMatch.teams[0] || 'Team 1';
  const team2 = currentMatch.teams[1] || 'Team 2';

  // Parse scores
  const team1Score = scores.find(s => s.inning.includes(team1));
  const team2Score = scores.find(s => s.inning.includes(team2));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
        {/* Live Badge */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="destructive" className="flex items-center gap-1 animate-pulse">
            <Activity className="h-3 w-3" />
            LIVE
          </Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Updates every 30s
          </span>
        </div>

        {/* Match Title */}
        <h3 className="font-bold text-lg mb-2">{currentMatch.name}</h3>
        
        {/* Match Type & Venue */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Badge variant="outline">{currentMatch.matchType.toUpperCase()}</Badge>
          <span>•</span>
          <span>{currentMatch.venue}</span>
        </div>

        {/* Scores with LiveScoreboard */}
        <div className="space-y-3">
          <LiveScoreboard 
            teamName={team1} 
            score={team1Score} 
            isCurrentlyBatting={!!team1Score && scores.length === 1}
          />
          <LiveScoreboard 
            teamName={team2} 
            score={team2Score} 
            isCurrentlyBatting={!!team2Score && scores.length === 2}
          />
        </div>

        {/* Match Status */}
        {currentMatch.status && (
          <div className="mt-4 p-3 bg-primary/10 rounded-lg">
            <p className="text-sm font-medium text-center">
              {currentMatch.status}
            </p>
          </div>
        )}
      </Card>
    </motion.div>
  );
}
