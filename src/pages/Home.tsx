import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Zap, TrendingUp, Quote, Star } from 'lucide-react';
import { useLenis } from '../contexts/LenisContext';
import CountUp from '../components/CountUp';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { lenis } = useLenis();
  const [horizontalProgress, setHorizontalProgress] = useState(0);

  useEffect(() => {
    // Hero Animation
    const heroTimeline = gsap.timeline();
    heroTimeline
      .from('.hero-title', {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power4.out',
      })
      .from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from('.hero-image', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.8');

    // Services Cards Animation
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Stats Animation (scale and opacity only - CountUp handles the number animation)
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      scale: 0.5,
      stagger: 0.15,
      duration: 0.6,
      ease: 'back.out(1.7)',
    });

    // Testimonials Animation
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
    });

    // CTA Section Animation
    gsap.from('.cta-content', {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Parallax effect for hero image
    gsap.to('.hero-image', {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 150,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Horizontal scroll effect for services section with pinning
  useEffect(() => {
    if (!servicesRef.current || !servicesContainerRef.current) return;

    const servicesSection = servicesRef.current;
    const container = servicesContainerRef.current;
    
    const calculateScroll = () => {
      // Calculate the scroll distance needed
      const containerWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      // Responsive padding based on screen size
      let paddingLeft = 32; // Default 2rem
      if (viewportWidth <= 480) {
        paddingLeft = 16; // 1rem on very small screens
      } else if (viewportWidth <= 768) {
        paddingLeft = 20; // 1.25rem on tablets
      }
      
      // Start from left with padding
      const startX = paddingLeft;
      
      // Calculate max scroll (how far left we need to go to show last card)
      const maxScroll = Math.max(0, containerWidth - viewportWidth + paddingLeft);
      
      // Calculate how much vertical scroll we need
      // We want enough scroll to move from left to show all cards
      const totalHorizontalDistance = maxScroll;
      const scrollDistance = totalHorizontalDistance * 1.2; // Extra for smooth transition
      
      return { maxScroll, scrollDistance, viewportWidth, containerWidth, startX, paddingLeft };
    };
    
    let { maxScroll, scrollDistance, viewportWidth, startX, paddingLeft } = calculateScroll();
    
    // Set initial position - cards start from the left
    container.style.transform = `translate3d(${startX}px, 0, 0)`;
    
    // Create ScrollTrigger to pin the section and control horizontal scroll
    const scrollTrigger = ScrollTrigger.create({
      trigger: servicesSection,
      start: 'top top',
      end: () => {
        const calc = calculateScroll();
        return `+=${calc.scrollDistance}`;
      },
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Recalculate on update in case of resize
        const calc = calculateScroll();
        maxScroll = calc.maxScroll;
        viewportWidth = calc.viewportWidth;
        startX = calc.startX;
        paddingLeft = calc.paddingLeft;
        
        // Calculate horizontal position
        // Start from left (startX) and move to show all cards
        const endX = -maxScroll;
        const currentX = startX + (endX - startX) * progress;
        
        // Apply transform
        container.style.transform = `translate3d(${currentX}px, 0, 0)`;
        setHorizontalProgress(progress);
      },
    });

    // Handle window resize
    const handleResize = () => {
      scrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      scrollTrigger.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    {
      title: 'Social Media Marketing',
      shortName: 'Social Media',
      description: 'Engage your audience with compelling social media content and strategies.',
      icon: <TrendingUp size={32} />,
      color: '#ff6b6b',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    },
    {
      title: 'Video & Reels',
      shortName: 'Video & Reels',
      description: 'Dynamic video content that tells your story and engages viewers.',
      icon: <TrendingUp size={32} />,
      color: '#00b894',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    },
    {
      title: 'Brochures & Print',
      shortName: 'Brochures & Print',
      description: 'Professional print materials that communicate your brand story.',
      icon: <Zap size={32} />,
      color: '#ffd93d',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop',
    },
    {
      title: 'Website Design',
      shortName: 'Web Design',
      description: 'Modern, responsive websites that convert visitors into customers.',
      icon: <Sparkles size={32} />,
      color: '#a29bfe',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    },
    {
      title: 'Posters & Graphics',
      shortName: 'Posters & Graphic',
      description: 'Eye-catching visual designs for all your marketing needs.',
      icon: <Zap size={32} />,
      color: '#fd79a8',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    },
    {
      title: 'Packaging Design',
      shortName: 'Packaging Design',
      description: 'Create memorable product packaging that stands out on shelves.',
      icon: <Sparkles size={32} />,
      color: '#4ecdc4',
      image: 'https://images.unsplash.com/photo-1617825295690-28ae56c56135?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    
    
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '70+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '25+', label: 'Team Members' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Working with this team transformed our brand identity. Their creative approach and attention to detail exceeded all our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, Global Brands',
      content: 'The social media campaigns they created for us generated incredible engagement. Our brand visibility increased by 300% in just three months.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Artisan Co.',
      content: 'Their packaging design made our products stand out on shelves. Sales increased significantly, and we couldn\'t be happier with the results.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              We Create  
              <span className="gradient-text">  Extraordinary </span>
              Digital Experiences
            </h1>
            <p className="hero-subtitle">
              From social media campaigns to packaging design, we bring your creative vision to life with innovative solutions and stunning visuals.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY0Mzg4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative Studio Workspace"
              />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Services Horizontal Scroll */}
      <section ref={servicesRef} className="services-preview-section">
        <div className="section-header services-header-sticky">
          <h2 className="section-title">Our Creative Services</h2>
          <p className="section-subtitle">
            Comprehensive design solutions tailored to elevate your brand
          </p>
        </div>
        <div className="services-horizontal-wrapper">
          <div ref={servicesContainerRef} className="services-horizontal-container">
            {services.map((service, index) => (
              <div key={index} className="service-card-horizontal" style={{ '--card-color': service.color } as any}>
                <div className="service-card-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-card-image"
                    loading="lazy"
                  />
                  <div className="service-card-overlay" style={{ background: `linear-gradient(to bottom, transparent, ${service.color}dd)` }}></div>
                </div>
                <div className="service-card-content">
                  <div className="service-icon" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3>{service.shortName}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const statNumber = stat.number;
              const match = statNumber.match(/(\d+)(.*)/);
              const targetValue = match ? parseInt(match[1], 10) : 0;
              const suffix = match ? match[2] : '';
              
              return (
                <div key={index} className="stat-item">
                  <div className="stat-number">
                    <CountUp 
                      to={targetValue} 
                      from={0}
                      duration={2}
                      delay={index * 0.15}
                      className=""
                    />
                    {suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from the brands we've helped succeed
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote-icon">
                  <Quote size={32} />
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#ffd93d" color="#ffd93d" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="cta-section">
        <div className="cta-content">
          <h2>Ready to Bring Your Vision to Life?</h2>
          <p>Let's collaborate and create something extraordinary together</p>
          <Link to="/contact" className="btn-primary large">
            Get Started Today
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
