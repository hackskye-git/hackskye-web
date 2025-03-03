
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import JudgesPage from "./pages/JudgesPage";
import SchedulePage from "./pages/SchedulePage";
import SponsorsPage from "./pages/SponsorsPage";
import RegisterPage from "./pages/RegisterPage";
import SponsorUsPage from "./pages/SponsorUsPage";
import PastEventsPage from "./pages/PastEventsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-hackathon-black overflow-hidden relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/judges" element={<JudgesPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/sponsor-us" element={<SponsorUsPage />} />
            <Route path="/past-events" element={<PastEventsPage />} />
            {/* For GitHub Pages compatibility */}
            <Route path="/hackskye/*" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
