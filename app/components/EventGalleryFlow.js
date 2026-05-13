'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function EventGalleryFlow({ eventName }) {
  const [step, setStep] = useState(2); // 2: Days, 3: Timeslots, 4: Photos, 5: Product Selection, 6: Customize
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const days = [
    { id: 'sat', name: 'Saturday', date: '18 May 2026' },
    { id: 'sun', name: 'Sunday', date: '19 May 2026' }
  ];

  const timeSlots = [
    '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
    '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'
  ];

  const products = [
    'Canvas/Acrylic', 'Print Only', 'Mounted Print', 'Acrylic Picture Frame',
    'Canvas', 'Framed Print', 'Gift', 'Glass Picture Frame', 'Mug', 'Digital Download'
  ];

  return (
    <div className="gallery-flow-container">
      {/* STEP 2: SELECT DAY */}
      {step === 2 && (
        <div className="flow-step">
          <button className="back-btn" onClick={() => window.history.back()}>&larr; Back to Events</button>
          <div className="flow-header">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            <h2>{eventName}</h2>
            <p>18th - 19th May 2026</p>
          </div>
          <div className="days-grid">
            {days.map(day => (
              <div key={day.id} className="day-card" onClick={() => { setSelectedDay(day); setStep(3); }}>
                <div className="day-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <h3>{day.name}</h3>
                <p>{day.date}</p>
                <span className="view-btn">View Photos &gt;</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: SELECT TIME SLOT */}
      {step === 3 && (
        <div className="flow-step">
          <button className="back-btn" onClick={() => setStep(2)}>&larr; Back to Event</button>
          <div className="flow-header">
            <h2>{eventName} - {selectedDay.name.toUpperCase()}</h2>
            <p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> {selectedDay.date}</p>
          </div>
          <div className="timeslots-grid">
            {timeSlots.map(time => (
              <button key={time} className="timeslot-btn" onClick={() => { setSelectedTime(time); setStep(4); }}>
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 4: VIEW CAR IMAGES */}
      {step === 4 && (
        <div className="flow-step">
          <button className="back-btn" onClick={() => setStep(3)}>&larr; Back to Time Slots</button>
          <div className="flow-header">
            <h2>{eventName} - {selectedDay.name.toUpperCase()}</h2>
            <p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> {selectedTime}</p>
          </div>
          <div className="gallery-grid">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="gallery-img-wrapper" onClick={() => { setSelectedPhoto('/images/event-1.png'); setStep(5); }}>
                <Image src="/images/event-1.png" alt="Car Photo" width={300} height={200} className="gallery-img" />
              </div>
            ))}
          </div>
          <div className="pagination">
             &lt; 1 2 3 &gt;
          </div>
        </div>
      )}

      {/* STEP 5: PRODUCT SELECTION */}
      {step === 5 && (
        <div className="flow-step">
          <button className="back-btn" onClick={() => setStep(4)}>&larr; Back to Images</button>
          <div className="product-split">
            <div className="product-image-large">
              <Image src={selectedPhoto} alt="Selected Car" width={600} height={400} />
              <div className="watermark-overlay">PHOTOGRAPHY UK</div>
            </div>
            <div className="product-sidebar">
              <h3>ADD ONS - CHOOSE PRODUCT</h3>
              <ul className="product-list">
                {products.map(prod => (
                  <li key={prod} onClick={() => { setSelectedProduct(prod); setStep(6); }}>
                    <span className="radio-circle"></span> {prod} <span className="arrow">&gt;</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* STEP 6: CUSTOMIZE & ADD TO CART */}
      {step === 6 && (
        <div className="flow-step">
          <button className="back-btn" onClick={() => setStep(5)}>&larr; Back to Products</button>
          <div className="product-split">
            <div className="customize-sidebar">
               <h3>EDIT IMAGE</h3>
               <div className="edit-tools">
                 <button><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/></svg> Crop</button>
                 <button><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg> Add Logo</button>
                 <button><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> Turn to B&W</button>
                 <button><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21l-4.5 4.64"/></svg> Rotate</button>
               </div>
               
               <div className="product-options">
                 <div className="option-group">
                   <label>SELECT PRODUCT</label>
                   <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                     {products.map(p => <option key={p}>{p}</option>)}
                   </select>
                 </div>
                 <div className="option-group">
                   <label>SIZE</label>
                   <select><option>A4 (297 x 210mm)</option></select>
                 </div>
                 <div className="option-group">
                   <label>STYLE</label>
                   <select><option>Black Frame</option></select>
                 </div>
               </div>
            </div>

            <div className="product-preview-area">
               <h3>PRODUCT PREVIEW</h3>
               <div className="preview-frame">
                 <Image src={selectedPhoto} alt="Preview" width={400} height={260} />
               </div>
               <div className="cart-action">
                 <span className="price">£49.99</span>
                 <button className="btn btn-primary add-to-cart-btn">ADD TO CART</button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
