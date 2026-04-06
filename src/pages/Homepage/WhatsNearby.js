"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/WhatsNearby.module.css";

const categories = {
  All: null,
  "Nature & Waterfalls": ["Bhatta Falls", "Robber's Cave (Gucchu Pani)", "Sahastra Dhara Natural Springs", "Malsi Deer Park"],
  "Temples & Heritage": ["Tapkeshwar Mandir", "Rashtrapati Niketan"],
  "Shopping & Markets": ["Pacific Mall, Rajpur Road", "Paltan Bazar"],
  "Hill Stations": ["Mussoorie"],
  "Transport Hubs": ["Dehradun Railway Station", "Jolly Grant Airport"],
};

const places = [
  {
    name: "Mussoorie",
    distance: "28 km",
    tag: "Hill Station",
    image: "/assets/images/n1.webp",
    desc: "A hill station in the foothills of the Garhwal Himalayan range, nestled in Dehradun district of Uttarakhand.",
  },
  {
    name: "Bhatta Falls",
    distance: "21 km",
    tag: "Waterfall",
    image: "/assets/images/n2.webp",
    desc: "A major tourist picnic spot in Mussoorie with picturesque locations ideal for photographers and nature lovers.",
  },
  {
    name: "Robber's Cave (Gucchu Pani)",
    distance: "4.3 km",
    tag: "Natural Cave",
    image: "/assets/images/n3.webp",
    desc: "A natural cave formation ~600 m long where rivers flow inside, featuring a 10-metre waterfall. Maintained by Uttarakhand State.",
  },
  {
    name: "Tapkeshwar Mandir",
    distance: "11 km",
    tag: "Temple",
    image: "/assets/images/n4.webp",
    desc: "A Shiva temple on the bank of the Tons River, built atop a natural cave housing the main shivalinga.",
  },
  {
    name: "Sahastra Dhara Natural Springs",
    distance: "15 km",
    tag: "Natural Springs",
    image: "/assets/images/n5.webp",
    desc: "Sulphur water springs on the banks of Baldi River, surrounded by caves, waterfalls, and terraced farming.",
  },
  {
    name: "Malsi Deer Park",
    distance: "5.1 km",
    tag: "Wildlife",
    image: "/assets/images/o6.webp",
    desc: "Home to Sambar deer, Nilgai, two-horned deer, exotic animals and birds amid breathtaking natural views.",
  },
  {
    name: "Pacific Mall, Rajpur Road",
    distance: "6.6 km",
    tag: "Shopping",
    image: "/assets/images/o7.webp",
    desc: "200+ shopping brands, 15+ F&B outlets, a food court, PVR theatre, and gaming zone — Dehradun's top entertainment hub.",
  },
  {
    name: "Paltan Bazar",
    distance: "13 km",
    tag: "Market",
    image: "/assets/images/o9.webp",
    desc: "Shop for clothing, accessories, handicrafts, woollen wear, and the famous Doon Basmati rice in this vibrant local market.",
  },
  {
    name: "Rashtrapati Niketan",
    distance: "8.8 km",
    tag: "Heritage",
    image: "/assets/images/p1.jpg",
    desc: "An official retreat of the President of India, established in 1920 as the residence of the Governor General's Bodyguard commandant.",
  },
  {
    name: "Dehradun Railway Station",
    distance: "14 km",
    tag: "Transport",
    image: "/assets/images/r1.jpg",
    desc: "Dehradun's main rail hub with smooth connectivity to major cities. Pre-booked cabs and autos are easily available.",
  },
  {
    name: "Jolly Grant Airport",
    distance: "38 km",
    tag: "Airport",
    image: "/assets/images/r2.jpg",
    desc: "Nearest domestic airport with regular flights from Delhi, Mumbai, and other metros. Private taxis make transfers hassle-free.",
  },
];

export default function WhatsNearby() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const filtered =
    activeCategory === "All"
      ? places
      : places.filter((p) => categories[activeCategory]?.includes(p.name));

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
  }, [filtered]);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Background decoration */}
      <div className={styles.bgDecor} aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Explore the Surroundings</p>
          <h2 className={styles.heading}>What's Nearby?</h2>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerLeaf}>🌿</span>
            <span className={styles.dividerLine} />
          </div>
          <p className={styles.sub}>
            Chitralekha Boutique Resort is perfectly positioned to explore the best of Dehradun
            and its surrounding gems — from misty hill stations to ancient temples and vibrant markets.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className={styles.filters}>
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {filtered.map((place, i) => (
            <div
              key={place.name}
              className={styles.card}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className={styles.imageWrap}>
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
                {/* Distance badge */}
                <div className={styles.distanceBadge}>
                  <span className={styles.distanceIcon}>📍</span>
                  {place.distance}
                </div>
                {/* Tag */}
                <div className={styles.tagBadge}>{place.tag}</div>
              </div>

              {/* Content */}
              <div className={styles.cardBody}>
                <h3 className={styles.placeName}>{place.name}</h3>
                <p className={styles.placeDesc}>{place.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.distanceText}>
                    <span className={styles.distanceDot} />
                    {place.distance} from resort
                  </span>
                </div>
              </div>

              {/* Hover reveal overlay */}
              <div className={styles.hoverOverlay}>
                <div className={styles.hoverContent}>
                  <span className={styles.hoverTag}>{place.tag}</span>
                  <h3 className={styles.hoverName}>{place.name}</h3>
                  <p className={styles.hoverDesc}>{place.desc}</p>
                  <div className={styles.hoverDistance}>
                    <span>📍</span> {place.distance} from Chitralekha Resort
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
