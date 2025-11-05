import React from 'react';

interface RayDesignLogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

const RayDesignLogo: React.FC<RayDesignLogoProps> = ({ 
  className = "", 
  width = 200, 
  height = 60,
  showText = true 
}) => {
  return (
    <div 
      className={`inline-flex items-center gap-3 ${className}`}
      role="img"
      aria-label="Ray Design Technologies Logo"
    >
      {/* Logo Icon */}
      <div>
        <svg
          width={height}
          height={height}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3730a3" />
            </linearGradient>
          </defs>
          
          {/* Main Circle Background */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="url(#logoGradient)"
          />
          
          {/* "R" Letter Design */}
          <path
            d="M25 20 L25 80 L35 80 L35 55 L50 55 L60 80 L72 80 L60 52 Q70 48 70 38 Q70 20 55 20 Z M35 30 L35 45 L55 45 Q60 45 60 37.5 Q60 30 55 30 Z"
            fill="white"
            fillOpacity="0.95"
          />
        </svg>
      </div>

      {/* Company Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            <span className="text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text">
              RAY DESIGN
            </span>
          </div>
          <div className="text-lg font-semibold tracking-wider sm:text-base md:text-base lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 drop-shadow-sm">
            DIGITAL
          </div>
        </div>
      )}
    </div>
  );
};

export default RayDesignLogo;