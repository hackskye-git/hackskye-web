
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  variant?: 'gradient' | 'glow' | 'shimmer' | 'gradient-secondary';
  as?: React.ElementType;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ 
  text, 
  variant = 'gradient', 
  as: Component = 'span',
  className,
  delay = 0
}: AnimatedTextProps) => {
  
  const variantClasses = {
    gradient: "bg-gradient-to-r from-hackathon-primary to-hackathon-accent text-transparent bg-clip-text animate-fadeIn",
    'gradient-secondary': "bg-gradient-to-r from-hackathon-secondary to-hackathon-success text-transparent bg-clip-text animate-fadeIn",
    glow: "text-hackathon-secondary animate-text-glow",
    shimmer: "relative overflow-hidden animate-fadeIn text-white"
  };

  if (variant === 'shimmer') {
    return (
      <Component className={cn(variantClasses[variant], "text-white", className)} style={{ animationDelay: `${delay}ms` }}>
        {text}
        <span className="absolute inset-0 w-full h-full -z-10 opacity-30 bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_100%] animate-shimmer"></span>
      </Component>
    );
  }

  return (
    <Component 
      className={cn(variantClasses[variant], "text-white", className)} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;
