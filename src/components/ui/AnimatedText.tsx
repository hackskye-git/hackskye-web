
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
    gradient: "text-gradient animate-fadeIn",
    'gradient-secondary': "text-gradient-secondary animate-fadeIn",
    glow: "text-hackathon-secondary animate-text-glow",
    shimmer: "text-white relative overflow-hidden animate-fadeIn"
  };

  if (variant === 'shimmer') {
    return (
      <Component className={cn(variantClasses[variant], className)} style={{ animationDelay: `${delay}ms` }}>
        {text}
        <span className="absolute inset-0 w-full h-full -z-10 opacity-30 bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_100%] animate-shimmer"></span>
      </Component>
    );
  }

  return (
    <Component 
      className={cn(variantClasses[variant], className)} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;
