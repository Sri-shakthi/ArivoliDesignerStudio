import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    gsap.from('.portfolio-header', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from('.filter-button', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.3,
      ease: 'power2.out',
    });

    animateProjects();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    animateProjects();
  }, [activeFilter]);

  const animateProjects = () => {
    gsap.from('.portfolio-item', {
      opacity: 0,
      scale: 0.8,
      y: 50,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out',
      clearProps: 'all',
    });
  };

  const filters = [
    'all',
    'social-media',
    'packaging',
    'print',
    'web',
    'graphics',
    'video',
  ];

  const projects = [
    {
      title: 'Social Campaign 2024',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjY1MTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Instagram campaign that increased engagement by 250%',
    },
    {
      title: 'Premium Packaging',
      category: 'packaging',
      image: 'https://images.unsplash.com/photo-1759459981078-35c1befc695b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBkZXNpZ24lMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjY1MTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Luxury product packaging for high-end cosmetics brand',
    },
    {
      title: 'Brand Brochure',
      category: 'print',
      image: 'https://images.unsplash.com/photo-1731275668160-f18f97c6faac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY2NDYyMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Multi-page corporate brochure with modern design',
    },
    {
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY0Mzg4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Responsive online store with seamless checkout',
    },
    {
      title: 'Event Poster Series',
      category: 'graphics',
      image: 'https://images.unsplash.com/photo-1731275668160-f18f97c6faac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY2NDYyMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Bold and vibrant poster designs for music festival',
    },
    {
      title: 'Product Launch Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1654288891700-95f67982cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzY2NDUwNjk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Cinematic product reveal with motion graphics',
    },
    {
      title: 'Instagram Reels',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjY1MTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Viral reels content for fashion brand',
    },
    {
      title: 'Food Packaging',
      category: 'packaging',
      image: 'https://images.unsplash.com/photo-1759459981078-35c1befc695b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBkZXNpZ24lMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjY1MTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Eco-friendly packaging for organic food products',
    },
    {
      title: 'Corporate Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY0Mzg4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Professional business website with custom animations',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <div className="section-container">
          <h1>Our Portfolio</h1>
          <p>
            Explore our collection of creative projects and successful brand stories
          </p>
        </div>
      </div>

      <section className="portfolio-filter-section">
        <div className="section-container">
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="section-container">
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="portfolio-item">
                <div className="portfolio-item-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-item-overlay">
                    <div className="portfolio-item-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <button className="portfolio-item-button">
                        <ExternalLink size={20} />
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
