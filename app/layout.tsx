import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

import Header from './components/Header';
import Footer from './components/footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Nicholas Allen – Technical Support Portfolio',
  description:
    'Technical Support, Product Support, and Customer Solutions Portfolio for Nicholas Allen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen text-neutral-200`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}