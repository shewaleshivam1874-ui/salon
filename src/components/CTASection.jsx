import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function CTASection({
  heading = "Ready for your next look?",
  text = "Message us to check availability or get directions to our Loni Kalbhor salon.",
  buttonText = "WhatsApp Us"
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <h2 className="heading-serif heading-lg" style={{ marginBottom: '16px' }}>
            {heading}
          </h2>
          <p className="text-lede" style={{ margin: '0 auto 32px auto' }}>
            {text}
          </p>
          <a
            href="https://wa.me/918421614951?text=Hi%20Komal%20Beauty%20Salon%2C%20I%20would%20like%20to%20enquire%20about%20booking%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '16px 36px', fontSize: '1rem' }}
          >
            <MessageCircle size={20} />
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
