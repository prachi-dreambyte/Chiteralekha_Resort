'use client';

import Image from 'next/image';
import styles from '../../styles/WhatsNearby.module.css';

const places = [
  {
    name: 'Mussoorie',
    distance: '28 km',
    tag: 'Hill Station',
    description:
      'Nestled in the foothills of the Garhwal Himalayan range — a timeless escape into the clouds above Dehradun.',
    image: '/assets/images/New folder/massorie.png',
  },
  {
    name: 'Bhatta Falls',
    distance: '21 km',
    tag: 'Waterfall',
    description:
      'A picturesque picnic spot in Mussoorie with cascading falls and a refreshing pond, ideal for photographers.',
    image: '/assets/images/New folder/batta.jpg',
  },
  {
    name: "Robber's Cave",
    distance: '4.3 km',
    tag: 'Natural Cave',
    description:
      'A 600-metre natural cave where rivers flow inside, featuring a dramatic 10-metre waterfall within its depths.',
    image: "/assets/images/New folder/robber's.jpeg",
  },
  {
    name: 'Tapkeshwar Mandir',
    distance: '11 km',
    tag: 'Temple',
    description:
      'A sacred Shiva temple on the Tons River bank, built atop a natural cave housing the revered shivalinga.',
    image: '/assets/images/New folder/tapkeshwar.jpg',
  },
  {
    name: 'Sahastra Dhara',
    distance: '15 km',
    tag: 'Natural Springs',
    description:
      'Sulphur springs on the Baldi River banks, surrounded by caves, waterfalls and terraced hillside farming.',
    image: '/assets/images/New folder/Sahastradhara.jpg',
  },
  {
    name: 'Malsi Deer Park',
    distance: '5.1 km',
    tag: 'Wildlife',
    description:
      'Home to Sambar deer, Nilgai, exotic birds and more — set against breathtaking views of the Doon Valley.',
    image: '/assets/images/New folder/zoo.jpg',
  },
  {
    name: 'Pacific Mall',
    distance: '6.6 km',
    tag: 'Shopping',
    description:
      'Over 200 brands, 15+ dining options, PVR cinema and a gaming zone — Dehradun\'s premier entertainment hub.',
    image: '/assets/images/New folder/mall.jpg',
  },
  {
    name: 'Paltan Bazar',
    distance: '13 km',
    tag: 'Market',
    description:
      'Shop for woollens, handicrafts, Doon Basmati rice and discover hidden bakeries in the charming Ghosi Galli.',
    image: '/assets/images/New folder/Paltan_Bazaar.webp',
  },
  {
    name: 'Rashtrapati Niketan',
    distance: '8.8 km',
    tag: 'Heritage',
    description:
      'The official presidential retreat of India, established in 1920 — a landmark of colonial-era grandeur.',
    image: '/assets/images/New folder/202505243411548.jpeg',
  },
  {
    name: 'Dehradun Railway Station',
    distance: '14 km',
    tag: 'Connectivity',
    description:
      'The city\'s main rail hub connecting to major cities across India, with easy cab access to the resort.',
    image: '/assets/images/New folder/train.jpg',
  },
  {
    name: 'Jolly Grant Airport',
    distance: '38 km',
    tag: 'Airport',
    description:
      'Dehradun\'s domestic airport with flights from Delhi, Mumbai and other metros. Transfers easily arranged.',
    image: '/assets/images/New folder/airport.jpg',
  },
];

export default function WhatsNearby() {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.headerWrap}>
        <span className={styles.eyebrow}>Explore the Region</span>
        <h2 className={styles.heading}>What's Nearby?</h2>
        <p className={styles.subtext}>
          Chitralekha Resort sits at the heart of Dehradun's finest attractions —
          from misty hill stations to ancient temples and vibrant markets.
        </p>
      </div>

      {/* Cards grid */}
      <div className={styles.grid}>
        {places.map((place, i) => (
          <div key={place.name} className={styles.card} style={{ '--i': i }}>
            {/* Image */}
            <div className={styles.imageWrap}>
              <Image
                src={place.image}
                alt={place.name}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className={styles.img}
              />
              <div className={styles.imgOverlay} />
            </div>

            {/* Content — always visible bottom strip */}
            <div className={styles.cardBottom}>
              <div className={styles.badgeRow}>
                <span className={styles.tag}>{place.tag}</span>
                <span className={styles.distanceBadge}>{place.distance}</span>
              </div>
              <h3 className={styles.placeName}>{place.name}</h3>
            </div>

            {/* Hover panel slides up */}
            <div className={styles.hoverPanel}>
              <div className={styles.badgeRow}>
                <span className={styles.tagLight}>{place.tag}</span>
                <span className={styles.distanceLight}>{place.distance}</span>
              </div>
              <h3 className={styles.placeNameHover}>{place.name}</h3>
              <div className={styles.divider} />
              <p className={styles.placeDesc}>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
