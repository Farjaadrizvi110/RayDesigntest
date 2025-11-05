'use client';

import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
  duration?: number;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState('');
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([]);
  
  const loadingTexts = [
    'Initializing...',
    'Loading Assets...',
    'Preparing Experience...',
    'Almost Ready...',
    'Welcome!'
  ];

  // Generate particles on client side only
  useEffect(() => {
    const particleArray = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 2}s`
    }));
    setParticles(particleArray);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (duration / 50));
        
        // Update loading text based on progress
        const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1));
        setCurrentText(loadingTexts[textIndex] || loadingTexts[0]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-20 h-20 border rounded-full top-1/4 left-1/4 sm:w-32 sm:h-32 border-blue-400/20 animate-spin-slow" />
        <div className="absolute w-16 h-16 rotate-45 border top-3/4 right-1/4 sm:w-24 sm:h-24 border-purple-400/20 animate-pulse" />
        <div className="absolute w-12 h-12 rounded-lg bottom-1/4 left-1/3 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-bounce" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 text-center sm:px-6">
        {/* Logo/Brand Animation */}
        <div className="mb-8 sm:mb-12">
          <div className="relative">
            <svg
              width="80"
              height="80"
              viewBox="0 0 120 120"
              className="mx-auto mb-4 sm:mb-6 animate-pulse sm:w-[120px] sm:h-[120px]"
            >
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Outer Ring */}
              <circle
                cx="60"
                cy="60"
                r="55"
                fill="none"
                stroke="url(#logoGradient)"
                strokeWidth="2"
                strokeDasharray="345"
                strokeDashoffset={345 - (progress / 100) * 345}
                className="transition-all duration-300 ease-out"
                filter="url(#glow)"
              />
              
              {/* Inner Design */}
              <g transform="translate(60,60)">
                <polygon
                  points="-20,-15 20,-15 25,0 20,15 -20,15 -25,0"
                  fill="url(#logoGradient)"
                  className="animate-pulse"
                  opacity={progress / 100}
                />
                <circle
                  cx="0"
                  cy="0"
                  r="8"
                  fill="#ffffff"
                  className="animate-ping"
                  style={{ animationDelay: '1s' }}
                />
              </g>
            </svg>
            
            {/* Rotating Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border-2 rounded-full sm:w-32 sm:h-32 border-blue-400/30 animate-spin-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border rounded-full sm:w-40 sm:h-40 border-purple-400/20 animate-spin-reverse" />
            </div>
          </div>
          
          <h1 className="mb-2 text-2xl font-bold text-white sm:text-4xl animate-fade-in">
            Ray<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Design Digital</span>
          </h1>
          <p className="text-sm text-blue-200 sm:text-lg animate-fade-in-delay">
            Crafting Digital Excellence
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mx-auto mb-6 w-72 sm:w-80 sm:mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-blue-200 sm:text-sm">{currentText}</span>
            <span className="font-mono text-xs text-blue-200 sm:text-sm">{Math.round(progress)}%</span>
          </div>
          
          <div className="relative h-1.5 sm:h-2 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 ease-out rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </div>
          </div>
          
          {/* Progress Dots */}
          <div className="flex justify-center mt-3 sm:mt-4 space-x-1.5 sm:space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  progress > (i * 20) 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-110' 
                    : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full sm:w-3 sm:h-3 bg-gradient-to-r from-blue-400 to-purple-400 animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute transform -translate-x-1/2 bottom-4 sm:bottom-8 left-1/2">
        <div className="flex items-center space-x-2 text-xs text-blue-300/60 sm:text-sm">
          <div className="w-6 h-px sm:w-8 bg-gradient-to-r from-transparent to-blue-400" />
          <span>Powered by Innovation</span>
          <div className="w-6 h-px sm:w-8 bg-gradient-to-l from-transparent to-blue-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay {
          0% { opacity: 0; transform: translateY(20px); }
          50% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 2s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;