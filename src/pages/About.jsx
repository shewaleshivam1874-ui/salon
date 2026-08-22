import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function About() {
  const promises = [
    {
      num: "01",
      title: "Personal Attention",
      desc: "Every service is tailored to your unique needs, ensuring a refreshing self-care hour."
    },
    {
      num: "02",
      title: "Quality Skincare",
      desc: "We use only trusted products for your hair and skin, prioritizing your well-being."
    },
    {
      num: "03",
      title: "Comfortable Atmosphere",
      desc: "A hygienic and peaceful studio designed for your complete relaxation."
    },
    {
      num: "04",
      title: "Convenient Location",
      desc: "Easily accessible in Sambhaji Nagar, Loni Kalbhor, your local beauty sanctuary."
    }
  ];

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* ABOUT HERO */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="hero-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Your Local Sanctuary</span>
              <h1 className="heading-serif heading-xl" style={{ marginBottom: '24px' }}>
                Loni Kalbhor's <span className="highlight-serif">Trusted</span> Beauty Sanctuary
              </h1>
              <p className="text-lede" style={{ marginBottom: '32px' }}>
                Experience meticulous local beauty care combining warm neighborhood hospitality with modern hygiene standards and individualized treatment attention.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                <Calendar size={18} />
                Book Your Session
              </Link>
            </div>

            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: 'var(--shadow-medium)' }}>
              <img src="/images/salon-interior.jpg" alt="Komal Beauty Salon Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* OUR GENTLE APPROACH */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="hero-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src="/images/facial.jpg" alt="Dedicated Care for Women" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div>
              <span className="eyebrow">Our Gentle Approach</span>
              <h2 className="heading-serif heading-lg" style={{ marginBottom: '24px' }}>
                Dedicated Care for Women
              </h2>
              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Komal Beauty Salon is built on the belief that every woman deserves a peaceful space for her self-care. We offer precision hair styling, specialized facials, and threading, all delivered with warm personal attention in a hygienic studio.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--accent-sage)' }} />
                  <span style={{ fontWeight: '500' }}>Individualized skin & hair care plans</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--accent-sage)' }} />
                  <span style={{ fontWeight: '500' }}>Hospitality and patient, steady service</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--accent-sage)' }} />
                  <span style={{ fontWeight: '500' }}>Pristine sanitation and sanitized instruments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE TO YOU (Dark Charcoal Section) */}
      <section className="dark-section">
        <div className="container">
          <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
            <span className="eyebrow eyebrow-dark">Our Promise to You</span>
            <h2 className="heading-serif heading-lg" style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
              Gentle Care, Pristine Sanitation, Personalized Attention.
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              We prioritize your individual skin and hair needs, ensuring every treatment is tailored, refreshing, and performed with the highest standards of cleanliness. A sanctuary where you feel truly cared for.
            </p>
          </div>

          <div className="promise-grid">
            {promises.map((p) => (
              <div key={p.num} className="promise-card">
                <div className="promise-num">{p.num}</div>
                <h3 className="promise-title" style={{ color: 'var(--text-light)' }}>{p.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT FINAL CTA */}
      <CTASection
        heading="Ready for your refreshing self-care hour?"
        text="Message us to check availability or call to book your next moment of personal care."
        buttonText="WhatsApp Us"
      />
    </main>
  );
}
