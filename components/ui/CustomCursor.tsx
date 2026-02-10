import React, { useEffect, useRef } from 'react';
import useMousePosition from '../../hooks/useMousePosition';

const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cursorRef.current && dotRef.current) {
      // Smooth follow for the ring
      const ring = cursorRef.current;
      const dot = dotRef.current;
      
      // We'll use CSS transition for smoothing, but update positions here
      // Alternatively, using requestAnimationFrame for better physics
      ring.style.transform = `translate(${x}px, ${y}px)`;
      dot.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [x, y]);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out mix-blend-difference"
      />
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out mix-blend-difference"
      />
    </>
  );
};

export default CustomCursor;