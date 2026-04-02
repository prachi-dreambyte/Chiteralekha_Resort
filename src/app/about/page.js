import styles from './page.module.css';

export const metadata = {
  title: 'About Us | Chitralekha Boutique Resort',
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.lead}>
        Chitralekha Boutique Resort is a hidden gem offering an intimate and
        luxurious retreat for those seeking peace, comfort, and natural beauty.
      </p>
      <div className={styles.section}>
        <h2>Our Story</h2>
        <p>
          Founded with a passion for hospitality and a love for nature, our resort
          has been welcoming guests for over a decade. Every corner of our property
          is designed to make you feel at home while surrounded by breathtaking scenery.
        </p>
      </div>
      <div className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          We believe every guest deserves a personalized experience. Our dedicated
          team works tirelessly to ensure your stay is memorable, comfortable, and
          truly special.
        </p>
      </div>
    </div>
  );
}
