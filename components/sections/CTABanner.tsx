import React from 'react';
import GlowButton from '../ui/GlowButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CTABanner: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1320] via-[#080B12] to-[#1a103c] z-0" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Let's build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">amazing together.</span>
        </h2>
        
        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10">
          Ready to transform your business with cutting-edge technology? We're here to help you scale.
        </p>

        <GlowButton onClick={scrollToContact} className="!px-10 !py-4 text-lg">
          Start Your Project →
        </GlowButton>
      </div>
    </section>
  );
};

export default CTABanner;