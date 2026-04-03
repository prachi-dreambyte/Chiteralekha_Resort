'use client';

import { useState, useEffect } from 'react';
import styles from '../../styles/InstaReels.module.css';

const INSTA_PROFILE = 'https://www.instagram.com/chitralekhaboutiqueresort?igsh=MTRmd3ljbjQ5em8ycQ==';

const reels = [
  { id: 1, url: 'https://www.instagram.com/reel/DWlRaWVE7JM/', thumb: '/assets/images/n1.webp', label: 'Resort Moments' },
  { id: 2, url: 'https://www.instagram.com/reel/DWgg430Evg1/', thumb: '/assets/images/n2.webp', label: 'Nature & Calm' },
  { id: 3, url: 'https://www.instagram.com/reel/DUwq1z7kn56/', thumb: '/assets/images/n3.webp', label: 'Spa Vibes' },
  { id: 4, url: 'https://www.instagram.com/reel/DTacpKhknwx/', thumb: '/assets/images/n4.webp', label: 'Sunset Views' },
  { id: 5, url: 'https://www.instagram.com/reel/DUZz49JklHA/', thumb: '/assets/images/n5.webp', label: 'Luxury Stay' },
];

export default function InstaReels() {
  const [active, setActive] = useState(null);

  // Escape to close
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  return (
    <>
      <section className={styles.section}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Where Luxury Meets Every Frame</p>
          <h2 className={styles.heading}>Discover breathtaking moments and unforgettable experiences captured in every reel.</h2>
        </div>

        {/* 5 full-size reel cards */}
        <div className={styles.grid}>
          {reels.map((reel, i) => (
            <div
              key={reel.id}
              className={styles.card}
              style={{ '--i': i }}
            >
              {/* Embedded reel — autoplay muted */}
              <iframe
                src={`${reel.url}embed/`}
                className={styles.embed}
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={reel.label}
              />

              {/* Click overlay — opens modal */}
              <button
                className={styles.overlay}
                onClick={() => setActive(reel)}
                aria-label={`Watch ${reel.label} fullscreen`}
              >
                <span className={styles.playRing}>
                  <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <a
          href={INSTA_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          <IgIcon size={16} />
          Follow on Instagram
        </a>
      </section>

      {/* Modal */}
      {active && (
        <div
          className={styles.backdrop}
          onClick={(e) => e.target === e.currentTarget && setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={() => setActive(null)} aria-label="Close">
              ✕
            </button>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <iframe
                  src={`${active.url}embed/`}
                  className={styles.modalEmbed}
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={active.label}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function IgIcon({ size = 14 }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}
