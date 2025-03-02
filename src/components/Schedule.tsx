
import React, { useState } from 'react';
import AnimatedText from './ui/AnimatedText';
import { cn } from '@/lib/utils';
import { Calendar, Clock, Users, Video } from 'lucide-react';

const scheduleData = [
  {
    day: 'Day 1',
    date: 'April 1, 2025',
    events: [
      {
        time: '09:00 AM - 10:00 AM',
        title: 'Registration & Check-in',
        description: 'Participants arrive, receive badges and swag',
        location: 'Main Hall',
        type: 'offline'
      },
      {
        time: '10:00 AM - 11:00 AM',
        title: 'Opening Ceremony',
        description: 'Welcome speech, rules explanation, and theme reveal',
        location: 'Main Stage + Zoom',
        type: 'hybrid'
      },
      {
        time: '11:00 AM - 12:00 PM',
        title: 'Team Formation',
        description: 'Find teammates and register your team',
        location: 'Collaboration Space + Discord',
        type: 'hybrid'
      },
      {
        time: '12:00 PM',
        title: 'Hacking Begins!',
        description: 'Official start of the 48-hour coding marathon',
        location: 'Everywhere',
        type: 'hybrid'
      },
      {
        time: '02:00 PM - 03:00 PM',
        title: 'Workshop: AI Development',
        description: 'Learn the latest AI techniques for your projects',
        location: 'Workshop Room + Zoom',
        type: 'hybrid'
      },
      {
        time: '06:00 PM - 07:00 PM',
        title: 'Mentor Sessions',
        description: 'One-on-one sessions with industry experts',
        location: 'Mentoring Booths + Discord',
        type: 'hybrid'
      },
    ]
  },
  {
    day: 'Day 2',
    date: 'April 2, 2025',
    events: [
      {
        time: 'All Day',
        title: 'Hacking Continues',
        description: 'Teams work on their projects throughout the day',
        location: 'Hacking Space + Remote',
        type: 'hybrid'
      },
      {
        time: '10:00 AM - 11:00 AM',
        title: 'Workshop: Pitch Perfect',
        description: 'Learn how to present your project effectively',
        location: 'Workshop Room + Zoom',
        type: 'hybrid'
      },
      {
        time: '02:00 PM - 03:00 PM',
        title: 'Technical Check-in',
        description: 'Mandatory progress check with mentors',
        location: 'Mentoring Booths + Discord',
        type: 'hybrid'
      },
      {
        time: '08:00 PM - 09:00 PM',
        title: 'Gaming Break',
        description: 'Take a break and enjoy some casual gaming',
        location: 'Recreation Area + Discord',
        type: 'hybrid'
      },
    ]
  },
  {
    day: 'Day 3',
    date: 'April 3, 2025',
    events: [
      {
        time: '12:00 PM',
        title: 'Hacking Ends',
        description: 'Final code submissions due',
        location: 'Submission Portal',
        type: 'hybrid'
      },
      {
        time: '12:00 PM - 02:00 PM',
        title: 'Lunch & Preparation',
        description: 'Teams prepare for their presentations',
        location: 'Dining Area + Remote',
        type: 'hybrid'
      },
      {
        time: '02:00 PM - 05:00 PM',
        title: 'Project Presentations',
        description: '5-minute pitches from each team',
        location: 'Main Stage + Livestream',
        type: 'hybrid'
      },
      {
        time: '05:00 PM - 06:00 PM',
        title: 'Judging Deliberation',
        description: 'Judges select winners',
        location: 'Judges Room',
        type: 'offline'
      },
      {
        time: '06:00 PM - 07:30 PM',
        title: 'Closing Ceremony',
        description: 'Winners announced, prizes awarded',
        location: 'Main Stage + Livestream',
        type: 'hybrid'
      },
      {
        time: '07:30 PM - 09:00 PM',
        title: 'Networking Mixer',
        description: 'Celebrate with sponsors, mentors and participants',
        location: 'Reception Hall',
        type: 'offline'
      },
    ]
  },
];

const TypeBadge = ({ type }: { type: string }) => {
  const isHybrid = type === 'hybrid';
  const isOffline = type === 'offline';
  
  return (
    <span className={cn(
      "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs",
      isHybrid && "bg-hackathon-purple/20 text-hackathon-purple",
      isOffline && "bg-hackathon-blue/20 text-hackathon-blue"
    )}>
      {isHybrid ? <Users size={12} /> : <Video size={12} />}
      <span>{isHybrid ? 'Hybrid' : 'In-person'}</span>
    </span>
  );
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="bg-hackathon-dark-gray/50 relative overflow-hidden">
      {/* Diagonal divider at the top */}
      <div className="absolute top-0 left-0 w-full h-16 bg-hackathon-black transform -skew-y-2 origin-top-left"></div>
      
      <div className="container mx-auto relative z-10 pt-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-hackathon-green/10 backdrop-blur-sm border border-hackathon-green/20">
            <span className="text-sm font-medium text-hackathon-blue">EVENT TIMELINE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-barlow font-bold mb-6">
            <AnimatedText
              text="Hackathon Schedule"
              variant="gradient"
              as="span"
            />
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our carefully planned 48-hour hackathon schedule is designed to maximize 
            coding time while providing opportunities for learning and networking.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {scheduleData.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={cn(
                "px-5 py-3 rounded-lg transition-all duration-300 font-barlow font-bold",
                activeDay === index 
                  ? "bg-hackathon-green text-black shadow-neon-green" 
                  : "bg-hackathon-dark-gray text-white hover:bg-hackathon-dark-gray/80"
              )}
            >
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {day.day}
              </span>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-barlow font-bold text-white mb-1">
              {scheduleData[activeDay].day}
            </h3>
            <p className="text-hackathon-blue">
              {scheduleData[activeDay].date}
            </p>
          </div>

          <div className="relative pl-8 before:content-[''] before:absolute before:left-3.5 before:top-0 before:w-0.5 before:h-full before:bg-hackathon-purple/30">
            {scheduleData[activeDay].events.map((event, index) => (
              <div key={index} className="mb-8 relative animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-hackathon-purple shadow-neon-purple"></div>
                
                <div className="cyber-border rounded-lg overflow-hidden">
                  <div className="cyber-border-content">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <h4 className="text-xl font-barlow font-bold text-white">{event.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-hackathon-blue">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap justify-between items-center">
                      <span className="text-sm text-gray-400">
                        <span className="font-medium">Location:</span> {event.location}
                      </span>
                      <TypeBadge type={event.type} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Diagonal divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-hackathon-black transform skew-y-2 origin-bottom-right"></div>
    </section>
  );
};

export default Schedule;
