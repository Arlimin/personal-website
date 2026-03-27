import "./globals.css";
import Header from "../Website/components/Header";
import Footer from "../Website/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
<html lang="en">
      <body className="bg-transparent text-neutral-300">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>

  );
}