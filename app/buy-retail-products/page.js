import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import Image from 'next/image';

const retailProducts = [
  { name: 'JIGSAW CAR PUZZLE', price: '£19.99', image: '/images/product_jigsaw.png' },
  { name: 'PHOTO MUG', price: '£14.99', image: '/images/product_mug.png' },
  { name: 'BOX CANVAS', price: '£39.99', image: '/images/product_canvas.png' },
  { name: 'TRAVEL MUG', price: '£16.99', image: '/images/product_mug.png' },
  { name: 'LARGE FRAMES', price: '£49.99', image: '/images/product_frame.png' },
];

export default function BuyRetailPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner title="BUY RETAIL PRODUCTS" />
        <section className="section">
          <div className="container">
            <div className="retail-grid">
               {retailProducts.map((p, i) => (
                 <div className="retail-card" key={i}>
                   <div className="retail-img-wrap">
                     <Image src={p.image} alt={p.name} fill style={{objectFit:'contain'}} />
                   </div>
                   <h4>{p.name}</h4>
                   <p className="price">{p.price}</p>
                   <button className="btn btn-primary btn-sm">BUY NOW</button>
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
