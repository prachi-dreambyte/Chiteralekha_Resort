'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';

const slides = [
  {
    image: '/assets/images/o9.webp',
    eyebrow: 'Welcome to Chitralekha',
    titleTop: 'Discover',
    titleAccent: 'Serenity',
    titleBottom: 'in the Mountains',
    subtitle: 'A luxury escape nestled in breathtaking natural beauty',
    overlay: 'rgba(0,0,0,0.35)',
  },
  {
    image: '/assets/images/o6.webp',
    eyebrow: 'Boutique Resort Experience',
    titleTop: 'Unwind',
    titleAccent: 'in Luxury',
    titleBottom: 'Like Never Before',
    subtitle: 'World-class amenities crafted for the discerning traveller',
    overlay: 'rgba(20,30,10,0.45)',
  },
  {
    image: '/assets/images/o7.webp',
    eyebrow: 'Nature & Comfort',
    titleTop: 'Breathe',
    titleAccent: 'the Wild',
    titleBottom: 'Feel Alive',
    subtitle: 'Immerse yourself in pristine landscapes and tranquil surroundings',
    overlay: 'rgba(10,20,30,0.4)',
  },
  {
    image: '/assets/images/o9.webp',
    eyebrow: 'Your Perfect Getaway',
    titleTop: 'Create',
    titleAccent: 'Memories',
    titleBottom: 'That Last Forever',
    subtitle: 'Every stay tells a story — let yours begin here',
    overlay: 'rgba(40,20,0,0.45)',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [adults, setAdults] = useState('1');
  const [children, setChildren] = useState('0');

  const goTo = useCallback((index) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setTimeout(next, 6000);
    return () => clearTimeout(timer);
  }, [current, next]);

  const slide = slides[current];

  return (
    <section className={styles.hero}>

      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Overlay */}
      <div className={styles.overlay} style={{ background: slide.overlay }} />

      {/* Text content — key forces re-mount so animations replay */}
      <div className={styles.content} key={animKey}>
        <p className={styles.eyebrow}>{slide.eyebrow}</p>
        <h1 className={styles.title}>
          <span className={styles.titleTop}>{slide.titleTop}</span>
          <span className={styles.titleAccent}>{slide.titleAccent}</span>
          <span className={styles.titleBottom}>{slide.titleBottom}</span>
        </h1>
        <div className={styles.dividerLine} />
        <p className={styles.subtitle}>{slide.subtitle}</p>
      </div>

      {/* Prev / Next arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous slide">
        &#8592;
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next slide">
        &#8594;
      </button>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Booking bar */}
      <div className={styles.bookingBar}>
        <div className={styles.bookingInner}>
          <div className={styles.field}>
            <label className={styles.label}>CHECK-IN <span>*</span></label>
            <input type="date" className={styles.input} />
          </div>
          <div className={styles.divider} />
          <div className={styles.field}>
            <label className={styles.label}>CHECK-OUT <span>*</span></label>
            <input type="date" className={styles.input} />
          </div>
          <div className={styles.divider} />
          <div className={styles.field}>
            <label className={styles.label}>ADULTS</label>
            <select className={styles.select} value={adults} onChange={(e) => setAdults(e.target.value)}>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className={styles.divider} />
          <div className={styles.field}>
            <label className={styles.label}>CHILDREN</label>
            <select className={styles.select} value={children} onChange={(e) => setChildren(e.target.value)}>
              {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <button className={styles.checkBtn}>CHECK AVAILABILITY</button>
        </div>
      </div>
    </section>
  );
}
