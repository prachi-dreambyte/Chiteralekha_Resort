'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/AboutUs.module.css';
const whyPanels = [
  { src: '/assets/images/P1094049.jpg', label: 'Stunning Views', description: "Wake up to Dehradun’s emerald valleys and misty Himalayan peaks—every glance feels like a painting come to life.",},
  { src: '/assets/images/p1.jpg', label: 'Sukoon', description:"A space within Chitralekha where every word calms the mind, every story soothes the soul, and moments feel lighter, warmer, and more peaceful." ,},
  { src: '/assets/images/r1.jpg', label: 'Luxury Rooms', description:"Experience the perfect blend of comfort and elegance — our luxury rooms are crafted to offer you serene views, plush interiors, and a stay that feels like royalty." ,},
  { src: '/assets/images/weds1.webp', label: 'Destination Wedding', description:"Turn your dream wedding into a timeless memory — celebrate love in the heart of a stunning destination, where every moment is wrapped in elegance, charm, and unforgettable beauty." ,},
  { src: '/assets/images/n5.webp', label: 'Warm Hospitality', description:"At Chitralekha Boutique Resort, warm hospitality isn’t just a service — it’s our signature. From your first step in, you’re welcomed like family, with genuine smiles and heartfelt care. Every detail, every gesture is designed to make you feel at home — only better." ,},
];

export default function WhyChiteralekha() {
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
    <>
     {/* ── Where Adventure Beckons ─────────────────────── */}

      <div className={styles.whySection} ref={whyRef}>
        <div className={styles.whyTextBlock}>
          <h2 className={styles.whyHeading}>Why Chitralekha</h2>
          <p className={styles.whyEyebrow}>प्रकृति के करीब, सुकून के सबसे करीब।</p>
          <p className={styles.whyBody}>
            The Chitralekha boutique resort is more than just a resort in Dehradun - 
            this is a peaceful migration in the lap of nature.This hill resort in Dehradun provides breathtaking views of the Mussoorie hills, 
            green atmosphere and a really calm atmosphere. Whether you are planning a romantic stay or a cool retreat, Chitralekha mixes luxury, 
            comfort and natural beauty to create an unforgettable experience.
          </p>
        </div>

        <div className={styles.whyGallery}>
          {whyPanels.map((panel, i) => (
            <div key={panel.label} className={styles.whyPanel} style={{ '--i': i }}>
              <Image
  src={panel.src}
  alt={panel.label}
  fill
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 33vw, 40vw"  // ← bigger for hover state
  className={styles.whyPanelImg}
  quality={90}   // ← add this prop
/>
              <div className={styles.whyPanelOverlay} />
              <span className={styles.whyPanelName}>{panel.label}</span>
               <span className={styles.carddescription}>{panel.description}</span>
            </div>
          ))}
        </div>
      </div>
    </>
    
      );
}
