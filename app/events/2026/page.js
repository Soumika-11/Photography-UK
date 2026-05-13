'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageBanner from '../../components/PageBanner';
import Image from 'next/image';
import Link from 'next/link';

const events2026 = [
  { year: '2026', title: 'Great British Landrover Show Stoneleigh', image: '/images/event-2.png' },
  { year: '2026', title: 'Modified Live Snetterton', image: '/images/event-3.png' },
  { year: '2026', title: 'Ford Fair Silverstone', image: '/images/event-1.png' }
];

export default function Events2026Page() {
  const [showEvents, setShowEvents] = useState(false);

  return (
    <>
      <Header />
      <main>
        <PageBanner title="2026" />
        <section className="search-layer-section">
          <div className="container">
            <div className="search-buttons-wrapper">
              <div className="search-btn-custom btn-manual" onClick={() => setShowEvents(true)}>
                <div className="search-btn-chevrons">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <div className="search-btn-text">MANUAL SEARCH</div>
                <div className="search-btn-cap"></div>
              </div>
              <div className="search-btn-custom btn-anpr" onClick={() => setShowEvents(true)}>
                <div className="search-btn-chevrons">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <div className="search-btn-text">ANPR SEARCH</div>
                <div className="search-btn-cap"></div>
              </div>
            </div>
          </div>
        </section>

        {showEvents && (
          <section className="section fade-in">
          <div className="container">
            <div className="events-grid">
              {events2026.map((event, index) => (
                <div className="event-card" key={index}>
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
                    <Link href={`/gallery/${event.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem', display: 'inline-block' }}>View Gallery</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}
      </main>
      <Footer />
    </>
  );
}
