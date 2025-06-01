
import React, { useState } from 'react';

const CatIllustration: React.FC = () => {
  const [isHappy, setIsHappy] = useState(false);

  const handleClick = () => {
    setIsHappy(true);
    // Reset to normal after 2 seconds
    setTimeout(() => setIsHappy(false), 2000);
  };

  return (
    <div className="relative cat-spotlight">
      {/* Interactive Cat */}
      <div 
        className="relative w-full max-w-lg mx-auto cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95"
        onClick={handleClick}
      >
        <div 
          className={`w-full h-auto bg-cover bg-center bg-no-repeat rounded-lg relative transition-all duration-500 ${
            isHappy ? 'animate-bounce' : 'hover:animate-pulse'
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bodyGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000000'/%3E%3Cstop offset='30%25' stop-color='%23111111'/%3E%3Cstop offset='70%25' stop-color='%23222222'/%3E%3Cstop offset='100%25' stop-color='%23000000'/%3E%3C/linearGradient%3E%3ClinearGradient id='eyeGrad' cx='50%25' cy='30%25'%3E%3Cstop offset='0%25' stop-color='${isHappy ? '%23FFD700' : '%23FF4500'}'/%3E%3Cstop offset='50%25' stop-color='${isHappy ? '%23FFA500' : '%23FF6B00'}'/%3E%3Cstop offset='80%25' stop-color='${isHappy ? '%23FF8C00' : '%23FF8C00'}'/%3E%3Cstop offset='100%25' stop-color='${isHappy ? '%23FFD700' : '%23FFA500'}'/%3E%3C/linearGradient%3E%3CradialGradient id='noseGrad'%3E%3Cstop offset='0%25' stop-color='%23FF69B4'/%3E%3Cstop offset='100%25' stop-color='%23FF1493'/%3E%3C/radialGradient%3E%3C/defs%3E%3C!-- Cat Body --%3E%3Cellipse cx='200' cy='350' rx='120' ry='140' fill='url(%23bodyGrad)' stroke='%239945FF' stroke-width='2'/%3E%3C!-- Cat Head --%3E%3Cellipse cx='200' cy='180' rx='100' ry='110' fill='url(%23bodyGrad)' stroke='%239945FF' stroke-width='2'/%3E%3C!-- Ears --%3E%3Cpath d='M 130 100 L 110 50 L 180 90 Z' fill='%23111111' stroke='%23FFD700' stroke-width='1'/%3E%3Cpath d='M 270 100 L 290 50 L 220 90 Z' fill='%23111111' stroke='%23FFD700' stroke-width='1'/%3E%3C!-- Inner Ears --%3E%3Cpath d='M 140 90 L 130 70 L 170 85 Z' fill='%23FF1493'/%3E%3Cpath d='M 260 90 L 270 70 L 230 85 Z' fill='%23FF1493'/%3E%3C!-- Eyes --%3E%3Cellipse cx='170' cy='160' rx='22' ry='${isHappy ? '15' : '28'}' fill='url(%23eyeGrad)' class='animate-pulse'/%3E%3Cellipse cx='230' cy='160' rx='22' ry='${isHappy ? '15' : '28'}' fill='url(%23eyeGrad)' class='animate-pulse'/%3E%3C!-- Pupils --%3E%3Cellipse cx='170' cy='160' rx='4' ry='${isHappy ? '8' : '15'}' fill='%23000000'/%3E%3Cellipse cx='230' cy='160' rx='4' ry='${isHappy ? '8' : '15'}' fill='%23000000'/%3E%3C!-- Eye Reflections --%3E%3Cellipse cx='174' cy='155' rx='3' ry='6' fill='%23FFD700' opacity='0.9'/%3E%3Cellipse cx='234' cy='155' rx='3' ry='6' fill='%23FFD700' opacity='0.9'/%3E%3C!-- Nose --%3E%3Cpath d='M 200 190 L 192 200 L 208 200 Z' fill='url(%23noseGrad)'/%3E%3C!-- Mouth --%3E%3Cpath d='M 200 205 Q ${isHappy ? '180 210 165 205' : '180 220 165 215'}' stroke='%23FF4500' stroke-width='3' fill='none'/%3E%3Cpath d='M 200 205 Q ${isHappy ? '220 210 235 205' : '220 220 235 215'}' stroke='%23FF4500' stroke-width='3' fill='none'/%3E%3C!-- Fangs (only when not happy) --%3E${isHappy ? '' : '%3Cpolygon points=\'185,210 180,225 190,225\' fill=\'%23FFFFFF\'/%3E%3Cpolygon points=\'215,210 210,225 220,225\' fill=\'%23FFFFFF\'/%3E'}%3C!-- Whiskers --%3E%3Cline x1='120' y1='170' x2='80' y2='165' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3Cline x1='120' y1='180' x2='80' y2='180' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3Cline x1='120' y1='190' x2='80' y2='195' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3Cline x1='280' y1='170' x2='320' y2='165' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3Cline x1='280' y1='180' x2='320' y2='180' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3Cline x1='280' y1='190' x2='320' y2='195' stroke='rgba(255,255,255,0.6)' stroke-width='2'/%3E%3C!-- Paws --%3E%3Cellipse cx='150' cy='480' rx='30' ry='18' fill='%23222222'/%3E%3Cellipse cx='250' cy='480' rx='30' ry='18' fill='%23222222'/%3E%3C!-- Claws (only when not happy) --%3E${isHappy ? '' : '%3Cpath d=\'M 140 475 L 135 465\' stroke=\'%23FFFFFF\' stroke-width=\'2\'/%3E%3Cpath d=\'M 150 475 L 145 465\' stroke=\'%23FFFFFF\' stroke-width=\'2\'/%3E%3Cpath d=\'M 160 475 L 155 465\' stroke=\'%23FFFFFF\' stroke-width=\'2\'/%3E%3Cpath d=\'M 240 475 L 235 465\' stroke=\'%23FFFFFF\' stroke-width=\'2\'/%3E%3Cpath d=\'M 250 475 L 245 465\' stroke=\'%23FFFFFF\' stroke-width=\'2\'/%3E%3Cpath d=\'M 260 475 L 255 465\' stroke=\'%23FFFFFF\' stroke-width=\'2\'/%3E'}%3C!-- Battle Scars (only when not happy) --%3E${isHappy ? '' : '%3Cpath d=\'M 130 140 L 150 145\' stroke=\'%23FF0000\' stroke-width=\'1\' opacity=\'0.6\'/%3E%3Cpath d=\'M 250 140 L 270 145\' stroke=\'%23FF0000\' stroke-width=\'1\' opacity=\'0.6\'/%3E%3Cpath d=\'M 180 300 L 220 305\' stroke=\'%23FF0000\' stroke-width=\'1\' opacity=\'0.4\'/%3E'}%3C/svg%3E")`,
            aspectRatio: '4/5',
            minHeight: '500px',
            filter: `drop-shadow(0 0 40px rgba(153, 69, 255, 0.3)) contrast(1.2) saturate(1.1) ${
              isHappy ? 'hue-rotate(30deg) brightness(1.2)' : ''
            }`
          }}
        />

        {/* Happy particles effect */}
        {isHappy && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-catbot-gold rounded-full animate-ping"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        )}

        {/* Click hint */}
        {!isHappy && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-70 hover:opacity-100 transition-opacity">
            <p className="font-ibm-mono text-xs text-catbot-text-secondary animate-pulse">
              Click me! 🐾
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatIllustration;
