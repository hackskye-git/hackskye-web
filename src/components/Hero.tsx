
import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from './ui/CountdownTimer';
import GlowingButton from './ui/GlowingButton';
import AnimatedText from './ui/AnimatedText';
import ParticleBackground from './ui/ParticleBackground';
import { Rocket, DollarSign, Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  // Setting target date to June 6, 2026
  const targetDate = new Date("June 6, 2026 09:00:00");

  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center pt-16 pb-16 md:pt-20 px-4">
      <ParticleBackground />
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 subtle-grid opacity-10 pointer-events-none"></div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Label */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-hackathon-card-dark/80 backdrop-blur-sm border border-hackathon-border animate-fadeIn">
            <span className="text-xs md:text-sm font-medium text-white flex items-center justify-center gap-2 md:gap-3">
              <span className="text-hackathon-success font-semibold">48-HOUR HACKATHON</span>
              <span className="hidden md:inline-block h-1 w-1 rounded-full bg-hackathon-muted"></span>
              <span className="flex items-center gap-1">
                <MapPin size={14} className="text-hackathon-accent" />
                BANGALORE & CHANDIGARH
              </span>
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2 mb-6 animate-slideUp" style={{ animationDelay: '200ms' }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-barlow font-extrabold tracking-tight">
              <AnimatedText
                text="HACKSKYE"
                variant="gradient"
                as="span"
                className="block leading-tight"
                delay={300}
              />
              <span className="block mt-1 text-white leading-tight">HACKATHON 2026</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base md:text-xl text-hackathon-muted mb-8 md:mb-10 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '400ms' }}>
            Join India's most futuristic hackathon where innovation meets technology. 
            Build, collaborate, and shape the future of tech in just 48 hours.
          </p>

          {/* Countdown */}
          <div className="animate-slideUp" style={{ animationDelay: '500ms' }}>
            <CountdownTimer targetDate={targetDate} className="mb-10 md:mb-12" />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 animate-slideUp" style={{ animationDelay: '600ms' }}>
            <GlowingButton
              variant="secondary"
              size="lg"
              className="sm:w-auto w-full"
              icon={<Rocket size={20} />}
              href="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header"
              animated
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

          {/* Key features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '700ms' }}>
            <div className="glass-card p-4 md:p-5 flex flex-col items-center hover-scale hover-glow-primary">
              <Calendar size={24} className="text-hackathon-secondary mb-2" />
              <span className="text-hackathon-secondary font-barlow font-bold text-xl">48h</span>
              <span className="text-xs text-hackathon-muted mt-1">Duration</span>
            </div>
            
            <div className="glass-card p-4 md:p-5 flex flex-col items-center hover-scale hover-glow-secondary">
              <MapPin size={24} className="text-hackathon-accent mb-2" />
              <span className="text-hackathon-accent font-barlow font-bold text-xl">Hybrid</span>
              <span className="text-xs text-hackathon-muted mt-1">Format</span>
            </div>
            
            <div className="glass-card p-4 md:p-5 flex flex-col items-center hover-scale hover-glow-accent">
              <DollarSign size={24} className="text-hackathon-primary mb-2" />
              <span className="text-hackathon-primary font-barlow font-bold text-xl">₹900</span>
              <span className="text-xs text-hackathon-muted mt-1">Entry Fee</span>
            </div>
            
            <div className="glass-card p-4 md:p-5 flex flex-col items-center hover-scale hover-glow-success">
              <Users size={24} className="text-hackathon-success mb-2" />
              <span className="text-hackathon-success font-barlow font-bold text-xl">5 Winners</span>
              <span className="text-xs text-hackathon-muted mt-1">Selected</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-20 w-64 h-64 rounded-full bg-hackathon-primary/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -top-10 -right-20 w-64 h-64 rounded-full bg-hackathon-secondary/10 blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;
