'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/AboutUs.module.css';

const cards = [
  { src: '/assets/images/n2.webp', label: 'Mountain Views',   tall: true },
  { src: '/assets/images/r1.jpg', label: 'Luxury Rooms' },
  { src: '/assets/images/v2.jpg', label: 'Nature Trails' },
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

        <div className={styles.grid}>
          {/* Left — text */}
          <div className={styles.textSide}>
             <h2 className={styles.heading}>
          A Retreat Born from Passion & Love for Nature
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
     
    </section>
  );
}
