import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, TrendingUp, Clock, Zap } from 'lucide-react';

interface Score {
  r: number;
  w: number;
  o: number;
  inning: string;
}

interface LiveScoreboardProps {
  teamName: string;
  score: Score | undefined;
  isCurrentlyBatting?: boolean;
}

export function LiveScoreboard({ teamName, score, isCurrentlyBatting = false }: LiveScoreboardProps) {
  const [previousScore, setPreviousScore] = useState<Score | undefined>(score);
  const [scoreChanged, setScoreChanged] = useState(false);

  useEffect(() => {
    if (score && previousScore) {
      // Check if score changed
      if (score.r !== previousScore.r || score.w !== previousScore.w) {
        setScoreChanged(true);
        setTimeout(() => setScoreChanged(false), 1000);
      }
    }
    setPreviousScore(score);
  }, [score]);

  if (!score) {
    return (
      <Card className="p-4 bg-muted/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-lg">{teamName}</p>
            <p className="text-xs text-muted-foreground">{score?.inning || 'Yet to bat'}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Yet to bat</p>
          </div>
        </div>
      </Card>
    );
  }

  // Calculate run rate
  const runRate = score.o > 0 ? (score.r / score.o).toFixed(2) : '0.00';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className={`p-4 transition-all duration-300 ${
          isCurrentlyBatting 
            ? 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary/50' 
            : 'bg-muted/30'
        } ${scoreChanged ? 'ring-2 ring-primary' : ''}`}
      >
        <div className="flex items-center justify-between">
          {/* Team Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="font-semibold text-lg">{teamName}</p>
              {isCurrentlyBatting && (
                <Badge variant="default" className="text-xs animate-pulse">
                  <Activity className="w-3 h-3 mr-1" />
                  Batting
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{score.inning}</p>
          </div>

          {/* Score Display */}
          <div className="text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${score.r}-${score.w}`}
                initial={{ scale: 1.2, color: '#3b82f6' }}
                animate={{ scale: 1, color: 'inherit' }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-baseline gap-2"
              >
                <span className="text-3xl font-bold">
                  {score.r}
                </span>
                <span className="text-xl text-muted-foreground">
                  /{score.w}
                </span>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex items-center justify-end gap-3 mt-1">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {score.o} ov
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                RR: {runRate}
              </span>
            </div>
          </div>
        </div>

        {/* Score Change Indicator */}
        <AnimatePresence>
          {scoreChanged && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-2 flex items-center justify-center gap-1 text-xs text-primary"
            >
              <Zap className="w-3 h-3" />
              Score Updated!
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
