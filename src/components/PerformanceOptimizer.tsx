'use client';

import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero background image
      const heroImg = new Image();
      heroImg.src = '/images/hero-bg.jpg';
      
      // Preload services background image
      const servicesImg = new Image();
      servicesImg.src = '/images/services-bg.jpg';
      
      // Preload fonts (if using custom fonts)
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Optimize images with intersection observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
              }
              imageObserver.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        });

        images.forEach((img) => imageObserver.observe(img));
      }
    };

    // Reduce layout shift by setting image dimensions
    const preventLayoutShift = () => {
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach((img) => {
        const htmlImg = img as HTMLImageElement;
        if (htmlImg.naturalWidth && htmlImg.naturalHeight) {
          htmlImg.setAttribute('width', htmlImg.naturalWidth.toString());
          htmlImg.setAttribute('height', htmlImg.naturalHeight.toString());
        }
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach((script) => {
        const htmlScript = script as HTMLScriptElement;
        if (!htmlScript.async && !htmlScript.defer) {
          htmlScript.defer = true;
        }
      });
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeImages();
    preventLayoutShift();
    optimizeThirdPartyScripts();

    // Performance monitoring
    if ('PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart) {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Cleanup function
    return () => {
      // Clean up observers if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;