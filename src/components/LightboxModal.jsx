import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ image, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!image) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close modal">
          <X size={32} />
        </button>

        {hasPrev && (
          <button
            onClick={onPrev}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-light)',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        <img src={image.src} alt={image.title} className="lightbox-img" />

        <div className="lightbox-caption">
          <div>{image.title}</div>
          {image.subtitle && (
            <div style={{ fontSize: '0.9rem', color: 'var(--text-light-muted)', marginTop: '4px' }}>
              {image.subtitle}
            </div>
          )}
        </div>

        {hasNext && (
          <button
            onClick={onNext}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-light)',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>
    </div>
  );
}
