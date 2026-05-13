import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventGalleryFlow from '../../components/EventGalleryFlow';
import PageBanner from '../../components/PageBanner';

export default function GalleryPage({ params }) {
  // Extract eventName from slug or use default
  const eventName = params.id ? decodeURIComponent(params.id).replace(/-/g, ' ').toUpperCase() : 'EVENT GALLERY';

  return (
    <>
      <Header />
      <main>
        <PageBanner title={eventName} />
        <section className="section">
          <div className="container">
            <EventGalleryFlow eventName={eventName} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
