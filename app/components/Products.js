'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const products = [
  { name: 'Large Frames', image: '/images/product_frame.png' },
  { name: 'Photo Mug', image: '/images/product_mug.png' },
  { name: 'Box Canvas', image: '/images/product_canvas.png' },
  { name: 'Jigsaw Box', image: '/images/product_jigsaw.png' }
];

export default function Products() {
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
  }, []);

  return (
    <section className="section section-bg" id="products" ref={ref}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Popular Products</h2>
        <p className="section-subtitle animate-on-scroll">Turn your favorite automotive moments into stunning physical keepsakes.</p>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card animate-on-scroll" key={index} style={{transitionDelay: `${index * 0.1}s`}}>
              <Image 
                src={product.image} 
                alt={product.name} 
                width={300} 
                height={200} 
                className="product-image"
              />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
