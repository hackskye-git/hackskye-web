
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const GlowingButton = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  icon,
  ...props 
}: GlowingButtonProps) => {
  const variantClasses = {
    primary: "bg-hackathon-purple hover:bg-hackathon-purple/90 text-white shadow-neon-purple hover:shadow-[0_0_10px_#8A2BE2,_0_0_20px_#8A2BE2]",
    secondary: "bg-hackathon-blue hover:bg-hackathon-blue/90 text-black font-medium shadow-neon-blue hover:shadow-[0_0_10px_#00FFFF,_0_0_20px_#00FFFF]",
    accent: "bg-hackathon-green hover:bg-hackathon-green/90 text-black font-medium shadow-neon-green hover:shadow-[0_0_10px_#39FF14,_0_0_20px_#39FF14]"
  };

  const sizeClasses = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg"
  };

  return (
    <button
      className={cn(
        "rounded-md font-barlow font-bold relative transition-all duration-300 active:translate-y-1 flex items-center justify-center gap-2",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon && <span className="inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      <span className="absolute inset-0 rounded-md bg-white/10 opacity-0 transition-opacity hover:opacity-100"></span>
    </button>
  );
};

export default GlowingButton;
