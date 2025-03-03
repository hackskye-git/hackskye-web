
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './ui/AnimatedText';
import { MapPin, Flag, Users, TrendingUp } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => (
  <div className={cn(
    "bg-hackathon-dark-gray p-5 sm:p-6 rounded-lg border border-hackathon-purple/20 transition-all duration-300 hover:shadow-neon-purple group",
    className
  )}>
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-hackathon-purple/20 flex items-center justify-center mb-4 text-hackathon-purple group-hover:bg-hackathon-purple/30 transition-colors">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-barlow font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-hackathon-dark-gray/50 relative overflow-hidden px-4">
      {/* Diagonal divider at the top */}
      <div className="absolute top-0 left-0 w-full h-16 bg-hackathon-black transform -skew-y-2 origin-top-left"></div>
      
      <div className="container mx-auto relative z-10 pt-16 sm:pt-24">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-hackathon-purple/10 backdrop-blur-sm border border-hackathon-purple/20">
            <span className="text-xs sm:text-sm font-medium text-hackathon-blue">ABOUT THE EVENT</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-barlow font-bold mb-4 sm:mb-6">
            <AnimatedText
              text="Hack India's Future"
              variant="gradient"
              as="span"
            />
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-lg">
            Hackskye is building a nationwide hackathon brand that is affordable, youth-driven, and designed to scale. 
            Our mission is to foster innovation and collaboration among India's brightest tech minds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
          <FeatureCard
            icon={<MapPin size={20} className="text-hackathon-purple" />}
            title="Bangalore 2026"
            description="Our first flagship event launches in Bangalore, the Silicon Valley of India."
          />
          <FeatureCard
            icon={<Flag size={20} className="text-hackathon-purple" />}
            title="Nation-wide Mission"
            description="Beginning in Bangalore with plans to expand to Delhi, Mumbai and Hyderabad by 2028."
          />
          <FeatureCard
            icon={<Users size={20} className="text-hackathon-purple" />}
            title="Youth-Driven"
            description="Created by young innovators for the next generation of tech talent across India."
          />
          <FeatureCard
            icon={<TrendingUp size={20} className="text-hackathon-purple" />}
            title="Scaling Vision"
            description="Our roadmap includes 10+ cities by 2031, becoming India's leading hackathon network."
          />
        </div>

        <div className="relative rounded-xl overflow-hidden mb-16 sm:mb-20">
          <div className="cyber-border rounded-xl">
            <div className="cyber-border-content grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-3xl font-barlow font-bold mb-3 sm:mb-4">
                  <AnimatedText
                    text="Why Hackskye?"
                    variant="glow"
                    as="span"
                  />
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  We're not just another hackathon - we're building a movement to democratize 
                  innovation across India. Our events combine cutting-edge tech challenges, 
                  industry mentorship, and a collaborative atmosphere.
                </p>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  {[
                    "Affordable participation fees with scholarship options",
                    "Hybrid format for both in-person and remote participants",
                    "Industry-relevant themes focused on solving India's challenges",
                    "Networking opportunities with tech leaders and investors",
                    "Prizes and recognition for the most innovative solutions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-hackathon-green text-lg font-bold">✓</span>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-first md:order-last">
                <div className="relative h-64 sm:h-72 md:h-auto rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-hackathon-purple/30 z-10"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-hackathon-purple/40 to-transparent z-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                    alt="Tech visionary event" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Diagonal divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-hackathon-black transform skew-y-2 origin-bottom-right"></div>
    </section>
  );
};

export default About;
