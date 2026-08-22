import React from 'react';
import { Link } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import { Calendar, MessageCircle } from 'lucide-react';

export default function Gallery() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* GALLERY HERO WITH OVERLAY */}
      <section
        style={{
          position: 'relative',
          padding: '120px 0 100px 0',
          backgroundImage: 'url(/images/salon-interior.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF'
        }}
      >
        {/* Dark Transparent Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(33, 28, 34, 0.72)',
            backdropFilter: 'blur(3px)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '760px' }}>
            <span className="eyebrow" style={{ color: '#E0B598' }}>Studio Showcase</span>
            <h1
              className="heading-serif heading-xl"
              style={{ color: '#FFFFFF', marginBottom: '24px' }}
            >
              Your Moment, <span style={{ color: '#C49A7D', fontStyle: 'normal' }}>Refined.</span>
            </h1>
            <p
              className="text-lede"
              style={{ color: '#E4DFEA', marginBottom: '40px', fontSize: '1.2rem' }}
            >
              Experience tailored threading, gentle hair spa, and refreshing skin care in Loni Kalbhor's trusted sanctuary.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: '#FFFFFF', color: '#211C22', borderColor: '#FFFFFF', padding: '16px 32px' }}>
                <Calendar size={18} />
                Book an Appointment
              </Link>
              <a
                href="https://wa.me/918421614951?text=Hi%20Komal%20Beauty%20Salon%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '16px 32px' }}
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY IMAGE GRID */}
      <section style={{ padding: '90px 0 110px 0' }}>
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      {/* GALLERY FEATURE SPLIT SECTION */}
      <section style={{ padding: '90px 0', backgroundColor: '#F3EFEA', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="hero-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            {/* Left image */}
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: 'var(--shadow-medium)' }}>
              <img src="/images/botanical-care.jpg" alt="Nature's Touch Botanical Skincare" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Right text */}
            <div>
              <span className="eyebrow" style={{ color: 'var(--text-muted)' }}>— Nature's Touch</span>
              <h2 className="heading-serif heading-lg" style={{ marginBottom: '20px' }}>
                Pure Botanical Care
              </h2>
              <p className="text-lede" style={{ fontSize: '1.15rem', fontStyle: 'normal', color: 'var(--text-main)' }}>
                "Only the finest botanical ingredients for your skin's nourishment and glow."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY CLOSING SECTION */}
      <section style={{ padding: '100px 0 70px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <span className="eyebrow">Our Craft in Focus</span>
            <h2 className="heading-serif heading-lg" style={{ marginBottom: '20px' }}>
              Meticulous Care, Beautiful Results
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              Explore our serene studio and the artistry behind every service, from precision styling to tranquil facial applications.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="heading-serif heading-lg" style={{ marginBottom: '16px' }}>
              Ready for your refreshing self-care hour?
            </h2>
            <p className="text-lede" style={{ margin: '0 auto 32px auto' }}>
              Connect with us to schedule your personalized beauty and grooming session.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ padding: '16px 36px', fontSize: '1rem' }}
            >
              <Calendar size={18} />
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
