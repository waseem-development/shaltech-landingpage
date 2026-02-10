import React from 'react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  icon?: React.ReactNode;
}

const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-3 overflow-hidden font-medium transition-all duration-300 rounded-lg group";
  
  const variants = {
    primary: "bg-primary text-background hover:scale-105 shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:shadow-[0_0_40px_rgba(0,245,212,0.6)]",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-primary/50",
    ghost: "text-text-muted hover:text-primary hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </button>
  );
};

export default GlowButton;