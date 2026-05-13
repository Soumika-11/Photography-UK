import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import Image from 'next/image';

const allProducts = [
  { name: 'LARGE FRAMES', image: '/images/product_frame.png' },
  { name: 'PHOTO MUG', image: '/images/product_mug.png' },
  { name: 'JIGSAW BOX', image: '/images/product_jigsaw.png' },
  { name: 'BOX CANVAS', image: '/images/product_canvas.png' },
  { name: 'TRAVEL MUG', image: '/images/product_mug.png' },
  { name: 'GLASS MOUNTED', image: '/images/product_frame.png' },
  { name: 'CHROMALUXE', image: '/images/product_canvas.png' },
  { name: 'TIN MUG', image: '/images/product_mug.png' },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner title="OUR PRODUCTS" />
        <section className="section">
          <div className="container">
            <div className="products-grid-catalog">
               {allProducts.map((p, i) => (
                 <div className="catalog-card" key={i}>
                   <div className="catalog-img-wrap">
                     <Image src={p.image} alt={p.name} fill style={{objectFit:'contain'}} />
                   </div>
                   <h4>{p.name}</h4>
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
