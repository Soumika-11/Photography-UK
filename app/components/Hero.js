'use client';

const TripleChevron = () => (
  <div style={{ display: 'flex', gap: '0px' }}>
    <svg width="12" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"><polyline points="6 3 16 12 6 21" /></svg>
    <svg width="12" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"><polyline points="6 3 16 12 6 21" /></svg>
    <svg width="12" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"><polyline points="6 3 16 12 6 21" /></svg>
  </div>
);

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-1.png"
      >
        <source src="https://digitalmitro.in/photography-uk/wp-content/uploads/2026/02/Photography-UK-header-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>
          FIND YOUR <span className="highlight">CAR PHOTOS.</span> CAPTURE THE <span className="highlight">MOMENT.</span> OWN THE <span className="highlight">MEMORY.</span>
        </h1>
        
        <div className="hero-buttons">
          <a href="#manual-search" className="custom-btn btn-yellow">
            <span className="btn-icon">
              <TripleChevron />
            </span>
            <span className="btn-text">MANUAL SEARCH</span>
            <span className="btn-edge-red"></span>
          </a>
          
          <a href="#anpr-search" className="custom-btn btn-blue">
            <span className="btn-icon">
              <TripleChevron />
            </span>
            <span className="btn-text">ANPR SEARCH</span>
            <span className="btn-edge-red"></span>
          </a>

          <a href="/products" className="custom-btn btn-blue">
            <span className="btn-icon">
              <TripleChevron />
            </span>
            <span className="btn-text">RETAIL SHOP</span>
            <span className="btn-edge-red"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
