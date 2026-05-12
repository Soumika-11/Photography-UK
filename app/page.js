import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Events from './components/Events';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <About />
        <Events />
        <Products />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
