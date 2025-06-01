
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
      {/* More Realistic Cat SVG */}
      <div className="relative w-full max-w-lg mx-auto">
        <svg
          viewBox="0 0 400 500"
          className="w-full h-auto"
          style={{ filter: 'drop-shadow(0 0 40px rgba(153, 69, 255, 0.2))' }}
        >
          {/* Cat Body - More rounded and realistic */}
          <ellipse cx="200" cy="360" rx="110" ry="130" fill="url(#bodyGradient)" stroke="url(#strokeGradient)" strokeWidth="1"/>
          
          {/* Cat Head - More cat-like proportions */}
          <ellipse cx="200" cy="190" rx="90" ry="105" fill="url(#headGradient)" stroke="url(#strokeGradient)" strokeWidth="1"/>
          
          {/* Cat Ears - More realistic triangular shape */}
          <path d="M 140 120 L 120 70 L 175 105 Z" fill="url(#earGradient)" stroke="url(#strokeGradient)" strokeWidth="1"/>
          <path d="M 260 120 L 280 70 L 225 105 Z" fill="url(#earGradient)" stroke="url(#strokeGradient)" strokeWidth="1"/>
          
          {/* Inner Ears - Pink realistic color */}
          <path d="M 145 105 L 135 85 L 165 100 Z" fill="#FFB6C1"/>
          <path d="M 255 105 L 265 85 L 235 100 Z" fill="#FFB6C1"/>
          
          {/* Realistic Cat Eyes - Almond shaped */}
          <ellipse cx="175" cy="175" rx="18" ry="22" fill="url(#eyeGradient)" className="animate-eye-glow"/>
          <ellipse cx="225" cy="175" rx="18" ry="22" fill="url(#eyeGradient)" className="animate-eye-glow"/>
          
          {/* Cat pupils - Vertical slits */}
          <ellipse cx="175" cy="175" rx="3" ry="12" fill="#000"/>
          <ellipse cx="225" cy="175" rx="3" ry="12" fill="#000"/>
          
          {/* Eye reflections */}
          <ellipse cx="178" cy="170" rx="2" ry="4" fill="#FFD700" opacity="0.9"/>
          <ellipse cx="228" cy="170" rx="2" ry="4" fill="#FFD700" opacity="0.9"/>
          
          {/* Cat Nose - Pink triangle */}
          <path d="M 200 200 L 194 208 L 206 208 Z" fill="#FFB6C1"/>
          
          {/* Cat Mouth - More realistic */}
          <path d="M 200 210 Q 185 218 175 215" stroke="#333" strokeWidth="2" fill="none"/>
          <path d="M 200 210 Q 215 218 225 215" stroke="#333" strokeWidth="2" fill="none"/>
          
          {/* Whiskers - More natural positioning */}
          <line x1="130" y1="185" x2="90" y2="180" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          <line x1="130" y1="195" x2="90" y2="195" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          <line x1="130" y1="205" x2="90" y2="210" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          
          <line x1="270" y1="185" x2="310" y2="180" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          <line x1="270" y1="195" x2="310" y2="195" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          <line x1="270" y1="205" x2="310" y2="210" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          
          {/* Cat Paws */}
          <ellipse cx="160" cy="470" rx="25" ry="15" fill="url(#pawGradient)"/>
          <ellipse cx="240" cy="470" rx="25" ry="15" fill="url(#pawGradient)"/>
          
          {/* Fur Texture Lines */}
          <path d="M 120 150 Q 200 140 280 150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
          <path d="M 130 300 Q 200 290 270 300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
          <path d="M 140 350 Q 200 340 260 350" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
          
          {/* Enhanced Gradients */}
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a"/>
              <stop offset="30%" stopColor="#0a0a0a"/>
              <stop offset="70%" stopColor="#2a2a2a"/>
              <stop offset="100%" stopColor="#0a0a0a"/>
            </linearGradient>
            
            <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a2a2a"/>
              <stop offset="50%" stopColor="#0a0a0a"/>
              <stop offset="100%" stopColor="#1a1a1a"/>
            </linearGradient>
            
            <linearGradient id="earGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a"/>
              <stop offset="100%" stopColor="#0a0a0a"/>
            </linearGradient>
            
            <linearGradient id="pawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#333"/>
              <stop offset="100%" stopColor="#1a1a1a"/>
            </linearGradient>
            
            <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9945FF"/>
              <stop offset="50%" stopColor="#FFD700"/>
              <stop offset="100%" stopColor="#9945FF"/>
            </linearGradient>
            
            <radialGradient id="eyeGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="#00FF41"/>
              <stop offset="50%" stopColor="#32CD32"/>
              <stop offset="80%" stopColor="#228B22"/>
              <stop offset="100%" stopColor="#006400"/>
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
