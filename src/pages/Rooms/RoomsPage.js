'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/RoomsPage.module.css';
import SearchBar from '../checkIN_OutForm/checkIN_OutForm';

const rooms = [
  {
    image: '/assets/images/o9.webp',
    title: 'Pool + Mussoorie View + Lawn Room',
    location: 'Chitralekha Resort, Mussoorie',
    price: '₹8,999',
    guests: 2,
    bedrooms: 1,
    area: '480',
    rating: 4,
    reviews: 3,
  },
  {
    image: '/assets/images/o6.webp',
    title: 'Pool + Jungle View + Mussoorie View Room',
    location: 'Chitralekha Resort, Mussoorie',
    price: '₹12,999',
    guests: 2,
    bedrooms: 1,
    area: '500',
    rating: 5,
    reviews: 3,
    featured: true,
  },
  {
    image: '/assets/images/o7.webp',
    title: 'Mussoorie View + Personal Lawn Room',
    location: 'Chitralekha Resort, Mussoorie',
    price: '₹9,999',
    guests: 1,
    bedrooms: 1,
    area: '450',
    rating: 4,
    reviews: 3,
  },
  {
    image: '/assets/images/r1.jpg',
    title: 'Deluxe Hill View Suite',
    location: 'Chitralekha Resort, Mussoorie',
    price: '₹10,999',
    guests: 3,
    bedrooms: 2,
    area: '650',
    rating: 4,
    reviews: 3,
  },
  {
    image: '/assets/images/r2.jpg',
    title: 'Premium Valley View Room',
    location: 'Chitralekha Resort, Mussoorie',
    price: '₹14,999',
    guests: 2,
    bedrooms: 2,
    area: '600',
    rating: 5,
    reviews: 3,
  },
  {
    image: '/assets/images/r3.jpg',
    title: 'Luxury Forest Retreat Room',
    location: 'Chitralekha Resort, Mussoorie',
    price: '₹11,999',
    guests: 2,
    bedrooms: 1,
    area: '700',
    rating: 3,
    reviews: 3,
  },
];

const ROOMS_PER_PAGE = 6;

function StarRating({ rating }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  );
}

function RoomCard({ room }) {
  return (
    <div className={`col-12 col-md-6 col-xl-4`}>
      <div className={styles.card}>
        {/* ── Image Section ── */}
        <div className={styles.imageWrap}>
          <Image
            src={room.image}
            alt={room.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
          <div className={styles.imageOverlay} />

          {/* Price badge */}
          <div className={styles.priceBadge}>
            <span className={styles.priceFrom}>From</span>
            <span className={styles.priceAmount}>{room.price}</span>
          </div>

          {/* Wishlist */}
          <button className={styles.wishlist} aria-label="Save to wishlist">♡</button>

          {/* Check Availability CTA */}
          <div className={styles.ctaWrap}>
            <Link href="/room-details" className={styles.ctaBtn}>
              <span className={styles.ctaIcon}>↗</span>
              CHECK AVAILABILITY
            </Link>
          </div>
        </div>

        {/* ── Card Body ── */}
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{room.title}</h3>
          <p className={styles.cardLocation}>
            <span className={styles.locationIcon}>⊙</span> {room.location}
          </p>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <span className={styles.metaIcon}>👥</span> {room.guests} Guests
            </span>
            <span className={styles.metaItem}>
              <span className={styles.metaIcon}>🛏</span> {room.bedrooms} Bedroom
            </span>
            <span className={styles.metaItem}>
              <span className={styles.metaIcon}>⊞</span> {room.area} ft²
            </span>
          </div>

          <div className={styles.ratingRow}>
            <StarRating rating={room.rating} />
            <span className={styles.reviewCount}>{room.reviews} Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const PRICE_OPTIONS = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under ₹10,000', value: 'under10' },
  { label: '₹10,000 – ₹13,000', value: '10to13' },
  { label: 'Above ₹13,000', value: 'above13' },
];

const SORT_OPTIONS = [
  { label: 'Default', value: 'default' },
  { label: 'Price: Low to High', value: 'asc' },
  { label: 'Price: High to Low', value: 'desc' },
  { label: 'Top Rated', value: 'rating' },
];

function parsePrice(str) {
  return parseInt(str.replace(/[₹,]/g, ''), 10);
}

export default function RoomsPage() {
  const [page, setPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  // Filter
  let filtered = rooms.filter((r) => {
    const p = parsePrice(r.price);
    if (priceFilter === 'under10') return p < 10000;
    if (priceFilter === '10to13') return p >= 10000 && p <= 13000;
    if (priceFilter === 'above13') return p > 13000;
    return true;
  });

  // Sort
  if (sortBy === 'asc') filtered = [...filtered].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  if (sortBy === 'desc') filtered = [...filtered].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  const totalPages = Math.ceil(filtered.length / ROOMS_PER_PAGE);
  const start = (page - 1) * ROOMS_PER_PAGE;
  const visible = filtered.slice(start, start + ROOMS_PER_PAGE);

  function handleFilter(val) { setPriceFilter(val); setPage(1); }
  function handleSort(val) { setSortBy(val); setPage(1); }

  return (
    <div className={styles.page}>
      {/* ── Hero Banner ── */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Explore Our</p>
          <h1 className={styles.heroTitle}>Rooms of Chitralekha</h1>
          <p className={styles.heroSub}>Handcrafted stays amidst the serene hills of Mussoorie</p>
        </div>
      </div>

      {/* ── Booking Bar ── */}
      <div className={styles.bookingWrap}>
        <SearchBar searchOnly />
      </div>

      {/* ── Rooms Grid ── */}
      <section className={styles.section}>
        <div className="container">

          {/* ── Toolbar ── */}
          <div className={styles.toolbar}>
            <p className={styles.resultCount}>
              Showing {filtered.length === 0 ? 0 : start + 1}–{Math.min(start + ROOMS_PER_PAGE, filtered.length)} of {filtered.length} Results
            </p>
            <div className={styles.filters}>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Price</label>
                <select
                  className={styles.filterSelect}
                  value={priceFilter}
                  onChange={(e) => handleFilter(e.target.value)}
                >
                  {PRICE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Sort By</label>
                <select
                  className={styles.filterSelect}
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {visible.length > 0 ? visible.map((room) => (
              <RoomCard key={room.title} room={room} />
            )) : (
              <p className={styles.noResults}>No rooms match your filters.</p>
            )}
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                className={styles.pageBtn}
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
              >‹</button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  className={`${styles.pageBtn} ${p === page ? styles.pageBtnActive : ''}`}
                  onClick={() => setPage(p)}
                >
                  {p}
                </button>
              ))}

              <button
                className={styles.pageBtn}
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
              >›</button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerOverlay} />
        <div className={styles.ctaBannerContent}>
          <h2 className={styles.ctaBannerTitle}>
            Feel The City Vibe<br />Experience Life In Motion
          </h2>
          <p className={styles.ctaBannerSub}>
            Book today to indulge in unparalleled luxury and serene surroundings. Experience tranquility like never before<br />
            with our exclusive reservations. Your escape awaits
          </p>
          <Link href="/contactUs" className={styles.ctaBannerBtn}>Reserve Now</Link>
        </div>
      </section>
    </div>
  );
}
