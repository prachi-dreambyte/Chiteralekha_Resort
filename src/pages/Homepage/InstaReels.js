"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import styles from "../../styles/InstaReels.module.css";

const REELS = [
  { id: 1, url: "https://www.instagram.com/reel/DWlRaWVE7JM", videoSrc: "/assets/videos/video1.mp4" },
  { id: 2, url: "https://www.instagram.com/reel/DWLFkzqEk_z", videoSrc: "/assets/videos/video2.mp4" },
  { id: 3, url: "https://www.instagram.com/reel/DTacpKhknwx", videoSrc: "/assets/videos/video3.mp4" },
  { id: 4, url: "https://www.instagram.com/reel/DUkl5QBkgLa", videoSrc: "/assets/videos/video4.mp4" },
];

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconClose = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const IconExternal = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

// ── ReelCard ──────────────────────────────────────────────────────────────────
function ReelCard({ reel, index, onClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <article
      className={styles.card}
      style={{ "--delay": `${index * 0.1}s` }}
      onClick={() => onClick(reel)}
      role="button"
      tabIndex={0}
      aria-label="Watch reel"
      onKeyDown={(e) => e.key === "Enter" && onClick(reel)}
    >
      <video
        ref={videoRef}
        src={reel.videoSrc}
        muted
        loop
        playsInline
        preload="auto"
        className={styles.cardVideo}
      />
    </article>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function ReelModal({ reel, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Reel player"
    >
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">
          <IconClose />
        </button>
        <a
          href={reel.url}
          target="_self"
          rel="noopener noreferrer"
          className={styles.modalIgLink}
          aria-label="Open on Instagram"
        >
          <IconInstagram />
          <span>View on Instagram</span>
          <IconExternal />
        </a>
        <video
          ref={videoRef}
          src={reel.videoSrc}
          loop
          playsInline
          controls
          className={styles.modalVideo}
        />
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function InstaReels() {
  const [selected, setSelected] = useState(null);

  const handleOpen  = useCallback((reel) => setSelected(reel), []);
  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <main className={styles.page}>
      <div className={styles.blobLeft}  aria-hidden="true" />
      <div className={styles.blobRight} aria-hidden="true" />

      <header className={styles.header}>
        <h1 className={styles.title}>Instagram Reels</h1>
        <p  style={{ color: '#8b6914', fontSize: '25px' }}>“सुकून भी, नज़ारे भी… सब कुछ एक जगह 💫”</p>
        <p className={styles.subtitle}>Click any reel to watch</p>
      </header>

      <section className={styles.grid} aria-label="Reels grid">
        {REELS.map((reel, i) => (
          <ReelCard key={reel.id} reel={reel} index={i} onClick={handleOpen} />
        ))}
      </section>

      <div className={styles.followStrip}>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.followBtn}
        >
          <IconInstagram />
          Follow us on Instagram
        </a>
      </div>

      {selected && <ReelModal reel={selected} onClose={handleClose} />}
    </main>
  );
}
