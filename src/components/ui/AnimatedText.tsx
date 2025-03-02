
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  variant?: 'gradient' | 'glitch' | 'glow';
  as?: React.ElementType;
  className?: string;
}

const AnimatedText = ({ 
  text, 
  variant = 'gradient', 
  as: Component = 'span',
  className 
}: AnimatedTextProps) => {
  const variantClasses = {
    gradient: "text-transparent bg-clip-text bg-gradient-to-r from-hackathon-purple to-hackathon-blue animate-backgroundPan",
    glitch: "text-white relative",
    glow: "text-hackathon-green animate-text-glow"
  };

  if (variant === 'glitch') {
    return (
      <Component 
        className={cn(variantClasses[variant], "glitch-effect", className)}
        data-text={text}
      >
        {text}
      </Component>
    );
  }

  return (
    <Component className={cn(variantClasses[variant], className)}>
      {text}
    </Component>
  );
};

export default AnimatedText;
