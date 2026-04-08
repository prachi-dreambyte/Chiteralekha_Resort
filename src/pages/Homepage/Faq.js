'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const faqs = [
  {
    q: 'How can I make a booking?',
    a: 'You can book directly via our website, or call our team for personalized assistance. Early bookings are recommended during peak season.',
  },
  {
    q: 'Is the resort suitable for family stays?',
    a: 'Absolutely! We are a family-friendly resort offering a safe and serene environment for all age groups.',
  },
  {
    q: 'What are the check-in and check-out times at the resort?',
    a: 'The check-in is from 2PM to late night and the check-out is 12PM. (Early check-in and check-out are subjected to availability & may incur additional fee.)',
  },
  {
    q: 'Does the resort offer Wi-Fi?',
    a: 'Yes, we provide complementary Wi-Fi. Guests can enjoy free high-speed Wi-Fi throughout the property.',
  },
  {
    q: 'What food options are available at the restaurant?',
    a: 'We have an in-house Cafe named Buransh Blossoms — a Multicuisine cafe that offers a variety of dishes prepared from fresh & local ingredients.',
  },
  {
    q: 'Are meals included in the stay?',
    a: 'We offer both plans — with and without meals. Our in-house restaurant serves delicious regional and multi-cuisine dishes.',
  },
  {
    q: 'Is parking available at the resort?',
    a: 'Yes, we have ample secure parking space available for all our guests, free of charge.',
  },
  {
    q: 'Can I book the resort for events like weddings or corporate retreats?',
    a: 'Yes! Chitralekha Boutique Resort is an ideal venue for intimate weddings, family gatherings, and corporate offsites. Contact our team for packages and availability.',
  },
];

export default function Faq() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <section className="py-5" style={{ background: '#fff' }}>
      <div className="container py-3">
        <div className="row align-items-center g-5">
          {/* Left — image + heading */}
          <div className="col-lg-5 text-center text-lg-start">
            <p className="text-uppercase fw-semibold mb-2" style={{ color: '#8b6914', letterSpacing: '2px', fontSize: '0.8rem' }}>
              Got Questions?
            </p>
            <h2 className="fw-bold mb-4" style={{lineHeight: 1.3, color: '#5a6e4a', fontFamily: '"Paint-Brush", serif'}}>
              Frequently Asked<br />Questions
            </h2>
            <div className="position-relative rounded-4 overflow-hidden shadow-sm" style={{ height: '380px' }}>
              <Image
                src="/assets/images/P1094049.jpg"
                alt="Chitralekha Boutique Resort"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 992px) 100vw, 42vw"
              />
            </div>
            <p className="mt-4 text-muted" style={{ fontSize: '0.95rem' }}>
              Can&apos;t find your answer? Feel free to{' '}
              <a href="/contactUs" style={{ color: '#8b6914', textDecoration: 'underline' }}>
                contact us
              </a>
              .
            </p>
          </div>

          {/* Right — accordion */}
          <div className="col-lg-7">
            <div className="accordion accordion-flush" id="faqAccordion">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="accordion-item border-0 mb-3 rounded-3 shadow-sm overflow-hidden"
                  style={{ background: '#fff' }}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button fw-semibold${i !== 0 ? ' collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-${i}`}
                      aria-expanded={i === 0 ? 'true' : 'false'}
                      aria-controls={`faq-${i}`}
                      style={{ background: '#fff', color: '#2c2c2c', fontSize: '0.95rem' }}
                    >
                      {item.q}
                    </button>
                  </h2>
                  <div
                    id={`faq-${i}`}
                    className={`accordion-collapse collapse${i === 0 ? ' show' : ''}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>
                      {item.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
