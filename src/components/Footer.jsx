import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand" style={{ alignItems: 'flex-start' }}>
            <Logo isDark={true} align="center" iconSize={38} fontSize="1.6rem" />
            <p className="footer-info-text" style={{ maxWidth: '340px', marginTop: '16px' }}>
              Gentle care, precise styling, and trusted beauty care in Loni Kalbhor. Experience personalized attention in a hygienic, peaceful studio.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="footer-info-title">Navigation</h4>
            <ul className="footer-nav">
              <li><Link to="/" style={{ fontStyle: 'normal' }}>Home</Link></li>
              <li><Link to="/services" style={{ fontStyle: 'normal' }}>Services</Link></li>
              <li><Link to="/about" style={{ fontStyle: 'normal' }}>About Us</Link></li>
              <li><Link to="/gallery" style={{ fontStyle: 'normal' }}>Gallery</Link></li>
              <li><Link to="/contact" style={{ fontStyle: 'normal' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="footer-info-title">Visit Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem', color: 'var(--text-light-muted)' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: '#C49A7D', flexShrink: 0, marginTop: '2px' }} />
                <span>Shop No. 7, Sambhaji Nagar, Loni Kalbhor, Pune, Maharashtra, India</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#C49A7D', flexShrink: 0 }} />
                <a href="tel:+918421614951" style={{ color: 'inherit' }}>+91 84216 14951</a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Clock size={18} style={{ color: '#C49A7D', flexShrink: 0 }} />
                <span>Open Daily | WhatsApp Enquiries Welcome</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © 2026 Komal Beauty Salon. Serving local women with personal care, hygiene, and warmth in Pune.
          </div>
          <span className="badge-tag">LONI KALBHOR BEAUTY SANCTUARY &nbsp;•&nbsp; सौंदर्य • काळजी • आत्मविश्वास</span>
        </div>
      </div>
    </footer>
  );
}
