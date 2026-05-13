import Image from 'next/image';

export default function PageBanner({ title }) {
  return (
    <div className="page-banner">
      <div className="page-banner-bg">
        <Image 
          src="/images/hero-1.png" 
          alt="Banner Background" 
          fill 
          style={{ objectFit: 'cover', opacity: 0.4 }} 
        />
      </div>
      <div className="container page-banner-inner">
        <h1 className="banner-title">{title}</h1>
      </div>
    </div>
  );
}
