
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";

// Pre-defined FAQ responses
const faqResponses: Record<string, string> = {
  "how do i register": "You can register by clicking the 'Register Now' button at the top of the page or scrolling to the registration section. Registration fee is ₹900 for offline participation and free for online participation.",
  "who can participate": "Hackskye is open to all students, professionals, and tech enthusiasts! Whether you're a beginner or experienced developer, designer, or business mind - everyone is welcome.",
  "what is the theme": "The theme for Hackskye 2025 is 'Hack India's Future' - it's an open-ended innovation challenge focused on creating solutions that can impact India's future.",
  "what is the prize": "Hackskye 2025 features exciting prizes across multiple categories! The total prize pool will be announced closer to the event, but winners can expect cash prizes, mentorship opportunities, and sponsor goodies.",
  "when is the hackathon": "Hackskye 2025 will take place in Bangalore in 2025. The exact dates will be announced soon, so stay tuned to our social media channels!",
  "how do i join discord": "You can join our Discord community by clicking on the Discord button in the Social Links section of our website. It's a great place to find teammates and get updates!",
  "is there a team size limit": "Yes, teams can have 2-4 members. You can also participate solo, but we encourage collaboration!",
  "do i need to know coding": "While coding skills are helpful, Hackskye welcomes participants with various skills! Designers, business strategists, and problem solvers are all valuable team members.",
  "can i participate remotely": "Yes! Hackskye 2025 is a hybrid event. You can participate either offline in Bangalore or online from anywhere in the world.",
  "what should i bring": "For offline participants: your laptop, charger, any hardware you plan to use, and your enthusiasm! Online participants just need a good internet connection and their hacking setup.",
  "help": "Here are some questions you can ask me:\n- How do I register?\n- Who can participate?\n- What is the theme?\n- What is the prize?\n- When is the hackathon?\n- How do I join Discord?\n- Is there a team size limit?\n- Do I need to know coding?\n- Can I participate remotely?\n- What should I bring?"
};

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi there! I'm HackBot 🤖 - Ask me anything about Hackskye 2025!", isBot: true },
    { text: "Type 'help' to see what questions I can answer.", isBot: true }
  ]);

  const handleSendMessage = () => {
    if (!query.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: query, isBot: false }]);

    // Process query and find response
    const processedQuery = query.toLowerCase().trim();
    
    let botResponse = "I don't have information about that yet. Please check back later or contact us through our social media!";
    
    // Check if the query contains any keywords
    for (const [keyword, response] of Object.entries(faqResponses)) {
      if (processedQuery.includes(keyword) || keyword.includes(processedQuery)) {
        botResponse = response;
        break;
      }
    }

    // Add bot response after a small delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 600);

    // Clear input
    setQuery("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section id="ai-chat" className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-hackathon-blue text-glow">
          Got Questions? Ask Our AI
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Our AI assistant can help answer common questions about Hackskye 2025
        </p>
      </div>

      {/* Chat button (fixed position) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-neon-blue ${
            isOpen ? 'bg-hackathon-blue text-black rotate-45' : 'bg-hackathon-blue/90 text-black hover:bg-hackathon-blue'
          }`}
        >
          {isOpen ? (
            <span className="text-2xl font-bold">×</span>
          ) : (
            <MessageCircle size={28} />
          )}
        </button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md z-40 transition-all duration-300 transform scale-in">
          <div className="bg-hackathon-dark-gray rounded-2xl overflow-hidden shadow-neon-blue border border-hackathon-blue/30">
            {/* Chat header */}
            <div className="bg-hackathon-blue text-black p-4 flex items-center">
              <MessageCircle className="mr-2" size={20} />
              <h3 className="font-bold">HackBot AI Assistant</h3>
            </div>

            {/* Messages container */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-hackathon-black/90">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-hackathon-dark-gray text-white rounded-tl-none'
                        : 'bg-hackathon-blue text-black rounded-tr-none'
                    }`}
                  >
                    {message.text.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Input area */}
            <div className="p-4 bg-hackathon-dark-gray border-t border-gray-700 flex">
              <Input
                type="text"
                placeholder="Ask something about Hackskye..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-grow bg-hackathon-black border-gray-700 text-white mr-2"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-hackathon-blue text-black hover:bg-hackathon-blue/80"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AIChat;
