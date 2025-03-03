
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './ui/AnimatedText';
import { MapPin, Flag, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, className, delay = 0 }: FeatureCardProps) => (
  <div 
    className={cn(
      "glass-card p-6 hover-scale hover-glow-primary animate-fadeIn",
      className
    )}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-12 h-12 rounded-full bg-hackathon-card-light flex items-center justify-center mb-4 text-hackathon-secondary">
      {icon}
    </div>
    <h3 className="text-xl font-barlow font-bold text-white mb-3">{title}</h3>
    <p className="text-hackathon-muted text-sm md:text-base">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-radial from-hackathon-background to-hackathon-card-dark overflow-hidden">
      <div className="container mx-auto relative z-10 px-4 py-16 md:py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-3 px-4 py-2 rounded-full bg-hackathon-card-dark backdrop-blur-sm border border-hackathon-border animate-fadeIn">
            <span className="text-xs md:text-sm font-medium text-hackathon-secondary">ABOUT THE EVENT</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-barlow font-bold mb-6 tracking-tight animate-slideUp" style={{ animationDelay: '100ms' }}>
            <AnimatedText
              text="Hack India's Future"
              variant="gradient"
              as="span"
              delay={200}
            />
          </h2>
          
          <p className="text-hackathon-muted text-base md:text-lg animate-slideUp" style={{ animationDelay: '300ms' }}>
            Hackskye is building a nationwide hackathon brand that is affordable, youth-driven, and designed to scale. 
            Our mission is to foster innovation and collaboration among India's brightest tech minds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<MapPin size={24} />}
            title="Bangalore 2026"
            description="Our first flagship event launches in Bangalore, the Silicon Valley of India."
            delay={200}
          />
          <FeatureCard
            icon={<Flag size={24} />}
            title="Nation-wide Mission"
            description="Beginning in Bangalore with plans to expand to Delhi, Mumbai and Hyderabad by 2028."
            delay={300}
          />
          <FeatureCard
            icon={<Users size={24} />}
            title="Youth-Driven"
            description="Created by young innovators for the next generation of tech talent across India."
            delay={400}
          />
          <FeatureCard
            icon={<TrendingUp size={24} />}
            title="Scaling Vision"
            description="Our roadmap includes 10+ cities by 2031, becoming India's leading hackathon network."
            delay={500}
          />
        </div>

        <div className="animated-border rounded-xl mb-16 sm:mb-20 animate-fadeIn" style={{ animationDelay: '600ms' }}>
          <div className="glass-card p-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-barlow font-bold mb-4">
                <AnimatedText
                  text="Why Hackskye?"
                  variant="gradient-secondary"
                  as="span"
                  delay={700}
                />
              </h3>
              <p className="text-hackathon-muted mb-6 text-sm md:text-base">
                We're not just another hackathon - we're building a movement to democratize 
                innovation across India. Our events combine cutting-edge tech challenges, 
                industry mentorship, and a collaborative atmosphere.
              </p>
              <ul className="space-y-3 text-sm md:text-base">
                {[
                  "Affordable participation fees with scholarship options",
                  "Hybrid format for both in-person and remote participants",
                  "Industry-relevant themes focused on solving India's challenges",
                  "Networking opportunities with tech leaders and investors",
                  "Prizes and recognition for the most innovative solutions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-hackathon-success shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-first md:order-last">
              <div className="relative h-64 sm:h-80 md:h-auto rounded-lg overflow-hidden animated-border">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="Tech visionary event" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-hackathon-primary/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-hackathon-primary/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-hackathon-secondary/10 blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default About;
