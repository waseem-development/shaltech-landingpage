import React from 'react';

interface SectionLabelProps {
  number: string;
  label: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ number, label }) => {
  return (
    <div className="hidden lg:flex flex-col items-start justify-start sticky top-32 h-fit w-24 mr-8 opacity-60">
      <span className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-2">
        {number}
      </span>
      <span className="text-sm font-mono text-primary uppercase tracking-widest writing-vertical-rl rotate-180 h-32 text-left">
        {label}
      </span>
    </div>
  );
};

export default SectionLabel;