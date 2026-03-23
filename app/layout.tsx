import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';

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
      <body className="min-h-screen bg-neutral-950 text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}