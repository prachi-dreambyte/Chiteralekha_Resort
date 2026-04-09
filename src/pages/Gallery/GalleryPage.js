'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/GalleryPage.module.css';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'outdoor', label: 'Outdoor' },
  { id: 'haldi', label: 'Haldi' },
  { id: 'sagan', label: 'Sagan' },
  { id: 'cocktail', label: 'Cocktail Party' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'birthday', label: 'Birthday Party' },
  { id: 'kitty', label: 'Kitty Party' },
];

const images = [
  // Rooms
  { src: '/assets/images/r1.jpg', alt: 'Deluxe Room', cat: 'rooms' },
  { src: '/assets/images/r2.jpg', alt: 'Suite Interior', cat: 'rooms' },
  { src: '/assets/images/r3.jpg', alt: 'Premium Room', cat: 'rooms' },
  { src: '/assets/images/r4.jpg', alt: 'Room View', cat: 'rooms' },
  { src: '/assets/images/RoomBack.png', alt: 'Room Balcony', cat: 'rooms' },
  { src: '/assets/images/n1.webp', alt: 'Night Room', cat: 'rooms' },
  // Outdoor
  { src: '/assets/images/o6.webp', alt: 'Garden View', cat: 'outdoor' },
  { src: '/assets/images/o7.webp', alt: 'Outdoor Lawn', cat: 'outdoor' },
  { src: '/assets/images/o9.webp', alt: 'Resort Grounds', cat: 'outdoor' },
  { src: '/assets/images/v1.jpg', alt: 'Valley View', cat: 'outdoor' },
  { src: '/assets/images/v2.jpg', alt: 'Mountain View', cat: 'outdoor' },
  { src: '/assets/images/group.webp', alt: 'Group Gathering', cat: 'outdoor' },
  // Haldi
  { src: '/assets/images/P1094049.jpg', alt: 'Haldi Ceremony', cat: 'haldi' },
  { src: '/assets/images/P1094073.jpg', alt: 'Haldi Decor', cat: 'haldi' },
  { src: '/assets/images/P1094094.jpg', alt: 'Haldi Celebration', cat: 'haldi' },
  { src: '/assets/images/n2.webp', alt: 'Haldi Moments', cat: 'haldi' },
  // Sagan
  { src: '/assets/images/P1094121.jpg', alt: 'Sagan Ritual', cat: 'sagan' },
  { src: '/assets/images/P1094148.jpg', alt: 'Sagan Blessings', cat: 'sagan' },
  { src: '/assets/images/P1094160.jpg', alt: 'Sagan Ceremony', cat: 'sagan' },
  { src: '/assets/images/n3.webp', alt: 'Sagan Decor', cat: 'sagan' },
  // Cocktail Party
  { src: '/assets/images/P1094163.jpg', alt: 'Cocktail Evening', cat: 'cocktail' },
  { src: '/assets/images/P1188441.JPG.jpeg', alt: 'Cocktail Setup', cat: 'cocktail' },
  { src: '/assets/images/P1188454.JPG.jpeg', alt: 'Cocktail Night', cat: 'cocktail' },
  { src: '/assets/images/n4.webp', alt: 'Cocktail Decor', cat: 'cocktail' },
  // Engagement
  { src: '/assets/images/p1.jpg', alt: 'Engagement Ring', cat: 'engagement' },
  { src: '/assets/images/p2.jpg', alt: 'Engagement Ceremony', cat: 'engagement' },
  { src: '/assets/images/p3.jpg', alt: 'Engagement Decor', cat: 'engagement' },
  { src: '/assets/images/n5.webp', alt: 'Engagement Moments', cat: 'engagement' },
  // Wedding
  { src: '/assets/images/wedding.webp', alt: 'Wedding Ceremony', cat: 'wedding' },
  { src: '/assets/images/weds1.webp', alt: 'Bridal Portrait', cat: 'wedding' },
  { src: '/assets/images/wedding-cuple-02.webp', alt: 'Wedding Couple', cat: 'wedding' },
  { src: '/assets/images/destinationweddingbharatcouple.webp', alt: 'Destination Wedding', cat: 'wedding' },
  { src: '/assets/images/decor.webp', alt: 'Wedding Decor', cat: 'wedding' },
  // Birthday Party
  { src: '/assets/images/P1188458.JPG.jpeg', alt: 'Birthday Celebration', cat: 'birthday' },
  { src: '/assets/images/P1188441.JPG.jpeg', alt: 'Birthday Setup', cat: 'birthday' },
  { src: '/assets/images/facilites.png', alt: 'Birthday Venue', cat: 'birthday' },
  // Kitty Party
  { src: '/assets/images/bgimage22.webp', alt: 'Kitty Party Setup', cat: 'kitty' },
  { src: '/assets/images/o6.webp', alt: 'Kitty Party Lunch', cat: 'kitty' },
  { src: '/assets/images/o7.webp', alt: 'Kitty Party Decor', cat: 'kitty' },
];

export default function GalleryPage() {
  const [active, setActive] = useState('all');
  const [lightbox, setLightbox] = useState(null); // index into filtered
  const [visible, setVisible] = useState(false);
  const gridRef = useRef(null);

  const filtered = active === 'all' ? images : images.filter((img) => img.cat === active);

  // Fade in on category change
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, [active]);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, filtered.length]);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image src="/assets/images/back.jpg" alt="Gallery" fill className={styles.heroBg} priority />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Chitralekha Boutique Resort</p>
          <h1 className={styles.heroTitle}>Our Gallery</h1>
          <p className={styles.heroSub}>Moments captured in every frame</p>
        </div>
        <div className={styles.heroPetals}>
          {['🌸','🌺','🌼','🌸','🌺'].map((p, i) => (
            <span key={i} className={styles.petal} style={{ '--pi': i }}>{p}</span>
          ))}
        </div>
      </div>
      <div className={styles.filterWraps}>
        <div className='container'>
          <h2 className='text-center'>Welcome to Chitralekha Gallery</h2>
        </div>
      </div>
      {/* Filter Tabs */}
      <div className={styles.filterWrap}>
        <div className={styles.filterInner}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${active === cat.id ? styles.filterActive : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className={`${styles.gridWrap} ${visible ? styles.gridVisible : ''}`} ref={gridRef}>
        <div className={styles.grid}>
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={styles.card}
              style={{ '--ci': i % 12 }}
              onClick={() => setLightbox(i)}
            >
              <div className={styles.imgWrap}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw" className={styles.img} />
              </div>
              <div className={styles.cardOverlay}>
                <div className={styles.cardInfo}>
                  <span className={styles.cardZoom}>⊕</span>
                  <p className={styles.cardAlt}>{img.alt}</p>
                  <p className={styles.cardCat}>{categories.find((c) => c.id === img.cat)?.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className={styles.lightboxOverlay} onClick={() => setLightbox(null)}>
          <button className={styles.lbClose} onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <button
            className={`${styles.lbNav} ${styles.lbPrev}`}
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + filtered.length) % filtered.length); }}
            aria-label="Previous"
          >‹</button>
          <div className={styles.lbImgWrap} onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              fill
              sizes="90vw"
              className={styles.lbImg}
              priority
            />
            <div className={styles.lbCaption}>
              <span>{filtered[lightbox].alt}</span>
              <span className={styles.lbCatTag}>{categories.find((c) => c.id === filtered[lightbox].cat)?.label}</span>
            </div>
          </div>
          <button
            className={`${styles.lbNav} ${styles.lbNext}`}
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % filtered.length); }}
            aria-label="Next"
          >›</button>
          <p className={styles.lbCounter}>{lightbox + 1} / {filtered.length}</p>
        </div>
      )}
    </div>
  );
}
