
import Schedule from "@/components/Schedule";
import ParticleBackground from "@/components/ui/ParticleBackground";

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative pt-20">
      <ParticleBackground />
      <main>
        <Schedule />
      </main>
    </div>
  );
};

export default SchedulePage;
