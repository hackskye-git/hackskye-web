
import Sponsors from "@/components/Sponsors";
import ParticleBackground from "@/components/ui/ParticleBackground";

const SponsorsPage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative pt-20">
      <ParticleBackground />
      <main>
        <Sponsors />
      </main>
    </div>
  );
};

export default SponsorsPage;
