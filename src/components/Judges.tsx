
import React, { useState } from 'react';
import AnimatedText from './ui/AnimatedText';
import { cn } from '@/lib/utils';
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

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
}

const JudgeCard = ({ judge, isActive, onClick }: JudgeCardProps) => {
  return (
    <div 
      className={cn(
        "h-full rounded-xl relative group transition-all duration-300 transform cursor-pointer",
        isActive 
          ? "bg-hackathon-dark-gray border-2 border-hackathon-blue scale-105 shadow-neon-blue" 
          : "bg-hackathon-dark-gray/50 border border-hackathon-purple/20 hover:border-hackathon-purple/40"
      )}
      onClick={onClick}
    >
      <div className="h-full p-5 flex flex-col">
        <div className="relative w-full pt-[100%] mb-4 rounded-lg overflow-hidden">
          <img 
            src={judge.image} 
            alt={judge.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hackathon-dark-gray via-transparent to-transparent"></div>
        </div>
        
        <h3 className="text-xl font-barlow font-bold text-white mb-1">{judge.name}</h3>
        <p className="text-hackathon-blue font-medium text-sm mb-2">{judge.role}</p>
        <p className="text-gray-400 text-sm mb-4">{judge.company}</p>
        
        {isActive && (
          <p className="text-gray-300 text-sm mb-4 animate-fadeIn line-clamp-3">
            {judge.bio}
          </p>
        )}
        
        <div className="mt-auto">
          <a 
            href={judge.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-hackathon-blue transition-colors"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      
      {!isActive && (
        <div className="absolute inset-0 bg-hackathon-black/5 group-hover:bg-transparent transition-colors"></div>
      )}
    </div>
  );
};

const Judges = () => {
  const [activeJudge, setActiveJudge] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const judgesPerPage = Math.min(judgesData.length, 6);
  
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
    <section id="judges" className="relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-hackathon-blue/10 backdrop-blur-sm border border-hackathon-blue/20">
            <span className="text-sm font-medium text-hackathon-green">ELITE PANEL</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-barlow font-bold mb-6">
            <AnimatedText
              text="Meet Our Judges"
              variant="glow"
              as="span"
            />
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our panel features industry leaders, startup founders, and academic experts 
            who will evaluate your innovations and provide valuable feedback.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {visibleJudges.map((judge) => (
              <JudgeCard 
                key={judge.id}
                judge={judge}
                isActive={activeJudge === judge.id}
                onClick={() => setActiveJudge(activeJudge === judge.id ? null : judge.id)}
              />
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300", 
                canGoPrev 
                  ? "bg-hackathon-dark-gray text-white hover:bg-hackathon-purple hover:shadow-neon-purple" 
                  : "bg-hackathon-dark-gray/50 text-gray-500 cursor-not-allowed"
              )}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              disabled={!canGoNext}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300", 
                canGoNext 
                  ? "bg-hackathon-dark-gray text-white hover:bg-hackathon-purple hover:shadow-neon-purple" 
                  : "bg-hackathon-dark-gray/50 text-gray-500 cursor-not-allowed"
              )}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judges;
