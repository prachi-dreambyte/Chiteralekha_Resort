import Hero from '@/pages/Homepage/Hero';
import AboutUs from '@/pages/Homepage/AboutUs';
import Rooms from '@/pages/Homepage/Rooms';
import GuestReviews from '@/pages/Homepage/GuestReviews';
import InstaReels from '@/pages/Homepage/InstaReels';
import Facilites from '@/pages/Homepage/Facilites';
import Gallery from '@/pages/Homepage/Gallery';
import Booking from '@/pages/Homepage/Booking';
import WhyChiteralekha from '@/pages/Homepage/WhyChitralekha';
import ReserveNow from '@/pages/Homepage/ReserveNow';
import WhatsNearby from '@/pages/Homepage/WhatsNearby';
import Faq from '@/pages/Homepage/Faq';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhyChiteralekha/>
      <GuestReviews />
      <Facilites />
       <Rooms />
      <Booking/>
      <Gallery/>
       <InstaReels />
       <WhatsNearby />
      <Faq />
      <ReserveNow />
      {/* <div s={styles.content}>
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
      </div> */}
    </>
  );
}
