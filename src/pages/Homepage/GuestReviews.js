'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../../styles/GuestReviews.module.css';

const reviews = [
  {
    name: 'Olivia Brown',
    role: 'Vacation Planner',
    avatar: '/assets/images/o6.webp',
    text: '"Our recent trip was flawless, thanks to Chitralekha. Their expert planning and personalized service unforgettable!"',
    rating: 5,
  },
  {
    name: 'James Miller',
    role: 'Corporate Guest',
    avatar: '/assets/images/o7.webp',
    text: '"Our recent trip was flawless, thanks to Chitralekha. Their expert planning and personalized service unforgettable!"',
    rating: 5,
  },
  {
    name: 'Lucas Moore',
    role: 'Travel Photographer',
    avatar: '/assets/images/o9.webp',
    text: '"Our recent trip was flawless, thanks to Chitralekha. Their expert planning and personalized service unforgettable!"',
    rating: 5,
  },
  {
    name: 'Ava Johnson',
    role: 'Lifestyle Influencer',
    avatar: '/assets/images/n1.webp',
    text: '"Our recent trip was flawless, thanks to Chitralekha. Their expert planning and personalized service unforgettable!"',
    rating: 5,
  },
  {
    name: 'Ethan Clarke',
    role: 'Adventure Traveller',
    avatar: '/assets/images/n2.webp',
    text: '"Our recent trip was flawless, thanks to Chitralekha. Their expert planning and personalized service unforgettable!"',
    rating: 5,
  },
  {
    name: 'Sophia Patel',
    role: 'Honeymoon Guest',
    avatar: '/assets/images/n3.webp',
    text: '"Our recent trip was flawless, thanks to Chitralekha. Their expert planning and personalized service unforgettable!"',
    rating: 5,
  },
  {
    name: 'Noah Williams',
    role: 'Wildlife Enthusiast',
    avatar: '/assets/images/n4.webp',
    text: '"Our recent trip was flawless, thanks to Chitralekha. Their expert planning and personalized service unforgettable!"',
    rating: 5,
  },
  {
    name: 'Isabella Scott',
    role: 'Solo Traveller',
    avatar: '/assets/images/n5.webp',
    text: '"Our recent trip was flawless, thanks to Chitralekha. Their expert planning and personalized service unforgettable!"',
    rating: 5,
  },
];

const VISIBLE = 3; // cards visible at once

export default function GuestReviews() {
  const [active, setActive] = useState(1);
  const [cardSpacing, setCardSpacing] = useState(340);
  const sectionRef = useRef(null);

  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);
  const next = () => setActive((a) => (a + 1) % reviews.length);

  // Responsive spacing
  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 600) setCardSpacing(295);
      else if (window.innerWidth <= 900) setCardSpacing(335);
      else setCardSpacing(395);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Auto-advance
  useEffect(() => {
    const t = setTimeout(next, 5000);
    return () => clearTimeout(t);
  }, [active]);

  // Intersection reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Build the visible window: prev, active, next (+ extras for peek)
  const getOffset = (i) => {
    const total = reviews.length;
    let offset = i - active;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Background image */}
      <div className={styles.bg} />
      <div className={styles.bgOverlay} />

      <div className={styles.inner}>
        {/* Header row */}
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Clients Feedback</p>
            <h2 className={styles.heading}>What Our Customers Says</h2>
          </div>
          <div className={styles.navBtns}>
            <button className={styles.navBtn} onClick={prev} aria-label="Previous review">&#8592;</button>
            <button className={styles.navBtn} onClick={next} aria-label="Next review">&#8594;</button>
          </div>
        </div>

        {/* Carousel track */}
        <div className={styles.track}>
          {reviews.map((r, i) => {
            const offset = getOffset(i);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;
            const isPeek = Math.abs(offset) === 2;

            return (
              <div
                key={i}
                className={`${styles.card} ${isActive ? styles.cardActive : ''} ${isPeek ? styles.cardPeek : ''}`}
                style={{
                  '--offset': offset,
                  opacity: isVisible ? 1 : isPeek ? 0.45 : 0,
                  pointerEvents: isVisible || isPeek ? 'auto' : 'none',
                  transform: `translateX(${offset * cardSpacing}px) scale(${1 - Math.abs(offset) * 0.06})`,
                  zIndex: isActive ? 3 : isPeek ? 1 : 0,
                }}
                onClick={() => !isActive && setActive(i)}
              >
                <span className={styles.quoteIcon}>&ldquo;&rdquo;</span>
                <div className={styles.cardTop}>
                  <div className={styles.avatar}>
                    <Image src={r.avatar} alt={r.name} fill sizes="56px" className={styles.avatarImg} />
                  </div>
                  <div>
                    <p className={styles.name}>{r.name}</p>
                    <p className={styles.role}>{r.role}</p>
                  </div>
                </div>
                <p className={styles.text}>{r.text}</p>
                <div className={styles.stars}>
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <span key={s} className={styles.star}>★</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
