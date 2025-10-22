'use client';

import React, { useState, useEffect, useRef } from 'react';

interface BackgroundImageProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
  overlayColor?: string;
  fallbackColor?: string;
  priority?: boolean;
  sizes?: string;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  blur?: boolean;
  parallax?: boolean;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  children,
  className = '',
  overlayOpacity = 0.6,
  overlayColor = 'black',
  fallbackColor = '#f8fafc',
  priority = false,
  sizes = '100vw',
  position = 'center',
  blur = false,
  parallax = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Parallax effect
  useEffect(() => {
    if (!parallax || !imageLoaded) return;

    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        imageRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax, imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const getPositionClass = () => {
    switch (position) {
      case 'top':
        return 'object-top';
      case 'bottom':
        return 'object-bottom';
      case 'left':
        return 'object-left';
      case 'right':
        return 'object-right';
      default:
        return 'object-center';
    }
  };

  const overlayStyle = {
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: fallbackColor,
      }}
    >
      {/* Background Image */}
      {isInView && !imageError && (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`
            absolute inset-0 w-full h-full object-cover
            ${getPositionClass()}
            ${blur ? 'filter blur-sm' : ''}
            ${parallax ? 'scale-110' : ''}
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            transition-opacity duration-700 ease-in-out
          `}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          style={{
            zIndex: -2,
          }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          ...overlayStyle,
          zIndex: -1,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Loading state */}
      {isInView && !imageLoaded && !imageError && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundColor: fallbackColor,
            zIndex: -3,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default BackgroundImage;