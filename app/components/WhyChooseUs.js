'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const features = [
  {
    title: 'Exclusive Event Photography',
    description: 'We professionally capture your vehicle at premium motoring events across the UK, ensuring every shot highlights detail, motion, and atmosphere. Each image is carefully edited to deliver a stunning keepsake from your special day.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
    )
  },
  {
    title: 'High-Quality Prints',
    description: 'Our products are crafted using premium materials and professional-grade printing techniques. From framed prints to canvas, glass-mounted finishes and personalised gifts, every item is produced to exceptional quality standards.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2"/><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/></svg>
    ) // Adjust icon to match the screenshot badge
  },
  {
    title: 'Easy Ordering',
    description: 'Simply enter your registration or browse your event, select your favourite image, customise your product, and checkout securely online. Our streamlined process makes finding and ordering your photos quick and hassle-free.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    )
  },
  {
    title: 'Fast Delivery',
    description: 'Once your order is confirmed, our team prepares your chosen product with care and dispatches it promptly. Your professionally finished photo product will be delivered safely to your doorstep.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )
  }
];

export default function WhyChooseUs() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      ref.current.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-choose-us" ref={ref} style={{ padding: 0, overflow: 'hidden' }}>
      <div className="why-choose-us-split">
        
        <div className="why-content">
          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '3rem', marginBottom: '40px' }}>
            WHY <span className="highlight">CHOOSE US</span>
          </h2>
          
          <div className="why-features-list">
            {features.map((feature, index) => (
              <div key={index} className="why-feature-row animate-on-scroll">
                <div className="why-feature-icon">
                  {feature.icon}
                </div>
                <div className="why-feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="why-image">
          <Image 
            src="https://digitalmitro.in/photography-uk/wp-content/uploads/2026/02/car2.webp" 
            alt="Why Choose Us Blue Mini" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

      </div>
    </section>
  );
}
