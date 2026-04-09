'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/DestinationWedding.module.css';

const services = [
  { label: 'Floral Décor', desc: 'Lush floral arrangements tailored to your theme — from marigold mandaps to rose-draped arches.' },
  { label: 'Catering & Cuisine', desc: 'Multi-cuisine buffets and live counters crafted by our in-house chefs for every ceremony.' },
  { label: 'Photography & Film', desc: 'Cinematic coverage of every moment — candid, traditional, and aerial drone shots.' },
  { label: 'Entertainment', desc: 'Live bands, DJs, folk performers, and choreographed sangeet nights to keep the energy alive.' },
  { label: 'Venue Styling', desc: 'End-to-end venue transformation with lighting, draping, and bespoke stage design.' },
  { label: 'Guest Transfers', desc: 'Coordinated airport, railway, and inter-venue transfers for all your guests.' },
];

const packages = [
  {
    name: 'Silver',
    price: '₹2,50,000',
    tag: 'Intimate Gatherings',
    features: ['Up to 100 Guests', 'Floral Décor', 'Catering (2 meals)', 'Basic Lighting', 'Coordination Team'],
    accent: '#c8973a',
  },
  {
    name: 'Gold',
    price: '₹5,00,000',
    tag: 'Most Popular',
    features: ['Up to 250 Guests', 'Premium Décor', 'Catering (all meals)', 'DJ + Live Music', 'Photography', 'Guest Transfers'],
    accent: '#a24c36',
    featured: true,
  },
  {
    name: 'Platinum',
    price: '₹9,00,000',
    tag: 'Grand Celebrations',
    features: ['Up to 500 Guests', 'Luxury Décor', 'Multi-cuisine Buffet', 'Full Entertainment', 'Drone Videography', 'Bridal Suite', 'Dedicated Planner'],
    accent: '#3a4a32',
  },
];

const gallery = [
  { src: '/assets/images/wedding.webp', alt: 'Wedding ceremony' },
  { src: '/assets/images/weds1.webp', alt: 'Bridal portrait' },
  { src: '/assets/images/P1094049.jpg', alt: 'Decorated venue' },
  { src: '/assets/images/P1094073.jpg', alt: 'Reception dinner' },
  { src: '/assets/images/P1094094.jpg', alt: 'Banquet hall' },
  { src: '/assets/images/P1094121.jpg', alt: 'Floral arch' },
];

const events = [
  {
    id: 'haldi',
    label: 'Haldi',
    tagline: 'Sunshine, Turmeric & Laughter – The Golden Start to Your Big Day!',
    desc: 'Let the Himalayan breeze carry the scent of fresh haldi as your loved ones bless you with joyous chaos. Our open-air spaces turn this vibrant ritual into a memory dipped in sunshine and giggles. Picture flower petals swirling in golden showers, traditional pahadi beats setting the rhythm, and that perfect Instagram-worthy moment when the mountains peek at your happiness.',
    images: ['/assets/images/P1094049.jpg', '/assets/images/P1094073.jpg', '/assets/images/P1094094.jpg'],
    color: '#f5c842',
  },
  {
    id: 'sagan',
    label: 'Sagan',
    tagline: 'Blessings, Sweets & Sacred Beginnings – Where Love Gets Official!',
    desc: 'The Sagan ceremony marks the beautiful moment families come together to bless the union. Our intimate garden spaces adorned with marigolds and diyas create the perfect sacred ambiance. Let the warmth of family blessings, the fragrance of incense, and the joy of shared sweets make this ritual an unforgettable prelude to your wedding.',
    images: ['/assets/images/P1094121.jpg', '/assets/images/P1094148.jpg', '/assets/images/P1094160.jpg'],
    color: '#e8a838',
  },
  {
    id: 'cocktail',
    label: 'Cocktail Party',
    tagline: 'Glam, Glitter & Golden Hour – Your Night to Shine!',
    desc: 'As the Mussoorie hills glow in twilight, our terrace transforms into a dazzling cocktail soiree. Fairy lights, curated cocktails, live music, and a dance floor under the stars — this is where your wedding celebrations truly come alive. Dress up, let loose, and create memories that last long after the last song plays.',
    images: ['/assets/images/P1094163.jpg', '/assets/images/P1188441.JPG.jpeg', '/assets/images/P1188454.JPG.jpeg'],
    color: '#9b59b6',
  },
  {
    id: 'pool',
    label: 'Pool Party',
    tagline: 'Splash, Sip & Celebrate – Fun Has a New Address!',
    desc: 'Dive into pre-wedding bliss with a poolside bash set against the backdrop of lush green hills. Floating florals, tropical cocktails, upbeat DJ sets, and the cool mountain air make our pool parties an absolute vibe. Whether it\'s a fun-filled afternoon or a sunset soiree, we make every splash count.',
    images: ['/assets/images/v1.jpg', '/assets/images/v2.jpg', '/assets/images/p1.jpg'],
    color: '#3498db',
  },
  {
    id: 'engagement',
    label: 'Engagement',
    tagline: 'The Ring, The Promise & The Mountains as Witness!',
    desc: 'Say yes with the Himalayas as your backdrop. Our romantic engagement setups — from intimate candlelit dinners to grand floral arches — are designed to make the moment as magical as your love story. Every detail, from the ring presentation to the first toast, is crafted to perfection.',
    images: ['/assets/images/p2.jpg', '/assets/images/p3.jpg', '/assets/images/r1.jpg'],
    color: '#e74c3c',
  },
  {
    id: 'wedding',
    label: 'Wedding',
    tagline: 'Your Forever Begins Here – Amidst the Clouds & Marigolds!',
    desc: 'Our 7,500 sq ft wedding lawn becomes your personal paradise. From the sacred mandap draped in flowers to the grand reception under a canopy of stars, every moment of your wedding day is orchestrated with love and precision. The mountains stand witness as you begin your forever.',
    images: ['/assets/images/wedding.webp', '/assets/images/weds1.webp', '/assets/images/r2.jpg'],
    color: '#c8973a',
  },
  {
    id: 'birthday',
    label: 'Birthday Party',
    tagline: 'Another Year, Another Mountain-Sized Celebration!',
    desc: 'Celebrate your special day with a view that takes your breath away. Whether it\'s an intimate gathering or a grand bash, our team curates every detail — themed decor, custom cakes, live entertainment, and a menu that delights every palate. Because birthdays in the mountains hit different.',
    images: ['/assets/images/r3.jpg', '/assets/images/r4.jpg', '/assets/images/P1188458.JPG.jpeg'],
    color: '#2ecc71',
  },
  {
    id: 'kitty',
    label: 'Kitty Party',
    tagline: 'Good Food, Great Company & Gorgeous Views – The Perfect Kitty!',
    desc: 'Elevate your kitty party to a luxurious mountain retreat. Our elegant spaces, curated menus, and impeccable service make every gathering feel like a special occasion. From high tea setups to themed lunches with panoramic hill views, we ensure your group leaves with full hearts and happy memories.',
    images: ['/assets/images/o6.webp', '/assets/images/o7.webp', '/assets/images/o9.webp'],
    color: '#e91e8c',
  },
];

const faqs = [
  { q: 'How far in advance should we book?', a: 'We recommend booking at least 6-12 months in advance for peak season (Oct-Feb). Off-season dates may be available with shorter notice.' },
  { q: 'Can we customise the wedding package?', a: 'Absolutely. Every package is a starting point. Our planners will work with you to tailor every detail to your vision and budget.' },
  { q: 'Is accommodation included?', a: 'Accommodation is available at special wedding-group rates. We can block rooms for your entire guest list across our resort.' },
  { q: 'Do you allow outside vendors?', a: 'We have a preferred vendor list, but we are open to discussing outside vendors on a case-by-case basis with prior approval.' },
  { q: 'What is the capacity of the wedding lawn?', a: 'Our 7,500 sq ft lawn comfortably hosts up to 500 guests for a seated dinner or 700 for a cocktail-style event.' },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen((o) => !o)}>
        <span>Q: {q}</span>
        <span className={styles.faqIcon}>{open ? '-' : '+'}</span>
      </button>
      <div className={styles.faqA}>{a}</div>
    </div>
  );
}

export default function DestinationWedding() {
  const serviceRefs = useRef([]);
  const packageRefs = useRef([]);
  const sectionRefs = useRef([]);
  const [activeEvent, setActiveEvent] = useState('haldi');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', eventDate: '', location: '', message: '' });

  useEffect(() => {
    setShowModal(true);
  }, []);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nl = '%0A';
    const text =
      '*Wedding Enquiry*' + nl +
      'Name: ' + form.firstName + ' ' + form.lastName + nl +
      'Email: ' + form.email + nl +
      'Phone: ' + form.phone + nl +
      'Event Date: ' + form.eventDate + nl +
      'Location Preference: ' + form.location + nl +
      'Message: ' + form.message;
    window.open('https://wa.me/917417539900?text=' + text, '_blank');
    setShowModal(false);
  }

  useEffect(() => {
    const all = [
      ...serviceRefs.current,
      ...packageRefs.current,
      ...sectionRefs.current,
    ].filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add(styles.visible); }),
      { threshold: 0.12 }
    );
    all.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.page}>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image src="/assets/images/n2.webp" alt="Destination Wedding" fill className={styles.heroImg} priority />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Chitralekha Boutique Resort</p>
          <h1 className={styles.heroTitle}>
            Your Dream<br />
            <span className={styles.heroAccent}>Destination Wedding</span>
          </h1>
          <p className={styles.heroSub}>Celebrate love amidst the misty hills of Mussoorie</p>
          <Link href="/contactUs" className={styles.heroBtn}>Plan Your Wedding</Link>
        </div>
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`${styles.petal} ${styles[`petal${i + 1}`]}`}>🌸</span>
        ))}
      </div>

      {/* Who We Are */}
      <section className={`${styles.whoSection} ${styles.fadeSection}`} ref={(el) => (sectionRefs.current[0] = el)}>
        <div className="container">
          <div className={styles.whoGrid}>
            <div className={styles.whoText}>
              <p className={styles.eyebrow}>Who We Are</p>
              <h2 className={styles.sectionHeading}>A Legacy of Celebrations</h2>
              <p className={styles.bodyText}>
                Nestled in the serene foothills of the Garhwal Himalayas, Chitralekha Boutique Resort has been the backdrop for hundreds of unforgettable weddings. Our 7,500 sq ft lawn, elegant banquet hall, and dedicated wedding team come together to craft ceremonies as unique as your love story.
              </p>
              <p className={styles.bodyText}>
                From intimate gatherings of 50 to grand celebrations of 500, we handle every detail so you can be fully present in every precious moment.
              </p>
              <Link href="/contactUs" className={styles.outlineBtn}>Get in Touch</Link>
            </div>
            <div className={styles.whoImageWrap}>
              <Image src="/assets/images/weds1.webp" alt="Wedding at Chitralekha" fill className={styles.whoImage} sizes="50vw" />
              <div className={styles.whoImageBadge}>
                <span className={styles.badgeNum}>500+</span>
                <span className={styles.badgeLabel}>Weddings Hosted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* How It Works */}
      <section className={styles.howSection}>
        <div className="container">
          <div className={styles.howGrid}>
            <div className={styles.howLeft}>
              <h2 className={styles.howHeading}>How It Works</h2>
              <div className={styles.howImageWrap}>
                <Image
                  src="/assets/images/weds1.webp"
                  alt="Wedding couple"
                  fill
                  className={styles.howImage}
                  sizes="40vw"
                />
              </div>
            </div>
            <div className={styles.howRight}>
              <div className={styles.howSteps}>
                {[
                  { num: '01', title: 'Share Your Dream With Us', desc: 'Share your vision, vibe, and wishlist with us. From an elegant setting and delicious catering to cozy stays for guests, we plan everything within budget to make your special day celebration done in style.' },
                  { num: '02', title: 'Discover the Perfect Venue', desc: 'We provide you with a list of popular venues that blend perfectly with your preferences, vibe, and budget. Explore, feel the vibe, and choose the right spot.' },
                  { num: '03', title: 'Book Your Spot', desc: 'When you pick your ideal venue, we take care of everything and let you focus on other important things, reducing your stress and worries.' },
                  { num: '04', title: 'Let the Magic Begin', desc: 'Celebrate your special day in your style, and we ensure everything is on point as you imagined, so your occasion becomes more beautiful, idyllic, and comfortable.' },
                ].map(({ num, title, desc }, i) => (
                  <div key={num} className={`${styles.howStep} ${styles.fadeSection}`} ref={(el) => (sectionRefs.current[2 + i] = el)} style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className={styles.howStepNum}>{num}</div>
                    <div className={styles.howStepContent}>
                      <h3 className={styles.howStepTitle}>{title}</h3>
                      <p className={styles.howStepDesc}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story to Tell */}
      <section className={`${styles.storySection} ${styles.fadeSection}`} ref={(el) => (sectionRefs.current[10] = el)}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <div className={styles.storyImageContent}>
                <img src="/assets/images/destinationweddingbharatcouple.webp" alt="image1"/>
              </div>
            </div>
            <div className={styles.storyContent}>
              <h2 className={styles.storyHeading}>Let's Make Your Wedding a Story to Tell:</h2>
              <p className={styles.storyHindi}>दिल की धड़कन, पहाड़ों की गवाही!</p>
              <p className={styles.storyDescription}>
                Nestled in the Himalayan foothills, we don't just host weddings – we craft unforgettable love stories. If you're dreaming of a destination wedding in Dehradun, here's how <span className={styles.storyHighlight}>Chitralekha Boutique Resort</span> make your big day magical:
              </p>
              <div className={styles.storyPoints}>
                <div className={styles.storyPoint}>
                  <span className={styles.storyPointIcon}>✦</span>
                  <div>
                    <span className={styles.storyPointTitle}>Nature's Own Mandap:</span>
                    <span className={styles.storyPointText}>Exchange vows under a floral canopy with the Himalayas as your sacred witness and Dehradun's golden sunsets as your backdrop.</span>
                  </div>
                </div>
                <div className={styles.storyPoint}>
                  <span className={styles.storyPointIcon}>✦</span>
                  <div>
                    <span className={styles.storyPointTitle}>Every Detail Perfected:</span>
                    <span className={styles.storyPointText}>From intimate pheras by a crackling firepit to grand receptions in our lush gardens, our wedding planners obsess over every moment.</span>
                  </div>
                </div>
                <div className={styles.storyPoint}>
                  <span className={styles.storyPointIcon}>✦</span>
                  <div>
                    <span className={styles.storyPointTitle}>Local Flavors, Global Elegance:</span>
                    <span className={styles.storyPointText}>Serve Garhwali delicacies alongside continental fare, with our chefs creating menus that tell your unique love story.</span>
                  </div>
                </div>
                <div className={styles.storyPoint}>
                  <span className={styles.storyPointIcon}>✦</span>
                  <div>
                    <span className={styles.storyPointTitle}>Stress-Free Celebrations:</span>
                    <span className={styles.storyPointText}>Our dedicated team handles everything – décor, music, rituals – so you can simply soak in each precious moment.</span>
                  </div>
                </div>
                <div className={styles.storyPoint}>
                  <span className={styles.storyPointIcon}>✦</span>
                  <div>
                    <span className={styles.storyPointTitle}>Memories That Last:</span>
                    <span className={styles.storyPointText}>Bonfire sangeets under starry skies, morning chai with mountain views, and cozy cottages for your family – we create experiences, not just events.</span>
                  </div>
                </div>
              </div>
              <p className={styles.storyFinal}>
                Yes, your love deserves this Himalayan fairytale like destination wedding in Dehradun.
              </p>
              <Link href="/contactUs" className={styles.storyBtn}>Contact For My Special Day</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} ${styles.fadeSection}`} ref={(el) => (sectionRefs.current[6] = el)}>
            <p className={styles.eyebrow}>Everything You Need</p>
            <h2 className={styles.sectionHeading}>Our Wedding Planning Services</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map(({ label, desc }, i) => (
              <div
                key={label}
                className={`${styles.serviceCard} ${styles.fadeSection}`}
                ref={(el) => (serviceRefs.current[i] = el)}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className={styles.serviceLabel}>{label}</h3>
                <p className={styles.serviceDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Chitralekha */}
      <section className={`${styles.whySection} ${styles.fadeSection}`} ref={(el) => (sectionRefs.current[9] = el)}>
        <div className={styles.whyOverlay} />
        <Image src="/assets/images/P1188441.JPG.jpeg" alt="Resort background" fill className={styles.whyBg} />
        <div className={styles.whyContent}>
          <p className={styles.eyebrowLight}>Why Choose Us</p>
          <h2 className={styles.whyHeading}>Why Chitralekha?</h2>
          <div className={styles.whyPoints}>
            {[
              '7,500 sq ft open-air wedding lawn',
              'Panoramic Mussoorie hill views',
              'In-house catering with 200+ menu items',
              'Dedicated wedding coordinator',
              'On-site accommodation for guests',
              'Customisable decor & entertainment',
            ].map((pt) => (
              <div key={pt} className={styles.whyPoint}>
                <span className={styles.whyDot}>✦</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <Link href="/contactUs" className={styles.heroBtn}>Book a Site Visit</Link>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallerySection}>
        <div className={`${styles.sectionHeader} ${styles.fadeSection}`} ref={(el) => (sectionRefs.current[7] = el)}>
          <p className={styles.eyebrow}>Captured Moments</p>
          <h2 className={styles.sectionHeading}>Wedding Gallery</h2>
        </div>
        <div className={styles.galleryGrid}>
          {gallery.map((img, i) => (
            <div key={img.src} className={styles.galleryCard} style={{ '--i': i }}>
              <Image src={img.src} alt={img.alt} fill sizes="33vw" className={styles.galleryImg} />
              <div className={styles.galleryOverlay} />
              <p className={styles.galleryCaption}>{img.alt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      {/* <section className={styles.packagesSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} ${styles.fadeSection}`} ref={(el) => (sectionRefs.current[8] = el)}>
            <p className={styles.eyebrow}>Tailored for You</p>
            <h2 className={styles.sectionHeading}>Wedding Packages</h2>
            <p className={styles.sectionSub}>Every package is fully customisable. Prices are indicative starting points.</p>
          </div>
          <div className={styles.packagesGrid}>
            {packages.map(({ name, price, tag, features, accent, featured }, i) => (
              <div
                key={name}
                className={`${styles.packageCard} ${featured ? styles.packageFeatured : ''} ${styles.fadeSection}`}
                ref={(el) => (packageRefs.current[i] = el)}
                style={{ transitionDelay: `${i * 120}ms`, '--accent': accent }}
              >
                {featured && <div className={styles.featuredBadge}>Most Popular</div>}
                <div className={styles.packageTop}>
                  <h3 className={styles.packageName}>{name}</h3>
                  <p className={styles.packageTag}>{tag}</p>
                  <p className={styles.packagePrice}>{price}<span className={styles.packagePriceSub}> onwards</span></p>
                </div>
                <ul className={styles.packageFeatures}>
                  {features.map((f) => (
                    <li key={f} className={styles.packageFeature}>
                      <span className={styles.checkIcon}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contactUs" className={styles.packageBtn}>Enquire Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Planning For — Events */}
      <section className={styles.eventsSection}>
        <div className="container">
          <div className={styles.eventsHeader}>
            <span className={styles.eventsDeco}>&#10022;&#10022;&#183;&#183;&#183;</span>
            <h2 className={styles.eventsHeading}>Planning For</h2>
            <span className={styles.eventsDeco}>&#183;&#183;&#183;&#10022;&#10022;</span>
          </div>
          <p className={styles.eventsSub}>
            From planning a ring ceremony, mehndi, haldi, wedding, to a cozy gathering of loved ones,<br />
            we bring your dreamlike wedding to life beautifully.
          </p>
          <div className={styles.eventsTabsWrap}>
            {events.map((ev) => (
              <button
                key={ev.id}
                className={`${styles.eventsTab} ${activeEvent === ev.id ? styles.eventsTabActive : ''}`}
                onClick={() => setActiveEvent(ev.id)}
                style={activeEvent === ev.id ? { background: ev.color, borderColor: ev.color } : {}}
              >
                {ev.label}
              </button>
            ))}
          </div>
          {events.filter((ev) => ev.id === activeEvent).map((ev) => (
            <div key={ev.id} className={styles.eventsContent}>
              <div className={styles.eventsImages}>
                {ev.images.map((src, i) => (
                  <div key={src} className={styles.eventsImgWrap} style={{ '--ei': i }}>
                    <Image src={src} alt={ev.label} fill sizes="33vw" className={styles.eventsImg} />
                  </div>
                ))}
              </div>
              <div className={styles.eventsInfo}>
                <h3 className={styles.eventsTagline}>{ev.tagline}</h3>
                <p className={styles.eventsDesc}>{ev.desc}</p>
                <Link href="/contactUs" className={styles.eventsBtn} style={{ background: ev.color }}>
                  Plan This Event
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqGrid}>
            <div className={styles.faqLeft}>
              <h2 className={styles.faqHeading}>
                Frequently Asked Questions
                <span className={styles.faqHeadingDeco}> &larr;&larr;&middot;&middot;&middot;</span>
              </h2>
              <div className={styles.faqList}>
                {faqs.map((f) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
              <Link href="/contactUs" className={styles.faqContactBtn}>Contact Now</Link>
            </div>
            <div className={styles.faqRight}>
              <div className={styles.faqImageWrap}>
                <Image
                  src="/assets/images/weds1.webp"
                  alt="Wedding couple"
                  fill
                  className={styles.faqImage}
                  sizes="35vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Begin Your Forever Here</h2>
          <p className={styles.ctaSub}>Let us turn your dream wedding into a timeless memory amidst the hills of Mussoorie.</p>
          <Link href="/contactUs" className={styles.heroBtn}>Start Planning Today</Link>
        </div>
      </section>

      {/* Enquiry Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setShowModal(false)} aria-label="Close">&#10005;</button>
            <h2 className={styles.modalTitle}>Tell us About Your Event <span className={styles.modalDeco}>&laquo;&laquo;&middot;&middot;&middot;</span></h2>
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <div className={styles.modalRow}>
                <input name="firstName" placeholder="First Name*" required value={form.firstName} onChange={handleChange} className={styles.modalInput} />
                <input name="lastName" placeholder="Last Name*" required value={form.lastName} onChange={handleChange} className={styles.modalInput} />
              </div>
              <div className={styles.modalRow}>
                <input name="email" type="email" placeholder="Email*" required value={form.email} onChange={handleChange} className={styles.modalInput} />
                <input name="phone" placeholder="Phone Number*" required value={form.phone} onChange={handleChange} className={styles.modalInput} />
              </div>
              <div className={styles.modalRow}>
                <input name="eventDate" type="date" placeholder="Event Date" value={form.eventDate} onChange={handleChange} className={styles.modalInput} />
                <input name="location" placeholder="Location Preference" value={form.location} onChange={handleChange} className={styles.modalInput} />
              </div>
              <textarea name="message" placeholder="Additional Information/Requirements" value={form.message} onChange={handleChange} className={styles.modalTextarea} rows={4} />
              <button type="submit" className={styles.modalBtn}>Send Enquiry</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
