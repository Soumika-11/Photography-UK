'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

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
    
    const handleScroll = () => {
      if (ref.current && window.innerWidth > 768) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const progress = window.innerHeight - rect.top;
          setOffsetY(progress * 0.1); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about-fixed-section" id="about" ref={ref}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="about-grid-fixed">
          
          {/* Left Side: Text Content */}
          <div className="about-text animate-on-scroll">
            <h2>
              About <span>Photography UK Ltd</span>
            </h2>
            <p>
              We are Photography UK, dedicated to capturing the heart and soul of the British automotive scene. From classic Ford meets to high-octane motorsport events at Silverstone and Santapod, our professional photographers are always trackside.
            </p>
            <p style={{ marginBottom: '40px' }}>
              Our goal is to provide enthusiasts with stunning, high-resolution imagery that preserves the memory of their pride and joy. Whether it's a dynamic rolling shot or a pristine static display, we ensure every detail is captured with precision.
            </p>
            <a href="/about" className="btn btn-primary">
              Read More 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right Side: Parallax Image */}
          <div className="about-parallax-img animate-on-scroll" style={{ transform: `translateY(${100 - offsetY}px)` }}>
            <Image 
              src="https://digitalmitro.in/photography-uk/wp-content/uploads/2026/02/about.webp" 
              alt="About Photography UK" 
              width={600}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
