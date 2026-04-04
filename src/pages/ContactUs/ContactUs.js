'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/contactus.module.css';

const locations = [
  {
    city: 'Chitralekha Resort',
    address: 'Village Tharu, Corbett Buffer Zone, Uttarakhand, India',
    phone: '+91 98765 43210',
    email: 'info@chitralekharesort.com',
    map: 'https://maps.google.com',
  },
  {
    city: 'Reservations Office',
    address: '12 Forest Lane, Ramnagar, Uttarakhand, India',
    phone: '+91 98765 43211',
    email: 'reservations@chitralekharesort.com',
    map: 'https://maps.google.com',
  },
  {
    city: 'Corporate Office',
    address: '45 Green Park, New Delhi, India',
    phone: '+91 98765 43212',
    email: 'corporate@chitralekharesort.com',
    map: 'https://maps.google.com',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', save: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission
  };

  return (
    <main className={styles.page}>

      {/* ── Hero header ── */}
      <div className={styles.heroHeader}>
        <h1 className={styles.heroTitle}>Contact Our Team</h1>
        <p className={styles.heroSub}>
          Connect with our dedicated support staff for inquiries, bookings, or assistance.<br />
          We ensure prompt, reliable, and professional service.
        </p>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadLink}>HOME</Link>
          <span className={styles.breadDot}>···</span>
          <span className={styles.breadCurrent}>CONTACT</span>
        </nav>
      </div>

      {/* ── Banner with form overlay ── */}
      <div className={styles.bannerWrap}>
        <div className={styles.bannerBg}>
          <span className={styles.bannerText} aria-hidden="true">24/7 CUSTOMER SUPPORT</span>
        </div>
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Name <span>*</span></label>
                <div className={styles.inputWrap}>
                  <UserIcon />
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className={styles.input} />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email Address <span>*</span></label>
                <div className={styles.inputWrap}>
                  <MailIcon />
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className={styles.input} />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Phone</label>
                <div className={styles.inputWrap}>
                  <PhoneIcon />
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={styles.input} />
                </div>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write Your Message" rows={5} className={styles.textarea} />
            </div>

            <label className={styles.checkLabel}>
              <input type="checkbox" name="save" checked={form.save} onChange={handleChange} className={styles.checkbox} />
              Save my name, email, and website in this browser for the next time I comment.
            </label>

            <button type="submit" className={styles.submitBtn}>
              POST YOUR REVIEW
              <span className={styles.submitIcon}>↗</span>
            </button>
          </form>
        </div>
      </div>

      {/* ── Office Locations ── */}
      <div className={styles.locationsSection}>
        <p className={styles.locEyebrow}>FIND OUR LOCATION</p>
        <h2 className={styles.locTitle}>Office Locations</h2>

        <div className={styles.locationsList}>
          {locations.map((loc, i) => (
            <div key={i} className={styles.locationRow}>
              <div className={styles.locCity}>{loc.city}</div>
              <div className={styles.locAddress}>{loc.address}</div>
              <div className={styles.locContact}>
                <span>{loc.phone}</span>
                <span>{loc.email}</span>
              </div>
              <a href={loc.map} target="_blank" rel="noopener noreferrer" className={styles.dirBtn}>
                <span className={styles.dirIcon}>↗</span>
                GET DIRECTION
              </a>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15">
      <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15">
      <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1L6.6 10.8z" />
    </svg>
  );
}
