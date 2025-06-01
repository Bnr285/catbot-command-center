
import React, { useEffect, useRef } from 'react';

const SunshineCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create trail elements
    const trailCount = 8;
    const trails: HTMLDivElement[] = [];
    
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'fixed w-2 h-2 bg-catbot-gold rounded-full pointer-events-none z-50 transition-all duration-300 opacity-0';
      trail.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(trail);
      trails.push(trail);
    }
    
    trailsRef.current = trails;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Update main cursor
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Update trails with delay
      trails.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.left = `${e.clientX}px`;
          trail.style.top = `${e.clientY}px`;
          trail.style.opacity = `${0.8 - (index * 0.1)}`;
          trail.style.transform = `translate(-50%, -50%) scale(${1 - (index * 0.1)})`;
        }, index * 50);
      });
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      trails.forEach(trail => trail.style.opacity = '0.6');
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      trails.forEach(trail => trail.style.opacity = '0');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
      
      // Clean up trails
      trails.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-6 h-6 pointer-events-none z-50 opacity-0 transition-opacity duration-200"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      {/* Main sunshine cursor */}
      <div className="relative w-full h-full">
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-catbot-gold rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        
        {/* Rays */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-3 bg-gradient-to-t from-catbot-gold to-transparent origin-bottom"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
              transformOrigin: 'bottom center'
            }}
          />
        ))}
        
        {/* Outer glow */}
        <div className="absolute inset-0 bg-catbot-gold rounded-full opacity-20 animate-ping" />
      </div>
    </div>
  );
};

export default SunshineCursor;
