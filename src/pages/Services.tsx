import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp,
  Package,
  FileText,
  Globe,
  Image as ImageIcon,
  Video,
  CheckCircle,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from('.services-header', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from('.service-detail-card', {
      scrollTrigger: {
        trigger: '.services-detail-grid',
        start: 'top 80%',
      },
      opacity: 0,
      y: 80,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      title: 'Social Media Marketing',
      icon: <TrendingUp size={40} />,
      color: '#ff6b6b',
      image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjY1MTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Amplify your brand presence across all social platforms with strategic content and engaging campaigns.',
      features: [
        'Content Strategy & Planning',
        'Post Design & Creation',
        'Community Management',
        'Analytics & Reporting',
        'Influencer Collaboration',
        'Paid Ad Campaigns',
      ],
    },
    {
      title: 'Packaging Design',
      icon: <Package size={40} />,
      color: '#4ecdc4',
      image: 'https://images.unsplash.com/photo-1759459981078-35c1befc695b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBkZXNpZ24lMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjY1MTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Create stunning packaging that not only protects your product but also captivates your customers.',
      features: [
        'Product Packaging Design',
        'Label & Tag Design',
        '3D Mockups & Visualization',
        'Sustainable Design Solutions',
        'Brand Identity Integration',
        'Print-Ready Files',
      ],
    },
    {
      title: 'Brochures & Print Design',
      icon: <FileText size={40} />,
      color: '#ffd93d',
      image: 'https://images.unsplash.com/photo-1731275668160-f18f97c6faac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY2NDYyMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Professional print materials that effectively communicate your message and leave a lasting impression.',
      features: [
        'Brochure Design',
        'Flyer & Leaflet Design',
        'Business Cards',
        'Catalogs & Lookbooks',
        'Annual Reports',
        'Print Production Support',
      ],
    },
    {
      title: 'Website Design',
      icon: <Globe size={40} />,
      color: '#a29bfe',
      image: 'https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY0Mzg4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Modern, responsive websites designed to engage users and drive conversions across all devices.',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'E-commerce Solutions',
        'UI/UX Optimization',
        'SEO Integration',
        'Ongoing Maintenance',
      ],
    },
    {
      title: 'Posters & Graphics',
      icon: <ImageIcon size={40} />,
      color: '#fd79a8',
      image: 'https://images.unsplash.com/photo-1731275668160-f18f97c6faac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY2NDYyMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Eye-catching visual designs that capture attention and communicate your message effectively.',
      features: [
        'Event Posters',
        'Promotional Graphics',
        'Infographics',
        'Social Media Graphics',
        'Banner Design',
        'Illustration Services',
      ],
    },
    {
      title: 'Video & Reels Production',
      icon: <Video size={40} />,
      color: '#00b894',
      image: 'https://images.unsplash.com/photo-1654288891700-95f67982cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzY2NDUwNjk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Compelling video content that tells your story and engages your audience across platforms.',
      features: [
        'Instagram Reels & TikTok Videos',
        'Product Videos',
        'Brand Story Videos',
        'Motion Graphics',
        'Video Editing & Post-Production',
        'Animated Explainer Videos',
      ],
    },
  ];

  return (
    <div className="services-page">
      <div ref={headerRef} className="services-header">
        <div className="section-container">
          <h1>Our Services</h1>
          <p>
            Comprehensive creative solutions designed to elevate your brand and engage your audience
          </p>
        </div>
      </div>

      <section className="services-detail-section">
        <div className="section-container">
          <div className="services-detail-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-detail-card"
                style={{ '--service-color': service.color } as any}
              >
                <div className="service-detail-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-detail-overlay"></div>
                  <div className="service-detail-icon" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                </div>
                <div className="service-detail-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle size={18} style={{ color: service.color }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta-section">
        <div className="section-container">
          <div className="services-cta-content">
            <h2>Need a Custom Solution?</h2>
            <p>
              We tailor our services to meet your unique needs. Let's discuss how we can help bring your vision to life.
            </p>
            <a href="/contact" className="btn-primary large">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
