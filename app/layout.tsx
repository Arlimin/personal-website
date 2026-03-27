import "./globals.css";
import Header from "../Website/components/Header"
import Footer from "../Website/components/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}