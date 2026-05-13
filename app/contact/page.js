import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner title="CONTACT US" />
        <section className="section">
          <div className="container">
            <div className="contact-grid">
              
              <div className="contact-form-container">
                <h3 className="contact-heading">SEND US AN ENQUIRY</h3>
                <form className="contact-form">
                  <div className="form-row">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                  </div>
                  <div className="form-row">
                    <input type="email" placeholder="Email Address" required />
                    <input type="tel" placeholder="Contact Number" />
                  </div>
                  <textarea placeholder="Write a message..." rows="6" required></textarea>
                  <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
                </form>
              </div>

              <div className="contact-details">
                <h3 className="contact-heading">GET IN TOUCH</h3>
                <ul className="contact-info-list">
                  <li>
                    <span className="icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </span>
                    <div>
                      <strong>07779 607 715</strong>
                      <p>Tap to call</p>
                    </div>
                  </li>
                  <li>
                    <span className="icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    <div>
                      <strong>info@photography-uk.com</strong>
                      <p>Tap to email</p>
                    </div>
                  </li>
                  <li>
                    <span className="icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <div>
                      <strong>Photography UK</strong>
                      <p>34 Rudgard Ave,<br/>Cherry Willingham,<br/>Lincoln LN3 4JG,<br/>United Kingdom</p>
                    </div>
                  </li>
                </ul>
                
                <div className="social-links-block">
                  <h4>FOLLOW US</h4>
                  <div className="social-icons">
                    {/* Facebook */}
                    <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                    {/* Instagram */}
                    <a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
