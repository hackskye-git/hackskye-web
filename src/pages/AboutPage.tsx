
import About from "@/components/About";
import Cofounders from "@/components/Cofounders";
import ParticleBackground from "@/components/ui/ParticleBackground";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative">
      <ParticleBackground />
      <main className="w-full pt-16 md:pt-20">
        <About />
        <Cofounders />
      </main>
    </div>
  );
};

export default AboutPage;
