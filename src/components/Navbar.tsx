
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 md:py-4 md:px-6",
        isScrolled 
          ? "bg-hackathon-black/80 backdrop-blur-md border-b border-hackathon-purple/20" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-barlow font-extrabold text-hackathon-blue text-glow">
            HACK<span className="text-hackathon-purple">SKYE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-300 hover:text-hackathon-blue transition-colors font-barlow font-medium text-sm tracking-wide relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-hackathon-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <GlowingButton 
            variant="secondary" 
            size="md"
            href="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header"
          >
            REGISTER NOW
          </GlowingButton>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white hover:text-hackathon-blue transition-colors focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-hackathon-black/95 backdrop-blur-lg z-40 transition-transform duration-300 md:hidden flex flex-col",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center pt-10 pb-6 px-6 space-y-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-200 hover:text-hackathon-blue font-barlow text-lg tracking-wide w-full text-center py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-6">
            <GlowingButton 
              variant="secondary" 
              size="lg" 
              onClick={() => setMobileMenuOpen(false)}
              href="https://docs.google.com/forms/d/e/1FAIpQLScq9c3bFHGk3l8sq3ugQuw5JZTik3He7vYNKVZjlZrMhoNG3A/viewform?usp=header"
              className="w-full"
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
