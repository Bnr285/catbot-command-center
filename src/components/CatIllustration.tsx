
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
      <div className="w-12 h-12 border-2 border-catbot-gold rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] animate-nav-pulse bg-black/50">
        <div className="text-catbot-gold text-lg">
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
            left: id === 'paw' || id === 'paw2' ? '-280px' : '50px', 
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
      y: '15%',
      title: 'Neural Net Signal Engine',
      description: 'Analyzes on-chain data with deep learning models to detect early memecoin anomalies.',
      icon: '🧠'
    },
    {
      id: 'eyes',
      x: '50%',
      y: '30%',
      title: 'Volume + Hype Detection',
      description: 'Scans exchange volume and social chatter, prioritizing coins with sudden buzz.',
      icon: '👁'
    },
    {
      id: 'chest',
      x: '50%',
      y: '50%',
      title: 'Sentiment Scanner',
      description: 'Parses Telegram, Discord, and Twitter channels for sentiment indicators in real time.',
      icon: '❤️'
    },
    {
      id: 'neck',
      x: '50%',
      y: '40%',
      title: 'Rug Risk Classifier',
      description: 'Uses heuristics & AI to estimate rugpull probability before you invest.',
      icon: '🛡️'
    },
    {
      id: 'paw',
      x: '25%',
      y: '75%',
      title: 'Wallet Radar',
      description: 'Traces large wallet movements, identifying whale activity on Solana tokens.',
      icon: '🐾'
    },
    {
      id: 'paw2',
      x: '75%',
      y: '75%',
      title: 'Smart Contract Analyzer',
      description: 'Automatically scans smart contracts for potential vulnerabilities and red flags.',
      icon: '🔍'
    }
  ];

  return (
    <div className="relative cat-spotlight">
      {/* Realistic Aggressive Cat */}
      <div className="relative w-full max-w-lg mx-auto">
        <div 
          className="w-full h-auto bg-cover bg-center bg-no-repeat rounded-lg relative"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bodyGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000000'/%3E%3Cstop offset='30%25' stop-color='%23111111'/%3E%3Cstop offset='70%25' stop-color='%23222222'/%3E%3Cstop offset='100%25' stop-color='%23000000'/%3E%3C/linearGradient%3E%3ClinearGradient id='eyeGrad' cx='50%25' cy='30%25'%3E%3Cstop offset='0%25' stop-color='%23FF4500'/%3E%3Cstop offset='50%25' stop-color='%23FF6B00'/%3E%3Cstop offset='80%25' stop-color='%23FF8C00'/%3E%3Cstop offset='100%25' stop-color='%23FFA500'/%3E%3C/linearGradient%3E%3CradialGradient id='noseGrad'%3E%3Cstop offset='0%25' stop-color='%23FF69B4'/%3E%3Cstop offset='100%25' stop-color='%23FF1493'/%3E%3C/radialGradient%3E%3C/defs%3E%3C!-- Aggressive Cat Body --%3E%3Cellipse cx='200' cy='350' rx='120' ry='140' fill='url(%23bodyGrad)' stroke='%239945FF' stroke-width='2'/%3E%3C!-- Muscular Cat Head --%3E%3Cellipse cx='200' cy='180' rx='100' ry='110' fill='url(%23bodyGrad)' stroke='%239945FF' stroke-width='2'/%3E%3C!-- Sharp Aggressive Ears --%3E%3Cpath d='M 130 100 L 110 50 L 180 90 Z' fill='%23111111' stroke='%23FFD700' stroke-width='1'/%3E%3Cpath d='M 270 100 L 290 50 L 220 90 Z' fill='%23111111' stroke='%23FFD700' stroke-width='1'/%3E%3C!-- Inner Ears --%3E%3Cpath d='M 140 90 L 130 70 L 170 85 Z' fill='%23FF1493'/%3E%3Cpath d='M 260 90 L 270 70 L 230 85 Z' fill='%23FF1493'/%3E%3C!-- Fierce Glowing Eyes --%3E%3Cellipse cx='170' cy='160' rx='22' ry='28' fill='url(%23eyeGrad)' class='animate-pulse'/%3E%3Cellipse cx='230' cy='160' rx='22' ry='28' fill='url(%23eyeGrad)' class='animate-pulse'/%3E%3C!-- Aggressive Pupils --%3E%3Cellipse cx='170' cy='160' rx='4' ry='15' fill='%23000000'/%3E%3Cellipse cx='230' cy='160' rx='4' ry='15' fill='%23000000'/%3E%3C!-- Menacing Eye Reflections --%3E%3Cellipse cx='174' cy='155' rx='3' ry='6' fill='%23FFD700' opacity='0.9'/%3E%3Cellipse cx='234' cy='155' rx='3' ry='6' fill='%23FFD700' opacity='0.9'/%3E%3C!-- Aggressive Nose --%3E%3Cpath d='M 200 190 L 192 200 L 208 200 Z' fill='url(%23noseGrad)'/%3E%3C!-- Snarling Mouth --%3E%3Cpath d='M 200 205 Q 180 220 165 215' stroke='%23FF4500' stroke-width='3' fill='none'/%3E%3Cpath d='M 200 205 Q 220 220 235 215' stroke='%23FF4500' stroke-width='3' fill='none'/%3E%3C!-- Sharp Fangs --%3E%3Cpolygon points='185,210 180,225 190,225' fill='%23FFFFFF'/%3E%3Cpolygon points='215,210 210,225 220,225' fill='%23FFFFFF'/%3E%3C!-- Aggressive Whiskers --%3E%3Cline x1='120' y1='170' x2='80' y2='165' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3Cline x1='120' y1='180' x2='80' y2='180' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3Cline x1='120' y1='190' x2='80' y2='195' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3Cline x1='280' y1='170' x2='320' y2='165' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3Cline x1='280' y1='180' x2='320' y2='180' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3Cline x1='280' y1='190' x2='320' y2='195' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3C!-- Powerful Paws with Claws --%3E%3Cellipse cx='150' cy='480' rx='30' ry='18' fill='%23222222'/%3E%3Cellipse cx='250' cy='480' rx='30' ry='18' fill='%23222222'/%3E%3C!-- Claws --%3E%3Cpath d='M 140 475 L 135 465' stroke='%23FFFFFF' stroke-width='2'/%3E%3Cpath d='M 150 475 L 145 465' stroke='%23FFFFFF' stroke-width='2'/%3E%3Cpath d='M 160 475 L 155 465' stroke='%23FFFFFF' stroke-width='2'/%3E%3Cpath d='M 240 475 L 235 465' stroke='%23FFFFFF' stroke-width='2'/%3E%3Cpath d='M 250 475 L 245 465' stroke='%23FFFFFF' stroke-width='2'/%3E%3Cpath d='M 260 475 L 255 465' stroke='%23FFFFFF' stroke-width='2'/%3E%3C!-- Battle Scars --%3E%3Cpath d='M 130 140 L 150 145' stroke='%23FF0000' stroke-width='1' opacity='0.6'/%3E%3Cpath d='M 250 140 L 270 145' stroke='%23FF0000' stroke-width='1' opacity='0.6'/%3E%3Cpath d='M 180 300 L 220 305' stroke='%23FF0000' stroke-width='1' opacity='0.4'/%3E%3C/svg%3E")`,
            aspectRatio: '4/5',
            minHeight: '500px',
            filter: 'drop-shadow(0 0 40px rgba(153, 69, 255, 0.3)) contrast(1.2) saturate(1.1)'
          }}
        >
          {/* Hotspots positioned around the cat */}
          {hotspots.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              {...hotspot}
              onHover={setActiveHotspot}
            />
          ))}
        </div>
        
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
