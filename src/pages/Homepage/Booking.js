"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/Booking.module.css";

const packages = [
  {
    icon: "🌿",
    title: "Weekend Getaway",
    duration: "2 Nights / 3 Days",
    price: "₹8,999",
    perks: ["Buffet Breakfast", "Pool Access", "Mussoorie View Room"],
  },
  {
    icon: "💍",
    title: "Honeymoon Retreat",
    duration: "3 Nights / 4 Days",
    price: "₹15,999",
    perks: ["All Meals Included", "Couple Spa", "Private Lawn Room"],
    featured: true,
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Escape",
    duration: "3 Nights / 4 Days",
    price: "₹12,999",
    perks: ["Buffet Meals", "Kids Pool", "Cycling Activity"],
  },
];

export default function Booking() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((el) => {
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
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Plan Your Stay</p>
          <h2 className={styles.heading}>Book Your Perfect Escape</h2>
          <p className={styles.sub}>
            Choose from our handcrafted packages designed to give you the most
            memorable experience amidst the serene hills of Mussoorie.
          </p>
        </div>

        <div className={styles.grid}>
          {packages.map(({ icon, title, duration, price, perks, featured }, i) => (
            <div
              key={title}
              className={`${styles.card} ${featured ? styles.featured : ""}`}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {featured && <span className={styles.badge}>Most Popular</span>}
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{icon}</span>
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.duration}>{duration}</p>
              <ul className={styles.perks}>
                {perks.map((p) => (
                  <li key={p} className={styles.perk}>
                    <span className={styles.check}>✓</span> {p}
                  </li>
                ))}
              </ul>
              <div className={styles.footer}>
                <span className={styles.price}>
                  {price} <span className={styles.perNight}>/ person</span>
                </span>
                <button className={styles.btn}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
