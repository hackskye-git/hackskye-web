
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import GlowingButton from './ui/GlowingButton';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Judges", href: "#judges" },
  { name: "Schedule", href: "#schedule" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Register", href: "#register" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled 
          ? "bg-hackathon-black/80 backdrop-blur-md border-b border-hackathon-purple/20" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-barlow font-extrabold text-hackathon-blue text-glow">
            HACK<span className="text-hackathon-purple">SKYE</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-hackathon-blue transition-colors font-barlow font-medium text-sm tracking-wide relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-hackathon-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GlowingButton variant="secondary" size="md">
            REGISTER NOW
          </GlowingButton>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-white hover:text-hackathon-blue transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        <nav className="flex flex-col items-center pt-12 pb-6 px-6 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-200 hover:text-hackathon-blue font-barlow text-xl tracking-wide w-full text-center py-2 border-b border-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <GlowingButton variant="secondary" size="lg" onClick={() => setMobileMenuOpen(false)}>
              REGISTER NOW
            </GlowingButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
