
import React from 'react';
import AnimatedText from './ui/AnimatedText';
import GlowingButton from './ui/GlowingButton';
import { cn } from '@/lib/utils';
import { DollarSign, Award, Briefcase } from 'lucide-react';

interface SponsorTierProps {
  tier: string;
  price: string;
  color: string;
  benefits: string[];
  icon: React.ReactNode;
  className?: string;
}

const SponsorTier = ({ tier, price, color, benefits, icon, className }: SponsorTierProps) => {
  const getBorderColor = () => {
    switch (color) {
      case 'platinum': return 'from-white via-gray-300 to-gray-400';
      case 'gold': return 'from-yellow-300 via-yellow-500 to-yellow-600';
      case 'silver': return 'from-gray-300 via-gray-400 to-gray-500';
      default: return 'from-gray-300 via-gray-400 to-gray-500';
    }
  };

  const getTextColor = () => {
    switch (color) {
      case 'platinum': return 'text-white';
      case 'gold': return 'text-yellow-400';
      case 'silver': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getIconBgColor = () => {
    switch (color) {
      case 'platinum': return 'bg-white/10';
      case 'gold': return 'bg-yellow-500/10';
      case 'silver': return 'bg-gray-400/10';
      default: return 'bg-gray-400/10';
    }
  };

  return (
    <div className={cn(
      "relative p-[1px] rounded-xl group transition-all duration-500",
      `bg-gradient-to-br ${getBorderColor()}`,
      className
    )}>
      <div className="bg-hackathon-dark-gray rounded-xl p-6 h-full flex flex-col">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center mb-4",
          getIconBgColor()
        )}>
          {icon}
        </div>
        
        <h3 className={cn("text-xl font-barlow font-bold mb-2", getTextColor())}>
          {tier}
        </h3>
        
        <div className="mb-6">
          <span className={cn("text-2xl font-barlow font-bold", getTextColor())}>
            {price}
          </span>
          <span className="text-gray-400 ml-1">+</span>
        </div>
        
        <ul className="space-y-3 mb-6 flex-grow">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className={cn("text-lg font-bold", getTextColor())}>✓</span>
              <span className="text-gray-400 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <GlowingButton
          variant={color === 'platinum' ? 'secondary' : color === 'gold' ? 'primary' : 'accent'}
          size="md"
          className="w-full mt-auto"
        >
          Become a Sponsor
        </GlowingButton>
      </div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-hackathon-blue/10 backdrop-blur-sm border border-hackathon-blue/20">
            <span className="text-sm font-medium text-hackathon-purple">PARTNERSHIP OPPORTUNITIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-barlow font-bold mb-6">
            <AnimatedText
              text="Sponsor Hackskye 2025"
              variant="gradient"
              as="span"
            />
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Support India's most innovative tech talent and position your brand at the 
            forefront of the next wave of technological advancement.
          </p>
        </div>

        <div className="bg-hackathon-dark-gray/50 backdrop-blur-sm border border-hackathon-purple/20 rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-barlow font-bold mb-4 text-white">
                Why Sponsor <span className="text-hackathon-blue">Hackskye?</span>
              </h3>
              <p className="text-gray-300 mb-6">
                As a sponsor, you'll gain direct access to a curated pool of tech talent, 
                increase your brand visibility, and demonstrate your commitment to 
                fostering innovation in India's tech ecosystem.
              </p>
              <ul className="space-y-4">
                {[
                  "Direct access to 500+ talented developers, designers and innovators",
                  "Logo placement on website, event materials, and livestream",
                  "Opportunity to provide mentors and judges from your organization",
                  "Recruiting pipeline for hiring top tech talent",
                  "Product demos and API/tool promotion to engaged developers"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-hackathon-green mt-1">
                      <Award size={18} />
                    </span>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-first md:order-last">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-hackathon-blue/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                  alt="Technology workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SponsorTier 
            tier="Platinum Sponsor" 
            price="₹2.5L"
            color="platinum"
            icon={<DollarSign size={24} className="text-white" />}
            benefits={[
              "Main stage branding with premium placement",
              "First-tier logo on all event materials",
              "5-minute speaking slot during opening ceremony",
              "Dedicated recruiting booth throughout event",
              "10 API credits for participants to use",
              "Option to judge final presentations",
              "Access to participant resume database",
              "Social media features across all channels"
            ]}
          />
          <SponsorTier 
            tier="Gold Sponsor" 
            price="₹1.5L"
            color="gold"
            icon={<Award size={24} className="text-yellow-400" />}
            benefits={[
              "Secondary logo placement on event materials",
              "Branded workshop or tech talk opportunity",
              "Recruiting table during designated hours",
              "5 API credits for participants to use",
              "Logo on hackathon t-shirts and swag",
              "Social media mentions and features",
              "Access to opt-in participant information",
              "Opportunity to provide prizes for winners"
            ]}
          />
          <SponsorTier 
            tier="Silver Sponsor" 
            price="₹75K"
            color="silver"
            icon={<Briefcase size={24} className="text-gray-400" />}
            benefits={[
              "Logo placement on event website",
              "Inclusion in sponsor slide deck",
              "Distribution of branded swag items",
              "Social media mention with company tag",
              "Access to event livestream recordings",
              "Option to send company representative",
              "Recognition during closing ceremony",
              "Post-event analytics and demographics"
            ]}
          />
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-barlow font-bold mb-6 text-hackathon-blue">
            Current Sponsors
          </h3>
          <div className="relative overflow-hidden py-10">
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-hackathon-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-hackathon-black to-transparent z-10"></div>
            
            <div className="flex animate-scroll-x">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 mx-8 w-36 h-20 bg-hackathon-dark-gray/50 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500 text-sm font-medium">
                    Your logo here
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-400 mt-6">
            Interested in becoming a sponsor? Contact us at <a href="mailto:sponsors@hackskye.com" className="text-hackathon-blue hover:text-hackathon-green transition-colors">sponsors@hackskye.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
