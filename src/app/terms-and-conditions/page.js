'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/TermsAndConditions.module.css';

const termsData = [
  {
    id: 'booking-policy',
    title: 'Booking & Reservation Policy',
    icon: '📋',
    content: [
      'All bookings made through our website, phone, or in person are subject to these terms and conditions.',
      'A valid credit card is required to secure your reservation. Your card will be charged according to the payment terms selected at the time of booking.',
      'Reservations are confirmed only after receipt of payment or a valid booking confirmation email from Chitralekha Boutique Resort.',
      'Guests are responsible for providing accurate personal information during the booking process.',
      'We reserve the right to modify or cancel bookings in case of fraudulent activity or violation of our policies.',
      'Group bookings (10+ rooms) require special arrangements and must be confirmed with our management team.',
    ],
  },
  {
    id: 'cancellation-refund',
    title: 'Cancellation & Refund Policy',
    icon: '🔄',
    content: [
      'Cancellations must be made at least 7 days prior to the date of arrival for a full refund.',
      'Cancellations made 3-7 days before arrival will incur a 50% cancellation charge.',
      'Cancellations made less than 3 days before arrival will result in forfeiture of the entire booking amount.',
      'No refunds will be issued for no-shows or early checkouts.',
      'Refunds will be processed within 10-15 business days to the original payment method.',
      'Special event bookings (weddings, conferences) have different cancellation policies and must be discussed separately.',
      'Force majeure events (natural disasters, pandemics) may qualify for date changes without penalty.',
    ],
  },
  {
    id: 'payment-terms',
    title: 'Payment Terms & Conditions',
    icon: '💳',
    content: [
      'Payment can be made via credit card, debit card, bank transfer, or other methods specified at checkout.',
      'A deposit of 25% is required at the time of booking, with the balance due 7 days before arrival.',
      'All prices are in Indian Rupees (INR) unless otherwise specified.',
      'Additional charges may apply for late checkout, extra services, or room upgrades.',
      'Taxes and service charges are included in the quoted price unless stated otherwise.',
      'We accept all major credit cards and international payment methods.',
      'Payment disputes must be reported within 30 days of the transaction.',
    ],
  },
  {
    id: 'guest-conduct',
    title: 'Guest Conduct & House Rules',
    icon: '🏨',
    content: [
      'Guests must respect the property and other guests at all times.',
      'Noise levels must be kept to a minimum, especially between 10 PM and 8 AM.',
      'Smoking is prohibited in all indoor areas. Designated smoking areas are available.',
      'Guests are responsible for any damage caused to the property during their stay.',
      'Pets are not allowed unless prior written permission has been obtained.',
      'Illegal activities, weapons, and hazardous materials are strictly prohibited.',
      'We reserve the right to refuse service or evict guests who violate these rules without refund.',
    ],
  },
  {
    id: 'health-safety',
    title: 'Health & Safety Requirements',
    icon: '⚕️',
    content: [
      'Guests must comply with all local health and safety regulations.',
      'In case of illness or emergency, guests must inform the front desk immediately.',
      'The resort is not responsible for any medical emergencies or accidents on the premises.',
      'Guests with contagious illnesses should not check in and will receive a full refund.',
      'All guests must follow COVID-19 protocols and any other health guidelines in effect.',
      'The resort maintains regular sanitization and hygiene standards.',
      'Guests assume all risks associated with their stay at the resort.',
    ],
  },
  {
    id: 'liability',
    title: 'Liability & Disclaimer',
    icon: '⚖️',
    content: [
      'Chitralekha Boutique Resort is not responsible for loss, theft, or damage to personal belongings.',
      'Guests are advised to use the in-room safe for valuables.',
      'The resort is not liable for injuries or accidents unless caused by negligence of staff.',
      'We are not responsible for flight delays, cancellations, or other travel-related issues.',
      'Internet connectivity and utility services are provided as-is without guarantee.',
      'The resort reserves the right to modify amenities or services without prior notice.',
      'Guests use all facilities and services at their own risk.',
    ],
  },
  {
    id: 'privacy-data',
    title: 'Privacy & Data Protection',
    icon: '🔒',
    content: [
      'Personal information collected during booking is used solely for reservation and service purposes.',
      'We comply with all applicable data protection laws and regulations.',
      'Guest information will not be shared with third parties without consent.',
      'Cookies and tracking technologies are used to enhance user experience.',
      'Guests can request access to or deletion of their personal data at any time.',
      'Payment information is encrypted and processed securely.',
      'For detailed information, please refer to our Privacy Policy.',
    ],
  },
  {
    id: 'special-events',
    title: 'Special Events & Functions',
    icon: '🎉',
    content: [
      'Special event bookings (weddings, conferences, celebrations) require advance planning and coordination.',
      'A separate event agreement must be signed for functions exceeding 50 guests.',
      'Decorations must be approved by management and must not damage the property.',
      'External catering is not permitted unless prior written approval is obtained.',
      'Music and entertainment must comply with noise restrictions.',
      'Event insurance is recommended for large gatherings.',
      'Cancellation policies for events differ from standard room bookings.',
    ],
  },
  {
    id: 'amendments',
    title: 'Amendments & Modifications',
    icon: '✏️',
    content: [
      'Chitralekha Boutique Resort reserves the right to modify these terms and conditions at any time.',
      'Changes will be effective immediately upon posting to the website.',
      'Continued use of our services constitutes acceptance of modified terms.',
      'Guests will be notified of significant changes via email if applicable.',
      'Room rates and availability are subject to change without notice.',
      'We reserve the right to modify amenities, services, or facilities as needed.',
      'Any disputes arising from amendments will be governed by applicable laws.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Jurisdiction',
    icon: '⚖️',
    content: [
      'These terms and conditions are governed by the laws of India.',
      'Any disputes arising from these terms shall be subject to the jurisdiction of courts in Uttarakhand.',
      'Guests agree to resolve disputes through amicable settlement first.',
      'If legal action becomes necessary, both parties agree to arbitration.',
      'The resort reserves the right to pursue legal action for non-payment or breach of terms.',
      'All communications regarding disputes must be in writing.',
      'The invalidity of any provision does not affect the validity of other provisions.',
    ],
  },
];

export default function TermsAndConditions() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleSection = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className={styles.main}>
      {/* Banner Section */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerOverlay}></div>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Terms & Conditions</h1>
          <p className={styles.bannerSubtitle}>
            Please read these terms carefully before booking your stay
          </p>
          <div className={styles.breadcrumb}>
            <Link href="/">HOME</Link>
            <span className={styles.separator}>/</span>
            <span>TERMS & CONDITIONS</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <h2 className={styles.introTitle}>Welcome to Chitralekha Boutique Resort</h2>
            <p className={styles.introText}>
              These Terms and Conditions ("Terms") govern your use of our website, booking services, and stay at Chitralekha Boutique Resort. By making a reservation or staying with us, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not proceed with your booking.
            </p>
            <p className={styles.introText}>
              We are committed to providing exceptional hospitality while maintaining clear policies that protect both our guests and our property. Please take time to review all sections below.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className={styles.termsSection}>
        <div className={styles.container}>
          <div className={styles.termsList}>
            {termsData.map((section, index) => (
              <div
                key={section.id}
                className={styles.termCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className={`${styles.termHeader} ${
                    expandedId === section.id ? styles.expanded : ''
                  }`}
                  onClick={() => toggleSection(section.id)}
                >
                  <div className={styles.headerLeft}>
                    <span className={styles.icon}>{section.icon}</span>
                    <h3 className={styles.termTitle}>{section.title}</h3>
                  </div>
                  <span className={styles.toggleIcon}>
                    {expandedId === section.id ? '−' : '+'}
                  </span>
                </button>

                {expandedId === section.id && (
                  <div className={styles.termContent}>
                    <ul className={styles.contentList}>
                      {section.content.map((item, idx) => (
                        <li key={idx} className={styles.contentItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className={styles.noticeSection}>
        <div className={styles.container}>
          <div className={styles.noticeBox}>
            <h3 className={styles.noticeTitle}>⚠️ Important Notice</h3>
            <p className={styles.noticeText}>
              By proceeding with your booking, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you have any questions or concerns, please contact our customer service team before completing your reservation.
            </p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Email:</strong> <a href="mailto:info@chitralekha.com">info@chitralekha.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+918541234567">+91 854 123 4567</a>
              </p>
              <p>
                <strong>Address:</strong> Chitralekha Boutique Resort, Mussoorie, Uttarakhand, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Book Your Stay?</h2>
          <p className={styles.ctaSubtitle}>
            Experience luxury hospitality at Chitralekha Boutique Resort
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/accommodation" className={styles.primaryBtn}>
              View Rooms
            </Link>
            <Link href="/contactUs" className={styles.secondaryBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className={styles.footerNote}>
        <div className={styles.container}>
          <p className={styles.lastUpdated}>
            Last Updated: January 2024 | Version 1.0
          </p>
        </div>
      </section>
    </main>
  );
}
