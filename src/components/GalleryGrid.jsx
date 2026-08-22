import React, { useState } from 'react';
import { galleryImages } from '../data/services';
import LightboxModal from './LightboxModal';

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const currentImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  return (
    <div>
      {/* Strict Aligned 3-Column Grid */}
      <div className="grid-3">
        {galleryImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setLightboxIndex(idx)}
            style={{
              width: '100%',
              aspectRatio: '4 / 5',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              cursor: 'pointer',
              backgroundColor: '#EFEBE4',
              position: 'relative',
              boxShadow: 'var(--shadow-subtle)'
            }}
            className="gallery-card-wrap"
          >
            <img
              src={img.src}
              alt={img.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="gallery-grid-img"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentImage && (
        <LightboxModal
          image={currentImage}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : prev))}
          onNext={() => setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : prev))}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < galleryImages.length - 1}
        />
      )}
    </div>
  );
}
