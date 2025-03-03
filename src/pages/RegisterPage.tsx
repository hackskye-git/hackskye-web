
import Registration from "@/components/Registration";
import ParticleBackground from "@/components/ui/ParticleBackground";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative pt-20">
      <ParticleBackground />
      <main>
        <Registration />
      </main>
    </div>
  );
};

export default RegisterPage;
