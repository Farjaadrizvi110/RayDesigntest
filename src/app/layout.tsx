import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PerformanceOptimizer from '../components/PerformanceOptimizer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'RayDesign - Professional Web Development & Digital Marketing Services',
    template: '%s | RayDesign'
  },
  description: 'Transform your digital presence with RayDesign. We specialize in custom web development, mobile app development, SEO optimization, and digital marketing solutions that drive real business results. Get a free consultation today!',
  keywords: [
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
    title: 'RayDesign - Professional Web Development & Digital Marketing Services',
    description: 'Transform your digital presence with RayDesign. We specialize in custom web development, mobile app development, SEO optimization, and digital marketing solutions that drive real business results.',
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
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-0123",
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
        "name": "Web Development Services",
        "provider": {
          "@id": "https://raydesign.netlify.app/#organization"
        },
        "serviceType": "Web Development",
        "description": "Custom web development, mobile app development, and digital marketing solutions",
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
        <PerformanceOptimizer />
        {children}
      </body>
    </html>
  )
}