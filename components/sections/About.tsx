import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  const checklist = [
    "Clean, modern code — built to last",
    "On-time delivery, every time",
    "End-to-end from design to deployment",
    "Transparent communication throughout",
    "Post-launch support included"
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 flex">
        <SectionLabel number="01" label="About Us" />
        
        <div ref={ref} className="flex-1 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              We turn your vision into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">digital reality.</span>
            </h2>
            
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              ShalTech is a Quetta-based software startup combining cutting-edge technology with elegant design. 
              We don't just build software — we craft digital experiences that drive real business growth. 
              From startups to established companies, we deliver solutions that scale.
            </p>

            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-4">Why ShalTech?</h3>
              {checklist.map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-3 transition-all duration-500 delay-[${i * 100}ms] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual (Abstract Card Stack) */}
          <div className={`relative h-[500px] hidden md:block transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-3xl" />
             
             {/* Card 1 */}
             <div className="absolute top-10 left-10 w-3/4 h-3/4 glass-card rounded-2xl p-6 transform -rotate-6 z-10 border-t border-white/10 shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-1/2 bg-white/10 rounded animate-pulse" />
                  <div className="h-32 bg-white/5 rounded" />
                  <div className="h-2 w-3/4 bg-white/10 rounded animate-pulse" />
                </div>
             </div>

             {/* Card 2 */}
             <div className="absolute top-20 right-10 w-3/4 h-3/4 bg-[#0F1320] rounded-2xl p-6 transform rotate-3 z-20 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold">S</div>
                  <div className="h-2 w-20 bg-white/10 rounded" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white/5 rounded border border-white/5 flex items-center justify-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                  </div>
                   <div className="h-24 bg-white/5 rounded border border-white/5 flex items-center justify-center">
                    <div className="text-2xl font-bold text-primary">A+</div>
                  </div>
                </div>
                <div className="mt-6 h-10 w-full bg-primary rounded flex items-center justify-center text-black font-bold text-sm">Deploying...</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;