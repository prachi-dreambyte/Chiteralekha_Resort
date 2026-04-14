'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Buranshsection.module.css';

export default function BuranshSection() {
  return (
    <section className={styles.buranshSection}>

      {/* Block 1 — Image Left, Text Right */}
      <div className={styles.panel}>

        <div className={styles.imagePane}>
          <div className={styles.imageInner}>
            <Image
              src="/assets/images/n2.webp"
              alt="Buransh Restaurant interior"
              fill
              className={styles.panelImage}
            />
            <div className={styles.imageOverlay} />
          </div>
        </div>

        <div className={`${styles.textPane} ${styles.textPaneLight}`}>
          <p className={styles.eyebrow}>Restaurant</p>
          <div className={styles.dividerLine} />
          <h2 className={styles.restaurantName}>Buransh</h2>

          <div className={styles.archThumb}>
            <Image
              src="/assets/images/n2.webp"
              alt="Buransh restaurant ambiance"
              fill
              className={styles.archImage}
            />
          </div>

          <p className={styles.description}>
            A serene haven nestled in the Mussoorie hills, where candlelit evenings
            and mountain air meet the warmth of Pahadi flavours. Come join us for a
            glass of buransh juice and a soulful dinner under the stars.
          </p>

          <Link href="/contactUs" className={styles.ctaBtn}>
            Reserve a Table
          </Link>
        </div>
      </div>

      {/* Block 2 — Text Left (dark), Image Right */}
      {/* <div className={`${styles.panel} ${styles.panelReversed}`}>

        <div className={`${styles.textPane} ${styles.textPaneDark}`}>
          <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Garden &amp; Terrace</p>
          <div className={`${styles.dividerLine} ${styles.dividerGold}`} />
          <h2 className={`${styles.restaurantName} ${styles.restaurantNameLight}`}>
            The Buransh<br />Garden
          </h2>

          <div className={styles.archThumb}>
            <Image
              src="/assets/images/r1.jpg"
              alt="Buransh garden terrace"
              fill
              className={styles.archImage}
            />
          </div>

          <p className={`${styles.description} ${styles.descriptionLight}`}>
            An open-air courtyard shaded by ancient rhododendron trees, perfect for
            a quiet breakfast or a sundowner as the Mussoorie valley glows at dusk.
            Let nature be your dining companion.
          </p>

          <Link href="/contactUs" className={`${styles.ctaBtn} ${styles.ctaBtnLight}`}>
            Explore Outdoors
          </Link>
        </div>

        <div className={styles.imagePane}>
          <div className={styles.imageInner}>
            <Image
              src="/assets/images/r1.jpg"
              alt="Buransh garden view"
              fill
              className={styles.panelImage}
            />
            <div className={styles.imageOverlay} />
          </div>
        </div>
      </div> */}

    </section>
  );
}