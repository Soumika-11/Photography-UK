'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'James Harrison',
    role: 'Classic Ford Owner',
    text: 'Photography UK captured my Escort RS perfectly at Ford Fair. The canvas print I ordered is now the centerpiece of my living room. Exceptional quality and service!',
    avatar: '/images/avatar.png'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Car Club Secretary',
    text: 'We\'ve used their services for our annual club meet for three years running. They always deliver stunning shots of every member\'s car. Highly recommended.',
    avatar: '/images/avatar.png'
  },
  {
    name: 'David Clarke',
    role: 'Motorsport Enthusiast',
    text: 'The action shots from Silverstone were absolutely incredible. They captured the speed and excitement flawlessly. The ordering process was so easy too.',
    avatar: '/images/avatar.png'
  }
];

export default function Testimonials() {
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
    <section className="section section-bg" id="testimonials" ref={ref}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">What Our Clients Say</h2>
        <p className="section-subtitle animate-on-scroll">Hear from enthusiasts who trust us to capture their automotive memories.</p>
        
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card animate-on-scroll" key={index} style={{transitionDelay: `${index * 0.1}s`}}>
              <svg className="quote-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <Image src={t.avatar} alt={t.name} width={50} height={50} className="author-avatar" />
                <div className="author-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
