import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Chitralekha Boutique Resort. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
