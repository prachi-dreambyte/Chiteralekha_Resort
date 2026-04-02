'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img
            src="/assets/images/Chitralekha BOUTIQUE RESORT.png"
            alt="Chitralekha Boutique Resort"
            className={styles.logoImg}
          />
        </Link>

        {/* Nav */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`} onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/accommodation" className={`${styles.link} ${pathname === '/accommodation' ? styles.active : ''}`} onClick={() => setMenuOpen(false)}>
            Accommodation
          </Link>
          <Link href="/contact" className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link href="/accommodation" className={styles.bookBtn}>
          <span className={styles.bookIcon}>↗</span> BOOK NOW
        </Link>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
