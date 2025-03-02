
import { Twitter, Instagram, Linkedin, Github, MessageSquare, Phone } from "lucide-react";

const SocialLinks = () => {
  return (
    <section id="community" className="py-16 px-4 sm:px-6 bg-hackathon-dark-gray relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-hackathon-purple text-glow">
            Join the Community
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with us on social media and join our community channels to stay updated
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Social Media Links */}
          <div className="bg-hackathon-black p-8 rounded-lg shadow-neon-purple cyber-border">
            <div className="cyber-border-content">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-4 bg-hackathon-dark-gray rounded-lg hover:bg-hackathon-light-gray transition-colors"
                >
                  <Twitter className="text-hackathon-blue mb-2" size={32} />
                  <span className="text-sm text-gray-300">Twitter</span>
                </a>
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-4 bg-hackathon-dark-gray rounded-lg hover:bg-hackathon-light-gray transition-colors"
                >
                  <Instagram className="text-hackathon-purple mb-2" size={32} />
                  <span className="text-sm text-gray-300">Instagram</span>
                </a>
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-4 bg-hackathon-dark-gray rounded-lg hover:bg-hackathon-light-gray transition-colors"
                >
                  <Linkedin className="text-hackathon-blue mb-2" size={32} />
                  <span className="text-sm text-gray-300">LinkedIn</span>
                </a>
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-4 bg-hackathon-dark-gray rounded-lg hover:bg-hackathon-light-gray transition-colors"
                >
                  <Github className="text-white mb-2" size={32} />
                  <span className="text-sm text-gray-300">GitHub</span>
                </a>
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-4 bg-hackathon-dark-gray rounded-lg hover:bg-hackathon-light-gray transition-colors col-span-2"
                >
                  <div className="bg-hackathon-purple w-16 h-16 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xl">#</span>
                  </div>
                  <span className="text-sm text-gray-300">Follow #Hackskye2025</span>
                </a>
              </div>
            </div>
          </div>

          {/* Community Channels */}
          <div className="bg-hackathon-black p-8 rounded-lg shadow-neon-blue cyber-border">
            <div className="cyber-border-content">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                Community Channels
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 bg-hackathon-dark-gray rounded-lg hover:bg-hackathon-light-gray transition-colors"
                >
                  <MessageSquare className="text-hackathon-purple mr-4" size={32} />
                  <div>
                    <h4 className="font-bold text-white">Join our Discord</h4>
                    <p className="text-sm text-gray-400">Connect with participants, mentors and organizers</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 bg-hackathon-dark-gray rounded-lg hover:bg-hackathon-light-gray transition-colors"
                >
                  <Phone className="text-hackathon-green mr-4" size={32} />
                  <div>
                    <h4 className="font-bold text-white">WhatsApp Group</h4>
                    <p className="text-sm text-gray-400">Get real-time updates and announcements</p>
                  </div>
                </a>
                
                <div className="p-4 bg-hackathon-dark-gray rounded-lg">
                  <h4 className="font-bold text-white mb-2">Embedded Twitter Feed</h4>
                  <div className="bg-hackathon-black p-4 rounded border border-gray-700 h-32 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">[Twitter Feed with #Hackskye2025 would load here]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
