import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import CleaningServices from "@/pages/CleaningServices";
import TenderConsulting from "@/pages/TenderConsulting";
import TenderReadyHub from "@/pages/TenderReadyHub";
import Compliance from "@/pages/Compliance";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TenderThisLanding from "@/pages/TenderThisLanding";

const STANDALONE_ROUTES = ["/tender-this"];

function Router() {
  return (
    <Switch>
      <Route path="/tender-this" component={TenderThisLanding} />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/cleaning-services" component={CleaningServices} />
      <Route path="/tender-consulting" component={TenderConsulting} />
      <Route path="/tender-ready-hub" component={TenderReadyHub} />
      <Route path="/compliance" component={Compliance} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const pathname = location.split("?")[0];
  const isStandalone = STANDALONE_ROUTES.includes(pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-background">
          {!isStandalone && <Navigation />}
          <main className="flex-1">
            <Router />
          </main>
          {!isStandalone && <Footer />}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
