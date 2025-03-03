
import React from 'react';
import ParticleBackground from "@/components/ui/ParticleBackground";
import AnimatedText from "@/components/ui/AnimatedText";
import GlowingButton from "@/components/ui/GlowingButton";
import { Mail, Briefcase, Target, Award, Users } from 'lucide-react';

const SponsorUsPage = () => {
  return (
    <div className="min-h-screen bg-hackathon-black overflow-hidden relative pt-20">
      <ParticleBackground />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-hackathon-blue/10 backdrop-blur-sm border border-hackathon-blue/20">
            <span className="text-sm font-medium text-hackathon-green">PARTNERSHIP OPPORTUNITIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-barlow font-bold mb-6">
            <AnimatedText
              text="Sponsor Hackskye 2026"
              variant="gradient"
              as="span"
            />
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Partner with India's most forward-thinking hackathon and connect with the next generation of tech innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-hackathon-dark-gray border border-hackathon-purple/20 rounded-xl p-8 hover:shadow-neon-purple transition-all duration-300">
            <div className="bg-hackathon-purple/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Target className="text-hackathon-purple" size={28} />
            </div>
            <h3 className="text-xl font-barlow font-bold text-white mb-4">Reach Tech Talent</h3>
            <p className="text-gray-400">
              Connect with over 500+ passionate developers, designers, and problem-solvers from top universities across India.
            </p>
          </div>
          
          <div className="bg-hackathon-dark-gray border border-hackathon-blue/20 rounded-xl p-8 hover:shadow-neon-blue transition-all duration-300">
            <div className="bg-hackathon-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Briefcase className="text-hackathon-blue" size={28} />
            </div>
            <h3 className="text-xl font-barlow font-bold text-white mb-4">Brand Visibility</h3>
            <p className="text-gray-400">
              Showcase your brand to the tech community through our marketing channels, reaching 50,000+ impressions.
            </p>
          </div>
          
          <div className="bg-hackathon-dark-gray border border-hackathon-green/20 rounded-xl p-8 hover:shadow-neon-green transition-all duration-300">
            <div className="bg-hackathon-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Award className="text-hackathon-green" size={28} />
            </div>
            <h3 className="text-xl font-barlow font-bold text-white mb-4">Product Feedback</h3>
            <p className="text-gray-400">
              Get fresh perspectives on your products or challenges from creative minds working with cutting-edge technologies.
            </p>
          </div>
          
          <div className="bg-hackathon-dark-gray border border-hackathon-purple/20 rounded-xl p-8 hover:shadow-neon-purple transition-all duration-300">
            <div className="bg-hackathon-purple/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Users className="text-hackathon-purple" size={28} />
            </div>
            <h3 className="text-xl font-barlow font-bold text-white mb-4">Recruitment Pipeline</h3>
            <p className="text-gray-400">
              Identify top tech talent for your organization by observing participants in action as they solve real-world problems.
            </p>
          </div>
        </div>

        <div className="bg-hackathon-dark-gray/50 backdrop-blur-sm border border-hackathon-blue/20 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-barlow font-bold text-white mb-6 text-center">Sponsorship Packages</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-hackathon-black/50 border border-hackathon-purple/30 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <h4 className="font-barlow font-bold text-xl text-hackathon-purple mb-2">Silver</h4>
              <p className="text-2xl font-bold text-white mb-4">₹75,000</p>
              <ul className="space-y-2 mb-6 text-gray-400">
                <li className="flex items-center"><span className="text-hackathon-purple mr-2">•</span> Logo on website & event banner</li>
                <li className="flex items-center"><span className="text-hackathon-purple mr-2">•</span> Social media mentions</li>
                <li className="flex items-center"><span className="text-hackathon-purple mr-2">•</span> 2 recruiting booth slots</li>
                <li className="flex items-center"><span className="text-hackathon-purple mr-2">•</span> Distribution of swag items</li>
              </ul>
            </div>
            
            <div className="bg-hackathon-black/50 border border-hackathon-blue/30 rounded-lg p-6 transform scale-105 shadow-neon-blue">
              <div className="bg-hackathon-blue text-black text-xs font-bold uppercase py-1 px-3 rounded absolute -mt-9 left-1/2 transform -translate-x-1/2">Popular</div>
              <h4 className="font-barlow font-bold text-xl text-hackathon-blue mb-2">Gold</h4>
              <p className="text-2xl font-bold text-white mb-4">₹150,000</p>
              <ul className="space-y-2 mb-6 text-gray-400">
                <li className="flex items-center"><span className="text-hackathon-blue mr-2">•</span> All Silver benefits</li>
                <li className="flex items-center"><span className="text-hackathon-blue mr-2">•</span> Workshop/tech talk slot</li>
                <li className="flex items-center"><span className="text-hackathon-blue mr-2">•</span> Branded challenge prize</li>
                <li className="flex items-center"><span className="text-hackathon-blue mr-2">•</span> Judge panel participation</li>
                <li className="flex items-center"><span className="text-hackathon-blue mr-2">•</span> Access to participant resumes</li>
              </ul>
            </div>
            
            <div className="bg-hackathon-black/50 border border-hackathon-green/30 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <h4 className="font-barlow font-bold text-xl text-hackathon-green mb-2">Platinum</h4>
              <p className="text-2xl font-bold text-white mb-4">₹300,000</p>
              <ul className="space-y-2 mb-6 text-gray-400">
                <li className="flex items-center"><span className="text-hackathon-green mr-2">•</span> All Gold benefits</li>
                <li className="flex items-center"><span className="text-hackathon-green mr-2">•</span> Premium logo placement</li>
                <li className="flex items-center"><span className="text-hackathon-green mr-2">•</span> Main stage presentation</li>
                <li className="flex items-center"><span className="text-hackathon-green mr-2">•</span> Custom branded activity</li>
                <li className="flex items-center"><span className="text-hackathon-green mr-2">•</span> First access to top projects</li>
                <li className="flex items-center"><span className="text-hackathon-green mr-2">•</span> Post-event hiring mixer</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-barlow font-bold text-white mb-6">Get in Touch</h3>
          <p className="text-gray-300 mb-8">
            Interested in sponsoring Hackskye 2026? Contact our sponsorship team to discuss custom packages that align with your organization's goals.
          </p>
          <GlowingButton 
            variant="primary" 
            size="lg"
            icon={<Mail />}
            href="mailto:hackskyehackathon@gmail.com"
          >
            Contact Sponsorship Team
          </GlowingButton>
        </div>
      </main>
    </div>
  );
};

export default SponsorUsPage;
