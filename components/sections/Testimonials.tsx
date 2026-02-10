import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import { TESTIMONIALS } from '../../constants';
import { Quote, Star } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 flex">
        <SectionLabel number="05" label="Client Words" />

        <div ref={ref} className="flex-1">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={t.id} 
                className={`glass-card p-8 rounded-2xl relative transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <Quote className="text-primary/20 absolute top-6 right-6 w-12 h-12" />
                
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>

                <p className="text-gray-300 italic mb-8 relative z-10">"{t.quote}"</p>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-xs text-text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;