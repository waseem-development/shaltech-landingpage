import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  { id: '01', title: 'Discovery', desc: 'We listen and plan.', icon: Search },
  { id: '02', title: 'Design', desc: 'UI/UX first wireframes.', icon: PenTool },
  { id: '03', title: 'Development', desc: 'Clean code sprints.', icon: Code2 },
  { id: '04', title: 'Launch', desc: 'Deploy + support.', icon: Rocket },
];

const Process: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 flex">
        <SectionLabel number="03" />

        <div ref={ref} className="flex-1">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/5">
              <div 
                className={`h-full bg-primary transition-all duration-[2000ms] ease-out ${isVisible ? 'w-full' : 'w-0'}`} 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`relative pt-0 md:pt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Dot on line */}
                  <div className={`hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-background bg-surface z-10 transition-colors duration-500 delay-[${index * 300}ms] ${isVisible ? 'bg-primary border-primary' : 'bg-surface border-white/20'}`} />

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all text-center group hover:-translate-y-2">
                    <div className="inline-flex mb-4 p-3 rounded-lg bg-surface text-primary group-hover:scale-110 transition-transform">
                      <step.icon size={24} />
                    </div>
                    <div className="text-4xl font-display font-bold text-white/10 mb-2 group-hover:text-white/20 transition-colors">{step.id}</div>
                    <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-text-muted">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;