import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageBanner from '../../components/PageBanner';
import Image from 'next/image';

const events2026 = [
  { year: '2026', title: 'Great British Landrover Show Stoneleigh', image: '/images/event-2.png' },
  { year: '2026', title: 'Modified Live Snetterton', image: '/images/event-3.png' },
  { year: '2026', title: 'Ford Fair Silverstone', image: '/images/event-1.png' }
];

export default function Events2026Page() {
  return (
    <>
      <Header />
      <main>
        <PageBanner title="2026 EVENTS" />
        <section className="section">
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
