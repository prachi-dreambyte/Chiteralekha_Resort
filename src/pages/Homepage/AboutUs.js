'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/AboutUs.module.css';

const whyPanels = [
  { src: '/assets/images/n1.webp', label: 'Pench' },
  { src: '/assets/images/n2.webp', label: 'Kanha' },
  { src: '/assets/images/n3.webp', label: 'Tadoba' },
  { src: '/assets/images/n4.webp', label: 'Bandhavgarh' },
  { src: '/assets/images/n5.webp', label: 'Satpura' },
];

const cards = [
  { src: '/assets/images/o9.webp', label: 'Mountain Views',   tall: true },
  { src: '/assets/images/o6.webp', label: 'Luxury Rooms' },
  { src: '/assets/images/o7.webp', label: 'Nature Trails' },
];

const stats = [
  { number: '10+', label: 'Years of Hospitality' },
  { number: '50+', label: 'Luxury Rooms' },
  { number: '98%', label: 'Guest Satisfaction' },
];

export default function AboutUs() {
  const whyRef = useRef(null);

  useEffect(() => {
    const el = whyRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.whyVisible); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Our Story</p>
       
        <div className={styles.divider} />

        <div className={styles.grid}>
          {/* Left — text */}
          <div className={styles.textSide}>
             <h2 className={styles.heading}>
          A Retreat Born from <span className={styles.accent}>Passion</span>
          <br />& Love for Nature
        </h2>
            <p>
              Nestled in the lap of the mountains, Chitralekha Boutique Resort was
              founded with a single vision — to offer guests an intimate escape where
              luxury meets the raw beauty of nature. Every stone, every corner, every
              view has been thoughtfully curated.
            </p>
            <p>
              Our team of passionate hosts ensures that each stay feels personal,
              unhurried, and deeply restorative. Whether you seek adventure in the
              wild or quiet mornings with a cup of tea overlooking the valley, we
              have crafted the perfect setting for you.
            </p>
            <Link href="/about" className={styles.ctaBtn}>
              Discover Our Story
            </Link>
          </div>

          {/* Right — image cards */}
          <div className={styles.imageSide}>
            {cards.map((card) => (
              <div
                key={card.label}
                className={`${styles.card} ${card.tall ? styles.cardTall : ''}`}
              >
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles.cardImg}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardLabel}>{card.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ── Where Adventure Beckons ─────────────────────── */}
      <div className={styles.whySection} ref={whyRef}>
        <div className={styles.whyTextBlock}>
          <h2 className={styles.whyHeading}>WHERE ADVENTURE BECKONS</h2>
          <p className={styles.whyEyebrow}>Five Wilderness Retreats</p>
          <p className={styles.whyBody}>
            Get ready to take a deep breath of comfort, adventure,
            and tranquility at Chitralekha Boutique Resort.
          </p>
        </div>

        <div className={styles.whyGallery}>
          {whyPanels.map((panel, i) => (
            <div key={panel.label} className={styles.whyPanel} style={{ '--i': i }}>
              <Image
                src={panel.src}
                alt={panel.label}
                fill
                sizes="(max-width: 600px) 100vw, 20vw"
                className={styles.whyPanelImg}
              />
              <div className={styles.whyPanelOverlay} />
              <span className={styles.whyPanelName}>{panel.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
