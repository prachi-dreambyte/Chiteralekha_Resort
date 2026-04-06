"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/facilites.module.css";

const facilities = [
  {
    icon: "🏔️",
    label: "Panoramic Mussoorie View",
    desc: "Wake up to breathtaking vistas of the Mussoorie hills, where every morning feels like a painting come to life.",
  },
  {
    icon: "🍽️",
    label: "Buffet Breakfast, Lunch & Dinner",
    desc: "Savour a rich spread of local and continental flavours, freshly prepared to delight every palate.",
  },
  {
    icon: "�",
    label: "Swimming Pool",
    desc: "Unwind in our pristine adult and kids pools, set against a backdrop of lush greenery and mountain air.",
  },
  {
    icon: "�",
    label: "Massive Wedding Lawn",
    desc: "Celebrate your special moments on our 7500 sq ft wedding lawn, crafted for unforgettable occasions.",
  },
  {
    icon: "🏛️",
    label: "Banquet & Conference Hall",
    desc: "Host events, meetings, and gatherings in our elegant 1400 sq ft banquet and conference facility.",
  },
  {
    icon: "🚴",
    label: "Cycling in Paradise",
    desc: "Explore the scenic trails of Mussoorie on two wheels and experience nature at your own pace.",
  },
  {
    icon: "🌸",
    label: "In-House Restaurant",
    desc: "Dine at Buransh Blossoms, our in-house restaurant serving curated menus inspired by the hills.",
  },
  {
    icon: "✈️",
    label: "Airport & Railway Transfers",
    desc: "Enjoy seamless travel with our dedicated airport and railway station transfer services.",
  },
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
          <p className={styles.eyebrow}>Exclusive Facilities We Provide</p>
          <h2 className={styles.heading}>Indulge in an extraordinary escape</h2>
          <p className={styles.sub}>
            Luxury meets comfort, and every detail is thoughtfully designed to offer you a serene
            and unforgettable experience amidst the scenic charm of Mussoorie.
          </p>
        </div>
      </div>
      <div className="container">
         <section className={styles.section}>
        {/* ── Left: scrolling panel ── */}
        <div className={styles.leftPanel}>
          <ul className={styles.list}>
            {facilities.map(({ icon, label, desc }, i) => (
              <li
                key={label}
                className={styles.item}
                ref={(el) => (itemRefs.current[i] = el)}
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <div className={styles.iconWrap}>
                  <span className={styles.itemIcon}>{icon}</span>
                </div>
                <span className={styles.itemLabel}>{label}</span>
                <span className={styles.itemDesc}>{desc}</span>
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
      </div>
     
    </>
  );
}
