
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [flipping, setFlipping] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        // Set flipping state for changing digits
        if (timeLeft.seconds !== seconds) setFlipping(prev => ({ ...prev, seconds: true }));
        if (timeLeft.minutes !== minutes) setFlipping(prev => ({ ...prev, minutes: true }));
        if (timeLeft.hours !== hours) setFlipping(prev => ({ ...prev, hours: true }));
        if (timeLeft.days !== days) setFlipping(prev => ({ ...prev, days: true }));
        
        setTimeLeft({ days, hours, minutes, seconds });
        
        // Reset flipping state after animation
        setTimeout(() => {
          setFlipping({
            days: false,
            hours: false,
            minutes: false,
            seconds: false
          });
        }, 500);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  const padWithZero = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="flex space-x-4 md:space-x-6">
        <div className="flex flex-col items-center">
          <div className={cn("countdown-digit", flipping.days && "animate-countdownFlip")}>
            {padWithZero(timeLeft.days)}
          </div>
          <span className="countdown-label">DAYS</span>
        </div>
        <div className="flex flex-col items-center">
          <div className={cn("countdown-digit", flipping.hours && "animate-countdownFlip")}>
            {padWithZero(timeLeft.hours)}
          </div>
          <span className="countdown-label">HOURS</span>
        </div>
        <div className="flex flex-col items-center">
          <div className={cn("countdown-digit", flipping.minutes && "animate-countdownFlip")}>
            {padWithZero(timeLeft.minutes)}
          </div>
          <span className="countdown-label">MINUTES</span>
        </div>
        <div className="flex flex-col items-center">
          <div className={cn("countdown-digit", flipping.seconds && "animate-countdownFlip")}>
            {padWithZero(timeLeft.seconds)}
          </div>
          <span className="countdown-label">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
