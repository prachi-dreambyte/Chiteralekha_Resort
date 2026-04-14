"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Activity.module.css";

const activities = [
  {
    icon: "🏊",
    label: "Pool Access",
    desc: "Relax and unwind with refreshing poolside moments.",
    image: "/assets/images/o9.webp",
  },
  {
    icon: "🏸",
    label: "Badminton",
    desc: "Enjoy energetic matches in a fun outdoor setting.",
    image: "/assets/images/New%20folder/massorie.png",
  },
  {
    icon: "🏓",
    label: "Table Tennis",
    desc: "Fast-paced indoor game for quick entertainment.",
    image: "/assets/images/New%20folder/Paltan_Bazaar.webp",
  },
  {
    icon: "⚽",
    label: "Foosball",
    desc: "Challenge friends to exciting table football matches.",
    image: "/assets/images/New%20folder/Sahastradhara.jpg",
  },
  {
    icon: "♟️",
    label: "Chess",
    desc: "शांत वातावरण में दिमागी खेल का आनंद लें।",
    image: "/assets/images/New%20folder/zoo.jpg",
  },
  {
    icon: "🎯",
    label: "Carrom",
    desc: "Classic indoor game for light-hearted fun with family.",
    image: "/assets/images/New%20folder/tapkeshwar.jpg",
  },
  {
    icon: "🏏",
    label: "Cricket",
    desc: "Open spaces to enjoy friendly cricket matches.",
    image: "/assets/images/New%20folder/batta.jpg",
  },
  {
    icon: "⚽",
    label: "Football",
    desc: "Play and refresh with exciting football games.",
    image: "/assets/images/New%20folder/airport.jpg",
  },
  {
    icon: "🌿",
    label: "Garden Access",
    desc: "Peaceful green space to relax and connect with nature.",
    image: "/assets/images/New%20folder/train.jpg",
  },
];

export default function Activity() {
  const itemRefs = useRef([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

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
    <div className={styles.bgWrapper}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Recreation & Entertainment</h2>
          <p className={styles.eyebrow}>Activities & Games</p>
          <p className={styles.sub}>
            Discover a world of exciting activities and games designed to make your stay at Chitralekha Boutique Resort truly memorable. From outdoor sports to indoor entertainment and peaceful garden spaces.
          </p>
        </div>
      </div>

      <div className="container">
        <section className={styles.section}>
          {/* ── Left: scrolling panel ── */}
          <div className={styles.leftPanel}>
            <ul className={styles.list}>
              {activities.map(({ icon, label, desc }, i) => (
                <li
                  key={label}
                  className={styles.item}
                  ref={(el) => (itemRefs.current[i] = el)}
                  style={{ transitionDelay: `${(i % 4) * 60}ms` }}
                  onMouseEnter={() => setSelectedActivity(i)}
                  onMouseLeave={() => setSelectedActivity(null)}
                >
                  <div className={styles.iconWrap}>
                    <span className={styles.itemIcon}>{icon}</span>
                  </div>
                  <span className={styles.itemLabel}>{label}</span>
                  <span className={styles.itemDesc}>{desc}</span>
                  <div className={styles.hoverArrow}>→</div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: sticky image panel ── */}
          <div className={styles.rightPanel}>
            <div className={styles.stickyImage}>
              {selectedActivity !== null && activities[selectedActivity] ? (
                <Image
                  key={selectedActivity}
                  src={activities[selectedActivity].image}
                  alt={activities[selectedActivity].label}
                  fill
                  sizes="50vw"
                  className={styles.img}
                  priority
                />
              ) : (
                <Image
                  src="/assets/images/o9.webp"
                  alt="Activities"
                  fill
                  sizes="50vw"
                  className={styles.img}
                  priority
                />
              )}
              <div className={styles.imgOverlay} />
            </div>
          </div>
        </section>
      </div>

      {/* ── Mobile Grid View ── */}
      <div className={styles.mobileGrid}>
        <div className="container">
          <div className={styles.gridContainer}>
            {activities.map(({ icon, label, desc, image }, i) => (
              <div
                key={label}
                className={styles.gridCard}
                ref={(el) => (itemRefs.current[i] = el)}
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={image}
                    alt={label}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.cardImg}
                  />
                  <div className={styles.cardOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardIconWrap}>
                    <span className={styles.cardIcon}>{icon}</span>
                  </div>
                  <h3 className={styles.cardLabel}>{label}</h3>
                  <p className={styles.cardDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
