
import React from 'react';
import AnimatedText from './ui/AnimatedText';
import GlowingButton from './ui/GlowingButton';
import { cn } from '@/lib/utils';
import { Users, UserCheck, UserPlus } from 'lucide-react';

interface RegistrationCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  icon: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

const RegistrationCard = ({ 
  title, 
  description, 
  buttonText,
  buttonLink,
  icon, 
  className,
  variant = 'primary'
}: RegistrationCardProps) => {
  return (
    <div className={cn(
      "bg-hackathon-dark-gray border border-hackathon-purple/20 rounded-xl p-6 flex flex-col h-full",
      className
    )}>
      <div className="mb-6 w-12 h-12 rounded-full bg-hackathon-purple/20 flex items-center justify-center">
        {icon}
      </div>
      
      <h3 className="text-xl font-barlow font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{description}</p>
      
      <GlowingButton 
        variant={variant} 
        size="md" 
        className="w-full mt-auto"
        href={buttonLink}
      >
        {buttonText}
      </GlowingButton>
    </div>
  );
};

const Registration = () => {
  return (
    <section id="register" className="bg-hackathon-dark-gray/50 relative overflow-hidden">
      {/* Diagonal divider at the top */}
      <div className="absolute top-0 left-0 w-full h-16 bg-hackathon-black transform -skew-y-2 origin-top-left"></div>
      
      <div className="container mx-auto relative z-10 pt-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-hackathon-green/10 backdrop-blur-sm border border-hackathon-green/20">
            <span className="text-sm font-medium text-hackathon-purple">JOIN THE REVOLUTION</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-barlow font-bold mb-6">
            <AnimatedText
              text="Register for Hackskye 2026"
              variant="gradient"
              as="span"
            />
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Whether you're a participant, mentor, judge, or volunteer, there's a place for you at Hackskye 2026.
            Join us and be part of India's most innovative hackathon experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <RegistrationCard
            title="Participate as Hacker"
            description="Register to join as a participant in the hackathon. Build innovative projects, compete for prizes, and connect with fellow tech enthusiasts."
            buttonText="Register Now"
            buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header"
            icon={<Users size={24} className="text-hackathon-purple" />}
            variant="secondary"
          />
          <RegistrationCard
            title="Apply as Mentor/Judge"
            description="Share your expertise as a mentor or judge. Guide participants, provide feedback, and help select the winning projects."
            buttonText="Apply Now"
            buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header"
            icon={<UserCheck size={24} className="text-hackathon-purple" />}
            variant="primary"
          />
          <RegistrationCard
            title="Join as Volunteer"
            description="Be part of the organizing team. Help with logistics, participant support, and make the event run smoothly."
            buttonText="Volunteer"
            buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header"
            icon={<UserPlus size={24} className="text-hackathon-purple" />}
            variant="accent"
          />
        </div>

        <div className="bg-hackathon-dark-gray/70 backdrop-blur-sm border border-hackathon-purple/20 rounded-xl p-6 md:p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-barlow font-bold mb-4 text-white">
                Registration <span className="text-hackathon-green">Details</span>
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-barlow font-medium text-hackathon-blue mb-2">
                    Event Dates
                  </h4>
                  <p className="text-gray-300">
                    June 6-8, 2026 (48-hour hackathon)
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-barlow font-medium text-hackathon-blue mb-2">
                    Participation Fee
                  </h4>
                  <p className="text-gray-300">
                    ₹900 for in-person participation (includes meals, swag, and workspace)
                    <br />
                    Free for online-only participants
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-barlow font-medium text-hackathon-blue mb-2">
                    Eligibility
                  </h4>
                  <p className="text-gray-300">
                    Open to all university students, recent graduates, and tech enthusiasts.
                    No experience level requirements – beginners welcome!
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-barlow font-medium text-hackathon-blue mb-2">
                    Team Size
                  </h4>
                  <p className="text-gray-300">
                    Teams of 2-4 members. Solo participants will have opportunities to join teams.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-hackathon-black/50 backdrop-blur-sm rounded-xl p-6 border border-hackathon-green/20 shadow-neon-green">
                <h4 className="text-xl font-barlow font-bold text-hackathon-green mb-4">
                  Register before May 1, 2026
                </h4>
                <p className="text-gray-300 mb-6">
                  Early bird registrations get a special discount, exclusive workshops access, and premium swag items.
                </p>
                <GlowingButton 
                  variant="secondary" 
                  size="lg" 
                  className="w-full"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header"
                >
                  Register Now
                </GlowingButton>
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

export default Registration;
