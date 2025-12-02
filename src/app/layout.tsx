import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PerformanceOptimizer from '../components/PerformanceOptimizer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Best Digital Services | RayDesign',
    template: '%s | RayDesign'
  },
  description: 'Get the best digital services: web development, mobile apps, SEO, and digital marketing tailored to grow your business. Free consultation available.',
  keywords: [
    'best digital services',
    'web development',
    'mobile app development',
    'digital marketing',
    'SEO services',
    'website design',
    'e-commerce development',
    'React development',
    'Next.js development',
    'responsive design',
    'UI/UX design',
    'custom software development',
    'digital transformation',
    'online marketing',
    'search engine optimization',
    'professional web services'
  ],
  authors: [{ name: 'RayDesign Team' }],
  creator: 'RayDesign',
  publisher: 'RayDesign',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://raydesign.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raydesign.netlify.app',
    title: 'Best Digital Services | RayDesign',
    description: 'Top-rated digital services: web development, mobile apps, SEO, and digital marketing to drive growth.',
    siteName: 'RayDesign',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RayDesign - Professional Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RayDesign - Professional Web Development & Digital Marketing',
    description: 'Transform your digital presence with custom web development, mobile apps, and digital marketing solutions that drive results.',
    images: ['/images/twitter-image.jpg'],
    creator: '@raydesign',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://raydesign.netlify.app/#organization",
        "name": "RayDesign",
        "url": "https://raydesign.netlify.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://raydesign.netlify.app/images/logo.png",
          "width": 300,
          "height": 100
        },
        "description": "Professional web development and digital marketing services",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1a Townhead St",
          "addressLocality": "Cumnock",
          "postalCode": "KA18 1LA",
          "addressCountry": "GB"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+44 7757 202729",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://twitter.com/raydesign",
          "https://linkedin.com/company/raydesign",
          "https://github.com/raydesign"
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "RayDesign",
        "telephone": "+44 7757 202729",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1a Townhead St",
          "addressLocality": "Cumnock",
          "postalCode": "KA18 1LA",
          "addressCountry": "GB"
        },
        "areaServed": "United Kingdom",
        "url": "https://raydesign.netlify.app"
      },
      {
        "@type": "WebSite",
        "@id": "https://raydesign.netlify.app/#website",
        "url": "https://raydesign.netlify.app",
        "name": "RayDesign",
        "description": "Professional web development and digital marketing services",
        "publisher": {
          "@id": "https://raydesign.netlify.app/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://raydesign.netlify.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "name": "Best Digital Services",
        "provider": {
          "@id": "https://raydesign.netlify.app/#organization"
        },
        "serviceType": "Digital Services",
        "description": "Custom web development, mobile app development, SEO optimization, and digital marketing solutions",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceRange": "$$"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="preload" href="/images/services-bg.jpg" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//media.istockphoto.com" />
        <link rel="dns-prefetch" href="//api.microlink.io" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://raydesign.netlify.app" />
        
        {/* Favicon and app icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
        <PerformanceOptimizer />
        {children}
        <a
          href="https://wa.me/447557202729"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="fixed right-4 md:right-6 lg:right-8 bottom-4 md:bottom-6 z-50 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600/30 flex items-center justify-center"
          style={{ backgroundColor: '#25D366' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white"
            aria-hidden="true"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.771.966-.943 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.149-.672-1.616-.921-2.215-.242-.579-.487-.5-.672-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.005-1.414.247-.695.247-1.29.173-1.414-.074-.123-.273-.198-.57-.347m-5.421 7.403h-.003a9.87 9.87 0 0 1-5.031-1.378l-.36-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.245c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.112 1.03 6.963 2.882a9.825 9.825 0 0 1 2.924 6.994c-.003 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .184 5.311.182 11.867c0 2.086.547 4.125 1.588 5.935L0 24l6.356-1.665a11.84 11.84 0 0 0 5.684 1.449h.005c6.554 0 11.865-5.311 11.868-11.867a11.8 11.8 0 0 0-3.448-8.449Z"/>
          </svg>
        </a>
      </body>
    </html>
  )
}
