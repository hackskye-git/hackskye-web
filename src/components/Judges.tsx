
import React, { useState } from 'react';
import AnimatedText from './ui/AnimatedText';
import { cn } from '@/lib/utils';
import { Linkedin, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Mock data for judges
const judgesData = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    role: 'AI Research Lead',
    company: 'TechInnovate Labs',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
    linkedin: 'https://linkedin.com',
    bio: 'Leading AI researcher with over 10 years of experience in computer vision and machine learning applications.'
  },
  {
    id: 2,
    name: 'Vikram Mehta',
    role: 'Founder & CEO',
    company: 'CodeFuture',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: 'https://linkedin.com',
    bio: 'Serial entrepreneur who has successfully exited two tech startups in the B2B SaaS space.'
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'CTO',
    company: 'Innovate.io',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    linkedin: 'https://linkedin.com',
    bio: 'Technical leader specializing in scalable architecture and cloud-native solutions.'
  },
  {
    id: 4,
    name: 'Rajesh Kumar',
    role: 'Professor',
    company: 'IIT Bangalore',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    linkedin: 'https://linkedin.com',
    bio: 'Computer Science professor with research focus on distributed systems and blockchain technology.'
  },
  {
    id: 5,
    name: 'Meera Desai',
    role: 'VP of Engineering',
    company: 'TechGiant India',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    linkedin: 'https://linkedin.com',
    bio: 'Engineering leader who has scaled tech teams from 10 to 200+ engineers at multiple unicorn startups.'
  },
  {
    id: 6,
    name: 'Arjun Reddy',
    role: 'Investment Partner',
    company: 'Nexus Ventures',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    linkedin: 'https://linkedin.com',
    bio: 'Venture capitalist focused on early-stage investments in AI, blockchain, and developer tools.'
  },
];

interface JudgeCardProps {
  judge: typeof judgesData[0];
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const JudgeCard = ({ judge, isActive, onClick, index }: JudgeCardProps) => {
  return (
    <div 
      className={cn(
        "h-full rounded-xl relative transition-all duration-300 transform cursor-pointer animate-fadeIn overflow-hidden",
        isActive 
          ? "glass-card shadow-glow-secondary border-hackathon-secondary scale-105" 
          : "glass-card hover:shadow-glow-primary border-hackathon-border"
      )}
      onClick={onClick}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-full p-5 flex flex-col">
        <div className="relative w-full pt-[100%] mb-4 rounded-lg overflow-hidden">
          <img 
            src={judge.image} 
            alt={judge.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hackathon-card-dark via-transparent to-transparent"></div>
        </div>
        
        <h3 className="text-xl font-barlow font-bold text-white mb-1">{judge.name}</h3>
        <p className="text-hackathon-secondary font-medium text-sm mb-1">{judge.role}</p>
        <p className="text-hackathon-muted text-sm mb-4">{judge.company}</p>
        
        {isActive && (
          <p className="text-white/80 text-sm mb-4 animate-fadeIn line-clamp-3">
            {judge.bio}
          </p>
        )}
        
        <div className="mt-auto">
          <a 
            href={judge.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-hackathon-muted hover:text-hackathon-secondary transition-colors"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Judges = () => {
  const [activeJudge, setActiveJudge] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const judgesPerPage = 3; 
  
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - judgesPerPage));
  };
  
  const handleNext = () => {
    setStartIndex((prev) => Math.min(judgesData.length - judgesPerPage, prev + judgesPerPage));
  };
  
  const visibleJudges = judgesData.slice(startIndex, startIndex + judgesPerPage);
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + judgesPerPage < judgesData.length;

  return (
    <section id="judges" className="relative container mx-auto px-4 py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-hackathon-primary/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-hackathon-secondary/10 blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-3 px-4 py-2 rounded-full bg-hackathon-card-dark/80 backdrop-blur-sm border border-hackathon-border animate-fadeIn">
            <span className="text-xs md:text-sm font-medium text-white flex items-center justify-center gap-2">
              <Star size={14} className="text-hackathon-secondary" />
              <span>ELITE PANEL</span>
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-barlow font-bold mb-6 tracking-tight animate-slideUp" style={{ animationDelay: '100ms' }}>
            <AnimatedText
              text="Meet Our Judges"
              variant="gradient"
              as="span"
              delay={200}
            />
          </h2>
          
          <p className="text-hackathon-muted text-base md:text-lg animate-slideUp" style={{ animationDelay: '200ms' }}>
            Our panel features industry leaders, startup founders, and academic experts 
            who will evaluate your innovations and provide valuable feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visibleJudges.map((judge, index) => (
            <JudgeCard 
              key={judge.id}
              judge={judge}
              isActive={activeJudge === judge.id}
              onClick={() => setActiveJudge(activeJudge === judge.id ? null : judge.id)}
              index={index}
            />
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-10 animate-fadeIn" style={{ animationDelay: '500ms' }}>
          <button 
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300", 
              canGoPrev 
                ? "glass-card text-white hover:text-hackathon-secondary hover:shadow-glow-primary" 
                : "bg-hackathon-card-dark/50 text-hackathon-muted cursor-not-allowed"
            )}
            aria-label="Previous judges"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            disabled={!canGoNext}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300", 
              canGoNext 
                ? "glass-card text-white hover:text-hackathon-secondary hover:shadow-glow-primary" 
                : "bg-hackathon-card-dark/50 text-hackathon-muted cursor-not-allowed"
            )}
            aria-label="Next judges"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Judges;
