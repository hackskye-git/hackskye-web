
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import GlowingButton from "@/components/ui/GlowingButton";
import { ArrowLeft } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import ParticleBackground from "@/components/ui/ParticleBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-hackathon-background text-white relative">
      <ParticleBackground />
      <div className="text-center relative z-10 p-8 max-w-md mx-auto glass-card">
        <h1 className="text-6xl font-bold mb-4 text-hackathon-secondary">404</h1>
        <AnimatedText 
          text="Oops! Page not found" 
          variant="gradient" 
          as="p" 
          className="text-xl mb-6"
        />
        <p className="text-hackathon-muted mb-8">
          We couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <GlowingButton 
          variant="primary" 
          size="md" 
          href="/"
          icon={<ArrowLeft size={16} />}
        >
          Return to Home
        </GlowingButton>
      </div>
    </div>
  );
};

export default NotFound;
