
import React, { useState } from 'react';

const PantherIllustration: React.FC = () => {
  const [isHappy, setIsHappy] = useState(false);

  const handleClick = () => {
    setIsHappy(true);
    // Reset to normal after 2 seconds
    setTimeout(() => setIsHappy(false), 2000);
  };

  return (
    <div className="relative cat-spotlight">
      {/* Interactive Panther */}
      <div 
        className="relative w-full max-w-lg mx-auto cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95"
        onClick={handleClick}
      >
        <div 
          className={`w-full h-auto bg-cover bg-center bg-no-repeat rounded-lg relative transition-all duration-500 ${
            isHappy ? 'animate-bounce' : 'hover:animate-pulse'
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='pantherGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000000'/%3E%3Cstop offset='30%25' stop-color='%23111111'/%3E%3Cstop offset='70%25' stop-color='%231a1a1a'/%3E%3Cstop offset='100%25' stop-color='%23000000'/%3E%3C/linearGradient%3E%3CradialGradient id='eyeGrad' cx='50%25' cy='30%25'%3E%3Cstop offset='0%25' stop-color='%23FF4500'/%3E%3Cstop offset='50%25' stop-color='%23FF6B00'/%3E%3Cstop offset='80%25' stop-color='%23FF8C00'/%3E%3Cstop offset='100%25' stop-color='%23FFA500'/%3E%3C/radialGradient%3E%3CradialGradient id='noseGrad'%3E%3Cstop offset='0%25' stop-color='%23FF69B4'/%3E%3Cstop offset='100%25' stop-color='%23FF1493'/%3E%3C/radialGradient%3E%3CradialGradient id='glowGrad'%3E%3Cstop offset='0%25' stop-color='%239945FF' stop-opacity='0.6'/%3E%3Cstop offset='100%25' stop-color='%239945FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3Cfilter id='glow'%3E%3CfeGaussianBlur stdDeviation='8' result='coloredBlur'/%3E%3CfeMerge%3E%3CfeMergeNode in='coloredBlur'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3Cpattern id='stars' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Ccircle cx='5' cy='5' r='0.5' fill='%23ffffff' opacity='0.3'%3E%3Canimate attributeName='opacity' values='0.3;0.8;0.3' dur='2s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='25' cy='15' r='0.5' fill='%23ffffff' opacity='0.5'%3E%3Canimate attributeName='opacity' values='0.5;1;0.5' dur='3s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='35' cy='30' r='0.5' fill='%23ffffff' opacity='0.4'%3E%3Canimate attributeName='opacity' values='0.4;0.9;0.4' dur='2.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='15' cy='35' r='0.5' fill='%23ffffff' opacity='0.3'%3E%3Canimate attributeName='opacity' values='0.3;0.7;0.3' dur='1.8s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3C!-- Starry Background --%3E%3Crect width='400' height='500' fill='%23000000'/%3E%3Crect width='400' height='500' fill='url(%23stars)'/%3E%3C!-- Purple Glow Background --%3E%3Cellipse cx='200' cy='250' rx='150' ry='200' fill='url(%23glowGrad)'/%3E%3C!-- Panther Body (More muscular and elongated) --%3E%3Cellipse cx='200' cy='370' rx='120' ry='115' fill='url(%23pantherGrad)' stroke='%239945FF' stroke-width='3' filter='url(%23glow)'/%3E%3C!-- Chest muscle definition --%3E%3Cellipse cx='200' cy='320' rx='85' ry='60' fill='%23111111' stroke='%239945FF' stroke-width='2' filter='url(%23glow)'/%3E%3C!-- Panther Head (More angular and fierce) --%3E%3Cellipse cx='200' cy='160' rx='85' ry='85' fill='url(%23pantherGrad)' stroke='%239945FF' stroke-width='3' filter='url(%23glow)'/%3E%3C!-- Muscular neck --%3E%3Cellipse cx='200' cy='230' rx='75' ry='45' fill='%23111111' stroke='%239945FF' stroke-width='2' filter='url(%23glow)'/%3E%3C!-- Pointed Panther Ears (Larger and more alert) --%3E%3Cpath d='M 135 90 L 115 40 L 175 80 Z' fill='%23111111' stroke='%239945FF' stroke-width='2' filter='url(%23glow)'/%3E%3Cpath d='M 265 90 L 285 40 L 225 80 Z' fill='%23111111' stroke='%239945FF' stroke-width='2' filter='url(%23glow)'/%3E%3C!-- Inner Ears (Hot pink triangles) --%3E%3Cpath d='M 145 80 L 130 60 L 165 75 Z' fill='%23FF1493'/%3E%3Cpath d='M 255 80 L 270 60 L 235 75 Z' fill='%23FF1493'/%3E%3C!-- Fierce Panther Eyes (Larger and more intense) --%3E%3Cellipse cx='175' cy='145' rx='20' ry='${isHappy ? '15' : '25'}' fill='url(%23eyeGrad)' filter='url(%23glow)'%3E%3Canimate attributeName='opacity' values='1;0.8;1' dur='3s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3Cellipse cx='225' cy='145' rx='20' ry='${isHappy ? '15' : '25'}' fill='url(%23eyeGrad)' filter='url(%23glow)'%3E%3Canimate attributeName='opacity' values='1;0.8;1' dur='3s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3C!-- Pupils (Thin slits when angry, round when happy) --%3E%3Cellipse cx='175' cy='145' rx='${isHappy ? '8' : '2'}' ry='${isHappy ? '8' : '20'}' fill='%23000000'/%3E%3Cellipse cx='225' cy='145' rx='${isHappy ? '8' : '2'}' ry='${isHappy ? '8' : '20'}' fill='%23000000'/%3E%3C!-- Eye Reflections --%3E%3Cellipse cx='179' cy='140' rx='3' ry='5' fill='%23FFD700' opacity='0.8'/%3E%3Cellipse cx='229' cy='140' rx='3' ry='5' fill='%23FFD700' opacity='0.8'/%3E%3C!-- Pink Triangular Nose --%3E%3Cpath d='M 200 175 L 190 185 L 210 185 Z' fill='url(%23noseGrad)'/%3E%3C!-- Snarling Mouth (More pronounced) --%3E%3Cpath d='M 200 190 Q ${isHappy ? '175 195 155 190' : '175 210 155 205'}' stroke='%23FF4500' stroke-width='3' fill='none'/%3E%3Cpath d='M 200 190 Q ${isHappy ? '225 195 245 190' : '225 210 245 205'}' stroke='%23FF4500' stroke-width='3' fill='none'/%3E%3C!-- Sharp White Fangs (only when angry) --%3E${isHappy ? '' : '%3Cpolygon points=\'180,195 175,220 185,220\' fill=\'%23FFFFFF\' stroke=\'%23CCCCCC\' stroke-width=\'1\'/%3E%3Cpolygon points=\'220,195 215,220 225,220\' fill=\'%23FFFFFF\' stroke=\'%23CCCCCC\' stroke-width=\'1\'/%3E'}%3C!-- Thin White Whiskers (3 on each side, angled downward) --%3E%3Cline x1='100' y1='160' x2='60' y2='170' stroke='%23FFFFFF' stroke-width='2' opacity='0.8'/%3E%3Cline x1='105' y1='170' x2='65' y2='180' stroke='%23FFFFFF' stroke-width='2' opacity='0.8'/%3E%3Cline x1='110' y1='180' x2='70' y2='190' stroke='%23FFFFFF' stroke-width='2' opacity='0.8'/%3E%3Cline x1='300' y1='160' x2='340' y2='170' stroke='%23FFFFFF' stroke-width='2' opacity='0.8'/%3E%3Cline x1='295' y1='170' x2='335' y2='180' stroke='%23FFFFFF' stroke-width='2' opacity='0.8'/%3E%3Cline x1='290' y1='180' x2='330' y2='190' stroke='%23FFFFFF' stroke-width='2' opacity='0.8'/%3E%3C!-- Powerful Front Paws (Larger and more muscular) --%3E%3Cellipse cx='160' cy='460' rx='30' ry='18' fill='%23111111' stroke='%239945FF' stroke-width='2'/%3E%3Cellipse cx='240' cy='460' rx='30' ry='18' fill='%23111111' stroke='%239945FF' stroke-width='2'/%3E%3C!-- Sharp Claws (only when angry) --%3E${isHappy ? '' : '%3Cpath d=\'M 145 450 L 138 435\' stroke=\'%23FFFFFF\' stroke-width=\'3\'/%3E%3Cpath d=\'M 160 450 L 153 435\' stroke=\'%23FFFFFF\' stroke-width=\'3\'/%3E%3Cpath d=\'M 175 450 L 168 435\' stroke=\'%23FFFFFF\' stroke-width=\'3\'/%3E%3Cpath d=\'M 225 450 L 218 435\' stroke=\'%23FFFFFF\' stroke-width=\'3\'/%3E%3Cpath d=\'M 240 450 L 233 435\' stroke=\'%23FFFFFF\' stroke-width=\'3\'/%3E%3Cpath d=\'M 255 450 L 248 435\' stroke=\'%23FFFFFF\' stroke-width=\'3\'/%3E'}%3C!-- Digital Glitch Effects --%3E%3Crect x='0' y='100' width='400' height='2' fill='%239945FF' opacity='0.3'%3E%3Canimate attributeName='opacity' values='0.3;0.8;0.3' dur='0.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='y' values='100;150;200;250;300;350;100' dur='4s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect x='0' y='250' width='400' height='1' fill='%23FF4500' opacity='0.2'%3E%3Canimate attributeName='opacity' values='0.2;0.6;0.2' dur='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='y' values='250;300;350;400;450;250' dur='3s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E")`,
            aspectRatio: '4/5',
            minHeight: '500px',
            filter: `drop-shadow(0 0 40px rgba(153, 69, 255, 0.4)) contrast(1.3) saturate(1.2) ${
              isHappy ? 'hue-rotate(30deg) brightness(1.3)' : ''
            }`
          }}
        />

        {/* Happy particles effect */}
        {isHappy && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
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

        {/* Digital HUD overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 border border-catbot-purple/40 px-2 py-1 text-xs font-mono text-catbot-purple">
            PANTHER.AI
          </div>
          <div className="absolute top-4 right-4 flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-green-500">ONLINE</span>
          </div>
          <div className="absolute bottom-4 left-4 text-xs font-mono text-catbot-purple/60">
            STATUS: {isHappy ? 'CONTENT' : 'HUNTING'}
          </div>
        </div>

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

export default PantherIllustration;
