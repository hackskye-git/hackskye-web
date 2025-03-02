
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  type: "participant" | "judge" | "sponsor";
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aryan Sharma",
    role: "Winner, 2024",
    company: "NIT Surathkal",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Hackskye was an incredible experience! The mentors were super helpful, and the atmosphere was electric. Our team built an AI-powered healthcare assistant and ended up winning first place. Can't wait for 2025!",
    type: "participant"
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Participant",
    company: "Manipal Institute of Technology",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "As a first-time hackathon participant, I was nervous, but the Hackskye team made everyone feel welcome. The workshops before the main event really helped me prepare, and I found an amazing team to work with!",
    type: "participant"
  },
  {
    id: 3,
    name: "Vikram Reddy",
    role: "CTO",
    company: "TechFusion India",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    quote: "Being a judge at Hackskye was inspiring. The quality of projects was exceptional, with students tackling real-world problems using cutting-edge technology. We ended up hiring two participants from the event!",
    type: "judge"
  },
  {
    id: 4,
    name: "Anjali Desai",
    role: "Sponsor Lead",
    company: "CloudScale Solutions",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    quote: "Sponsoring Hackskye gave us incredible access to top tech talent across India. The branding exposure was excellent, and we connected with motivated students who are now part of our internship program.",
    type: "sponsor"
  },
  {
    id: 5,
    name: "Rohan Kapoor",
    role: "Finalist",
    company: "IIT Bombay",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "The 48-hour hackathon pushed our limits in the best way possible. The mentors provided valuable guidance, and the networking opportunities were fantastic. Made great connections and learned so much!",
    type: "participant"
  },
  {
    id: 6,
    name: "Nisha Patel",
    role: "Innovation Director",
    company: "Future Labs",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote: "Hackskye stands out from other hackathons with its perfect balance of competition and collaboration. As a sponsor, we were impressed by the organization and the talent pool. Definitely returning for 2025!",
    type: "sponsor"
  }
];

const Testimonials = () => {
  const [activeType, setActiveType] = useState<"all" | "participant" | "judge" | "sponsor">("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = activeType === "all" 
    ? testimonials 
    : testimonials.filter(t => t.type === activeType);

  const nextTestimonial = () => {
    setCurrentIndex(current => 
      current === filteredTestimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(current => 
      current === 0 ? filteredTestimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear what participants, judges, and sponsors have to say about Hackskye
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button 
            onClick={() => { setActiveType("all"); setCurrentIndex(0); }}
            className={`px-6 py-2 rounded-full transition-all ${
              activeType === "all" 
                ? "bg-hackathon-purple text-white shadow-neon-purple" 
                : "bg-hackathon-dark-gray text-gray-300 hover:bg-hackathon-light-gray"
            }`}
          >
            All Stories
          </button>
          <button 
            onClick={() => { setActiveType("participant"); setCurrentIndex(0); }}
            className={`px-6 py-2 rounded-full transition-all ${
              activeType === "participant" 
                ? "bg-hackathon-green text-black shadow-neon-green" 
                : "bg-hackathon-dark-gray text-gray-300 hover:bg-hackathon-light-gray"
            }`}
          >
            Participants
          </button>
          <button 
            onClick={() => { setActiveType("judge"); setCurrentIndex(0); }}
            className={`px-6 py-2 rounded-full transition-all ${
              activeType === "judge" 
                ? "bg-hackathon-blue text-black shadow-neon-blue" 
                : "bg-hackathon-dark-gray text-gray-300 hover:bg-hackathon-light-gray"
            }`}
          >
            Judges
          </button>
          <button 
            onClick={() => { setActiveType("sponsor"); setCurrentIndex(0); }}
            className={`px-6 py-2 rounded-full transition-all ${
              activeType === "sponsor" 
                ? "bg-hackathon-purple text-white shadow-neon-purple" 
                : "bg-hackathon-dark-gray text-gray-300 hover:bg-hackathon-light-gray"
            }`}
          >
            Sponsors
          </button>
        </div>

        {/* Testimonial card */}
        {filteredTestimonials.length > 0 && (
          <div className="cyber-border rounded-xl max-w-4xl mx-auto">
            <div className="cyber-border-content p-8 md:p-12 relative">
              <Quote className="absolute top-8 left-8 text-hackathon-blue opacity-25" size={60} />
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-hackathon-purple shadow-neon-purple">
                  <img 
                    src={filteredTestimonials[currentIndex].image} 
                    alt={filteredTestimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-xl md:text-2xl italic mb-6 text-gray-200">
                    "{filteredTestimonials[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-hackathon-purple">
                      {filteredTestimonials[currentIndex].name}
                    </h4>
                    <p className="text-hackathon-blue">
                      {filteredTestimonials[currentIndex].role}, {filteredTestimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-hackathon-dark-gray flex items-center justify-center hover:bg-hackathon-light-gray transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-hackathon-dark-gray flex items-center justify-center hover:bg-hackathon-light-gray transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
