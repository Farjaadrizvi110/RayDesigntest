'use client';

import React, { ReactNode } from 'react';

interface BackgroundImageProps {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  children,
  className = ''
}) => {
  return (
    <div 
      className={`relative min-h-screen bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${src})`
      }}
      role="img"
      aria-label={alt}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
