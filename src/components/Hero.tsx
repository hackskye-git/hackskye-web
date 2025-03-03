
import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from './ui/CountdownTimer';
import GlowingButton from './ui/GlowingButton';
import AnimatedText from './ui/AnimatedText';
import ParticleBackground from './ui/ParticleBackground';
import { Rocket, DollarSign } from 'lucide-react';

const Hero = () => {
  // Setting target date to June 6, 2026
  const targetDate = new Date("June 6, 2026 09:00:00");

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 pb-16 md:pt-20 px-4">
      <ParticleBackground />
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 md:mb-6 px-3 py-1.5 rounded-full bg-hackathon-dark-gray/50 backdrop-blur-sm border border-hackathon-purple/20">
            <span className="text-xs md:text-sm font-medium text-gray-300">
              <span className="text-hackathon-green font-bold">48-HOUR</span> CODING MARATHON • BANGALORE & CHANDIGARH, INDIA
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-barlow font-extrabold mb-4 tracking-tight">
            <AnimatedText
              text="HACKSKYE"
              variant="gradient"
              as="span"
              className="block"
            />
            <span className="block mt-1 text-glow text-white">HACKATHON 2026</span>
          </h1>

          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Join India's most futuristic hackathon where innovation meets technology. 
            Build, collaborate, and shape the future of tech in just 48 hours.
          </p>

          <CountdownTimer targetDate={targetDate} className="mb-8 md:mb-10" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowingButton
              variant="secondary"
              size="lg"
              className="sm:w-auto w-full"
              icon={<Rocket size={20} />}
              href="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header"
            >
              REGISTER NOW
            </GlowingButton>
            <Link to="/sponsor-us">
              <GlowingButton
                variant="primary"
                size="lg"
                className="sm:w-auto w-full"
                icon={<DollarSign size={20} />}
              >
                SPONSOR US
              </GlowingButton>
            </Link>
          </div>

          <div className="mt-8 md:mt-12 px-4 py-4 rounded-xl bg-hackathon-dark-gray/50 backdrop-blur-sm border border-hackathon-purple/20 inline-block">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-hackathon-blue font-barlow font-bold text-xl md:text-2xl text-glow">48h</div>
                <div className="text-gray-400 text-sm">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-hackathon-blue font-barlow font-bold text-xl md:text-2xl text-glow">Hybrid</div>
                <div className="text-gray-400 text-sm">Format</div>
              </div>
              <div className="text-center">
                <div className="text-hackathon-blue font-barlow font-bold text-xl md:text-2xl text-glow">₹900</div>
                <div className="text-gray-400 text-sm">Entry Fee</div>
              </div>
              <div className="text-center">
                <div className="text-hackathon-green font-barlow font-bold text-xl md:text-2xl animate-pulse">5 Winners</div>
                <div className="text-gray-400 text-sm">Selected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Glow effect at the bottom of the hero */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-hackathon-purple/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
