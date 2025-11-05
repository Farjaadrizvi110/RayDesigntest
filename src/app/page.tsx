'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Star, Users, Award, TrendingUp, Code, Smartphone, ShoppingCart, Search, Target, Share2, Palette, Lightbulb, Zap, CheckCircle, Mail, Phone, MapPin, Sparkles, Rocket, Globe, Monitor, Cpu, Database, Cloud, Layout, PenTool, BarChart3, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import Preloader from '../components/Preloader';
import RayDesignLogo from '../components/RayDesignLogo';
import BackgroundImage from '../components/BackgroundImage';

import AnimatedBackground from '../components/AnimatedBackground';

// Hero Illustration Component
const HeroIllustration = () => (
  <div className="relative w-full h-full">
    <img 
      src="https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ="
      alt="Professional team collaboration - modern digital workspace with laptops, tablets and smartphones showcasing web development and digital marketing solutions"
      className="w-full h-full object-cover rounded-2xl shadow-2xl"
      loading="lazy"
      width="612"
      height="612"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-2xl"></div>
  </div>
);

// Project Mockup Component
interface ProjectMockupProps {
  title: string;
  gradient: string;
}

const ProjectMockup = ({ title, gradient }: ProjectMockupProps) => (
  <div className="relative w-full h-64 rounded-2xl overflow-hidden group">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}></div>
    <div className="absolute inset-0 glass-effect p-6">
      <div className="space-y-3">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        {/* Content Lines */}
        <div className="h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded w-3/4 opacity-60"></div>
        <div className="h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded w-1/2 opacity-40"></div>
        <div className="h-20 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded mt-4"></div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded"></div>
          <div className="h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded"></div>
          <div className="h-12 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded"></div>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
      <span className="text-white font-semibold">{title}</span>
    </div>
  </div>
);

// Team Member Avatar
interface TeamAvatarProps {
  name: string;
  role: string;
  gradient: string;
}

const TeamAvatar = ({ name, role, gradient }: TeamAvatarProps) => (
  <div className="flex flex-col items-center group">
    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
      <Users className="w-12 h-12 text-white" />
    </div>
    <h4 className="font-semibold text-white">{name}</h4>
    <p className="text-sm text-white">{role}</p>
    
  </div>
);

// Project Showcase Component
interface Project {
  imageUrl: string;
  title: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
  visibleSections: Set<string>;
}

const ProjectShowcase = ({ projects, visibleSections }: ProjectShowcaseProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    {projects.map((project, index) => (
      <div 
        key={index}
        className={`group bg-white/80 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-md hover:shadow-xl border border-slate-200 ${visibleSections.has('portfolio') ? 'animate-slide-up' : 'opacity-15'}`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="relative overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={`${project.title} - ${project.description} - Professional web development project showcase`}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            width="400"
            height="256"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-6 left-6 right-6">
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full font-medium hover:bg-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                View Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-600">
              <Monitor className="w-4 h-4" />
              <span className="text-sm font-medium">Live Project</span>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const RayDesignWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState('home');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const heroRef = useRef(null);
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (isServicesOpen && e.target && (e.target as Element).closest && !(e.target as Element).closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClickOutside);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClickOutside);
      observer.disconnect();
    };
  }, [isServicesOpen]);

  const services = [
    // MAIN SERVICES
    {
      id: 'web-application',
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Application",
      description: "Full-stack web solutions from simple websites to complex enterprise applications.",
      color: "from-blue-500 via-blue-600 to-blue-700",
      image: <Monitor className="w-16 h-16" />,
      category: "MAIN SERVICES",
      subServices: [
        {
          name: "MERN Stack Web Development",
          description: "Full-stack applications built with MongoDB, Express, React, and Node.js",
          icon: <Code className="w-5 h-5" />
        },
        {
          name: " E-Commerce Solutions",
          description: "Complete online stores using MERN stack with payment integrations",
          icon: <ShoppingCart className="w-5 h-5" />
        },
        {
          name: " Web Applications",
          description: "Scalable and interactive web apps with MERN architecture",
          icon: <Layout className="w-5 h-5" />
        },
        {
          name: " CMS Development",
          description: "Custom content management systems built on MERN stack",
          icon: <Database className="w-5 h-5" />
        },
        {
          name: "Progressive Web Apps",
          description: "App-like experiences on the web",
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          name: "API Development",
          description: "RESTful and GraphQL API integration",
          icon: <Cloud className="w-5 h-5" />
        }
      ],
      features: [
        "Responsive design that works flawlessly across all devices",
        "SEO-optimized architecture for better search rankings",
        "Fast loading times with performance optimization",
        "Secure authentication and data protection",
        "Scalable infrastructure that grows with your business",
        "Content management systems for easy updates",
        "Third-party integrations (payments, shipping, CRM)",
        "Analytics and tracking implementation",
        "Cross-browser compatibility testing",
        "Ongoing maintenance and support"
      ],
      process: [
        { title: "Discovery", description: "Understanding your business goals, target audience, and requirements" },
        { title: "Design", description: "Creating wireframes, prototypes, and visual designs" },
        { title: "Development", description: "Building with React, Next.js, Node.js, and modern tech stack" },
        { title: "Testing", description: "Quality assurance, performance testing, and bug fixes" },
        { title: "Launch", description: "Deployment to production and post-launch support" },
        { title: "Optimize", description: "Continuous monitoring, updates, and improvements" }
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Docker"],
      stats: {
        projects: "200+",
        clients: "150+",
        satisfaction: "98%",
        avgSpeed: "95/100"
      }
    },
    {
      id: 'mobile-application',
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Application",
      description: "Native and cross-platform mobile apps for iOS and Android with exceptional user experiences.",
      color: "from-blue-600 via-blue-700 to-blue-800",
      image: <Smartphone className="w-16 h-16" />,
      category: "MAIN SERVICES",
      subServices: [
        {
          name: "Native iOS Development",
          description: "Swift and SwiftUI native apps",
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          name: "Native Android Development",
          description: "Kotlin and Java native apps",
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          name: "React Native Apps",
          description: "Cross-platform JavaScript apps",
          icon: <Code className="w-5 h-5" />
        },
        {
          name: "Flutter Development",
          description: "Beautiful cross-platform apps",
          icon: <Palette className="w-5 h-5" />
        },
        {
          name: "App UI/UX Design",
          description: "Mobile-first design principles",
          icon: <PenTool className="w-5 h-5" />
        },
        {
          name: "App Maintenance",
          description: "Updates, bug fixes, and support",
          icon: <Cloud className="w-5 h-5" />
        }
      ],
      features: [
        "Native iOS and Android app development",
        "Cross-platform solutions (React Native, Flutter)",
        "Intuitive and engaging user interface design",
        "Offline functionality and data synchronization",
        "Push notifications and real-time updates",
        "In-app purchases and subscription management",
        "Social media and third-party API integration",
        "Biometric authentication (Face ID, Touch ID)",
        "App Store and Google Play optimization",
        "Comprehensive testing and quality assurance",
        "Post-launch support and maintenance",
        "Performance monitoring and analytics"
      ],
      process: [
        { title: "Strategy", description: "Platform selection, features planning, and technical architecture" },
        { title: "UX Design", description: "Wireframing, prototyping, and mobile-first user experience design" },
        { title: "Development", description: "Building native or cross-platform apps with latest frameworks" },
        { title: "Testing", description: "Rigorous QA across multiple devices and OS versions" },
        { title: "Deployment", description: "App Store and Google Play submission and approval" },
        { title: "Support", description: "Ongoing updates, maintenance, and feature enhancements" }
      ],
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "Redux", "GraphQL", "Jest"],
      stats: {
        projects: "100+",
        clients: "80+",
        satisfaction: "97%",
        avgRating: "4.8/5"
      }
    },
    {
      id: 'digital-marketing',
      icon: <Target className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive growth, engagement, and conversions.",
      color: "from-blue-500 via-blue-600 to-blue-700",
      image: <Target className="w-16 h-16" />,
      category: "MAIN SERVICES",
      subServices: [
        {
          name: "Search Engine Optimization",
          description: "Improve rankings and organic traffic",
          icon: <Search className="w-5 h-5" />
        },
        {
          name: "Pay-Per-Click Advertising",
          description: "Google Ads and paid campaigns",
          icon: <Target className="w-5 h-5" />
        },
        {
          name: "Social Media Marketing",
          description: "Facebook, Instagram, LinkedIn, Twitter",
          icon: <Share2 className="w-5 h-5" />
        },
        {
          name: "Content Marketing",
          description: "Blogs, videos, and engaging content",
          icon: <PenTool className="w-5 h-5" />
        },
        {
          name: "Email Marketing",
          description: "Automated campaigns and newsletters",
          icon: <Mail className="w-5 h-5" />
        },
        {
          name: "Analytics & Reporting",
          description: "Data-driven insights and tracking",
          icon: <BarChart3 className="w-5 h-5" />
        }
      ],
      features: [
        "Comprehensive SEO strategy and implementation",
        "Keyword research and competitor analysis",
        "Google Ads and PPC campaign management",
        "Social media strategy and content creation",
        "Facebook, Instagram, LinkedIn advertising",
        "Influencer partnerships and collaborations",
        "Content marketing and blog writing",
        "Email marketing automation",
        "Conversion rate optimization (CRO)",
        "Google Analytics and tracking setup",
        "Monthly reporting and performance analysis",
        "Brand reputation management"
      ],
      process: [
        { title: "Audit", description: "Analyze current digital presence and competitor landscape" },
        { title: "Strategy", description: "Develop comprehensive marketing strategy and goals" },
        { title: "Execute", description: "Launch campaigns across chosen channels" },
        { title: "Optimize", description: "A/B testing and continuous improvement" },
        { title: "Report", description: "Track KPIs and provide detailed analytics" },
        { title: "Scale", description: "Expand successful campaigns and explore new channels" }
      ],
      technologies: ["Google Ads", "Facebook Ads", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Google Analytics", "Hootsuite"],
      stats: {
        projects: "250+",
        clients: "200+",
        avgROI: "289%",
        engagement: "+278%"
      }
    },
    
    // E-COMMERCE
    {
      id: 'ecommerce',
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that convert visitors into customers with seamless shopping experiences.",
      color: "from-blue-500 via-blue-600 to-blue-700",
      image: <ShoppingCart className="w-16 h-16" />,
      category: "E-COMMERCE",
      subServices: [
        {
          name: "Shopify Development",
          description: "Custom Shopify stores and themes",
          icon: <ShoppingCart className="w-5 h-5" />
        },
        {
          name: "WooCommerce Solutions",
          description: "WordPress-based e-commerce",
          icon: <Code className="w-5 h-5" />
        },
        {
          name: "Magento Development",
          description: "Enterprise e-commerce platforms",
          icon: <Database className="w-5 h-5" />
        },
        {
          name: "Payment Integration",
          description: "Secure payment gateways",
          icon: <CheckCircle className="w-5 h-5" />
        },
        {
          name: "Inventory Management",
          description: "Stock and order management",
          icon: <BarChart3 className="w-5 h-5" />
        },
        {
          name: "Conversion Optimization",
          description: "Increase sales and reduce cart abandonment",
          icon: <TrendingUp className="w-5 h-5" />
        }
      ],
      features: [
        "Custom e-commerce website development",
        "Shopify, WooCommerce, Magento expertise",
        "Secure payment gateway integration (Stripe, PayPal)",
        "Shopping cart and checkout optimization",
        "Product catalog and inventory management",
        "Multi-currency and multi-language support",
        "Shipping and tax calculation automation",
        "Product recommendation engines",
        "Customer account management",
        "Order tracking and notifications",
        "Analytics and sales reporting",
        "Mobile-responsive design"
      ],
      process: [
        { title: "Platform", description: "Choose the right e-commerce platform for your needs" },
        { title: "Design", description: "Create compelling product pages and user flows" },
        { title: "Development", description: "Build custom features and integrations" },
        { title: "Integration", description: "Connect payment, shipping, and inventory systems" },
        { title: "Testing", description: "Test checkout flow and payment processing" },
        { title: "Launch", description: "Deploy and optimize for conversions" }
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Google Analytics", "Klaviyo", "Yotpo"],
      stats: {
        projects: "80+",
        clients: "65+",
        avgConversion: "+210%",
        satisfaction: "96%"
      }
    },
    
    // MARKETING SERVICES
    {
      id: 'social-media',
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all major social platforms.",
      color: "from-blue-600 via-blue-600 to-blue-700",
      image: <Share2 className="w-16 h-16" />,
      category: "MARKETING",
      subServices: [
        {
          name: "Content Strategy",
          description: "Strategic content planning and calendars",
          icon: <PenTool className="w-5 h-5" />
        },
        {
          name: "Content Creation",
          description: "Posts, stories, reels, and videos",
          icon: <Palette className="w-5 h-5" />
        },
        {
          name: "Community Management",
          description: "Engage and respond to your audience",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "Social Advertising",
          description: "Paid campaigns on social platforms",
          icon: <Target className="w-5 h-5" />
        },
        {
          name: "Influencer Marketing",
          description: "Partnerships and collaborations",
          icon: <Star className="w-5 h-5" />
        },
        {
          name: "Analytics & Reporting",
          description: "Track performance and ROI",
          icon: <BarChart3 className="w-5 h-5" />
        }
      ],
      features: [
        "Social media strategy development",
        "Content creation (graphics, videos, copy)",
        "Facebook and Instagram management",
        "LinkedIn B2B marketing",
        "Twitter/X engagement",
        "TikTok content creation",
        "Community management and moderation",
        "Influencer outreach and partnerships",
        "Social media advertising campaigns",
        "Hashtag research and optimization",
        "Monthly analytics and reporting",
        "Crisis management and reputation monitoring"
      ],
      process: [
        { title: "Audit", description: "Analyze current social media presence and competitors" },
        { title: "Strategy", description: "Develop content strategy and posting calendar" },
        { title: "Create", description: "Design and produce engaging content" },
        { title: "Publish", description: "Schedule and post content consistently" },
        { title: "Engage", description: "Respond to comments and build community" },
        { title: "Analyze", description: "Track metrics and optimize performance" }
      ],
      technologies: ["Hootsuite", "Buffer", "Canva", "Adobe Creative Suite", "Facebook Ads", "Instagram", "LinkedIn", "TikTok"],
      stats: {
        projects: "150+",
        clients: "120+",
        avgEngagement: "+278%",
        followerGrowth: "+187%"
      }
    },
    {
      id: 'seo',
      icon: <Search className="w-8 h-8" />,
      title: "SEO Services",
      description: "Improve your search rankings and drive organic traffic with comprehensive SEO strategies.",
      color: "from-blue-500 via-blue-600 to-blue-600",
      image: <Search className="w-16 h-16" />,
      category: "MARKETING",
      subServices: [
        {
          name: "Keyword Research",
          description: "Find the right keywords to target",
          icon: <Search className="w-5 h-5" />
        },
        {
          name: "On-Page SEO",
          description: "Optimize content and meta tags",
          icon: <Code className="w-5 h-5" />
        },
        {
          name: "Technical SEO",
          description: "Site structure and performance",
          icon: <Database className="w-5 h-5" />
        },
        {
          name: "Link Building",
          description: "Quality backlinks and authority",
          icon: <Globe className="w-5 h-5" />
        },
        {
          name: "Local SEO",
          description: "Google My Business optimization",
          icon: <MapPin className="w-5 h-5" />
        },
        {
          name: "SEO Reporting",
          description: "Track rankings and traffic",
          icon: <BarChart3 className="w-5 h-5" />
        }
      ],
      features: [
        "Comprehensive SEO audit and analysis",
        "Keyword research and competitor analysis",
        "On-page SEO optimization",
        "Technical SEO improvements",
        "Content optimization and creation",
        "Link building campaigns",
        "Local SEO and Google My Business",
        "Mobile SEO optimization",
        "Site speed optimization",
        "Schema markup implementation",
        "XML sitemap and robots.txt",
        "Monthly ranking reports"
      ],
      process: [
        { title: "Audit", description: "Complete website SEO audit and analysis" },
        { title: "Research", description: "Keyword research and competitor analysis" },
        { title: "Strategy", description: "Develop comprehensive SEO strategy" },
        { title: "Optimize", description: "Implement on-page and technical SEO" },
        { title: "Build", description: "Create quality backlinks and authority" },
        { title: "Monitor", description: "Track rankings and adjust strategy" }
      ],
      technologies: ["SEMrush", "Ahrefs", "Google Search Console", "Google Analytics", "Screaming Frog", "Moz", "Yoast SEO"],
      stats: {
        projects: "180+",
        clients: "140+",
        avgTrafficGrowth: "+173%",
        avgRankingImprovement: "Top 10"
      }
    },
    {
      id: 'ppc',
      icon: <Target className="w-8 h-8" />,
      title: "PPC Advertising",
      description: "Drive immediate results with targeted pay-per-click advertising campaigns across multiple platforms.",
      color: "from-blue-600 via-blue-700 to-blue-600",
      image: <Target className="w-16 h-16" />,
      category: "MARKETING",
      subServices: [
        {
          name: "Google Ads",
          description: "Search and display campaigns",
          icon: <Search className="w-5 h-5" />
        },
        {
          name: "Facebook Ads",
          description: "Social media advertising",
          icon: <Share2 className="w-5 h-5" />
        },
        {
          name: "LinkedIn Ads",
          description: "B2B advertising campaigns",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "Remarketing",
          description: "Retarget website visitors",
          icon: <Target className="w-5 h-5" />
        },
        {
          name: "A/B Testing",
          description: "Optimize ad performance",
          icon: <BarChart3 className="w-5 h-5" />
        },
        {
          name: "Campaign Management",
          description: "Ongoing optimization and reporting",
          icon: <TrendingUp className="w-5 h-5" />
        }
      ],
      features: [
        "Google Ads campaign management",
        "Facebook and Instagram advertising",
        "LinkedIn B2B advertising",
        "Display and banner ads",
        "Remarketing and retargeting campaigns",
        "Shopping ads for e-commerce",
        "Video advertising (YouTube)",
        "Landing page optimization",
        "A/B testing and optimization",
        "Conversion tracking setup",
        "Bid management and optimization",
        "Detailed ROI reporting"
      ],
      process: [
        { title: "Research", description: "Audience research and keyword planning" },
        { title: "Strategy", description: "Campaign strategy and budget allocation" },
        { title: "Create", description: "Design ads and landing pages" },
        { title: "Launch", description: "Set up campaigns and tracking" },
        { title: "Monitor", description: "Track performance and adjust bids" },
        { title: "Optimize", description: "Continuous testing and improvement" }
      ],
      technologies: ["Google Ads", "Facebook Ads Manager", "LinkedIn Campaign Manager", "Google Analytics", "Unbounce", "Hotjar"],
      stats: {
        projects: "130+",
        clients: "100+",
        avgROI: "320%",
        avgCTR: "4.2%"
      }
    },
    
    // DESIGN & INNOVATION
    {
      id: 'uiux',
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Create intuitive, beautiful, and user-centered digital experiences that delight your customers.",
      color: "from-blue-500 via-blue-600 to-blue-700",
      image: <PenTool className="w-16 h-16" />,
      category: "DESIGN & INNOVATION",
      subServices: [
        {
          name: "User Research",
          description: "Understand your users' needs",
          icon: <Users className="w-5 h-5" />
        },
        {
          name: "Wireframing",
          description: "Create low-fidelity layouts",
          icon: <Layout className="w-5 h-5" />
        },
        {
          name: "Prototyping",
          description: "Interactive prototypes",
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          name: "Visual Design",
          description: "Beautiful interface design",
          icon: <Palette className="w-5 h-5" />
        },
        {
          name: "Usability Testing",
          description: "Test with real users",
          icon: <CheckCircle className="w-5 h-5" />
        },
        {
          name: "Design Systems",
          description: "Scalable design frameworks",
          icon: <Database className="w-5 h-5" />
        }
      ],
      features: [
        "User research and personas",
        "Information architecture",
        "Wireframing and prototyping",
        "Visual interface design",
        "Interaction design",
        "Usability testing",
        "Accessibility compliance (WCAG)",
        "Design system creation",
        "Mobile and responsive design",
        "Design handoff to developers",
        "Design documentation",
        "Continuous design improvements"
      ],
      process: [
        { title: "Research", description: "User research, interviews, and competitor analysis" },
        { title: "Define", description: "Create personas, user flows, and requirements" },
        { title: "Ideate", description: "Brainstorm solutions and create wireframes" },
        { title: "Design", description: "High-fidelity visual design and prototypes" },
        { title: "Test", description: "Usability testing with real users" },
        { title: "Iterate", description: "Refine based on feedback and data" }
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Maze", "UserTesting", "Principle"],
      stats: {
        projects: "120+",
        clients: "95+",
        satisfaction: "99%",
        avgUsability: "92/100"
      }
    },
    {
      id: 'branding',
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Branding & Identity",
      description: "Build a memorable brand that resonates with your audience and stands out from competitors.",
      color: "from-blue-600 via-blue-600 to-blue-700",
      image: <Palette className="w-16 h-16" />,
      category: "DESIGN & INNOVATION",
      subServices: [
        {
          name: "Brand Strategy",
          description: "Define your brand positioning",
          icon: <Target className="w-5 h-5" />
        },
        {
          name: "Logo Design",
          description: "Create memorable brand marks",
          icon: <Lightbulb className="w-5 h-5" />
        },
        {
          name: "Visual Identity",
          description: "Colors, typography, and style",
          icon: <Palette className="w-5 h-5" />
        },
        {
          name: "Brand Guidelines",
          description: "Comprehensive brand standards",
          icon: <Database className="w-5 h-5" />
        },
        {
          name: "Marketing Collateral",
          description: "Business cards, brochures, etc.",
          icon: <PenTool className="w-5 h-5" />
        },
        {
          name: "Brand Refresh",
          description: "Update existing brands",
          icon: <TrendingUp className="w-5 h-5" />
        }
      ],
      features: [
        "Brand strategy and positioning",
        "Logo design and variations",
        "Color palette development",
        "Typography selection",
        "Visual identity system",
        "Brand guidelines document",
        "Business card design",
        "Letterhead and stationery",
        "Social media templates",
        "Marketing collateral design",
        "Packaging design",
        "Brand refresh and rebranding"
      ],
      process: [
        { title: "Discovery", description: "Understand your business, audience, and competitors" },
        { title: "Strategy", description: "Define brand positioning and messaging" },
        { title: "Concept", description: "Explore visual directions and concepts" },
        { title: "Design", description: "Create logo and visual identity system" },
        { title: "Refine", description: "Iterate based on feedback" },
        { title: "Deliver", description: "Provide all assets and brand guidelines" }
      ],
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Sketch", "Canva"],
      stats: {
        projects: "90+",
        clients: "75+",
        satisfaction: "97%",
        avgBrandRecall: "+85%"
      }
    },
    
    // AI & AUTOMATION
    {
      id: 'ai-solutions',
      icon: <Zap className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Leverage artificial intelligence and automation to streamline operations and drive innovation.",
      color: "from-blue-500 via-blue-600 to-blue-700",
      image: <Cpu className="w-16 h-16" />,
      category: "AI & AUTOMATION",
      subServices: [
        {
          name: "AI Chatbots",
          description: "Intelligent customer support",
          icon: <MessageSquare className="w-5 h-5" />
        },
        {
          name: "Machine Learning",
          description: "Predictive models and algorithms",
          icon: <Cpu className="w-5 h-5" />
        },
        {
          name: "Process Automation",
          description: "Automate repetitive tasks",
          icon: <Zap className="w-5 h-5" />
        },
        {
          name: "Data Analytics",
          description: "AI-powered insights",
          icon: <BarChart3 className="w-5 h-5" />
        },
        {
          name: "Natural Language Processing",
          description: "Text analysis and understanding",
          icon: <MessageSquare className="w-5 h-5" />
        },
        {
          name: "Computer Vision",
          description: "Image and video analysis",
          icon: <Smartphone className="w-5 h-5" />
        }
      ],
      features: [
        "Custom AI model development",
        "Chatbot and virtual assistant creation",
        "Machine learning algorithms",
        "Natural language processing (NLP)",
        "Computer vision applications",
        "Predictive analytics",
        "Process automation and RPA",
        "AI-powered recommendations",
        "Sentiment analysis",
        "Data mining and analysis",
        "AI integration with existing systems",
        "Continuous model improvement"
      ],
      process: [
        { title: "Assess", description: "Identify AI opportunities and use cases" },
        { title: "Data", description: "Collect and prepare training data" },
        { title: "Design", description: "Design AI solution architecture" },
        { title: "Develop", description: "Build and train AI models" },
        { title: "Test", description: "Validate accuracy and performance" },
        { title: "Deploy", description: "Deploy and monitor AI solution" }
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Python", "scikit-learn", "Keras", "Hugging Face", "AWS SageMaker"],
      stats: {
        projects: "50+",
        clients: "40+",
        efficiency: "+47%",
        avgAccuracy: "94%"
      }
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { value: "289%", label: "Average ROI", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Award className="w-6 h-6" /> },
    { value: "4.9/5", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "RayDesign transformed our digital presence completely. Their expertise in web development and SEO increased our conversions by 300%!",
      avatar: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcomGrowth",
      content: "The e-commerce platform they built for us is exceptional. Sales increased by 250% in the first quarter. Highly recommended!",
      avatar: "from-purple-500 to-pink-500"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "Their social media strategies and paid advertising campaigns delivered outstanding results. True professionals!",
      avatar: "from-indigo-500 to-purple-500"
    }
  ];



  const caseStudies = [
    {
      client: "LuxeMarket",
      industry: "E-Commerce",
      challenge: "Declining online sales and high cart abandonment rates",
      solution: "Complete redesign with personalized shopping experiences and AR previews",
      results: [
        { metric: "Conversion Rate", value: "+210%" },
        { metric: "Cart Abandonment", value: "-45%" }
      ],
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      image: "🛍️"
    },
    {
      client: "HealthFirst Clinic",
      industry: "Healthcare",
      challenge: "Needed better patient communication and monitoring",
      solution: "Telemedicine app with secure consultations and health tracking",
      results: [
        { metric: "Patient Engagement", value: "+65%" },
        { metric: "Admin Efficiency", value: "-40%" }
      ],
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      image: "🏥"
    },
    {
      client: "LuxeStyle Boutique",
      industry: "Social Media",
      challenge: "Low engagement and website traffic",
      solution: "Strategic content and influencer partnerships",
      results: [
        { metric: "Followers Growth", value: "+187%" },
        { metric: "Sales Conversion", value: "+43%" }
      ],
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      image: "📱"
    }
  ];

  const projects = [
    {
      imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Frubyhairbeauty.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
      projectUrl: "https://rubyhairbeauty.netlify.app",
      title: "Ruby Hair Beauty",
      description: "Professional hair and beauty salon website",
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
      imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fnowposh.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
      projectUrl: "https://nowposh.netlify.app",
      title: "Now Posh",
      description: "Modern fashion and lifestyle platform",
      technologies: ["React", "Tailwind CSS", "Node.js"]
    },
    {
      imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fgreenserve-v1.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
      projectUrl: "https://greenserve-v1.netlify.app",
      title: "Green Serve",
      description: "Environmental services platform",
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
      imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fa1-ever-last-v1.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      projectUrl: "https://a1-ever-last-v1.vercel.app",
      title: "A1 Ever Last",
      description: "Construction and maintenance services",
      technologies: ["Next.js", "React", "Tailwind CSS"]
    },
    {
      imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fhfc-testing-1.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      projectUrl: "https://holisticfostercare.org/",
      title: "Holistic Foster Care",
      description: "Foster care support and services",
      technologies: ["React", "Next.js", "CSS"]
    },
    {
      imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fhosting-ui.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url",
      projectUrl: "https://hosting-ui.vercel.app/",
      title: "Hosting UI",
      description: "Web hosting service interface",
      technologies: ["React", "Tailwind CSS", "TypeScript"]
    },
    {
      imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fwww.mosflaminggrill.co.uk&screenshot=true&meta=false&embed=screenshot.url",
      projectUrl: "https://www.mosflaminggrill.co.uk",
      title: "Mos Flaming Grill",
      description: "Restaurant website with online ordering",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fumhtrading.com&screenshot=true&meta=false&embed=screenshot.url",
      projectUrl: "https://umhtrading.com",
      title: "UMH Trading",
      description: "Trading and investment platform",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fa1-ever-last-v1.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      projectUrl: "https://a1-ever-last-v1.vercel.app",
      title: "A1 Ever Last Portfolio",
      description: "Professional portfolio and showcase website",
      technologies: ["Next.js", "React", "Tailwind CSS"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  const navigateToService = (serviceName: string) => {
    setCurrentPage(serviceName);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };
  
  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };
  
  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesScrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? servicesScrollRef.current.scrollLeft - scrollAmount
        : servicesScrollRef.current.scrollLeft + scrollAmount;
      
      servicesScrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple form submission without email functionality
    alert('Thank you for your message! We have received your inquiry and will get back to you soon.');
    setFormData({ name: '', email: '', service: 'Web Development', message: '' });
  };
  
  // Service Page Component
  const ServicePage = ({ service }: { service: any }) => {
    if (!service) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 pt-32 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
            <button 
              onClick={navigateToHome}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }
    
    return (
      <div 
        className="min-h-screen pt-32 pb-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={navigateToHome}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          Back to Home
        </button>
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
              <div className="text-white">{service.icon}</div>
            </div>
            <h1 className="text-5xl font-bold text-black mb-6">{service.title}</h1>
            <p className="text-xl text-black leading-relaxed mb-8">{service.description}</p>
            
            {/* Stats */}
            {service.stats && (
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(service.stats).map(([key, value]) => (
                  <div key={key} className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{String(value)}</div>
                    <div className="text-xs text-white capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
            )}
            
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Sub Services */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-black mb-6">Our Services Include</h3>
            <div className="space-y-4">
              {service.subServices?.map((sub: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-all">
                    <div className="text-blue-600 group-hover:text-white transition-all">{sub.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">{sub.name}</h4>
                    <p className="text-sm text-white">{sub.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Process Timeline with Visual Steps */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process?.map((step: any, idx: number) => (
              <div key={idx} className="relative group">
                {/* Visual Process Step */}
                <div className="text-center">
                  {/* Circular Number with Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg group-hover:scale-110 transition-transform relative z-10">
                      {idx + 1}
                    </div>
                    {/* Connecting Line */}
                    {idx < service.process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-blue-200 -translate-y-1/2"></div>
                    )}
                  </div>
                  
                  {/* Step Content */}
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 group-hover:shadow-lg transition-all">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">{step.title}</h4>
                    <p className="text-sm text-white leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Visual Strategy Section - Branding Specific */}
        {service.id === 'branding' && (
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 mb-12 overflow-hidden">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Brand Strategy Visualization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Strategy Making Visual */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Discovery Phase</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Business goals and objectives analysis</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Target audience research and personas</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Competitive landscape assessment</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Strategy Development</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Brand positioning and messaging</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Unique value proposition definition</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Brand voice and personality</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual Design Process */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Visual Identity</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Palette className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Color palette and typography selection</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <PenTool className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Logo design and brand marks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layout className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Visual system and design patterns</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-cyan-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Implementation</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Brand guidelines documentation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Digital and print asset creation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">Brand rollout and training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Key Features */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Features & Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features?.map((feature: any, idx: number) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl hover:bg-blue-50 transition-all">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technologies */}
        {service.technologies && (
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Technologies & Tools We Use</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {service.technologies?.map((tech: any, idx: number) => (
                <div key={idx} className="px-6 py-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full border border-blue-200 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-sm hover:shadow-md">
                  {tech}
                </div>
              ))}
            </div>
            
            {/* Custom Development Section - Only for E-Commerce Solutions */}
            {service.id === 'ecommerce' && (
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Rocket className="w-4 h-4" />
                    Custom Development
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">Tailored Solutions for Your Vision</h4>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Every business is unique, and so are its requirements. Our custom development services leverage 
                    <span className="font-semibold text-blue-600"> cutting-edge technologies</span> and 
                    <span className="font-semibold text-purple-600"> innovative frameworks</span> to create 
                    bespoke solutions that perfectly align with your specific needs and goals.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">Lightning Fast</h5>
                    <p className="text-sm text-slate-600">Optimized performance with modern tech stack</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">AI-Powered</h5>
                    <p className="text-sm text-slate-600">Next-gen solutions with intelligent automation</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">Cloud Native</h5>
                    <p className="text-sm text-slate-600">Scalable architecture for future growth</p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-slate-700 mb-4">
                    <span className="font-semibold">Pricing:</span> Custom development projects are priced based on your specific requirements, 
                    complexity, and timeline. We provide transparent, competitive quotes tailored to your budget and vision.
                  </p>
                  <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>
            )}

            {/* E-Commerce Excellence Section - Only for Digital Marketing */}
            {service.id === 'digital-marketing' && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 mt-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <ShoppingCart className="w-4 h-4" />
                    E-Commerce Excellence
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">Drive Your Online Business Forward</h4>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Transform your digital presence with our comprehensive e-commerce solutions designed to 
                    <span className="font-semibold text-blue-600"> maximize conversions</span> and 
                    <span className="font-semibold text-indigo-600"> enhance customer experience</span>.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">Effortless Management</h5>
                    <p className="text-sm text-slate-600">Intuitive dashboard for seamless product updates, sales tracking, and order management with real-time analytics.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">Premium Experience</h5>
                    <p className="text-sm text-slate-600">Deliver exceptional customer journeys with intuitive navigation, detailed product showcases, and secure checkout processes.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">Lead Generation</h5>
                    <p className="text-sm text-slate-600">Strategic lead capture through email forms, promotional campaigns, and intelligent upselling opportunities.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                      <Share2 className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">Audience Engagement</h5>
                    <p className="text-sm text-slate-600">Build lasting relationships with product reviews, social integration, and interactive features that foster brand loyalty.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">Responsive Design</h5>
                    <p className="text-sm text-slate-600">Flawless performance across all devices with adaptive layouts that ensure optimal shopping experiences everywhere.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">SEO Optimized</h5>
                    <p className="text-sm text-slate-600">Enhanced visibility with optimized product descriptions, meta tags, and structured data for higher search rankings.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">Competitive Pricing</h5>
                    <p className="text-sm text-slate-600">Affordable, scalable solutions tailored to your budget with transparent pricing and flexible payment options.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-bold text-slate-900 mb-2">Expert Support</h5>
                    <p className="text-sm text-slate-600">Dedicated support team providing 24/7 assistance to ensure your e-commerce platform runs smoothly and efficiently.</p>
                  </div>
                </div>
                
                <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
                  <h5 className="font-bold text-xl mb-2">Ready to Transform Your Business?</h5>
                  <p className="text-blue-100 mb-4">Join hundreds of successful businesses that have elevated their online presence with our proven e-commerce strategies.</p>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Get Started Today
                    Let&apos;s build something extraordinary together
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* SEO Packages - Only for SEO Services */}
        {service.id === 'seo' && (
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">SEO Packages</h3>
            <p className="text-xl text-slate-600">Integrating Search Engine Optimization (SEO) into your marketing strategy is crucial for maximizing your website&apos;s performance and ensuring it actively contributes to your business goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Package */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Starter</h4>
                <p className="text-slate-600 mb-4">Have an online presence</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">£200 <span className="text-lg text-slate-350">/month</span></div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">3 optimised keywords</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Monthly reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Rank tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Onsite optimisation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Keyword research</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Competitor analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-400">Link building</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">No minimum term</span>
                </div> */}
              </div>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Get in Touch
              </button>
            </div>

            {/* Business Package */}
            <div className="bg-white rounded-2xl border-2 border-blue-500 p-8 hover:border-blue-600 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most popular!</span>
              </div>
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Business</h4>
                <div className="text-4xl font-bold text-blue-600 mb-6">£350 <span className="text-lg text-slate-500">/month</span></div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">6 optimised keywords</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Monthly reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Rank tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Onsite optimisation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Keyword research</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Competitor analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Link building</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">No minimum term</span>
                </div>
              </div>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Get in Touch
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Professional</h4>
                <p className="text-slate-600 mb-4">Increase page rankings</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">£650 <span className="text-lg text-slate-500">/month</span></div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">10 optimised keywords</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Monthly reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Rank tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Onsite optimisation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Keyword research</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Competitor analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Link building</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">No minimum term</span>
                </div>
              </div>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
        )}
        
        {/* Website Packages - Only for Web Development */}
        {service.id === 'web-application' && (
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Website Packages</h3>
            <p className="text-xl text-slate-600">Choose a flexible web design payment option to suit you!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Standard Package */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Standard</h4>
                <p className="text-slate-600 mb-4">Ideal for a startup site</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">£800</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Up to 8 pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Free domain name</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">3 email addresses</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Fully responsive website</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Dedicated web designer</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Free 12 months hosting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Support & updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">SEO friendly</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Free SSL certificate</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Blog & contact forms</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-slate-500 line-through">Content management system</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-slate-500 line-through">Ecommerce</span>
                </li>
              </ul>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-2xl border-2 border-black-400 p-8 relative hover:border-blue-500 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most popular!</span>
              </div>
              
              <div className="text-center mb-6 mt-4">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Professional</h4>
                <div className="text-4xl font-bold text-blue-600 mb-6">£1200</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Up to 13 pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Free domain name</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">7 email addresses</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Fully responsive website</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Dedicated web designer</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Free 12 months hosting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Support & updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">SEO friendly</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Free SSL certificate</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Blog & contact forms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Content management system</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-slate-400 line-through">Ecommerce</span>
                </li>
              </ul>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Business Package */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Business</h4>
                <p className="text-slate-600 mb-4">Feature packed</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">£1800</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Up to 30 information pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Free domain name</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">12 email addresses</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Fully responsive website</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Dedicated senior web designer</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Free 12 months hosting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Support & updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">SEO friendly</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Free SSL certificate</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Blog & contact forms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Content management system</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Ecommerce</span>
                </li>
              </ul>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        )}

        {/* PPC Packages - Only show for PPC Management service */}
        {service.id === 'ppc' && (
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">PPC Packages</h3>
            <p className="text-xl text-slate-600">Targeted Pay Per Click campaigns achieving results and ROI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Standard Package */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Standard</h4>
                <p className="text-slate-600 mb-4">Entry level PPC management</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">£150 <span className="text-lg text-slate-600">/month</span></div>
                <p className="text-sm text-slate-500 mb-6">Up to £500 ad spend</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Google Ads account setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Google Ads campaign creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Keyword research</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Ads copy creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Landing page creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Conversion tracking setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Google search ads</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Ongoing optimisation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Monthly reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Negative keyword research</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Match modified ad groups</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Bidding strategy optimisation</span>
                </li>
              </ul>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Professional</h4>
                <p className="text-slate-600 mb-4">Small business PPC management</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">£250 <span className="text-lg text-slate-600">/month</span></div>
                <p className="text-sm text-slate-500 mb-6">Up to £1000 ad spend</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Google Ads account setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Google Ads campaign creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Keyword research</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Ads copy creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Landing page creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Conversion tracking setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Google search ads</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Ongoing optimisation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Monthly reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Negative keyword research</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Match modified ad groups</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Bidding strategy optimisation</span>
                </li>
              </ul>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Business Package */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Business</h4>
                <p className="text-slate-600 mb-4">Advanced PPC management</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">£400 <span className="text-lg text-slate-600">/month</span></div>
                <p className="text-sm text-slate-500 mb-6">Up to £3000 ad spend</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Google Ads account setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Google Ads campaign creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Keyword research</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Ads copy creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Landing page creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Conversion tracking setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Google search ads</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Ongoing optimisation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Monthly reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Negative keyword research</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Match modified ad groups</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Bidding strategy optimisation</span>
                </li>
              </ul>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        )}

        {/* Social Media Packages - Only show for Social Media service */}
        {service.id === 'social-media' && (
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Social Media Packages</h3>
            <p className="text-xl text-slate-600">Explore our suite of social media solutions, crafted to meet the unique goals of your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Update my feeds Package */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Update my feeds</h4>
                <p className="text-slate-600 mb-4">Be fresh, be social</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">£200 <span className="text-lg text-slate-600">/month</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">2 social networks managed</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Social account setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">16 unique Facebook posts per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">10 unique Instagram posts per week</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Cover / featured image updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Monthly progress report</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Increase in reach</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Detailed competitor research</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">£150 of Facebook ads</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Boost engagement – commenting, liking and following prospective customers pages</span>
                </li>
              </ul>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Expand your reach Package */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Expand your reach</h4>
                <p className="text-slate-600 mb-4">Engage & grow followers</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">£350 <span className="text-lg text-slate-600">/month</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">3 social networks managed</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Social account setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">20 unique Facebook posts per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">18 unique Instagram posts per week</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">14 unique Twitter posts per week</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Cover / featured image updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Monthly progress report</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Increase in reach</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Detailed competitor research</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">£200 of Facebook ads</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Boost engagement – commenting, liking and following prospective customers pages</span>
                </li>
              </ul>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Fully managed Package */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Fully managed</h4>
                <p className="text-slate-600 mb-4">Increase your revenue</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">£700 <span className="text-lg text-slate-600">/month</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">4 social networks managed</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Social account setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">30 unique Facebook posts per month</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">25 unique Instagram posts per week</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">20 unique Twitter posts per week</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">23 unique Linkedin posts per week</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Cover / featured image updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Monthly progress report</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Increase in reach</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Detailed competitor research</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">£250 of Facebook ads</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">Boost engagement – commenting, liking and following prospective customers pages</span>
                </li>
              </ul>
              
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        )}
        
        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white shadow-xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 opacity-90">Let&apos;s discuss how we can help transform your business with our {service.title.toLowerCase()} services</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('contact'), 100); }}
                className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us Today
              </button>
              <button 
                onClick={() => { setCurrentPage('home'); setTimeout(() => scrollToSection('portfolio'), 100); }}
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

  const FloatingOrb = ({ delay = 0, size = 'medium' }: { delay?: number; size?: 'small' | 'medium' | 'large' }) => {
    const sizes = {
      small: 'w-32 h-32',
      medium: 'w-48 h-48',
      large: 'w-64 h-64'
    };
    
    return (
      <div 
        className={`absolute ${sizes[size]} rounded-full opacity-10 blur-3xl animate-float`}
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(30, 64, 175, 0.4))',
          animationDelay: `${delay}s`,
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
    );
  };

  const FloatingIcon = ({ icon: Icon, delay = 0, position }: { icon: any; delay?: number; position: any }) => {
    return (
      <div 
        className="absolute animate-float-icon opacity-20"
        style={{
          ...position,
          animationDelay: `${delay}s`
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-blue-100">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div onClick={navigateToHome}>
              <RayDesignLogo 
                className="cursor-pointer" 
                width={200} 
                height={50}
                showText={true}
              />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={navigateToHome}
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 relative group font-medium"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                {/* Services Dropdown */}
                <div className="relative services-dropdown">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-slate-700 hover:text-blue-600 transition-all duration-300 relative group font-medium flex items-center gap-1"
                  >
                    Services
                    <ChevronRight className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 py-4 max-h-[80vh] overflow-y-auto">
                      {/* MAIN SERVICES */}
                      <div className="px-4 py-2">
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Main Services</h3>
                        {services.filter(s => s.category === "MAIN SERVICES").map((service) => (
                          <button
                            key={service.id}
                            onClick={() => navigateToService(service.id)}
                            className="flex items-start gap-4 w-full px-3 py-3 hover:bg-blue-50 rounded-lg transition-all text-left group mb-2"
                          >
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                              <div className="text-white">{service.icon}</div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-slate-900 group-hover:text-blue-600 font-semibold mb-1">{service.title}</h4>
                              <p className="text-xs text-white line-clamp-2">{service.description}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      <div className="h-px bg-slate-200 my-2"></div>
                      
                      {/* E-COMMERCE */}
                      <div className="px-4 py-2">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">E-Commerce</h3>
                        {services.filter(s => s.category === "E-COMMERCE").map((service) => (
                          <button
                            key={service.id}
                            onClick={() => navigateToService(service.id)}
                            className="flex items-center gap-3 w-full px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-all text-left group"
                          >
                            <div className="text-blue-600 group-hover:scale-110 transition-transform">
                              {service.icon}
                            </div>
                            <span className="text-slate-700 group-hover:text-blue-600 font-medium text-sm">{service.title}</span>
                          </button>
                        ))}
                      </div>
                      
                      <div className="h-px bg-slate-200 my-2"></div>
                      
                      {/* MARKETING */}
                      <div className="px-4 py-2">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Marketing</h3>
                        {services.filter(s => s.category === "MARKETING").map((service) => (
                          <button
                            key={service.id}
                            onClick={() => navigateToService(service.id)}
                            className="flex items-center gap-3 w-full px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-all text-left group"
                          >
                            <div className="text-blue-600 group-hover:scale-110 transition-transform">
                              {service.icon}
                            </div>
                            <span className="text-slate-700 group-hover:text-blue-600 font-medium text-sm">{service.title}</span>
                          </button>
                        ))}
                      </div>
                      
                      <div className="h-px bg-slate-200 my-2"></div>
                      
                      {/* DESIGN & INNOVATION */}
                      <div className="px-4 py-2">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Design & Innovation</h3>
                        {services.filter(s => s.category === "DESIGN & INNOVATION").map((service) => (
                          <button
                            key={service.id}
                            onClick={() => navigateToService(service.id)}
                            className="flex items-center gap-3 w-full px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-all text-left group"
                          >
                            <div className="text-blue-600 group-hover:scale-110 transition-transform">
                              {service.icon}
                            </div>
                            <span className="text-slate-700 group-hover:text-blue-600 font-medium text-sm">{service.title}</span>
                          </button>
                        ))}
                      </div>
                      
                      <div className="h-px bg-slate-200 my-2"></div>
                      
                      {/* AI & AUTOMATION */}
                      <div className="px-4 py-2">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">AI & Automation</h3>
                        {services.filter(s => s.category === "AI & AUTOMATION").map((service) => (
                          <button
                            key={service.id}
                            onClick={() => navigateToService(service.id)}
                            className="flex items-center gap-3 w-full px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-all text-left group"
                          >
                            <div className="text-blue-600 group-hover:scale-110 transition-transform">
                              {service.icon}
                            </div>
                            <span className="text-slate-700 group-hover:text-blue-600 font-medium text-sm">{service.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <button onClick={() => { navigateToHome(); setTimeout(() => scrollToSection('portfolio'), 100); }} className="text-slate-700 hover:text-blue-600 transition-all duration-300 relative group font-medium">
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                
                <button 
                  onClick={() => { navigateToHome(); setTimeout(() => scrollToSection('contact'), 100); }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 max-h-[80vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={navigateToHome} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all font-medium">
                Home
              </button>
              
              {/* Main Services */}
              <div className="py-2">
                <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Main Services</h3>
                {services.filter(s => s.category === "MAIN SERVICES").map((service) => (
                  <button 
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="flex items-center gap-3 w-full px-3 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all font-medium"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white text-sm">{service.icon}</div>
                    </div>
                    <span>{service.title}</span>
                  </button>
                ))}
              </div>
              
              {/* E-Commerce */}
              <div className="py-2 border-t border-slate-200">
                <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">E-Commerce</h3>
                {services.filter(s => s.category === "E-COMMERCE").map((service) => (
                  <button 
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="flex items-center gap-3 w-full px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all"
                  >
                    <div className="text-blue-600">{service.icon}</div>
                    <span className="text-sm">{service.title}</span>
                  </button>
                ))}
              </div>
              
              {/* Marketing */}
              <div className="py-2 border-t border-slate-200">
                <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Marketing</h3>
                {services.filter(s => s.category === "MARKETING").map((service) => (
                  <button 
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="flex items-center gap-3 w-full px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all"
                  >
                    <div className="text-blue-600">{service.icon}</div>
                    <span className="text-sm">{service.title}</span>
                  </button>
                ))}
              </div>
              
              {/* Design & Innovation */}
              <div className="py-2 border-t border-slate-200">
                <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Design & Innovation</h3>
                {services.filter(s => s.category === "DESIGN & INNOVATION").map((service) => (
                  <button 
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="flex items-center gap-3 w-full px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all"
                  >
                    <div className="text-blue-600">{service.icon}</div>
                    <span className="text-sm">{service.title}</span>
                  </button>
                ))}
              </div>
              
              {/* AI & Automation */}
              <div className="py-2 border-t border-slate-200">
                <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">AI & Automation</h3>
                {services.filter(s => s.category === "AI & AUTOMATION").map((service) => (
                  <button 
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="flex items-center gap-3 w-full px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all"
                  >
                    <div className="text-blue-600">{service.icon}</div>
                    <span className="text-sm">{service.title}</span>
                  </button>
                ))}
              </div>
              
              <button onClick={() => { navigateToHome(); setTimeout(() => scrollToSection('portfolio'), 100); }} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all font-medium mt-2 border-t border-slate-200 pt-4">
                Portfolio
              </button>
              <button onClick={() => { navigateToHome(); setTimeout(() => scrollToSection('contact'), 100); }} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all font-medium">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Conditional Page Rendering */}
      {currentPage === 'home' ? (
        <>
          {/* Hero Section and all other sections stay the same */}
      <BackgroundImage
        src="/images/hero-bg.jpg"
        alt="Hero background with abstract technology elements"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <header id="home" ref={heroRef} className="w-full">
        <AnimatedBackground />
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-blue-100/30"></div>
        
        <FloatingOrb delay={0} size="large" />
        <FloatingOrb delay={2} size="medium" />
        <FloatingOrb delay={4} size="small" />
        
        <FloatingIcon icon={Code} delay={0} position={{ top: '10%', left: '10%' }} />
        <FloatingIcon icon={Smartphone} delay={1} position={{ top: '20%', right: '15%' }} />
        <FloatingIcon icon={Rocket} delay={2} position={{ bottom: '20%', left: '12%' }} />
        <FloatingIcon icon={Zap} delay={1.5} position={{ bottom: '15%', right: '10%' }} />
        <FloatingIcon icon={Globe} delay={2.5} position={{ top: '50%', left: '5%' }} />
        <FloatingIcon icon={Target} delay={0.5} position={{ top: '40%', right: '8%' }} />
        
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 64, 175, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full mb-8 animate-slide-up shadow-md border border-blue-100">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium text-slate-700">Trusted by 500+ businesses worldwide</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 leading-tight tracking-tight animate-slide-up text-slate-900" style={{ animationDelay: '0.1s' }}>
                Digital Innovation
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 font-extrabold drop-shadow-sm">
                  Redefined
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                We merge <span className="text-blue-600 font-semibold">design thinking</span>, <span className="text-blue-600 font-semibold">intelligent automation</span>, and <span className="text-blue-600 font-semibold">marketing science</span> to fuel exponential business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="group bg-blue-600 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                  Get Started 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="group bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-3"
                >
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View Our Work
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg animate-slide-up group border border-slate-200"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="mb-3 flex justify-center lg:justify-start text-blue-600 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Illustration */}
            <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <HeroIllustration />
            </div>
          </div>
        </div>
        </header>
      </BackgroundImage>

      {/* Services Section */}
      <BackgroundImage
        src="/images/services-bg.jpg"
        alt="Services background with professional design elements"
        className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <section id="services" className="w-full">
        <svg className="absolute w-full h-full opacity-3" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(30, 64, 175)', stopOpacity: 0.05 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          <path fill="url(#grad1)" d="M0,160 Q250,100 500,160 T1000,160 T1500,160 T2000,160 L2000,400 L0,400 Z">
            <animate attributeName="d" dur="20s" repeatCount="indefinite"
              values="M0,160 Q250,100 500,160 T1000,160 T1500,160 T2000,160 L2000,400 L0,400 Z;
                      M0,160 Q250,200 500,160 T1000,160 T1500,160 T2000,160 L2000,400 L0,400 Z;
                      M0,160 Q250,100 500,160 T1000,160 T1500,160 T2000,160 L2000,400 L0,400 Z"/>
          </path>
        </svg>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Comprehensive Solutions</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-slate-900">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From web and mobile development to digital marketing and AI solutions
            </p>
          </div>

          {/* Scrollable Services Cards */}
          <div className="relative">
            {/* Left Arrow */}
            <button 
              onClick={() => scrollServices('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center text-blue-600 hover:bg-blue-50 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={() => scrollServices('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center text-blue-600 hover:bg-blue-50 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Services Container */}
            <div 
              ref={servicesScrollRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar scroll-snap-x pb-8 px-2"
            >
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => navigateToService(service.id)}
                  className={`group flex-shrink-0 w-80 md:w-96 bg-white rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl border-2 ${
                    service.category === "MAIN SERVICES" ? "border-blue-300" : "border-slate-200"
                  } text-left scroll-snap-start ${visibleSections.has('services') ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-2">{service.description}</p>
                  
                  {/* Sub-services preview */}
                  <div className="space-y-2 mb-6">
                    {service.subServices.slice(0, 4).map((sub, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="line-clamp-1">{sub.name}</span>
                      </div>
                    ))}
                    {service.subServices.length > 4 && (
                      <div className="text-sm text-blue-600 font-semibold">
                        +{service.subServices.length - 4} more services
                      </div>
                    )}
                  </div>
                  
                  {/* Stats if available */}
                  {service.stats && (
                    <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-slate-200">
                      {Object.entries(service.stats).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold pt-4 border-t border-slate-200">
                    <span className="text-sm">Explore Service</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-8">
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Scroll to see all services
              <ChevronRight className="w-4 h-4" />
            </p>
          </div>
        </div>
        </section>
      </BackgroundImage>

      {/* About Section */}
      <BackgroundImage
        src="/images/about-bg.jpg"
        alt="About section background with warm professional elements"
        className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <section id="about" className="w-full">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, rgba(30, 64, 175, 0.4) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={visibleSections.has('about') ? 'animate-slide-up' : 'opacity-0'}>
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600 font-medium">About Us</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-slate-900">
                Pioneering <span className="text-blue-600">Digital Excellence</span>
              </h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                We are a strategic transformation partner that merges the best of design thinking, intelligent automation, full-stack engineering, and marketing science.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  { icon: <Zap className="w-6 h-6" />, title: "Innovation First", desc: "Embracing emerging technologies", color: "from-blue-500 to-blue-600" },
                  { icon: <Users className="w-6 h-6" />, title: "User-Centric", desc: "Designing with empathy", color: "from-blue-600 to-blue-700" },
                  { icon: <CheckCircle className="w-6 h-6" />, title: "True Partnership", desc: "Combining expertise", color: "from-blue-500 to-blue-600" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md text-white`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              

            </div>
            
            <div className={`relative ${visibleSections.has('about') ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-blue-300/20 to-blue-200/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
                <div className="space-y-8">
                  <div className="group hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-7 h-7 text-blue-600" />
                      <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      To empower businesses through innovative digital solutions that solve complex challenges, enhance user experiences, and drive sustainable growth.
                    </p>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                  
                  <div className="group hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-7 h-7 text-blue-600" />
                      <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      To be the global leader in digital innovation, recognized for transforming businesses through cutting-edge technology solutions.
                    </p>
                  </div>
                  
                  {/* Stats Visual */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-100">
                      <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                      <div className="text-xs text-slate-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-100">
                      <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                      <div className="text-xs text-slate-600">Team Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </BackgroundImage>

      {/* Portfolio Section */}
      <BackgroundImage
        src="/images/portfolio-bg.jpg"
        alt="Portfolio section background with creative showcase elements"
        className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <section id="portfolio" className="w-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <svg className="absolute inset-0 w-full h-full opacity-3" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(30, 64, 175, 0.2)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
         <div className="max-w-7xl mx-auto relative z-10"> 

          {/* Project Showcase */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600 font-medium">Live Projects</span>
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">
                Our <span className="text-blue-600">Portfolio</span>
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Explore our collection of live projects showcasing modern design and functionality.
              </p>
            </div>
            
            <ProjectShowcase projects={projects} visibleSections={visibleSections} />
          </div>

          {/* Project Mockups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ProjectMockup title="E-Commerce Platform" gradient="from-blue-500 to-blue-600" />
            <ProjectMockup title="Healthcare App" gradient="from-blue-600 to-blue-700" />
            <ProjectMockup title="Social Media Dashboard" gradient="from-blue-500 to-blue-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-md hover:shadow-xl border border-slate-200 ${visibleSections.has('portfolio') ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-3 bg-gradient-to-r ${study.gradient.replace(/purple|pink|indigo|violet/g, 'blue')}`}></div>
                <div className="p-8">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{study.image}</div>
                  <div className="text-sm text-blue-600 mb-2 font-semibold uppercase tracking-wider">{study.industry}</div>
                  <h3 className="text-3xl font-bold mb-6 text-slate-900 group-hover:text-blue-600 transition-colors">{study.client}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Challenge</h4>
                    <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Solution</h4>
                    <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-6">
                    <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center bg-blue-50 rounded-xl p-4 border border-blue-100">
                          <div className="text-3xl font-bold text-blue-600 mb-1">{result.value}</div>
                          <div className="text-xs text-slate-600 font-medium">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </BackgroundImage>

      {/* Testimonials Section */}
      <BackgroundImage
        src="/images/about-bg.jpg"
        alt="Testimonials section background with warm professional elements"
        className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <section id="testimonials" className="w-full">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Client Reviews</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-slate-900">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl border border-slate-200 ${visibleSections.has('testimonials') ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatar.replace(/purple|pink/g, 'blue')} flex items-center justify-center`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </BackgroundImage>

      {/* Contact Section */}
      <BackgroundImage
        src="/images/contact-bg.jpg"
        alt="Contact section background with communication elements"
        className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <section id="contact" className="w-full">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Let&apos;s Connect</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-slate-900">
              Start Your <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let&apos;s create something extraordinary together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { icon: <Phone className="w-6 h-6" />, title: "Phone", content: "+44 7505 670410", href: "tel:+447505670410", color: "from-blue-500 to-blue-600" },
                { icon: <Mail className="w-6 h-6" />, title: "Email", content: "info@raydesign.uk", href: "mailto:info@raydesign.uk", color: "from-blue-600 to-blue-700" },
                { icon: <MapPin className="w-6 h-6" />, title: "Address", content: "1-A Edmundson Street, Blackburn BB2 1HL, United Kingdom", href: null, color: "from-blue-500 to-blue-600" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md text-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-slate-600 hover:text-blue-600 transition-colors">{item.content}</a>
                    ) : (
                      <p className="text-slate-600">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Business Hours
                </h4>
                <p className="text-slate-600 mb-2">Monday - Friday: 08:30 AM - 06:00 PM (GMT)</p>
                <p className="text-blue-600 font-semibold">Emergency Support Available 24/7</p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Name</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all text-slate-900 placeholder-slate-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Email</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all text-slate-900 placeholder-slate-400"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Service</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all text-slate-900"
                  >
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>E-Commerce Solutions</option>
                    <option>SEO Services</option>
                    <option>Social Media Management</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Message</label>
                  <textarea 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all resize-none text-slate-900 placeholder-slate-400"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e as any);
                  }}
                  className="w-full bg-blue-600 text-white px-8 py-5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl"
                >
                  Send Message 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </section>
      </BackgroundImage>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                RayDesign Technologies
              </h3>
            </div>
            <p className="text-slate-400 mb-8 text-lg text-white">Digital Innovation Partner</p>
            <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <span>© 2025 RayDesign Technologies</span>
              <span>•</span>
              <span className='text-white'>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
        </>
      ) : (
        <ServicePage service={services.find(s => s.id === currentPage)} />
      )}
    </div>
  );
};

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} duration={3000} />}
      {!isLoading && <RayDesignWebsite />}
    </>
  );
}