'use client';

import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: 'f' },
  { href: 'https://x.com', label: 'X', icon: '𝕏' },
  { href: 'https://instagram.com', label: 'Instagram', icon: '◎' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'in' },
];

const tickerItems = [
  { icon: '🚗', text: 'Travel Smarter, Live Better' },
  { icon: '⛺', text: 'Go Beyond Limits' },
  { icon: '🌿', text: 'Escape to Nature' },
  { icon: '🏡', text: 'Your Home Away From Home' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Scrolling ticker */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              <span className={styles.tickerIcon}>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer body */}
      <div className={styles.body}>
        <div className={styles.container}>

          {/* Brand column */}
          <div className={styles.brand}>
            <img
              src="/assets/images/logo2.webp"
              alt="Chitralekha Boutique Resort"
              className={styles.logo}
            />
            <p className={styles.tagline}>
              वादीयों का स्वागत, पहाड़ों का प्यार!
            </p>
            <p className={styles.taglines}>
              Nestled in Dehradun’s embrace, we’re more than a stay—we’re your mountain family. Come for the views, stay for the love.</p>
            {/* <p className={styles.hours}>
              <strong>We Are Available:</strong><br />
              Mon–Sat: 08:00 am to 5:00 pm
            </p> */}

            {/* Follow Us */}
            <div className={styles.followBlock}>
              <p className={styles.followTitle}>Follow Us Now</p>
              <div className={styles.socials}>
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label} className={styles.socialBtn}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {['About Us', 'Accommodation', 'Featured Trips', 'Why Choose Us', 'FAQ'].map((l) => (
                <li key={l}><Link href="#" className={styles.footLink}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              {['Get In Touch', 'Offers & Promotions', 'Privacy Policy', 'Terms & Conditions', 'View Sitemap'].map((l) => (
                <li key={l}><Link href="#" className={styles.footLink}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Info</h4>
            <ul className={styles.contactList}>
              <li><span className={styles.contactIcon}>🌐</span> www.chitralekharesort.com</li>
              <li><span className={styles.contactIcon}>📞</span> +91 00000 00000</li>
              <li><span className={styles.contactIcon}>✉️</span> info@chitralekharesort.com</li>
              <li><span className={styles.contactIcon}>📍</span> Chitralekha Boutique Resort, India</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p>Copyright &copy; {new Date().getFullYear()} Chitralekha Boutique Resort. All Rights Reserved</p>
        <div className={styles.bottomLinks}>
          <Link href="#" className={styles.bottomLink}>Terms of Use</Link>
          <span className={styles.dot}>•</span>
          <Link href="#" className={styles.bottomLink}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
