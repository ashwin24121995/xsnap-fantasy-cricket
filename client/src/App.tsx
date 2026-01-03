import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import HowToPlay from "./pages/HowToPlay";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FairPlay from "./pages/FairPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import Dashboard from "./pages/Dashboard";
import Matches from "./pages/Matches";
import TeamBuilder from "./pages/TeamBuilder";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import MyTeams from "./pages/MyTeams";
import MatchSummary from "./pages/MatchSummary";

function Router() {
  return (
    <Switch>
      {/* Public Pages */}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/about" component={About} />
      <Route path="/how-to-play" component={HowToPlay} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      
      {/* Legal Pages */}
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/fair-play" component={FairPlay} />
      <Route path="/responsible-gaming" component={ResponsibleGaming} />
      
      {/* Protected Pages */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/matches" component={Matches} />
      <Route path="/my-teams" component={MyTeams} />
      <Route path="/team-builder/:matchId?" component={TeamBuilder} />
      <Route path="/match-summary/:matchId" component={MatchSummary} />
      <Route path="/match/:matchId/summary" component={MatchSummary} />
      <Route path="/match/:matchId" component={MatchSummary} />
      <Route path="/matches/:matchId">
        {(params) => {
          window.location.href = `/match-summary/${params.matchId}`;
          return null;
        }}
      </Route>
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/profile" component={Profile} />
      
      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
