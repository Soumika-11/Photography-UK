import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageBanner from '../../components/PageBanner';
import Image from 'next/image';

const events2025 = [
  { year: '2025', title: 'Classic Ford Show USC', image: '/images/hero-3.png' },
  { year: '2025', title: 'Bugjam at Santapod', image: '/images/hero-1.png' },
  { year: '2025', title: 'Retro Rides Gathering', image: '/images/event-2.png' }
];

export default function Events2025Page() {
  return (
    <>
      <Header />
      <main>
        <PageBanner title="2025 EVENTS" />
        <section className="section">
          <div className="container">
            <div className="events-grid">
              {events2025.map((event, index) => (
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
                    <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>View Gallery</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
