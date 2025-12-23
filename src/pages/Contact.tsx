import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    gsap.from('.contact-header', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from('.contact-info-card', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.6,
      delay: 0.3,
      ease: 'power3.out',
    });

    gsap.from('.contact-form', {
      opacity: 0,
      x: 50,
      duration: 0.8,
      delay: 0.4,
      ease: 'power3.out',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      content: 'hello@creativestudio.com',
      link: 'mailto:hello@creativestudio.com',
      color: '#ff6b6b',
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#4ecdc4',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      content: '123 Creative Ave, Design District, NY 10001',
      link: '#',
      color: '#ffd93d',
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#',
      color: '#a29bfe',
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="section-container">
          <h1>Get In Touch</h1>
          <p>
            Let's discuss how we can help bring your creative vision to life
          </p>
        </div>
      </div>

      <section className="contact-info-section">
        <div className="section-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="contact-info-card"
                style={{ '--info-color': info.color } as any}
              >
                <div className="contact-info-icon" style={{ color: info.color }}>
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="section-container">
          <div className="contact-form-wrapper">
            <div className="contact-form-intro">
              <h2>Send Us a Message</h2>
              <p>
                Fill out the form below and we'll get back to you within 24 hours. We're excited to hear about your project!
              </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="packaging">Packaging Design</option>
                    <option value="brochures">Brochures & Print</option>
                    <option value="website">Website Design</option>
                    <option value="graphics">Posters & Graphics</option>
                    <option value="video">Video & Reels</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary large">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="section-container">
          <div className="contact-map">
            <div className="map-placeholder">
              <MapPin size={48} />
              <p>123 Creative Ave, Design District, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
