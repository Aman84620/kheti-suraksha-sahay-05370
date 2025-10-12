import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import RiskAssessment from "./pages/RiskAssessment";
import GeoFencing from "./pages/GeoFencing";
import Community from "./pages/Community";
import Support from "./pages/Support";
import Admin from "./pages/Admin";
import FarmerProfile from "./pages/FarmerProfile";
import FarmerDashboard from "./pages/FarmerDashboard";
import Training from "./pages/Training";
import Insurance from "./pages/Insurance";
import NotFound from "./pages/NotFound";
import AuthPage from "./components/Auth"; // ✅ Correct import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
            
            {/* Main App Routes */}
            <Route path="/dashboard" element={<FarmerDashboard />} />
            <Route path="/training" element={<Training />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/risk-assessment" element={<RiskAssessment />} />
            <Route path="/geo-fencing" element={<GeoFencing />} />
            <Route path="/community" element={<Community />} />
            <Route path="/support" element={<Support />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<FarmerProfile />} />
            
            {/* Catch-all 404 Route - MUST BE LAST */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;