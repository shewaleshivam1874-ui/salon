import React from 'react';
import { Clock } from 'lucide-react';

export default function ServiceCard({ service }) {
  const { title, priceDisplay, duration, image, description } = service;

  const whatsappMessage = encodeURIComponent(
    `Hi Komal Beauty Salon, I would like to book ${title}. Please let me know the available slots.`
  );
  const whatsappUrl = `https://wa.me/918421614951?text=${whatsappMessage}`;

  return (
    <div className="service-card">
      <div className="service-card-img-wrap">
        <img
          src={image}
          alt={title}
          className="service-card-img"
          loading="lazy"
        />
      </div>
      <div className="service-card-body">
        <h3 className="service-card-title">{title}</h3>
        {description && (
          <p className="text-muted" style={{ fontSize: '0.88rem', marginBottom: '16px' }}>
            {description}
          </p>
        )}
        <div className="service-card-meta">
          <span className="service-price">{priceDisplay}</span>
          <span className="service-duration" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} /> {duration}
          </span>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-full"
        >
          Book now
        </a>
      </div>
    </div>
  );
}
