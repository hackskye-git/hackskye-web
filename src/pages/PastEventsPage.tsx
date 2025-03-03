
import React from 'react';
import ParticleBackground from "@/components/ui/ParticleBackground";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowRight } from 'lucide-react';

interface EventCardProps {
  title: string;
  year: string;
  image: string;
  description: string;
  winners: string[];
  participants: number;
  className?: string;
}

const EventCard = ({ title, year, image, description, winners, participants, className }: EventCardProps) => (
  <div className={`bg-hackathon-dark-gray border border-hackathon-purple/20 rounded-xl overflow-hidden hover:shadow-neon-purple transition-all duration-300 ${className}`}>
    <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-hackathon-dark-gray to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <span className="bg-hackathon-purple/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">{year}</span>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-2xl font-barlow font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-hackathon-blue font-medium mb-2">Winners:</h4>
        <ul className="space-y-1">
          {winners.map((winner, index) => (
            <li key={index} className="text-gray-300 text-sm">{winner}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">{participants} Participants</span>
        <a href="#" className="text-hackathon-green flex items-center gap-1 text-sm hover:underline">
          View Gallery <ArrowRight size={14} />
        </a>
      </div>
    </div>
  </div>
);

const PastEventsPage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative pt-20">
      <ParticleBackground />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-hackathon-blue/10 backdrop-blur-sm border border-hackathon-blue/20">
            <span className="text-sm font-medium text-hackathon-green">OUR LEGACY</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-barlow font-bold mb-6">
            <AnimatedText
              text="Past Hackskye Events"
              variant="gradient"
              as="span"
            />
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore the history of Hackskye hackathons and the amazing projects that have emerged from our community over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <EventCard
            title="Hackskye 2025"
            year="2025"
            image="https://framerusercontent.com/images/1CJLz6L4d1q2DB2zKmPKgwKON1o.jpg"
            description="Focused on AI innovations for sustainable development, with over 20 teams creating impactful solutions."
            winners={["Team Neurodrive: AI-powered sustainable transport", "Team EcoScan: Waste classification AI", "Team Aqua: Water conservation platform"]}
            participants={450}
          />
          
          <EventCard
            title="Hackskye 2024"
            year="2024"
            image="https://framerusercontent.com/images/bVII5kH7G1GrsfjeEHprYKIZFrs.jpg"
            description="Our inaugural hackathon centered on blockchain and Web3 technologies for social impact."
            winners={["Team BlockVote: Decentralized voting system", "Team MedChain: Medical records on blockchain", "Team CryptoAid: Transparent charity platform"]}
            participants={320}
          />
          
          <EventCard
            title="Mini-Hackskye"
            year="2024"
            image="https://framerusercontent.com/images/9kbtW4sY4W57pV1EXaADKrI9k4.jpg"
            description="A 24-hour special edition focusing on mobile app development for local challenges in Bangalore."
            winners={["Team LocalEats: Restaurant discovery app", "Team TrafficSense: Urban mobility solution", "Team Artisans: Handicraft marketplace"]}
            participants={180}
          />
        </div>
        
        <div className="text-center mb-16">
          <h3 className="text-2xl font-barlow font-bold text-white mb-4">By The Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-hackathon-dark-gray/60 border border-hackathon-purple/20 rounded-xl p-6">
              <div className="text-3xl font-barlow font-bold text-hackathon-purple mb-2">950+</div>
              <div className="text-gray-400 text-sm">Participants</div>
            </div>
            
            <div className="bg-hackathon-dark-gray/60 border border-hackathon-blue/20 rounded-xl p-6">
              <div className="text-3xl font-barlow font-bold text-hackathon-blue mb-2">180+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            
            <div className="bg-hackathon-dark-gray/60 border border-hackathon-green/20 rounded-xl p-6">
              <div className="text-3xl font-barlow font-bold text-hackathon-green mb-2">₹15L+</div>
              <div className="text-gray-400 text-sm">In Prizes</div>
            </div>
            
            <div className="bg-hackathon-dark-gray/60 border border-hackathon-purple/20 rounded-xl p-6">
              <div className="text-3xl font-barlow font-bold text-hackathon-purple mb-2">30+</div>
              <div className="text-gray-400 text-sm">Sponsors</div>
            </div>
          </div>
        </div>
        
        <div className="cyber-border rounded-xl overflow-hidden">
          <div className="cyber-border-content p-8 text-center">
            <h3 className="text-2xl font-barlow font-bold text-hackathon-green mb-4">Join Us for Hackskye 2026</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be part of the next chapter in Hackskye's legacy. Register now for our biggest hackathon yet!
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header" 
              className="inline-block bg-hackathon-blue hover:bg-hackathon-blue/90 text-black font-barlow font-bold py-3 px-8 rounded-md shadow-neon-blue transition-all duration-300"
            >
              Register for Hackskye 2026
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PastEventsPage;
