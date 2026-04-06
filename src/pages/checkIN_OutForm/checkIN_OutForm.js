"use client";

import { useState } from "react";
import styles from "@/styles/Booking.module.css";

export default function SearchBar({ checkIn, setCheckIn, checkOut, setCheckOut, adults, setAdults, children, setChildren }) {
  const [localCheckIn, setLocalCheckIn] = useState(checkIn ?? "");
  const [localCheckOut, setLocalCheckOut] = useState(checkOut ?? "");
  const [localAdults, setLocalAdults] = useState(adults ?? 1);
  const [localChildren, setLocalChildren] = useState(children ?? 0);

  const handleCheckIn = (val) => { setLocalCheckIn(val); setCheckIn?.(val); };
  const handleCheckOut = (val) => { setLocalCheckOut(val); setCheckOut?.(val); };
  const handleAdults = (val) => { setLocalAdults(Number(val)); setAdults?.(Number(val)); };
  const handleChildren = (val) => { setLocalChildren(Number(val)); setChildren?.(Number(val)); };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchField}>
        <label className={styles.searchLabel}>CHECK-IN <span>*</span></label>
        <div className={styles.inputWrap}>
          <input
            type="date"
            className={styles.dateInput}
            value={localCheckIn}
            onChange={(e) => handleCheckIn(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.searchField}>
        <label className={styles.searchLabel}>CHECK-OUT <span>*</span></label>
        <div className={styles.inputWrap}>
          <input
            type="date"
            className={styles.dateInput}
            value={localCheckOut}
            onChange={(e) => handleCheckOut(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.searchField}>
        <label className={styles.searchLabel}>ADULTS</label>
        <div className={styles.inputWrap}>
          <select
            className={styles.selectInput}
            value={localAdults}
            onChange={(e) => handleAdults(e.target.value)}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.searchField}>
        <label className={styles.searchLabel}>CHILDREN</label>
        <div className={styles.inputWrap}>
          <select
            className={styles.selectInput}
            value={localChildren}
            onChange={(e) => handleChildren(e.target.value)}
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      <button className={styles.searchBtn}>SEARCH AVAILABILITY</button>
    </div>
  );
}
