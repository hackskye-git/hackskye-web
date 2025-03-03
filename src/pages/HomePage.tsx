
import Hero from "@/components/Hero";
import About from "@/components/About";
import ParticleBackground from "@/components/ui/ParticleBackground";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative">
      <ParticleBackground />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default HomePage;
