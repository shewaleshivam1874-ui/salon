import React from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, MessageCircle, MapPin, Navigation, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* CONTACT HERO */}
      <section style={{ padding: '80px 0 60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <span className="eyebrow">Your Local Sanctuary</span>
            <h1 className="heading-serif heading-xl" style={{ marginBottom: '20px' }}>
              <span className="highlight-serif">Komal</span> Beauty Salon
            </h1>
            <p className="text-lede">
              Loni Kalbhor's trusted studio for precise styling and refreshing self-care. Visit us at Shop No. 7, Sambhaji Nagar, Pune, Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT MAIN CONTENT */}
      <section style={{ padding: '80px 0 100px 0' }}>
        <div className="container">
          <div className="hero-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '60px', alignItems: 'flex-start' }}>
            
            {/* LEFT CONTACT INFO */}
            <div>
              <span className="eyebrow">Connect With Us</span>
              <h2 className="heading-serif heading-lg" style={{ marginBottom: '32px' }}>
                Get in Touch
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '40px' }}>
                {/* Phone */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--accent-pink-soft)', color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '4px' }}>Phone</h4>
                    <a href="tel:+918421614951" style={{ fontSize: '1.15rem', fontWeight: '500', color: 'var(--text-main)' }}>
                      +91 84216 14951
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--accent-pink-soft)', color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '4px' }}>WhatsApp</h4>
                    <a
                      href="https://wa.me/918421614951"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.15rem', fontWeight: '500', color: 'var(--text-main)' }}
                    >
                      Chat with us on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--accent-pink-soft)', color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '4px' }}>Location</h4>
                    <p style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: '1.5', maxWidth: '340px' }}>
                      Shop No. 7, Sambhaji Nagar, Loni Kalbhor, Pune, Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--accent-pink-soft)', color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '4px' }}>Hours</h4>
                    <p style={{ fontSize: '1rem', color: 'var(--text-main)' }}>
                      Open Daily | 9:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div>
                <a
                  href="https://maps.app.goo.gl/gA3CtyhMwaferZF4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '14px 28px' }}
                >
                  <Navigation size={18} />
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
