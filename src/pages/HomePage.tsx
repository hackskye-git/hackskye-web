
import Hero from "@/components/Hero";
import About from "@/components/About";
import ParticleBackground from "@/components/ui/ParticleBackground";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-hackathon-background overflow-hidden relative">
      <ParticleBackground className="opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-hackathon-background via-hackathon-background/95 to-hackathon-background z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default HomePage;
