import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ParticleField from '../ui/ParticleField';
import GlowButton from '../ui/GlowButton';

const Hero: React.FC = () => {
  const [typingText, setTypingText] = useState('');
  const words = ['Web Apps', 'Mobile Apps', 'AI Solutions'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && typingText === currentWord) {
        // Finished typing word, pause then delete
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText === '') {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        // Typing or deleting
        const nextText = isDeleting 
          ? currentWord.substring(0, typingText.length - 1)
          : currentWord.substring(0, typingText.length + 1);
        setTypingText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typingText, isDeleting, wordIndex, words]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[#080B12] z-0" />
      <ParticleField />
      
      {/* Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-blob" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Label */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm animate-[fadeIn_1s_ease-out_forwards] opacity-0">
          <span className="text-primary text-xs md:text-sm font-mono tracking-wider uppercase">🚀 Quetta-Based Tech Startup</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
          <span className="block opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">Code.</span>
          <span className="block opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards]">Create</span>
          <span className="block opacity-0 animate-[slideUp_0.8s_ease-out_0.6s_forwards]">& <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Scale.</span></span>
        </h1>

        {/* Subtitle with Typewriter */}
        <h2 className="text-lg md:text-2xl text-text-muted mb-10 max-w-2xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
          We build modern <span className="text-white font-semibold border-r-2 border-primary pr-1">{typingText}</span>
          <br className="hidden md:block" />
          for visionary businesses — fast, beautiful, and built to last.
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          <GlowButton onClick={() => scrollToSection('contact')} icon={<ArrowUpRight size={18} />}>
            Get in Touch
          </GlowButton>
          <GlowButton variant="outline" onClick={() => scrollToSection('projects')} icon={<ArrowRight size={18} />}>
            View Our Work
          </GlowButton>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
        <span className="text-xs font-mono uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;