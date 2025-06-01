
import React from 'react';

interface DataPanelProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  animationDelay?: string;
}

const DataPanel: React.FC<DataPanelProps> = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  className = "",
  animationDelay = "0s"
}) => {
  return (
    <div 
      className={`glass-panel p-4 max-w-xs transform rotate-3 hover:rotate-0 transition-transform duration-300 ${className}`}
      style={{ animationDelay }}
    >
      <div className="flex items-center space-x-2 mb-2">
        {icon && (
          <div className="text-catbot-gold">
            {icon}
          </div>
        )}
        <h3 className="font-ibm-mono text-xs uppercase tracking-wider text-catbot-text-muted">
          {title}
        </h3>
      </div>
      
      <div className="font-orbitron text-lg font-bold text-catbot-text-primary mb-1">
        {value}
      </div>
      
      {subtitle && (
        <p className="font-inter text-xs text-catbot-text-secondary">
          {subtitle}
        </p>
      )}
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-catbot-purple/5 to-transparent rounded-lg pointer-events-none" />
    </div>
  );
};

export default DataPanel;
