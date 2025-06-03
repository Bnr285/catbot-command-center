
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='catGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FFA500'/%3E%3Cstop offset='30%25' stop-color='%23FF8C00'/%3E%3Cstop offset='70%25' stop-color='%23FF6B00'/%3E%3Cstop offset='100%25' stop-color='%23FF4500'/%3E%3C/linearGradient%3E%3CradialGradient id='eyeGrad' cx='50%25' cy='30%25'%3E%3Cstop offset='0%25' stop-color='%2300FF00'/%3E%3Cstop offset='50%25' stop-color='%2300CC00'/%3E%3Cstop offset='100%25' stop-color='%23009900'/%3E%3C/radialGradient%3E%3CradialGradient id='noseGrad'%3E%3Cstop offset='0%25' stop-color='%23FF69B4'/%3E%3Cstop offset='100%25' stop-color='%23FF1493'/%3E%3C/radialGradient%3E%3CradialGradient id='glowGrad'%3E%3Cstop offset='0%25' stop-color='%239945FF' stop-opacity='0.6'/%3E%3Cstop offset='100%25' stop-color='%239945FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3Cfilter id='glow'%3E%3CfeGaussianBlur stdDeviation='8' result='coloredBlur'/%3E%3CfeMerge%3E%3CfeMergeNode in='coloredBlur'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3Cpattern id='stars' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Ccircle cx='5' cy='5' r='0.5' fill='%23ffffff' opacity='0.3'%3E%3Canimate attributeName='opacity' values='0.3;0.8;0.3' dur='2s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='25' cy='15' r='0.5' fill='%23ffffff' opacity='0.5'%3E%3Canimate attributeName='opacity' values='0.5;1;0.5' dur='3s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='35' cy='30' r='0.5' fill='%23ffffff' opacity='0.4'%3E%3Canimate attributeName='opacity' values='0.4;0.9;0.4' dur='2.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='15' cy='35' r='0.5' fill='%23ffffff' opacity='0.3'%3E%3Canimate attributeName='opacity' values='0.3;0.7;0.3' dur='1.8s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3C!-- Starry Background --%3E%3Crect width='400' height='500' fill='%23000000'/%3E%3Crect width='400' height='500' fill='url(%23stars)'/%3E%3C!-- Purple Glow Background --%3E%3Cellipse cx='200' cy='250' rx='150' ry='200' fill='url(%23glowGrad)'/%3E%3C!-- Cat Body (Round and fluffy) --%3E%3Cellipse cx='200' cy='350' rx='100' ry='90' fill='url(%23catGrad)' stroke='%239945FF' stroke-width='3' filter='url(%23glow)'%3E%3CanimateTransform attributeName='transform' type='scale' values='1;1.02;1' dur='3s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3C!-- Cat Head (Round and cute) --%3E%3Cellipse cx='200' cy='180' rx='75' ry='70' fill='url(%23catGrad)' stroke='%239945FF' stroke-width='3' filter='url(%23glow)'%3E%3CanimateTransform attributeName='transform' type='scale' values='1;1.01;1' dur='2.5s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3C!-- Cat Ears (Triangular and perky) --%3E%3Cpath d='M 150 120 L 130 80 L 190 100 Z' fill='url(%23catGrad)' stroke='%239945FF' stroke-width='2' filter='url(%23glow)'%3E%3CanimateTransform attributeName='transform' type='rotate' values='0 160 100;-2 160 100;0 160 100' dur='4s' repeatCount='indefinite'/%3E%3C/path%3E%3Cpath d='M 250 120 L 270 80 L 210 100 Z' fill='url(%23catGrad)' stroke='%239945FF' stroke-width='2' filter='url(%23glow)'%3E%3CanimateTransform attributeName='transform' type='rotate' values='0 240 100;2 240 100;0 240 100' dur='4s' repeatCount='indefinite'/%3E%3C/path%3E%3C!-- Inner Ears (Pink triangles) --%3E%3Cpath d='M 160 110 L 145 95 L 175 105 Z' fill='%23FF1493'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='3s' repeatCount='indefinite'/%3E%3C/path%3E%3Cpath d='M 240 110 L 255 95 L 225 105 Z' fill='%23FF1493'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='3s' repeatCount='indefinite'/%3E%3C/path%3E%3C!-- Cat Eyes (Large and expressive) --%3E%3Cellipse cx='175' cy='165' rx='15' ry='${isHappy ? '12' : '18'}' fill='url(%23eyeGrad)' filter='url(%23glow)'%3E%3Canimate attributeName='opacity' values='1;0.8;1' dur='4s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3Cellipse cx='225' cy='165' rx='15' ry='${isHappy ? '12' : '18'}' fill='url(%23eyeGrad)' filter='url(%23glow)'%3E%3Canimate attributeName='opacity' values='1;0.8;1' dur='4s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3C!-- Pupils (Round when happy, oval when normal) --%3E%3Cellipse cx='175' cy='165' rx='${isHappy ? '6' : '4'}' ry='${isHappy ? '6' : '12'}' fill='%23000000'/%3E%3Cellipse cx='225' cy='165' rx='${isHappy ? '6' : '4'}' ry='${isHappy ? '6' : '12'}' fill='%23000000'/%3E%3C!-- Eye Highlights --%3E%3Cellipse cx='178' cy='160' rx='2' ry='3' fill='%23FFFFFF' opacity='0.9'%3E%3Canimate attributeName='opacity' values='0.9;0.6;0.9' dur='2s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3Cellipse cx='228' cy='160' rx='2' ry='3' fill='%23FFFFFF' opacity='0.9'%3E%3Canimate attributeName='opacity' values='0.9;0.6;0.9' dur='2s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3C!-- Pink Triangular Nose --%3E%3Cpath d='M 200 185 L 195 195 L 205 195 Z' fill='url(%23noseGrad)'%3E%3CanimateTransform attributeName='transform' type='scale' values='1;1.1;1' dur='2s' repeatCount='indefinite'/%3E%3C/path%3E%3C!-- Cat Mouth (Curved smile when happy) --%3E%3Cpath d='M 200 200 Q ${isHappy ? '185 210 175 205' : '185 205 175 200'}' stroke='%23FF4500' stroke-width='2' fill='none'/%3E%3Cpath d='M 200 200 Q ${isHappy ? '215 210 225 205' : '215 205 225 200'}' stroke='%23FF4500' stroke-width='2' fill='none'/%3E%3C!-- Whiskers (Animated) --%3E%3Cline x1='120' y1='175' x2='80' y2='170' stroke='%23FFFFFF' stroke-width='2' opacity='0.9'%3E%3CanimateTransform attributeName='transform' type='rotate' values='0 120 175;2 120 175;0 120 175' dur='3s' repeatCount='indefinite'/%3E%3C/line%3E%3Cline x1='125' y1='185' x2='85' y2='185' stroke='%23FFFFFF' stroke-width='2' opacity='0.9'%3E%3CanimateTransform attributeName='transform' type='rotate' values='0 125 185;-1 125 185;0 125 185' dur='3.5s' repeatCount='indefinite'/%3E%3C/line%3E%3Cline x1='130' y1='195' x2='90' y2='200' stroke='%23FFFFFF' stroke-width='2' opacity='0.9'%3E%3CanimateTransform attributeName='transform' type='rotate' values='0 130 195;1 130 195;0 130 195' dur='2.8s' repeatCount='indefinite'/%3E%3C/line%3E%3Cline x1='280' y1='175' x2='320' y2='170' stroke='%23FFFFFF' stroke-width='2' opacity='0.9'%3E%3CanimateTransform attributeName='transform' type='rotate' values='0 280 175;-2 280 175;0 280 175' dur='3s' repeatCount='indefinite'/%3E%3C/line%3E%3Cline x1='275' y1='185' x2='315' y2='185' stroke='%23FFFFFF' stroke-width='2' opacity='0.9'%3E%3CanimateTransform attributeName='transform' type='rotate' values='0 275 185;1 275 185;0 275 185' dur='3.5s' repeatCount='indefinite'/%3E%3C/line%3E%3Cline x1='270' y1='195' x2='310' y2='200' stroke='%23FFFFFF' stroke-width='2' opacity='0.9'%3E%3CanimateTransform attributeName='transform' type='rotate' values='0 270 195;-1 270 195;0 270 195' dur='2.8s' repeatCount='indefinite'/%3E%3C/line%3E%3C!-- Cat Paws (Cute and round) --%3E%3Cellipse cx='170' cy='420' rx='25' ry='15' fill='url(%23catGrad)' stroke='%239945FF' stroke-width='2'%3E%3CanimateTransform attributeName='transform' type='scale' values='1;1.05;1' dur='4s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3Cellipse cx='230' cy='420' rx='25' ry='15' fill='url(%23catGrad)' stroke='%239945FF' stroke-width='2'%3E%3CanimateTransform attributeName='transform' type='scale' values='1;1.05;1' dur='4.2s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3C!-- Paw Pads --%3E%3Cellipse cx='170' cy='415' rx='8' ry='5' fill='%23FF69B4'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='3s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3Cellipse cx='230' cy='415' rx='8' ry='5' fill='%23FF69B4'%3E%3Canimate attributeName='opacity' values='0.8;1;0.8' dur='3s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3C!-- Cat Tail (Swishing) --%3E%3Cpath d='M 120 340 Q 80 320 60 280 Q 40 240 70 200' stroke='url(%23catGrad)' stroke-width='20' fill='none' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' values='0 120 340;10 120 340;-5 120 340;0 120 340' dur='5s' repeatCount='indefinite'/%3E%3C/path%3E%3C!-- Digital Glitch Effects --%3E%3Crect x='0' y='150' width='400' height='2' fill='%239945FF' opacity='0.4'%3E%3Canimate attributeName='opacity' values='0.4;0.8;0.4' dur='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='y' values='150;200;250;300;350;150' dur='6s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect x='0' y='300' width='400' height='1' fill='%23FFD700' opacity='0.3'%3E%3Canimate attributeName='opacity' values='0.3;0.7;0.3' dur='1.2s' repeatCount='indefinite'/%3E%3Canimate attributeName='y' values='300;350;400;450;300' dur='4s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E")`,
            aspectRatio: '4/5',
            minHeight: '500px',
            filter: `drop-shadow(0 0 30px rgba(153, 69, 255, 0.3)) contrast(1.2) saturate(1.1) ${
              isHappy ? 'hue-rotate(20deg) brightness(1.2)' : ''
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

        {/* Digital HUD overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 border border-catbot-purple/40 px-2 py-1 text-xs font-mono text-catbot-purple animate-pulse">
            CATBOT.AI
          </div>
          <div className="absolute top-4 right-4 flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-green-500">ONLINE</span>
          </div>
          <div className="absolute bottom-4 left-4 text-xs font-mono text-catbot-purple/60">
            STATUS: {isHappy ? 'PURRING' : 'HUNTING'}
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

export default CatIllustration;
