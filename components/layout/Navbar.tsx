import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import GlowButton from '../ui/GlowButton';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Extract ID from href
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Optionally update URL hash without jump
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo with Image */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group"
        >
          <div className="flex items-center gap-3">
            {/* Logo Image */}
            <img 
              src="/logo.png" 
              alt="ShalTech Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Logo Text (Optional - you can keep it or remove it) */}
            <div className="hidden sm:block">
              <span className="text-2xl font-display font-bold text-white tracking-tight">
                Shal<span className="text-primary group-hover:text-secondary transition-colors">Tech</span>
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-sm font-medium text-gray-300 hover:text-white relative group overflow-hidden"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <GlowButton variant="primary" className="!px-6 !py-2 text-sm" onClick={(e) => handleScrollTo(e, '#contact')}>
            Hire Us
          </GlowButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 transform ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* Mobile Logo */}
        <div className="absolute top-6 left-6">
          <img 
            src="/logo.png" 
            alt="ShalTech Logo" 
            className="h-12 w-auto"
          />
        </div>
        
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            className="text-3xl font-display font-bold text-white hover:text-primary transition-colors"
            onClick={(e) => handleScrollTo(e, item.href)}
          >
            {item.label}
          </a>
        ))}
        <GlowButton onClick={(e) => handleScrollTo(e, '#contact')}>
          Get Started
        </GlowButton>
      </div>
    </nav>
  );
};

export default Navbar;