import './globals.css';

export const metadata = {
  title: 'Photography UK – Car Show Photographers, Classic Ford, Brighton, Ford Fair',
  description: 'Photography UK attend car shows throughout the year. We photograph cars on arrival, action on the track, and special commissions for car clubs and individual clients.',
  keywords: 'car show photography, classic ford, ford fair, car photography UK, motorsport photography',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
