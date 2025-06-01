
import React, { useState } from 'react';
import { Home, Settings, Radar, MessageCircle, Info, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
}

const FuturisticNavigation: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { id: 'home', icon: <Home size={16} />, label: 'Home', href: '#hero' },
    { id: 'how-it-works', icon: <Settings size={16} />, label: 'How It Works', href: '#how-it-works' },
    { id: 'features', icon: <Radar size={16} />, label: 'Features', href: '#features' },
    { id: 'testimonials', icon: <MessageCircle size={16} />, label: 'Testimonials', href: '#testimonials' },
    { id: 'about', icon: <Info size={16} />, label: 'About', href: '#about' },
    { id: 'contact', icon: <Mail size={16} />, label: 'Try Us', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
      <div className="relative">
        {/* Navigation items radiating from center */}
        {navItems.map((item, index) => {
          const angle = (index * 60) - 90; // Start from top and go clockwise
          const radius = 180; // Distance from center
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;
          
          return (
            <div
              key={item.id}
              className="absolute pointer-events-auto"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Connection Line to Center */}
              <div 
                className="absolute w-0.5 bg-gradient-to-r from-catbot-gold to-transparent opacity-30"
                style={{
                  height: `${radius}px`,
                  transformOrigin: 'bottom center',
                  transform: `rotate(${angle + 180}deg)`,
                  bottom: '50%',
                  left: '50%',
                  marginLeft: '-1px'
                }}
              />
              
              {/* Navigation Icon */}
              <button
                className="w-12 h-12 border-2 border-catbot-gold rounded-full flex items-center justify-center text-catbot-gold transition-all duration-300 hover:scale-110 hover:border-catbot-purple hover:text-catbot-purple hover:shadow-[0_0_15px_rgba(153,69,255,0.6)] animate-nav-pulse bg-black/40 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNavClick(item.href)}
                aria-label={item.label}
              >
                {item.icon}
              </button>

              {/* Tooltip */}
              {hoveredItem === item.id && (
                <div 
                  className="absolute px-3 py-1 bg-black/40 backdrop-blur-sm border border-white/10 rounded-md whitespace-nowrap animate-fade-in z-50"
                  style={{
                    left: x > 0 ? '-120px' : '60px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <span className="text-catbot-text-secondary text-xs font-ibm-mono uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              )}

              {/* Beam Effect (when clicked) */}
              <div className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-200">
                <div className="w-full h-0.5 bg-gradient-to-r from-catbot-gold to-transparent absolute top-1/2 left-full transform -translate-y-1/2" />
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default FuturisticNavigation;
