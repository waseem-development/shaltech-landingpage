import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import { SERVICES } from '../../constants';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 bg-surface relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 flex">
        <SectionLabel number="02" />
        
        <div ref={ref} className="flex-1">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Services</h2>
            <p className="text-text-muted text-lg max-w-2xl">From web development to AI integration, we provide end-to-end digital solutions that help you lead the market.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted for tilt effect and cleaner code
const ServiceCard: React.FC<{ service: any; index: number; isVisible: boolean }> = ({ service, index, isVisible }) => {
  return (
    <div 
      className={`group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 hover:bg-white/[0.04] overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500" />
      
      <div className="mb-6 w-14 h-14 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,245,212,0.2)] transition-all duration-300">
        <service.icon size={28} />
      </div>

      <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
      <p className="text-text-muted leading-relaxed mb-6">{service.description}</p>

      <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
        <span className="border-b border-transparent group-hover:border-primary">Learn More</span>
        <ArrowRight size={16} className="text-primary" />
      </div>
    </div>
  );
};

export default Services;