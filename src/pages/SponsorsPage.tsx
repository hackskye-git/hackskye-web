
import Sponsors from "@/components/Sponsors";
import ParticleBackground from "@/components/ui/ParticleBackground";

const SponsorsPage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative">
      <ParticleBackground />
      <main className="w-full pt-16 md:pt-20">
        <Sponsors />
      </main>
    </div>
  );
};

export default SponsorsPage;
