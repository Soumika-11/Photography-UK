import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <Link href="/" className="footer-logo">
              Photography<span>UK</span>
            </Link>
            <p className="footer-desc">
              Professional car show and event photographers covering the UK's premier motoring events. Providing high-quality prints, canvas, and digital downloads since 2005.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/products">Find Your Car Photos</Link>
              <Link href="#events">Events</Link>
              <Link href="/products">Products</Link>
              <Link href="#how-it-works">How It Works</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <div className="footer-links">
              <Link href="/products">Prints</Link>
              <Link href="/products">Digital Downloads</Link>
              <Link href="/products">Canvas</Link>
              <Link href="/products">Gifts</Link>
              <Link href="/products">Jigsaw Puzzles</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Contact & Info</h4>
            <ul className="footer-contact">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                07779 607 715
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@photography-uk.com
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                34 Rudgard Ave, Cherry Willingham, Lincoln, UK
              </li>
            </ul>
            <div className="footer-links" style={{marginTop: '20px'}}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div>Copyright &copy; {new Date().getFullYear()} Photography UK Ltd. All Rights Reserved.</div>
          <div className="payment-icons">
            <svg width="32" height="20" viewBox="0 0 32 20" fill="currentColor"><rect width="32" height="20" rx="4"/></svg>
            <svg width="32" height="20" viewBox="0 0 32 20" fill="currentColor"><rect width="32" height="20" rx="4"/></svg>
            <svg width="32" height="20" viewBox="0 0 32 20" fill="currentColor"><rect width="32" height="20" rx="4"/></svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
