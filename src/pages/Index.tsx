
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Judges } from "@/components/Judges";
import { Schedule } from "@/components/Schedule";
import { Sponsors } from "@/components/Sponsors";
import { Registration } from "@/components/Registration";
import ChallengeGenerator from "@/components/ChallengeGenerator";
import AIChat from "@/components/AIChat";
import Testimonials from "@/components/Testimonials";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Judges />
        <Schedule />
        <Sponsors />
        <Registration />
        <ChallengeGenerator />
        <AIChat />
        <Testimonials />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
