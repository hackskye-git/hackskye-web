
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`${className}`}>
      <h3 className="text-hackathon-secondary font-medium mb-4 text-center text-sm md:text-base">
        Registration closes in:
      </h3>
      
      <div className="flex justify-center gap-4">
        <div className="glass-card px-3 py-4 w-16 md:w-24 flex flex-col items-center hover-glow-primary">
          <div className="text-2xl md:text-4xl font-barlow font-bold text-white">{timeLeft.days}</div>
          <div className="text-xs text-hackathon-muted mt-1">Days</div>
        </div>
        
        <div className="glass-card px-3 py-4 w-16 md:w-24 flex flex-col items-center hover-glow-secondary">
          <div className="text-2xl md:text-4xl font-barlow font-bold text-white">{timeLeft.hours}</div>
          <div className="text-xs text-hackathon-muted mt-1">Hours</div>
        </div>
        
        <div className="glass-card px-3 py-4 w-16 md:w-24 flex flex-col items-center hover-glow-accent">
          <div className="text-2xl md:text-4xl font-barlow font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-xs text-hackathon-muted mt-1">Minutes</div>
        </div>
        
        <div className="glass-card px-3 py-4 w-16 md:w-24 flex flex-col items-center hover-glow-success">
          <div className="text-2xl md:text-4xl font-barlow font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-xs text-hackathon-muted mt-1">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
