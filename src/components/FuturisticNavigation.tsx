
import React, { useState } from 'react';
import { Home, Gear, Radar, MessageCircle, Info, Mail } from 'lucide-react';

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
    { id: 'how-it-works', icon: <Gear size={16} />, label: 'How It Works', href: '#how-it-works' },
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
    <nav className="fixed top-5 right-5 z-50">
      <div className="flex flex-col space-y-2">
        {navItems.map((item, index) => (
          <div
            key={item.id}
            className="relative group"
            style={{ marginRight: `${index * 5}px`, marginTop: `${index * 2}px` }}
          >
            {/* Navigation Icon */}
            <button
              className="w-10 h-10 border-2 border-catbot-gold rounded-full flex items-center justify-center text-catbot-gold transition-all duration-300 hover:scale-110 hover:border-catbot-purple hover:text-catbot-purple hover:shadow-[0_0_15px_rgba(153,69,255,0.6)] animate-nav-pulse bg-black/20 backdrop-blur-sm"
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
              <div className="absolute right-12 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-black/40 backdrop-blur-sm border border-white/10 rounded-md whitespace-nowrap animate-fade-in">
                <span className="text-catbot-text-secondary text-xs font-ibm-mono uppercase tracking-wider">
                  {item.label}
                </span>
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-white/10 border-t-2 border-t-transparent border-b-2 border-b-transparent" />
              </div>
            )}

            {/* Beam Effect (when clicked) */}
            <div className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-200">
              <div className="w-full h-0.5 bg-gradient-to-r from-catbot-gold to-transparent absolute top-1/2 left-full transform -translate-y-1/2" />
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default FuturisticNavigation;
