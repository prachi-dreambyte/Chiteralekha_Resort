'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/InstaReels.module.css';

const INSTA_PROFILE = 'https://www.instagram.com/chitralekhaboutiqueresort?igsh=MTRmd3ljbjQ5em8ycQ==';

const reels = [
  { id: 'DWlRaWVE7JM', thumb: '/assets/images/n1.webp', label: 'Resort Moments' },
  { id: 'DWgg430Evg1', thumb: '/assets/images/n2.webp', label: 'Nature & Calm'  },
  { id: 'DWLFkzqEk_z', thumb: '/assets/images/n3.webp', label: 'Boutique Life'  },
  { id: 'DUkl5QBkgLa', thumb: '/assets/images/n4.webp', label: 'Spa Vibes'      },
  { id: 'DTacpKhknwx', thumb: '/assets/images/n5.webp', label: 'Sunset Views'   },
];

export default function InstaReels() {
  const [openId, setOpenId] = useState(null);
  const cardRefs = useRef({});

  const handleOpen = (id) => {
    setOpenId(id);
    setTimeout(() => {
      cardRefs.current[id]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }, 60);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpenId(null);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Instagram Reels</p>
        <h2 className={styles.heading}>Life at Chitralekha</h2>
        <p className={styles.sub}>Tap any reel to watch</p>
      </div>

      <div className={styles.strip}>
        {reels.map((reel) => {
          const isOpen = openId === reel.id;

          return (
            <div
              key={reel.id}
              ref={(el) => (cardRefs.current[reel.id] = el)}
              className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}
              onClick={() => !isOpen && handleOpen(reel.id)}
              role={!isOpen ? 'button' : undefined}
              tabIndex={!isOpen ? 0 : undefined}
              aria-label={!isOpen ? `Watch ${reel.label}` : undefined}
              onKeyDown={(e) => e.key === 'Enter' && !isOpen && handleOpen(reel.id)}
            >
              {/* Thumbnail — always in DOM, hidden via CSS when playing */}
              <Image
                src={reel.thumb}
                alt={reel.label}
                fill
                sizes="(max-width: 480px) 145px, 200px"
                className={`${styles.thumb} ${isOpen ? styles.thumbHidden : ''}`}
                priority={false}
              />

              {/* Gradient overlay */}
              <div className={`${styles.cardOverlay} ${isOpen ? styles.hidden : ''}`} />

              {/* Play icon — shown on hover */}
              <span className={`${styles.playBtn} ${isOpen ? styles.hidden : ''}`}>
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              {/* Label */}
              <span className={`${styles.cardLabel} ${isOpen ? styles.hidden : ''}`}>
                {reel.label}
              </span>

              {/* iframe — plays in the same card size, no expansion */}
              {isOpen && (
                <div className={styles.embedClip}>
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed/?autoplay=1&cr=1&v=14`}
                    className={styles.embedFrame}
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={reel.label}
                  />
                </div>
              )}

              {/* Close button — only when playing */}
              {isOpen && (
                <button
                  className={styles.closeBtn}
                  onClick={handleClose}
                  aria-label="Close reel"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          );
        })}
      </div>

      <a
        href={INSTA_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaBtn}
      >
        <IgIcon size={15} /> Follow on Instagram
      </a>
    </section>
  );
}

function IgIcon({ size = 14 }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}