'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `px-3 py-2 rounded transition ${
      pathname === href
        ? 'bg-neutral-800 text-white'
        : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center gap-2">
        <Link href="/" className={linkClass('/')}>
          Overview
        </Link>
        <Link href="/technical-support" className={linkClass('/technical-support')}>
          Technical Support
        </Link>
        <Link href="/product-support" className={linkClass('/product-support')}>
          Product Support
        </Link>
        <Link href="/customer-solutions" className={linkClass('/customer-solutions')}>
          Customer Solutions
        </Link>
        <Link href="/case-studies" className={linkClass('/case-studies')}>
  Case Studies
</Link>
        <span className="flex-1" />

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition"
        >
          Resume (PDF)
        </a>
      </nav>
    </header>
  );
}