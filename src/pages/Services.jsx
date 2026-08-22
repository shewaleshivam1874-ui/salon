import React, { useState, useMemo } from 'react';
import { servicesData } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import SortDropdown from '../components/SortDropdown';
import CTASection from '../components/CTASection';
import { MessageCircle } from 'lucide-react';

export default function Services() {
  const [sortOption, setSortOption] = useState('default');

  const sortedServices = useMemo(() => {
    const list = [...servicesData];
    if (sortOption === 'recent') {
      return list.sort((a, b) => a.recentOrder - b.recentOrder);
    } else if (sortOption === 'price-high') {
      return list.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortOption === 'price-low') {
      return list.sort((a, b) => (a.price || 0) - (b.price || 0));
    }
    return list;
  }, [sortOption]);

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* SERVICES HERO */}
      <section style={{ padding: '80px 0 60px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <span className="eyebrow">Your Local Sanctuary</span>
            <h1 className="heading-serif heading-xl" style={{ marginBottom: '20px' }}>
              Complete <span className="highlight-serif">Beauty</span> Menu for Women
            </h1>
            <p className="text-lede">
              Tailored hair, skin, and grooming services in a hygienic, peaceful studio.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID & SORTING */}
      <section style={{ padding: '70px 0 100px 0' }}>
        <div className="container">
          <SortDropdown
            currentSort={sortOption}
            onSortChange={setSortOption}
            totalItems={sortedServices.length}
          />

          <div className="grid-3" style={{ marginTop: '36px' }}>
            {sortedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE STEPS SECTION */}
      <section style={{ padding: '90px 0', backgroundColor: '#F3EFEA', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px auto' }}>
            <span className="eyebrow">Simple Steps</span>
            <h2 className="heading-serif heading-lg">Your Path to Refreshing Self-Care</h2>
          </div>

          <div className="grid-3" style={{ marginBottom: '48px' }}>
            <div style={{ backgroundColor: 'var(--bg-card)', padding: '36px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent-pink)', marginBottom: '12px' }}>01</div>
              <h3 className="heading-serif heading-sm" style={{ marginBottom: '8px' }}>Choose Your Service</h3>
              <p className="text-muted" style={{ fontSize: '0.92rem' }}>
                Browse our menu of hair, skin, and grooming treatments.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', padding: '36px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent-pink)', marginBottom: '12px' }}>02</div>
              <h3 className="heading-serif heading-sm" style={{ marginBottom: '8px' }}>Confirm on WhatsApp</h3>
              <p className="text-muted" style={{ fontSize: '0.92rem' }}>
                Message us to check availability and book your preferred slot.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', padding: '36px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent-pink)', marginBottom: '12px' }}>03</div>
              <h3 className="heading-serif heading-sm" style={{ marginBottom: '8px' }}>Visit Our Studio</h3>
              <p className="text-muted" style={{ fontSize: '0.92rem' }}>
                Experience personalized care at our Sambhaji Nagar location.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a
              href="https://wa.me/918421614951?text=Hi%20Komal%20Beauty%20Salon%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '16px 36px' }}
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES CTA */}
      <CTASection
        heading="Ready for Your Refreshing Self-Care Hour?"
        text="Connect with us directly to check availability or discuss your needs."
        buttonText="WhatsApp Us"
      />
    </main>
  );
}
