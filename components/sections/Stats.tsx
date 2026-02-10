import React, { useEffect, useState, useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const stats = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Delivered', value: 50, suffix: '+' },
  { label: 'Happy Clients', value: 20, suffix: '+' },
  { label: 'On-Time Delivery', value: 100, suffix: '%' },
];

const Stats: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section ref={ref} className="w-full border-y border-white/5 bg-surface/50 backdrop-blur-sm py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Counter 
              key={index} 
              {...stat} 
              shouldAnimate={isVisible} 
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter: React.FC<{ label: string; value: number; suffix: string; shouldAnimate: boolean; delay: number }> = ({ label, value, suffix, shouldAnimate, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      // Simple delay
      setTimeout(() => {
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth counting
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          
          setCount(Math.floor(easeOutQuart * end));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };
        requestAnimationFrame(animate);
      }, delay);
    }
  }, [shouldAnimate, value, delay]);

  return (
    <div className="flex flex-col items-center justify-center text-center border-r border-white/5 last:border-0">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
        {count}<span className="text-primary">{suffix}</span>
      </div>
      <div className="text-sm font-mono text-text-muted uppercase tracking-wider">{label}</div>
    </div>
  );
};

export default Stats;