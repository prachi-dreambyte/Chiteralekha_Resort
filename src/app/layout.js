import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './layout.module.css';

export const metadata = {
  title: 'Chitralekha Boutique Resort',
  description: 'A serene boutique resort experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
