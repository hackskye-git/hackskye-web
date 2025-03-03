
import About from "@/components/About";
import Cofounders from "@/components/Cofounders";
import ParticleBackground from "@/components/ui/ParticleBackground";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative pt-20">
      <ParticleBackground />
      <main>
        <About />
        <Cofounders />
      </main>
    </div>
  );
};

export default AboutPage;
