import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">CREATIVE</span>
              <span className="logo-accent">STUDIO</span>
            </div>
            <p className="footer-tagline">
              Crafting exceptional digital experiences through innovative design and creative storytelling.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#social-media">Social Media Marketing</a></li>
              <li><a href="#packaging">Packaging Design</a></li>
              <li><a href="#brochures">Brochures & Print</a></li>
              <li><a href="#web">Web Design</a></li>
              <li><a href="#video">Video & Reels</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={18} />
                <span>hello@creativestudio.com</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>123 Creative Ave, Design District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Creative Studio. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
