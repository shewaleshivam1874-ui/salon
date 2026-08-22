import React from 'react';

export default function PromiseSection({ title = "Your Experience, Our Priority", eyebrow = "Our Promise" }) {
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
    <section className="dark-section">
      <div className="container">
        <div style={{ maxWidth: '640px' }}>
          <span className="eyebrow eyebrow-dark">{eyebrow}</span>
          <h2 className="heading-serif heading-lg" style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
            {title}
          </h2>
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
  );
}
