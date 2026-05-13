'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const eventsList = [
  { year: '2026', title: 'Great British Landrover Show Stoneleigh', image: '/images/event-2.png' },
  { year: '2026', title: 'Modified Live Snetterton', image: '/images/event-3.png' },
  { year: '2026', title: 'Ford Fair Silverstone', image: '/images/event-1.png' },
  { year: '2025', title: 'Classic Ford Show USC', image: '/images/hero-3.png' },
  { year: '2025', title: 'Bugjam at Santapod', image: '/images/hero-1.png' },
  { year: '2024', title: 'Trax Silverstone', image: '/images/event-3.png' },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState('2026');
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
  }, [activeTab]);

  const filteredEvents = eventsList.filter(e => e.year === activeTab);

  return (
    <section className="section" id="events" ref={ref}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Featured Events</h2>
        <p className="section-subtitle animate-on-scroll">Browse our latest photo galleries from premier motoring events.</p>
        
        <div className="event-tabs animate-on-scroll">
          {['2026', '2025'].map(year => (
            <button 
              key={year} 
              className={`event-tab ${activeTab === year ? 'active' : ''}`}
              onClick={() => setActiveTab(year)}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <div className="event-card animate-on-scroll" key={`${event.year}-${index}`}>
              <div className="event-image-wrapper">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  width={400} 
                  height={240} 
                  className="event-image"
                />
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
