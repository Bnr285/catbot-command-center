
import React, { useState } from 'react';

interface HotspotProps {
  id: string;
  x: string;
  y: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  onHover: (id: string | null) => void;
}

const Hotspot: React.FC<HotspotProps> = ({ id, x, y, title, description, icon, onHover }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="absolute group"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => {
        setShowTooltip(true);
        onHover(id);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
        onHover(null);
      }}
    >
      {/* Hotspot Ring */}
      <div className="w-10 h-10 border-2 border-catbot-gold rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] animate-nav-pulse">
        <div className="text-catbot-gold text-sm">
          {icon}
        </div>
      </div>

      {/* Ripple Effect */}
      <div className="absolute inset-0 border-2 border-catbot-gold rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />

      {/* Tooltip */}
      {showTooltip && (
        <div 
          className="absolute z-50 w-72 p-4 glass-panel-purple transform -rotate-2 transition-all duration-500 ease-out"
          style={{ 
            left: '50px', 
            top: '-20px',
            opacity: showTooltip ? 1 : 0,
            transform: showTooltip ? 'scale(1) rotate(-2deg)' : 'scale(0.9) rotate(-2deg)'
          }}
        >
          <h3 className="font-ibm-mono font-bold text-base text-catbot-text-primary mb-2">
            {title}
          </h3>
          <p className="font-inter text-sm text-catbot-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

const CatIllustration: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'brain',
      x: '50%',
      y: '25%',
      title: 'Neural Net Signal Engine',
      description: 'Analyzes on-chain data with deep learning models to detect early memecoin anomalies.',
      icon: '🧠'
    },
    {
      id: 'eyes',
      x: '50%',
      y: '40%',
      title: 'Volume + Hype Detection',
      description: 'Scans exchange volume and social chatter, prioritizing coins with sudden buzz.',
      icon: '👁'
    },
    {
      id: 'chest',
      x: '50%',
      y: '60%',
      title: 'Sentiment Scanner',
      description: 'Parses Telegram, Discord, and Twitter channels for sentiment indicators in real time.',
      icon: '❤️'
    },
    {
      id: 'paw',
      x: '35%',
      y: '75%',
      title: 'Wallet Radar',
      description: 'Traces large wallet movements, identifying whale activity on Solana tokens.',
      icon: '🐾'
    },
    {
      id: 'neck',
      x: '50%',
      y: '50%',
      title: 'Rug Risk Classifier',
      description: 'Uses heuristics & AI to estimate rugpull probability before you invest.',
      icon: '🛡️'
    }
  ];

  return (
    <div className="relative cat-spotlight">
      {/* Cat SVG Illustration */}
      <div className="relative w-full max-w-lg mx-auto">
        <svg
          viewBox="0 0 400 500"
          className="w-full h-auto"
          style={{ filter: 'drop-shadow(0 0 40px rgba(153, 69, 255, 0.2))' }}
        >
          {/* Cat Body */}
          <ellipse cx="200" cy="350" rx="120" ry="140" fill="#0A0A0C" stroke="url(#bodyGradient)" strokeWidth="2"/>
          
          {/* Cat Head */}
          <ellipse cx="200" cy="200" rx="100" ry="120" fill="#0A0A0C" stroke="url(#headGradient)" strokeWidth="2"/>
          
          {/* Cat Ears */}
          <path d="M 130 120 L 110 60 L 170 100 Z" fill="#0A0A0C" stroke="url(#earGradient)" strokeWidth="2"/>
          <path d="M 270 120 L 290 60 L 230 100 Z" fill="#0A0A0C" stroke="url(#earGradient)" strokeWidth="2"/>
          
          {/* Inner Ears */}
          <path d="M 135 100 L 125 80 L 155 95 Z" fill="url(#innerEarGradient)"/>
          <path d="M 265 100 L 275 80 L 245 95 Z" fill="url(#innerEarGradient)"/>
          
          {/* Eyes */}
          <ellipse cx="170" cy="180" rx="20" ry="25" fill="url(#eyeGradient)" className="animate-eye-glow"/>
          <ellipse cx="230" cy="180" rx="20" ry="25" fill="url(#eyeGradient)" className="animate-eye-glow"/>
          
          {/* Eye pupils */}
          <ellipse cx="170" cy="185" rx="8" ry="10" fill="#000"/>
          <ellipse cx="230" cy="185" rx="8" ry="10" fill="#000"/>
          
          {/* Eye glints */}
          <circle cx="175" cy="180" r="3" fill="#FFD700" opacity="0.8"/>
          <circle cx="235" cy="180" r="3" fill="#FFD700" opacity="0.8"/>
          
          {/* Nose */}
          <path d="M 200 210 L 190 220 L 210 220 Z" fill="#FF7600"/>
          
          {/* Mouth */}
          <path d="M 200 225 Q 180 235 170 230" stroke="#888" strokeWidth="2" fill="none"/>
          <path d="M 200 225 Q 220 235 230 230" stroke="#888" strokeWidth="2" fill="none"/>
          
          {/* Whiskers */}
          <line x1="120" y1="200" x2="80" y2="195" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <line x1="120" y1="210" x2="80" y2="210" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <line x1="120" y1="220" x2="80" y2="225" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          
          <line x1="280" y1="200" x2="320" y2="195" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <line x1="280" y1="210" x2="320" y2="210" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <line x1="280" y1="220" x2="320" y2="225" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B1E59"/>
              <stop offset="50%" stopColor="#17345A"/>
              <stop offset="100%" stopColor="#9945FF"/>
            </linearGradient>
            
            <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B1E59"/>
              <stop offset="50%" stopColor="#17345A"/>
              <stop offset="100%" stopColor="#9945FF"/>
            </linearGradient>
            
            <linearGradient id="earGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9945FF"/>
              <stop offset="100%" stopColor="#FFD700"/>
            </linearGradient>
            
            <linearGradient id="innerEarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B1E59"/>
              <stop offset="100%" stopColor="#FFD700"/>
            </linearGradient>
            
            <radialGradient id="eyeGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="#FFD700"/>
              <stop offset="50%" stopColor="#FF9E0D"/>
              <stop offset="100%" stopColor="#FF7600"/>
            </radialGradient>
          </defs>
        </svg>

        {/* Hotspots */}
        {hotspots.map((hotspot) => (
          <Hotspot
            key={hotspot.id}
            {...hotspot}
            onHover={setActiveHotspot}
          />
        ))}
        
        {/* Glow effects for active hotspots */}
        {activeHotspot && (
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-400"
            style={{
              background: `radial-gradient(circle at ${hotspots.find(h => h.id === activeHotspot)?.x} ${hotspots.find(h => h.id === activeHotspot)?.y}, rgba(153, 69, 255, 0.3) 0%, transparent 30%)`,
              borderRadius: '50%'
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CatIllustration;
