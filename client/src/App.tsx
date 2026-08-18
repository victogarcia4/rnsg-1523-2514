/** Clinical Field Notebook design: routes separate reading decks, active cases, and study utilities. */
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SiteShell } from "@/components/SiteShell";
import Home from "@/pages/Home";
import CoursePage from "@/pages/CoursePage";
import DayPage from "@/pages/DayPage";
import DeckPage from "@/pages/DeckPage";
import CasesPage from "@/pages/CasesPage";
import CasePlayer from "@/pages/CasePlayer";
import ResourcesPage from "@/pages/ResourcesPage";
import CreditsPage from "@/pages/CreditsPage";
import InstructorPage from "@/pages/InstructorPage";
import InstructorDeckPage from "@/pages/InstructorDeckPage";

function Router() {
  return (
    <SiteShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/course/:courseId/day/:dayId/subject/:subjectId" component={DeckPage} />
        <Route path="/course/:courseId/day/:dayId" component={DayPage} />
        <Route path="/course/:courseId" component={CoursePage} />
        <Route path="/cases/:caseId" component={CasePlayer} />
        <Route path="/cases" component={CasesPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/instructor/:courseId/:dayId" component={InstructorDeckPage} />
        <Route path="/instructor" component={InstructorPage} />
        <Route path="/credits" component={CreditsPage} />
        <Route component={Home} />
      </Switch>
    </SiteShell>
  );
}

export default function App() {
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
