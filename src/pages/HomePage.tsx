
import Hero from "@/components/Hero";
import About from "@/components/About";
import ParticleBackground from "@/components/ui/ParticleBackground";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-hackathon-background overflow-hidden relative">
      <ParticleBackground className="opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-hackathon-background via-hackathon-background/95 to-hackathon-background z-0" />
      <main className="w-full relative z-10">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default HomePage;
