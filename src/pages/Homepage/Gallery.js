'use client';

import Image from 'next/image';
import styles from '../../styles/Gallery.module.css';

const images = [
  { src: '/assets/images/P1094049.jpg', alt: 'Resort dining setup' },
  { src: '/assets/images/o9.webp',      alt: 'Luxury room view' },
  { src: '/assets/images/P1188441.JPG.jpeg', alt: 'Breakfast spread' },
  { src: '/assets/images/P1094073.jpg', alt: 'Euphoria event' },
  { src: '/assets/images/r1.jpg',       alt: 'Pool and palms' },
  { src: '/assets/images/P1094094.jpg', alt: 'Banquet hall' },
];

export default function Gallery() {
  return (
    <section className={styles.section}>
        <h1 className={styles.eyebrow}>Our Gallery</h1>
      <div className='container'>
         {/* Top row: image | text | image */}
      <div className={styles.topRow}>
        <div className={styles.imgWrap}>
          <Image src={images[0].src} alt={images[0].alt} fill sizes="25vw" className={styles.img} />
        </div>

        <div className={styles.centerText}>
          <h2 className={styles.heading}>Moments In A Frame</h2>
          <p className={styles.sub}>
            A visual journey of luxury, serenity, and unforgettable moments.
            From stunning properties to breathtaking landscapes.
          </p>
          <button className={styles.btn}>Explore Gallery &rsaquo;</button>
        </div>

        <div className={styles.imgWrap}>
          <Image src={images[1].src} alt={images[1].alt} fill sizes="25vw" className={styles.img} />
        </div>
      </div>

      {/* Bottom row: 4 equal images */}
      <div className={styles.bottomRow}>
        {images.slice(2).map((img) => (
          <div key={img.src} className={styles.imgWrapBottom}>
            <Image src={img.src} alt={img.alt} fill sizes="25vw" className={styles.img} />
          </div>
        ))}
      </div>
      </div>
     
    </section>
  );
}
