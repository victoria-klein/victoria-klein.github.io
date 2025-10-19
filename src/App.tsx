import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WhiteModeProvider } from "./contexts/WhiteModeContext";
import CV from "./pages/CV";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Thoughts from "./pages/Thoughts";

// Hot reloading demo - this comment will appear instantly in your browser
const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WhiteModeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </WhiteModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
