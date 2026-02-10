import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2.5s
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Notify parent after transition
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="text-center">
        {/* Logo Only with Animation */}
        <div className="relative">
          <img 
            src="/logo.png" 
            alt="ShalTech Logo" 
            className="h-24 md:h-32 w-auto mx-auto animate-[scaleUp_1s_ease-out_forwards] opacity-0"
          />
        </div>
        
        <div className="mt-4 h-0.5 w-0 bg-secondary mx-auto animate-[widthGrow_1s_ease-in-out_1s_forwards]" />
        <p className="mt-4 text-text-muted font-mono text-sm tracking-widest uppercase opacity-0 animate-[fadeIn_0.5s_ease-out_1.8s_forwards]">
          Code. Create. Scale.
        </p>
      </div>
    </div>
  );
};

export default Preloader;