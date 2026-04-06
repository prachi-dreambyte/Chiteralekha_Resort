"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/Booking.module.css";

const steps = [
  {
    step: "STEP 01",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <path d="M32 6C22.06 6 14 14.06 14 24c0 13.5 18 34 18 34s18-20.5 18-34c0-9.94-8.06-18-18-18z" stroke="#b07d3a" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="32" cy="24" r="6" stroke="#b07d3a" strokeWidth="2"/>
        <path d="M20 52l-6 6M44 52l6 6" stroke="#b07d3a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Choose Destination",
    desc: "Standing at the edge of a towering cliff, gazing at a vast desert under",
  },
  {
    step: "STEP 02",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <rect x="16" y="20" width="32" height="28" rx="3" stroke="#b07d3a" strokeWidth="2"/>
        <path d="M24 20v-4a8 8 0 0116 0v4" stroke="#b07d3a" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 34h16M24 40h10" stroke="#b07d3a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Select Your Package",
    desc: "Listening to the rhythmic waves of the ocean can be deeply humbling",
  },
  {
    step: "STEP 03",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <circle cx="32" cy="32" r="20" stroke="#b07d3a" strokeWidth="2"/>
        <circle cx="32" cy="32" r="3" fill="#b07d3a"/>
        <path d="M32 12v4M32 48v4M12 32h4M48 32h4" stroke="#b07d3a" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 32l8-8" stroke="#b07d3a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Customize Your Itinerary",
    desc: "These moments remind us of the planet's beauty and the importance",
  },
  {
    step: "STEP 04",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <path d="M36 10c-8 2-16 10-18 22l10 10c12-2 20-10 22-18L36 10z" stroke="#b07d3a" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="38" cy="26" r="4" stroke="#b07d3a" strokeWidth="2"/>
        <path d="M18 32l-6 6 4 4 6-6M34 46l-4 6-4-2 2-6" stroke="#b07d3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Book & Get Ready to Go",
    desc: "Savoring new flavors creates memories that stay with you long after the trip",
  },
];

export default function Booking() {
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    stepRefs.current.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) el.classList.add(styles.visible);
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrowIcon}>
          <svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="18">
            <circle cx="12" cy="10" r="8" stroke="#b07d3a" strokeWidth="1.5"/>
            <circle cx="28" cy="10" r="8" stroke="#b07d3a" strokeWidth="1.5"/>
            <circle cx="12" cy="10" r="3" stroke="#b07d3a" strokeWidth="1.5"/>
            <circle cx="28" cy="10" r="3" stroke="#b07d3a" strokeWidth="1.5"/>
          </svg>
        </span>
        <p className={styles.eyebrow}>HOW DOES WE WORK</p>
        <h2 className={styles.heading}>Our Booking Process</h2>
      </div>

      <div className={styles.stepsWrapper}>
        <div className={styles.connectorLine} />
        <div className={styles.stepsGrid}>
          {steps.map(({ step, icon, title, desc }, i) => (
            <div
              key={step}
              className={styles.stepCard}
              ref={(el) => (stepRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={styles.stepBadge}>{step}</div>
              <div className={styles.iconWrap}>{icon}</div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
