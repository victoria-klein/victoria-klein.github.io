
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThoughtsAndProjects from "./pages/ThoughtsAndProjects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<div className="min-h-screen pt-16 font-courier">About Page Coming Soon</div>} />
            <Route path="/academic" element={<div className="min-h-screen pt-16 font-courier">Academic Journey Coming Soon</div>} />
            <Route path="/professional" element={<div className="min-h-screen pt-16 font-courier">Professional Work Coming Soon</div>} />
            <Route path="/thoughts" element={<ThoughtsAndProjects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
