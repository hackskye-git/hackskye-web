
import Schedule from "@/components/Schedule";
import ParticleBackground from "@/components/ui/ParticleBackground";

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative">
      <ParticleBackground />
      <main className="w-full pt-16 md:pt-20">
        <Schedule />
      </main>
    </div>
  );
};

export default SchedulePage;
