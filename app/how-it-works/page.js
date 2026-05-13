import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner title="HOW IT WORKS" />
        
        <section className="section section-bg">
           <div className="container">
              <div className="workflow-steps">
                 <div className="workflow-step">
                    <div className="step-number">1</div>
                    <div className="wf-icon-box">
                      <span className="plate-text">ABC 123</span>
                    </div>
                    <h4>ENTER REGISTRATION</h4>
                    <p>Enter your vehicle registration number.</p>
                 </div>
                 <div className="wf-arrow">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                 </div>
                 
                 <div className="workflow-step">
                    <div className="step-number">2</div>
                    <div className="wf-icon-box">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    </div>
                    <h4>FIND YOUR CAR PHOTOS</h4>
                    <p>Browse our extensive database of photos.</p>
                 </div>
                 <div className="wf-arrow">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                 </div>

                 <div className="workflow-step">
                    <div className="step-number">3</div>
                    <div className="wf-icon-box">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    </div>
                    <h4>CHOOSE PRODUCTS</h4>
                    <p>Pick your favourite photos and products.</p>
                 </div>
                 <div className="wf-arrow">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                 </div>

                 <div className="workflow-step">
                    <div className="step-number">4</div>
                    <div className="wf-icon-box">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                    </div>
                    <h4>DELIVERED TO YOUR DOOR</h4>
                    <p>We print and deliver to your door.</p>
                 </div>
              </div>
           </div>
        </section>

        <section className="section">
           <div className="container">
              <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>WHY CHOOSE PHOTOGRAPHY UK</h3>
              <div className="why-benefits-grid">
                 
                 <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    </div>
                    <h5>PROFESSIONAL QUALITY</h5>
                    <p>High quality images captured by professional photographers.</p>
                 </div>
                 
                 <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h5>SECURE & SAFE</h5>
                    <p>Your data and privacy are important to us.</p>
                 </div>
                 
                 <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                    </div>
                    <h5>100% SATISFACTION GUARANTEE</h5>
                    <p>Not happy? We'll make it right.</p>
                 </div>
                 
                 <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <h5>FAST DELIVERY</h5>
                    <p>Quick printing and secure delivery to your door.</p>
                 </div>

                 <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </div>
                    <h5>SUPPORT A UK BUSINESS</h5>
                    <p>Proud to support colleagues and UK events.</p>
                 </div>

              </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
