
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Thoughts from "./pages/Thoughts";
import Projects from "./pages/Projects";
import CV from "./pages/CV";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen w-full">
      {location.pathname !== '/' && <Navigation />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<div className="min-h-screen pt-16 font-courier">About Page Coming Soon</div>} />
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
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
