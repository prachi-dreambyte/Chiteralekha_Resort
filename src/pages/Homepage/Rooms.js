'use client';

import Image from 'next/image';
import styles from '../../styles/Rooms.module.css';
import Link from 'next/link';

const rooms = [
  {
    image: '/assets/images/o9.webp',
    title: 'Pool + Mussoorie View + Lawn Room',
    description: 'Wake up to Mussoorie’s misty charm while your feet touch lush green lawns.',
  },
  {
    image: '/assets/images/o6.webp',
    title: 'Pool + Jungle View + Mussoorie View Room',
    description: 'Dive into a world of excitement where every activity sparks a new adventure!',
  },
  {
    image: '/assets/images/o7.webp',
    title: 'Mussoorie View + Personal Lawn Room',
    description: 'Immerse in the heart of tradition, and connect to rustic charm and heritage!',
  },
];

export default function Rooms() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Room Categories</h2>
      <div className={styles.grid}>
        {rooms.map((room) => (
          <div key={room.title} className={styles.card}>
            <Image
              src={room.image}
              alt={room.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <h2 className={styles.title}>{room.title}</h2>
              <p className={styles.description}>{room.description}</p>
              <Link href="/RoomsPage" className={styles.bookBtn}><button className={styles.btn}>Discover More</button></Link> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
