
import React from 'react';
import AnimatedText from './ui/AnimatedText';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, Users } from 'lucide-react';

interface CofounderCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  github?: string;
  linkedin?: string;
  email?: string;
  className?: string;
  delay?: number;
}

const CofounderCard = ({ 
  name, 
  role, 
  image, 
  bio, 
  github, 
  linkedin, 
  email,
  className,
  delay = 0
}: CofounderCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card hover-glow-primary animate-fadeIn group",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-hackathon-card-dark via-transparent to-transparent z-10"></div>
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-barlow font-bold text-white mb-1">{name}</h3>
        <p className="text-hackathon-secondary font-medium mb-3 sm:mb-4">{role}</p>
        <p className="text-hackathon-muted mb-5 sm:mb-6 text-sm sm:text-base">{bio}</p>
        
        <div className="flex items-center gap-3">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-hackathon-muted hover:text-hackathon-primary transition-colors p-2 rounded-full hover:bg-hackathon-card-light"
              aria-label={`${name}'s GitHub`}
            >
              <Github size={20} />
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-hackathon-muted hover:text-hackathon-secondary transition-colors p-2 rounded-full hover:bg-hackathon-card-light"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin size={20} />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`} 
              className="text-hackathon-muted hover:text-hackathon-success transition-colors p-2 rounded-full hover:bg-hackathon-card-light"
              aria-label={`Email ${name}`}
            >
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Cofounders = () => {
  return (
    <section id="cofounders" className="relative bg-hackathon-background py-16 sm:py-24 px-4">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-3 px-4 py-2 rounded-full bg-hackathon-card-dark backdrop-blur-sm border border-hackathon-border animate-fadeIn">
            <span className="text-xs md:text-sm font-medium flex items-center justify-center gap-2">
              <Users size={14} className="text-hackathon-success" />
              <span className="text-hackathon-success">THE TEAM</span>
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-barlow font-bold mb-6 tracking-tight animate-slideUp" style={{ animationDelay: '100ms' }}>
            <AnimatedText
              text="Meet Our Cofounders"
              variant="gradient"
              as="span"
              delay={200}
            />
          </h2>
          
          <p className="text-hackathon-muted text-base md:text-lg animate-slideUp" style={{ animationDelay: '300ms' }}>
            The visionaries behind Hackskye who are passionate about fostering innovation 
            and building India's most impactful hackathon community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CofounderCard 
            name="Rishul Chanana"
            role="Co-Founder & CEO"
            image="https://framerusercontent.com/images/Sl6vvnucbd1lurivx7LuHH9qxyI.png"
            bio="Tech enthusiast and entrepreneur with a passion for building scalable platforms that empower India's next generation of innovators."
            github="https://github.com/"
            linkedin="https://linkedin.com/in/"
            email="hackskyehackathon@gmail.com"
            delay={400}
          />
          
          <CofounderCard 
            name="Yash Kulkarni"
            role="Co-Founder & CTO" 
            image="https://framerusercontent.com/images/0Vy9IvevGaZqKtpfKw1I0XaRow.png"
            bio="Software developer and hackathon veteran with a vision to create accessible tech education opportunities across India."
            github="https://github.com/"
            linkedin="https://linkedin.com/in/"
            email="hackskyehackathon@gmail.com"
            delay={500}
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-hackathon-secondary/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-hackathon-accent/10 blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Cofounders;
