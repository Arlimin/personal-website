// trigger vercel deploy
import Header from '../Website/components/Header';
import Footer from '../Website/components/footer';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}