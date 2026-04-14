'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/AboutUsPage.module.css';

const features = [
  {
    icon: '🏰',
    title: 'World-Class Amenities',
    description: 'Indulge yourself in elegantly designed rooms with breathtaking views.',
  },
  {
    icon: '🍽️',
    title: 'Luxurious Rooms',
    description: 'Experience luxury at its finest with our premium facilities and services.',
  },
  {
    icon: '🌍',
    title: 'Unforgettable Locations',
    description: 'Discover the beauty of nature in our strategically located resort.',
  },
  {
    icon: '🎭',
    title: 'Wellness Retreats',
    description: 'Rejuvenate your mind, body, and soul with our wellness programs.',
  },
  {
    icon: '🎉',
    title: 'Special Events',
    description: 'Create magical moments with our event planning and hosting services.',
  },
  {
    icon: '🚗',
    title: 'Easy Accessibility',
    description: 'Conveniently located with easy access to major attractions and transport.',
  },
];

const galleryImages = [
  { src: '/assets/images/n2.webp', label: 'Dine & Drink' },
  { src: '/assets/images/r1.jpg', label: 'Amenities' },
  { src: '/assets/images/v2.jpg', label: 'Special Events' },
];

const highlights = [
  {
    title: 'Luxurious Comfort That Feels Like Home',
    description: 'Step into elegance with rooms that redefine relaxation. Our meticulously designed rooms offer the perfect blend of modern comfort and aesthetic charm. Whether you\'re here for a business trip or a leisurely escape, every corner is curated to make you feel pampered and peaceful — from plush pillows to ambient lighting, we make sure every detail whispers luxury.',
    image: '/assets/images/r1.jpg',
  },
  {
    title: 'Your Dream Wedding, Our Royal Affair',
    description: 'Say your vows in timeless grandeur. At our resort, your fairytale wedding becomes a breathtaking reality. From floral mandaps to regal backdrops, we create magical destination weddings with precision and passion. Let us take care of the details while you celebrate your forever in majestic style.',
    image: '/assets/images/wedding.webp',
  },
  {
    title: 'Wake Up to Warmth and Wonder',
    description: 'Every sunrise here comes with a smile. Our premium suites offer more than just a stay — they offer experiences. Soak in the golden hues of sunrise through elegant drapes, unwind with modern in-room amenities, and embrace mornings that feel like a holiday of their own. It\'s not just a room, it\'s your personal retreat.',
    image: '/assets/images/n2.webp',
  },
];

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & Owner',
    image: '/assets/images/P1094049.jpg',
    socials: ['facebook', 'twitter', 'instagram', 'linkedin'],
  },
  {
    name: 'Priya Sharma',
    role: 'General Manager',
    image: '/assets/images/P1094073.jpg',
    socials: ['facebook', 'twitter', 'instagram', 'linkedin'],
  },
  {
    name: 'Amit Patel',
    role: 'Operations Manager',
    image: '/assets/images/P1094094.jpg',
    socials: ['facebook', 'twitter', 'instagram', 'linkedin'],
  },
  {
    name: 'Neha Verma',
    role: 'Guest Relations Officer',
    image: '/assets/images/P1094121.jpg',
    socials: ['facebook', 'twitter', 'instagram', 'linkedin'],
  },
  {
    name: 'Vikram Singh',
    role: 'Chef & Culinary Director',
    image: '/assets/images/P1094148.jpg',
    socials: ['facebook', 'twitter', 'instagram', 'linkedin'],
  },
  {
    name: 'Anjali Desai',
    role: 'Wellness & Spa Manager',
    image: '/assets/images/P1094160.jpg',
    socials: ['facebook', 'twitter', 'instagram', 'linkedin'],
  },
];

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const missionVisionRef = useRef(null);
  const ownerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      {/* Banner Section */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>About Chitralekha</h1>
          <p className={styles.bannerSubtitle}>Discover the story behind our luxury resort</p>
        </div>
      </section>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>OUR STORY</p>
              <h1 className={styles.heroTitle}>
                A place of heart,<br />your home away
              </h1>
              <p className={styles.heroDescription}>
                It all began in 2020, when we stumbled upon this serene land and stood in awe, mesmerized by the breathtaking view of the Mussoorie Hills. That single moment sparked a dream — a dream to create a place where nature meets luxury, and every stay becomes a story worth remembering. We’ve poured years of dedication into shaping that dream into Chitralekha Resort. Each room has been aesthetically crafted, thoughtfully designed with comfort, elegance, and soulful charm. From handcrafted interiors to modern amenities, everything has been curated with one vision in mind — your perfect escape.
              </p>

              {/* Stats */}
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>524</div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statLabel}>Happy Guests</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>125K</div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statLabel}>Guests Served</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className={styles.heroImageBox}>
              <Image
                src="/assets/images/n2.webp"
                alt="Chitralekha Resort"
                width={350}
                height={400}
                className={styles.heroImage}
              />
              <div className={styles.yearBadge}>2024</div>
            </div>
          </div>
        </div>
      </section>

       {/* Owner Section with Parallax */}
      <section className={styles.ownerSection}>
        <div className={styles.container}>
          <div className="row">
            <div className='col-md-6 col-12'>
              <div className={styles.ownerContentWrapper}>
             
              <h2 className={styles.ownerHeading}>Meet the Founder</h2>
              
              <div className={styles.ownerDetails}>
                <h3 className={styles.ownerName}>Rajesh Kumar</h3>
                <p className={styles.ownerTitle}>Founder & Owner, Chitralekha Boutique Resort</p>
                
                <p className={styles.ownerBio}>
                  With over 15 years of experience in the hospitality industry, Rajesh Kumar founded Chitralekha Boutique Resort with a vision to create a sanctuary where luxury meets nature. His passion for excellence and commitment to personalized service has transformed Chitralekha into one of the most sought-after destinations in the region.
                </p>
                
                <p className={styles.ownerBio}>
                  Rajesh believes that true hospitality is about creating meaningful connections with guests and ensuring every moment of their stay is extraordinary. His attention to detail and innovative approach to resort management have earned Chitralekha numerous accolades and a loyal clientele.
                </p>
                
                <div className={styles.ownerQuote}>
                  <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 1.972V11c0 1.25.75 4 5 4c1 0 2 0 2 1s-1 2-2 2-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 1.972V11c0 1.25.75 4 5 4c1 0 2 0 2 1s-1 2-2 2-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  </svg>
                  <p className={styles.quoteText}>
                    "At Chitralekha, we don't just offer rooms; we offer experiences that touch the heart and rejuvenate the soul."
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div className='col-md-6 col-12'>
               <div className={styles.ownerImageWrapper}>
              <Image
                src="/assets/images/P1094049.jpg"
                alt="Owner of Chitralekha"
                fill
                className={styles.ownerImageParallax}
                style={{ transform: `translateY(${0}px)` }}
              />
            </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className='col-md-6 col-12'>
               <div className={styles.ownerImageWrapper}>
              <Image
                src="/assets/images/P1094049.jpg"
                alt="Owner of Chitralekha"
                fill
                className={styles.ownerImageParallax}
                style={{ transform: `translateY(${0}px)` }}
              />
            </div>
            </div>
            <div className='col-md-6 col-12'>
              <div className={styles.ownerContentWrapper}>
              <h2 className={styles.ownerHeading}>Meet the Founder</h2>
              
              <div className={styles.ownerDetails}>
                <h3 className={styles.ownerName}>Rajesh Kumar</h3>
                <p className={styles.ownerTitle}>Founder & Owner, Chitralekha Boutique Resort</p>
                
                <p className={styles.ownerBio}>
                  With over 15 years of experience in the hospitality industry, Rajesh Kumar founded Chitralekha Boutique Resort with a vision to create a sanctuary where luxury meets nature. His passion for excellence and commitment to personalized service has transformed Chitralekha into one of the most sought-after destinations in the region.
                </p>
                
                <p className={styles.ownerBio}>
                  Rajesh believes that true hospitality is about creating meaningful connections with guests and ensuring every moment of their stay is extraordinary. His attention to detail and innovative approach to resort management have earned Chitralekha numerous accolades and a loyal clientele.
                </p>
                
                <div className={styles.ownerQuote}>
                  <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 1.972V11c0 1.25.75 4 5 4c1 0 2 0 2 1s-1 2-2 2-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-1.002 0-2 .75-2 1.972V11c0 1.25.75 4 5 4c1 0 2 0 2 1s-1 2-2 2-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  </svg>
                  <p className={styles.quoteText}>
                    "At Chitralekha, we don't just offer rooms; we offer experiences that touch the heart and rejuvenate the soul."
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

          {/* Video Section */}
      <section className={styles.videoSection}>
        <div className={styles.videoContainer}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.backgroundVideo}
          >
            <source src="/assets/videos/video1.mp4" type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
          <div className={styles.videoContent}>
            <h2 className={styles.videoTitle}>Experience Chitralekha</h2>
            <p className={styles.videoSubtitle}>
              Discover the magic of luxury hospitality nestled in nature's embrace
            </p>
            <Link href="/accommodation" className={styles.videoBtn}>
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Your happiness guaranteed</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enjoy Section */}

      {/* Mission & Vision Section with Parallax */}
      <section className={styles.missionVisionSection}>
        <div className={styles.container}>
          {/* Mission Card */}
          <div className={styles.parallaxCard}>
            <div className={styles.parallaxImageWrapper}>
              <Image
                src="/assets/images/r1.jpg"
                alt="Our Mission"
                fill
                className={styles.parallaxImage}
                style={{ transform: `translateY(${0}px)` }}
              />
              <div className={styles.parallaxOverlay}></div>
            </div>
            <div className={styles.parallaxContent}>
              <h3 className={styles.parallaxTitle}>Our Mission</h3>
              <p className={styles.parallaxText}>
                To provide an unparalleled hospitality experience that seamlessly blends luxury with nature. We are committed to creating memorable moments for every guest while maintaining the highest standards of service, comfort, and environmental responsibility.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className={styles.parallaxCard}>
            <div className={styles.parallaxImageWrapper}>
              <Image
                src="/assets/images/n2.webp"
                alt="Our Vision"
                fill
                className={styles.parallaxImage}
                style={{ transform: `translateY(${0}px)` }}
              />
              <div className={styles.parallaxOverlay}></div>
            </div>
            <div className={styles.parallaxContent}>
              <h3 className={styles.parallaxTitle}>Our Vision</h3>
              <p className={styles.parallaxText}>
                To be recognized as the premier destination resort that sets the benchmark for luxury hospitality in the region. We envision a place where guests find solace, rejuvenation, and unforgettable experiences amidst pristine natural beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className={styles.highlightsSection}>
        <div className={styles.container}>
          {highlights.map((highlight, index) => (
            <div key={highlight.title} className={styles.highlightCard}>
              <div className={`${styles.highlightContent} ${index % 2 === 0 ? styles.contentLeft : styles.contentRight}`}>
                <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                <p className={styles.highlightDescription}>{highlight.description}</p>
              </div>
              <div className={`${styles.highlightImage} ${index % 2 === 0 ? styles.imageRight : styles.imageLeft}`}>
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  className={styles.highlightImg}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>MEET OUR AMAZING TEAM</p>
          <h2 className={styles.teamTitle}>Strength In Every Member</h2>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={styles.teamImage}
                  />
                  <div className={styles.teamOverlay}></div>
                </div>
                
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  
                  <div className={styles.teamSocials}>
                    <a href="#" className={styles.socialIcon} title="Facebook">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className={styles.socialIcon} title="Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 002.856-3.515 10 10 0 01-2.836.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className={styles.socialIcon} title="Instagram">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                      </svg>
                    </a>
                    <a href="#" className={styles.socialIcon} title="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section className={styles.reservationSection}>
        <div className={styles.container}>
          <p className={styles.reservationText}>
            Reservations <span className={styles.phone}>(0854) 123 - 456 88</span> or get <Link href="/contactUs" className={styles.supportLink}>Support</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
