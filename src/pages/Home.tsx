import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    // Stats Animation
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

  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience with compelling social media content and strategies.',
      icon: <TrendingUp size={32} />,
      color: '#ff6b6b',
    },
    {
      title: 'Packaging Design',
      description: 'Create memorable product packaging that stands out on shelves.',
      icon: <Sparkles size={32} />,
      color: '#4ecdc4',
    },
    {
      title: 'Brochures & Print',
      description: 'Professional print materials that communicate your brand story.',
      icon: <Zap size={32} />,
      color: '#ffd93d',
    },
    {
      title: 'Website Design',
      description: 'Modern, responsive websites that convert visitors into customers.',
      icon: <Sparkles size={32} />,
      color: '#a29bfe',
    },
    {
      title: 'Posters & Graphics',
      description: 'Eye-catching visual designs for all your marketing needs.',
      icon: <Zap size={32} />,
      color: '#fd79a8',
    },
    {
      title: 'Video & Reels',
      description: 'Dynamic video content that tells your story and engages viewers.',
      icon: <TrendingUp size={32} />,
      color: '#00b894',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '25+', label: 'Team Members' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              We Create
              <span className="gradient-text"> Extraordinary </span>
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

      {/* Services Grid */}
      <section ref={servicesRef} className="services-preview-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Creative Services</h2>
            <p className="section-subtitle">
              Comprehensive design solutions tailored to elevate your brand
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" style={{ '--card-color': service.color } as any}>
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
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
