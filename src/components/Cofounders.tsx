
import React from 'react';
import AnimatedText from './ui/AnimatedText';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail } from 'lucide-react';

interface CofounderCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  github?: string;
  linkedin?: string;
  email?: string;
  className?: string;
}

const CofounderCard = ({ 
  name, 
  role, 
  image, 
  bio, 
  github, 
  linkedin, 
  email,
  className 
}: CofounderCardProps) => {
  return (
    <div className={cn(
      "bg-hackathon-dark-gray border border-hackathon-purple/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-neon-purple",
      className
    )}>
      <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-hackathon-dark-gray via-transparent to-transparent z-10"></div>
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-barlow font-bold text-white mb-1">{name}</h3>
        <p className="text-hackathon-blue font-medium mb-4">{role}</p>
        <p className="text-gray-400 mb-6">{bio}</p>
        
        <div className="flex items-center gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-hackathon-purple transition-colors">
              <Github size={20} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-hackathon-blue transition-colors">
              <Linkedin size={20} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="text-gray-400 hover:text-hackathon-green transition-colors">
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
    <section id="cofounders" className="relative overflow-hidden bg-hackathon-black py-24">
      {/* Diagonal dividers */}
      <div className="absolute top-0 left-0 w-full h-16 bg-hackathon-dark-gray/50 transform -skew-y-2 origin-top-left"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-hackathon-blue/10 backdrop-blur-sm border border-hackathon-blue/20">
            <span className="text-sm font-medium text-hackathon-green">THE TEAM</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-barlow font-bold mb-6">
            <AnimatedText
              text="Meet Our Cofounders"
              variant="gradient"
              as="span"
            />
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            The visionaries behind Hackskye who are passionate about fostering innovation 
            and building India's most impactful hackathon community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CofounderCard 
            name="Rishul Chanana"
            role="Co-Founder & CEO"
            image="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
            bio="Tech enthusiast and entrepreneur with a passion for building scalable platforms that empower India's next generation of innovators."
            github="https://github.com/"
            linkedin="https://linkedin.com/in/"
            email="hackskyehackathon@gmail.com"
          />
          
          <CofounderCard 
            name="Yash Kulkarni"
            role="Co-Founder & CTO" 
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            bio="Software developer and hackathon veteran with a vision to create accessible tech education opportunities across India."
            github="https://github.com/"
            linkedin="https://linkedin.com/in/"
            email="hackskyehackathon@gmail.com"
          />
        </div>
      </div>
      
      {/* Diagonal divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-hackathon-dark-gray/50 transform skew-y-2 origin-bottom-right"></div>
    </section>
  );
};

export default Cofounders;
