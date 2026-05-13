'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', gap: '40px' }}>
          <div className="top-bar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <div style={{display:'flex', flexDirection:'column', lineHeight:'1.2'}}>
              <span style={{color:'var(--primary-color)', fontSize:'10px', fontWeight:'700'}}>Give us a call</span>
              <span style={{fontWeight:'600'}}>07779 607 715</span>
            </div>
          </div>
          <div className="top-bar-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <div style={{display:'flex', flexDirection:'column', lineHeight:'1.2'}}>
              <span style={{color:'var(--primary-color)', fontSize:'10px', fontWeight:'700'}}>Mail Us at</span>
              <span style={{fontWeight:'600'}}>info@photography-uk.com</span>
            </div>
          </div>
          <div className="top-cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span style={{background:'var(--primary-color)', color:'black', borderRadius:'50%', width:'16px', height:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px', fontWeight:'bold', marginLeft:'-10px', marginTop:'-10px'}}>0</span>
          </div>
        </div>
      </div>

      <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav-menu">
            <Link href="/" className="nav-link">HOME</Link>
            <Link href="/buy-retail-products" className="nav-link">BUY RETAIL PRODUCTS</Link>
            <div className="nav-dropdown">
              <span className="nav-link">EVENTS ▾</span>
              <div className="nav-dropdown-menu">
                <Link href="/events/2026">2026</Link>
                <Link href="/events/2025">2025</Link>
              </div>
            </div>
          </nav>

          <Link href="/" className="logo">
            <Image src="/images/logo.webp" alt="Photography UK Logo" width={240} height={70} priority />
          </Link>
          
          <nav className="nav-right nav-menu">
            <Link href="/products" className="nav-link">PRODUCTS</Link>
            <Link href="/how-it-works" className="nav-link">HOW IT WORKS</Link>
            <Link href="/contact" className="nav-link">CONTACT US</Link>
          </nav>

          <button className="mobile-menu-btn" aria-label="Menu">
            <span/>
            <span/>
            <span/>
          </button>
        </div>
      </header>
    </>
  );
}
