
import Judges from "@/components/Judges";
import ParticleBackground from "@/components/ui/ParticleBackground";

const JudgesPage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative pt-20">
      <ParticleBackground />
      <main>
        <Judges />
      </main>
    </div>
  );
};

export default JudgesPage;
