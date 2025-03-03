
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import GlowingButton from './ui/GlowingButton';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Judges", href: "/judges" },
  { name: "Schedule", href: "/schedule" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Register", href: "/register" },
  { name: "Sponsor Us", href: "/sponsor-us" },
  { name: "Past Events", href: "/past-events" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 md:py-4 md:px-6",
        isScrolled 
          ? "bg-hackathon-background/80 backdrop-blur-md border-b border-hackathon-border" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-barlow font-extrabold text-gradient">
            HACK<span className="text-white">SKYE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href || 
                            (item.href !== "/" && location.pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-colors relative group",
                  isActive 
                    ? "text-hackathon-secondary font-medium" 
                    : "text-white hover:text-hackathon-secondary"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-hackathon-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                  isActive && "scale-x-100"
                )}></span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <GlowingButton 
            variant="secondary" 
            size="sm"
            href="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header"
            animated
          >
            REGISTER NOW
          </GlowingButton>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white hover:text-hackathon-secondary transition-colors focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-hackathon-background/95 backdrop-blur-lg z-40 transition-transform duration-300 md:hidden flex flex-col",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center pt-10 pb-6 px-6 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href || 
                           (item.href !== "/" && location.pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "w-full text-center py-3 px-4 rounded-md transition-colors",
                  isActive 
                    ? "text-hackathon-secondary font-medium bg-hackathon-card-dark" 
                    : "text-white hover:text-hackathon-secondary hover:bg-hackathon-card-dark/50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-6 w-full">
            <GlowingButton 
              variant="secondary" 
              size="lg" 
              onClick={() => setMobileMenuOpen(false)}
              href="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header"
              className="w-full"
              animated
            >
              REGISTER NOW
            </GlowingButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
