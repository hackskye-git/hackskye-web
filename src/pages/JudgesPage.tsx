
import Judges from "@/components/Judges";
import ParticleBackground from "@/components/ui/ParticleBackground";

const JudgesPage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative">
      <ParticleBackground />
      <main className="w-full pt-16 md:pt-20">
        <Judges />
      </main>
    </div>
  );
};

export default JudgesPage;
