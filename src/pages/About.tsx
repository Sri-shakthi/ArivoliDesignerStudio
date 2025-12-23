import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    gsap.from('.about-header', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from('.story-content', {
      scrollTrigger: {
        trigger: '.story-section',
        start: 'top 80%',
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from('.story-image', {
      scrollTrigger: {
        trigger: '.story-section',
        start: 'top 80%',
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from('.value-card', {
      scrollTrigger: {
        trigger: '.values-grid',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from('.team-member', {
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 80%',
      },
      opacity: 0,
      scale: 0.8,
      stagger: 0.15,
      duration: 0.6,
      ease: 'back.out(1.7)',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const values = [
    {
      icon: <Target size={40} />,
      title: 'Mission-Driven',
      description: 'We are committed to delivering exceptional creative solutions that drive real business results.',
      color: '#ff6b6b',
    },
    {
      icon: <Heart size={40} />,
      title: 'Passion for Design',
      description: 'Every project is an opportunity to create something beautiful and meaningful.',
      color: '#4ecdc4',
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation First',
      description: 'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.',
      color: '#ffd93d',
    },
    {
      icon: <Users size={40} />,
      title: 'Client Partnership',
      description: 'Your success is our success. We work collaboratively to achieve your goals.',
      color: '#a29bfe',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NjQ0MDkzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NjQ0MDkzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Brand Strategist',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NjQ0MDkzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Park',
      role: 'Video Producer',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NjQ0MDkzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <div className="section-container">
          <h1>About Creative Studio</h1>
          <p>
            Where creativity meets strategy to build extraordinary brand experiences
          </p>
        </div>
      </div>

      <section className="story-section">
        <div className="section-container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2014, Creative Studio was born from a simple belief: great design has the power to transform businesses and connect with people on a deeper level.
              </p>
              <p>
                What started as a small team of passionate designers has grown into a full-service creative agency. We've had the privilege of working with over 150 clients, from innovative startups to established brands, helping them tell their stories through compelling visual design.
              </p>
              <p>
                Our multidisciplinary team brings together expertise in graphic design, digital marketing, video production, and brand strategy. We don't just create beautiful work—we create work that works, delivering measurable results and meaningful connections with your audience.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY0Mzg4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative Studio Office"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card" style={{ '--value-color': value.color } as any}>
                <div className="value-icon" style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The creative minds behind your success</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-member-overlay"></div>
                </div>
                <div className="team-member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="section-container">
          <div className="about-cta-content">
            <h2>Ready to Work Together?</h2>
            <p>Let's create something amazing for your brand</p>
            <a href="/contact" className="btn-primary large">
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
