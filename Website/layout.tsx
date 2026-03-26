// trigger vercel deploy
import Header from '../personal-site/components/Header';
import Footer from '../personal-site/components/footer';

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