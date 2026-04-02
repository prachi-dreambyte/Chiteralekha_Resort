import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <div className={styles.content}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Welcome to Chitralekha Boutique Resort</h2>
            <p className={styles.sectionText}>
              Experience tranquility and luxury in the heart of nature. Our boutique resort
              offers a perfect escape from the everyday hustle.
            </p>
          </ScrollReveal>
          <div className={styles.features}>
            <ScrollReveal>
              <div className={styles.feature}>
                <h3>Serene Location</h3>
                <p>Nestled in peaceful surroundings</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className={styles.feature}>
                <h3>Luxury Amenities</h3>
                <p>Modern comfort meets natural beauty</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className={styles.feature}>
                <h3>Personalized Service</h3>
                <p>Tailored experiences for every guest</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}
