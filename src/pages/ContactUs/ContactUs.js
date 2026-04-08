'use client';

import { useForm } from 'react-hook-form';
import styles from '../../styles/contactus.module.css';

const WHATSAPP_NUMBER = '917417539900';

const contactDetails = {
  name: 'Chitralekha Boutique Resort',
  address: 'Khasra No: 536 & 538 GA, Bisht Gaon,\nDehradun, Uttarakhand\nPIN Code: 248003',
  emails: ['info@chitralekharesort.com', 'om@chitralekharesort.com'],
  phones: [
    { label: 'Reservation', number: '+91 80776 10563', tel: '+918077610563' },
    { label: 'Sales/Bookings', number: '+91 73033 60245', tel: '+917303360245' },
    { label: 'Manager/Operations', number: '+91 90452 51072', tel: '+919045251072' },
  ],
};

const carouselImages = [
  '/assets/images/P1094049.jpg',
  '/assets/images/P1094073.jpg',
  '/assets/images/P1094094.jpg',
  '/assets/images/P1094121.jpg',
  '/assets/images/P1094148.jpg',
  '/assets/images/P1094160.jpg',
  '/assets/images/P1094163.jpg',
  '/assets/images/P1188441.JPG.jpeg',
  '/assets/images/P1188454.JPG.jpeg',
  '/assets/images/P1188458.JPG.jpeg',
  '/assets/images/r1.jpg',
  '/assets/images/r2.jpg',
  '/assets/images/r3.jpg',
  '/assets/images/r4.jpg',
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const text = `Hello Chitralekha Boutique Resort!\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className={styles.page}>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSub}>Whether you have questions, need assistance, or simply want to share.</p>
        </div>
      </div>

      {/* Form + Details */}
      <section className={styles.formSection}>
        <div className={styles.formOverlay} />
        <div className={`container py-5 ${styles.formContent}`}>
        <div className="row g-5">

          {/* Left – Form */}
          <div className="col-lg-7">
            <h2 className={styles.sectionTitle}>Love to hear from you.<br />Get in touch!</h2>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>

              {/* Name */}
              <div className="mb-3">
                <label className={`form-label ${styles.label}`}>Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`form-control ${styles.input} ${errors.name ? 'is-invalid' : ''}`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className={`form-label ${styles.label}`}>Your Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`form-control ${styles.input} ${errors.email ? 'is-invalid' : ''}`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                  })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className={`form-label ${styles.label}`}>Your Phone</label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className={`form-control ${styles.input} ${errors.phone ? 'is-invalid' : ''}`}
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: { value: /^[0-9+\s\-()]{7,15}$/, message: 'Enter a valid phone number' },
                  })}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className={`form-label ${styles.label}`}>Your Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className={`form-control ${styles.input} ${errors.message ? 'is-invalid' : ''}`}
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
              </div>

              <button type="submit" className={styles.submitBtn}>
                <WhatsAppIcon /> Send on WhatsApp
              </button>
            </form>
          </div>

          {/* Right – Contact Details */}
          <div className="col-lg-5">
            <div className={styles.detailsCard}>
              <h3 className={styles.detailsTitle}>{contactDetails.name}</h3>

              <div className={styles.detailGroup}>
                <span className={styles.detailIcon}><LocationIcon /></span>
                <p className={styles.detailText}>{contactDetails.address}</p>
              </div>

              <div className={styles.detailGroup}>
                <span className={styles.detailIcon}><MailIcon /></span>
                <div>
                  {contactDetails.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className={styles.detailLink}>{email}</a>
                  ))}
                </div>
              </div>

              <hr className={styles.divider} />

              <div className={styles.phoneList}>
                {contactDetails.phones.map((p) => (
                  <div key={p.label} className={styles.phoneRow}>
                    <span className={styles.phoneLabel}>{p.label}</span>
                    <a href={`tel:${p.tel}`} className={styles.phoneNumber}>{p.number}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className={styles.carouselSection}>
        <div className={styles.carouselTrack}>
          {carouselImages.concat(carouselImages).map((src, i) => (
            <div key={i} className={styles.carouselSlide}>
              <img src={src} alt={`Resort gallery ${(i % carouselImages.length) + 1}`} className={styles.carouselImg} />
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="container pb-5">
        <div className={styles.mapWrap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5274582406523!2d78.0561237!3d30.3927735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7e8e642f15d%3A0xc4f3d75f9c02d295!2sChitralekha%20Boutique%20Resort%20Dehradun%20%7C%20Resort%20in%20Dehradun!5e0!3m2!1sen!2sin!4v1775402158468!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chitralekha Boutique Resort Location"
          />
        </div>
      </section>

    </main>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '8px' }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
    </svg>
  );
}
