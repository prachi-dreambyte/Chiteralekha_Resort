'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/RoomPageDetails.module.css';

const IMAGES = [
  '/assets/images/o6.webp',
  '/assets/images/o7.webp',
  '/assets/images/o9.webp',
  '/assets/images/r1.jpg',
  '/assets/images/r2.jpg',
  '/assets/images/r3.jpg',
];

const AMENITIES = [
  { icon: '❄️', label: 'Air Conditioning' },
  { icon: '📺', label: 'Flat-Screen TV' },
  { icon: '📶', label: 'High-Speed Wi-Fi' },
  { icon: '🔒', label: 'Electronic Safe' },
  { icon: '🔊', label: 'Sound System' },
  { icon: '🪞', label: 'Vanity Mirror' },
  { icon: '🛁', label: 'Bathtubs' },
  { icon: '🛋️', label: 'Seating Area' },
  { icon: '⏰', label: 'Alarm Clock' },
];

const CHECKIN_RULES = [
  'Check-in time is 2:00 PM',
  'Valid ID proof required',
  'Early check-in subject to availability',
];

const CHECKOUT_RULES = [
  'Check-out time is 11:00 AM',
  'Late check-out on request',
  'Room must be vacated on time',
];

const today = new Date().toISOString().split('T')[0];
const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

export default function RoomPageDetails() {
  const [activeImg, setActiveImg] = useState(0);
  const THUMB_LIMIT = 4;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkIn: today,
    checkOut: tomorrow,
    adults: '',
    children: '',
    roomType: '',
    numRooms: '',
  });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Room Details</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span className={styles.sep}>/</span>
            <span className={styles.breadActive}>Room Details</span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* ── Gallery ── */}
        <div className={styles.gallery}>
          {/* Thumbnails */}
          <div className={styles.thumbCol}>
            {IMAGES.slice(0, THUMB_LIMIT).map((src, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${activeImg === i ? styles.thumbActive : ''}`}
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
              >
                <Image src={src} alt={`Room view ${i + 1}`} fill className={styles.thumbImg} sizes="90px" />
                {i === THUMB_LIMIT - 1 && IMAGES.length > THUMB_LIMIT && (
                  <div className={styles.thumbMore}>+{IMAGES.length - THUMB_LIMIT} Photos</div>
                )}
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className={styles.mainImg}>
            <Image
              src={IMAGES[activeImg]}
              alt="Main room view"
              fill
              className={styles.mainImgEl}
              sizes="(max-width: 992px) 100vw, 800px"
              priority
            />
            <button className={styles.playBtn} aria-label="Play video">▶</button>
          </div>
        </div>

        {/* ── Layout ── */}
        <div className={styles.layout}>
          {/* ── Details ── */}
          <div className={styles.details}>
            {/* Title row */}
            <div className={styles.titleRow}>
              <div>
                <div className={styles.titleLine}>
                  <h2 className={styles.roomName}>Standard Rooms</h2>
                  <span className={styles.badge}>Luxury Rooms</span>
                </div>
                <p className={styles.location}>⊙ Chitralekha Resort, Mussoorie, Uttarakhand 248179</p>
              </div>
              <div className={styles.ratingBox}>
                <span className={styles.star}>★</span>
                <span className={styles.ratingVal}>4.9</span>
                <span className={styles.ratingCount}>(245 Review)</span>
              </div>
            </div>

            {/* Price */}
            <div className={styles.price}>
              <span className={styles.priceAmt}>₹9,999</span>
              <span className={styles.priceNight}> / night</span>
            </div>

            {/* Meta pills */}
            <div className={styles.metaRow}>
              <span className={styles.metaPill}>🛏 1 Bed</span>
              <span className={styles.metaPill}>🚿 1 Bath</span>
              <span className={styles.metaPill}>⊞ 300 sqft</span>
              <span className={styles.metaPill}>👥 2 Guests</span>
              <button className={styles.shareBtn}>⤴ Share</button>
            </div>

            <hr className={styles.divider} />

            {/* Overview */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Overview</h3>
              <p className={styles.sectionText}>
                Nestled amidst the lush hills of Mussoorie, our Standard Rooms offer a perfect blend of comfort and
                nature. Each room is thoughtfully designed with warm earthy tones, premium furnishings, and large
                windows that frame breathtaking valley views. Wake up to the sound of birds and the crisp mountain air
                every morning.
              </p>
            </div>

            <hr className={styles.divider} />

            {/* Amenities */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Room Amenities</h3>
              <div className={styles.amenitiesGrid}>
                {AMENITIES.map((a) => (
                  <div key={a.label} className={styles.amenityItem}>
                    <span className={styles.amenityIcon}>{a.icon}</span>
                    <span className={styles.amenityLabel}>{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className={styles.divider} />

            {/* Booking Rules */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Booking Rules</h3>
              <div className={styles.rulesGrid}>
                <div>
                  <p className={styles.rulesSubTitle}>Check In</p>
                  <ul className={styles.rulesList}>
                    {CHECKIN_RULES.map((r) => <li key={r}>{r}</li>)}
                  </ul>
                </div>
                <div>
                  <p className={styles.rulesSubTitle}>Check Out</p>
                  <ul className={styles.rulesList}>
                    {CHECKOUT_RULES.map((r) => <li key={r}>{r}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            <hr className={styles.divider} />

            {/* Location */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Location</h3>
              <div className={styles.mapWrap}>
                <iframe
                  title="Resort Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123!2d78.0322!3d30.4598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI3JzM1LjMiTiA3OMKwMDEnNTUuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* ── Sidebar Booking Card ── */}
          <div className={styles.sidebar}>
            <div className={styles.bookingCard}>
              <h3 className={styles.bookingTitle}>Book Room</h3>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your Name <span>*</span></label>
                <input
                  className={styles.formInput}
                  name="name"
                  placeholder="Ex: John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Phone Number <span>*</span></label>
                <input
                  className={styles.formInput}
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Check-in Date <span>*</span></label>
                <div className={styles.inputIcon}>
                  <input
                    type="date"
                    className={styles.formInput}
                    name="checkIn"
                    value={form.checkIn}
                    onChange={handleChange}
                  />
                  <span className={styles.iconRight}>📅</span>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Check-out Date <span>*</span></label>
                <div className={styles.inputIcon}>
                  <input
                    type="date"
                    className={styles.formInput}
                    name="checkOut"
                    value={form.checkOut}
                    onChange={handleChange}
                  />
                  <span className={styles.iconRight}>📅</span>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Adult <span>*</span></label>
                <select className={styles.formSelect} name="adults" value={form.adults} onChange={handleChange}>
                  <option value="">Select</option>
                  {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Children <span>*</span></label>
                <select className={styles.formSelect} name="children" value={form.children} onChange={handleChange}>
                  <option value="">Select</option>
                  {[0, 1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Room Type <span>*</span></label>
                <select className={styles.formSelect} name="roomType" value={form.roomType} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="suite">Suite</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Number of Rooms <span>*</span></label>
                <select className={styles.formSelect} name="numRooms" value={form.numRooms} onChange={handleChange}>
                  <option value="">Select</option>
                  {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <button className={styles.bookBtn}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
