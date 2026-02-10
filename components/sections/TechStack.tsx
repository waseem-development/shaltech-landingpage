import React from 'react';
import { TECH_STACK } from '../../constants';

const TechStack: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#050810] overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-sm font-mono text-text-muted uppercase tracking-widest">Technologies We Work With</span>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 group-hover:[animation-play-state:paused]">
          {/* First Loop */}
          {TECH_STACK.map((tech, index) => (
            <div key={index} className="flex items-center gap-3 text-text-muted hover:text-white transition-colors cursor-default px-4">
              <tech.icon size={24} className="text-primary opacity-70" />
              <span className="text-xl font-bold font-display">{tech.name}</span>
            </div>
          ))}
           {/* Duplicate for seamless loop */}
           {TECH_STACK.map((tech, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-3 text-text-muted hover:text-white transition-colors cursor-default px-4">
              <tech.icon size={24} className="text-primary opacity-70" />
              <span className="text-xl font-bold font-display">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 group-hover:[animation-play-state:paused] ml-12">
           {/* Second Loop Logic handled by CSS generally, but here we just need double rendering in the first container usually. 
               Let's simplify: Tailwind 'animate-marquee' handles one long strip. 
           */}
        </div>
      </div>

      {/* Add specific style for marquee if not in tailwind config */}
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;