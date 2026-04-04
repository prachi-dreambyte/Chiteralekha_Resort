"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/facilites.module.css";

const facilities = [
  { icon: "🏔️", label: "Panoramic Mussoorie View" },
  { icon: "🛏️", label: "Premium Category Rooms" },
  { icon: "🍽️", label: "Buffet Breakfast, Lunch, Dinner" },
  { icon: "🌿", label: "Peaceful Environment" },
  { icon: "🏛️", label: "Banquet / Conference Hall — 1400 sq ft" },
  { icon: "💐", label: "Massive Wedding Lawn — 7500 sq ft" },
  { icon: "🌱", label: "3 Personal Lawns" },
  { icon: "🏊", label: "Adult Swimming Pool" },
  { icon: "🐣", label: "Kids Pool" },
  { icon: "🔔", label: "24/7 Room Service" },
  { icon: "🏨", label: "24/7 Front Office" },
  { icon: "🌸", label: "In-House Restaurant (Buransh Blossoms)" },
  { icon: "🎲", label: "Indoor Games" },
  { icon: "📍", label: "Close to Attractions" },
  { icon: "🚴", label: "Cycling in Paradise" },
  { icon: "✈️", label: "Airport & Railway Transfers" },
];

export default function Facilites() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    itemRefs.current.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) el.classList.add(styles.visible);
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
     <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Exclusive Facilities We ProviDe</p>
          <h2 className={styles.heading}>Indulge in an extraordinary escape</h2>
          <p className={styles.sub}>
            Luxury meets comfort, and every detail is thoughtfully designed to offer you a serene
            and unforgettable experience amidst the scenic charm of Mussoorie.
          </p>
        </div>
    </div>
    <section className={styles.section}>
      {/* ── Left: scrolling panel ── */}
      <div className={styles.leftPanel}>
        {/* Facilities list */}
        <ul className={styles.list}>
          {facilities.map(({ icon, label }, i) => (
            <li
              key={label}
              className={styles.item}
              ref={(el) => (itemRefs.current[i] = el)}
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <span className={styles.itemIcon}>{icon}</span>
              <span className={styles.itemLabel}>{label}</span>
            </li>
          ))}
        </ul>

      </div>

      {/* ── Right: sticky image ── */}
      <div className={styles.rightPanel}>
        <div className={styles.stickyImage}>
          <Image
            src="/assets/images/o9.webp"
            alt="Chitralekha Boutique Resort facilities"
            fill
            sizes="50vw"
            className={styles.img}
            priority
          />
          <div className={styles.imgOverlay} />
        </div>
      </div>

    </section>
    </>
   
  );
}
