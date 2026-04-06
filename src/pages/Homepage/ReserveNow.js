"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ReserveNow.module.css";

export default function ReserveNow() {
  return (
    <section className={styles.section}>
      {/* decorative stars */}
      <span className={`${styles.star} ${styles.starTL}`}>✦</span>
      <span className={`${styles.star} ${styles.starTR}`}>✦</span>
      <span className={`${styles.star} ${styles.starBL}`}>✦</span>
      <span className={`${styles.star} ${styles.starBR}`}>✦</span>

      {/* left circular image */}
      <div className={`${styles.circle} ${styles.circleLeft}`}>
        <Image
          src="/assets/images/p1.jpg"
          alt="Spa amenities"
          fill
          style={{ objectFit: "cover" }}
          sizes="160px"
        />
      </div>

      {/* center content */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>08 _ BOOK YOUR STAY NOW</p>
        <h2 className={styles.heading}>Reserve Now for a Luxurious</h2>
        <p className={styles.sub}>
          Book today to indulge in unparalleled luxury &amp; serene surroundings
          <br />
          like never with exclusive reservations.
        </p>
        <Link href="/accommodation" className={styles.btn}>
          <span className={styles.btnIcon}>›</span>
          BOOK YOUR ACCOMMODATION
        </Link>
      </div>

      {/* right circular image */}
      <div className={`${styles.circle} ${styles.circleRight}`}>
        <Image
          src="/assets/images/p2.jpg"
          alt="Pool side view"
          fill
          style={{ objectFit: "cover" }}
          sizes="160px"
        />
      </div>
    </section>
  );
}
