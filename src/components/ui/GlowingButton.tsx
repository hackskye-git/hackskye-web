
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  href?: string;
  animated?: boolean;
}

const GlowingButton = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  icon,
  href,
  animated = false,
  ...props 
}: GlowingButtonProps) => {
  
  const variantClasses = {
    primary: "bg-hackathon-primary hover:bg-opacity-90 text-white shadow-sm hover:shadow-glow-primary",
    secondary: "bg-hackathon-secondary hover:bg-opacity-90 text-hackathon-background font-medium shadow-sm hover:shadow-glow-secondary",
    accent: "bg-hackathon-accent hover:bg-opacity-90 text-white shadow-sm hover:shadow-glow-accent",
    success: "bg-hackathon-success hover:bg-opacity-90 text-hackathon-background font-medium shadow-sm hover:shadow-glow-success",
    outline: "bg-transparent border-2 border-hackathon-primary text-white hover:bg-hackathon-primary/10"
  };

  const sizeClasses = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-base md:text-lg"
  };

  const baseClasses = cn(
    "rounded-lg font-barlow font-semibold relative transition-all duration-300 active:translate-y-0.5 flex items-center justify-center gap-2",
    variantClasses[variant],
    sizeClasses[size],
    animated && "overflow-hidden",
    className
  );

  const animatedBackground = animated && (
    <span className="absolute inset-0 w-full h-full -z-10 opacity-20 bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_100%] animate-shimmer"></span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {animatedBackground}
        {icon && <span className="inline-flex items-center">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      {...props}
    >
      {animatedBackground}
      {icon && <span className="inline-flex items-center">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default GlowingButton;
