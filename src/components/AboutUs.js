'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutUs.module.css';

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
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Our Story</p>
        <h2 className={styles.heading}>
          A Retreat Born from <span className={styles.accent}>Passion</span>
          <br />& Love for Nature
        </h2>
        <div className={styles.divider} />

        <div className={styles.grid}>
          {/* Left — text */}
          <div className={styles.textSide}>
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

            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNumber}>{s.number}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
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
    </section>
  );
}
