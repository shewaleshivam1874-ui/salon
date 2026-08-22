import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { servicesData } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SortDropdown from '../components/SortDropdown';
import PromiseSection from '../components/PromiseSection';
import CTASection from '../components/CTASection';

export default function Home() {
  const [sortOption, setSortOption] = useState('default');

  // Filter top 3 featured services for home page display
  const initialFeatured = useMemo(() => {
    return servicesData.filter((s) => s.featured);
  }, []);

  // Sorted featured cards
  const sortedServices = useMemo(() => {
    const list = [...initialFeatured];
    if (sortOption === 'recent') {
      return list.sort((a, b) => a.recentOrder - b.recentOrder);
    } else if (sortOption === 'price-high') {
      return list.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortOption === 'price-low') {
      return list.sort((a, b) => (a.price || 0) - (b.price || 0));
    }
    return list;
  }, [initialFeatured, sortOption]);

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* HERO SECTION */}
      <section style={{ padding: '80px 0 100px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="hero-layout" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
            {/* Left Content */}
            <div>
              <span className="eyebrow">Loni Kalbhor's Sanctuary &nbsp;•&nbsp; सौंदर्य • काळजी • आत्मविश्वास</span>
              <h1 className="heading-serif heading-xl" style={{ marginBottom: '24px' }}>
                Your <span className="highlight-serif">Beauty</span>, Your Moment.
              </h1>
              <p className="text-lede" style={{ marginBottom: '40px' }}>
                Professional beauty and self-care services designed to help you look your best and feel confident.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary" style={{ padding: '16px 32px' }}>
                  View Services
                </Link>
                <a
                  href="https://wa.me/918421614951?text=Hi%20Komal%20Beauty%20Salon%2C%20I%20would%20like%20to%20enquire%20about%20booking%20an%20appointment."
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

            {/* Right Hero Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '4 / 5',
                  backgroundColor: '#EFEBE4',
                  boxShadow: 'var(--shadow-medium)'
                }}
              >
                <img
                  src="/images/hero-salon.jpg"
                  alt="Komal Beauty Salon Model"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES SECTION */}
      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">Curated Menu</span>
            <h2 className="heading-serif heading-lg">Featured Services</h2>
          </div>

          <SortDropdown
            currentSort={sortOption}
            onSortChange={setSortOption}
            totalItems={sortedServices.length}
          />

          <div className="grid-3" style={{ marginTop: '32px' }}>
            {sortedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR OFFERINGS SECTION */}
      <section style={{ padding: '90px 0', backgroundColor: '#F3EFEA', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
            <span className="eyebrow">Our Offerings</span>
            <h2 className="heading-serif heading-lg" style={{ marginBottom: '16px' }}>
              Tailored Care for Every Need
            </h2>
            <p className="text-muted">
              From refreshing facials to precise hair styling, discover our range of services designed for your well-being.
            </p>
          </div>

          <div className="grid-3">
            {/* Offering 1 */}
            <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: '32px', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '24px' }}>
                <img src="/images/facial.jpg" alt="Specialized Facials" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="heading-serif heading-sm" style={{ marginBottom: '12px' }}>Specialized Facials</h3>
              <p className="text-muted" style={{ fontSize: '0.92rem', marginBottom: '24px', flexGrow: 1 }}>
                Rejuvenate your skin with treatments tailored to your unique glow.
              </p>
              <Link to="/services" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>
                View Details <ArrowRight size={16} />
              </Link>
            </div>

            {/* Offering 2 */}
            <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: '32px', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '24px' }}>
                <img src="/images/hair-spa.jpg" alt="Precision Hair Care" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="heading-serif heading-sm" style={{ marginBottom: '12px' }}>Precision Hair Care</h3>
              <p className="text-muted" style={{ fontSize: '0.92rem', marginBottom: '24px', flexGrow: 1 }}>
                Styling, cuts, and nourishing hair spa treatments for healthy, beautiful hair.
              </p>
              <Link to="/services" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>
                View Details <ArrowRight size={16} />
              </Link>
            </div>

            {/* Offering 3 */}
            <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: '32px', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '24px' }}>
                <img src="/images/makeup.jpg" alt="Occasion Makeup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="heading-serif heading-sm" style={{ marginBottom: '12px' }}>Occasion Makeup</h3>
              <p className="text-muted" style={{ fontSize: '0.92rem', marginBottom: '24px', flexGrow: 1 }}>
                Flawless finishes for every event, from subtle elegance to bridal glamour.
              </p>
              <Link to="/services" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>
                View Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE SECTION (Dark Charcoal) */}
      <PromiseSection />

      {/* WHY CHOOSE US SECTION */}
      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="heading-serif heading-lg">
              Meticulous Care, Trusted Results
            </h2>
          </div>

          <div className="grid-3">
            <div style={{ textAlignment: 'center', padding: '36px 24px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-card)', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--accent-pink-soft)', color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 className="heading-serif heading-sm" style={{ marginBottom: '8px' }}>Hygienic Standards</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                Pristine tools and sanitised stations for complete peace of mind during every appointment.
              </p>
            </div>

            <div style={{ textAlignment: 'center', padding: '36px 24px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-card)', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--accent-pink-soft)', color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <HeartHandshake size={28} />
              </div>
              <h3 className="heading-serif heading-sm" style={{ marginBottom: '8px' }}>Personal Attention</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                Dedicated one-on-one consultation ensuring treatments match your skin and hair goals.
              </p>
            </div>

            <div style={{ textAlignment: 'center', padding: '36px 24px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-card)', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--accent-pink-soft)', color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <Sparkles size={28} />
              </div>
              <h3 className="heading-serif heading-sm" style={{ marginBottom: '8px' }}>Local Sanctuary</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                A serene atmosphere located right in Sambhaji Nagar, Loni Kalbhor, Pune.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOME CTA SECTION */}
      <CTASection />
    </main>
  );
}
