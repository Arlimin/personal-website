// app/components/footer.tsx

'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/customer-solutions', label: 'Customer Solutions' },
  { href: '/product-support', label: 'Product Support' },
  { href: '/technical-support', label: 'Technical Support' },
  { href: '/case-studies', label: 'Case Studies' },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="mt-8 border-t border-neutral-400">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm text-neutral-300">
        <div>
          <p className="text-white font-bold mb-2">Nicholas Allen</p>
          <p>Technical & Customer Support Professional</p>
          <p className="mt-2">Sarasota, FL · Remote / Hybrid</p>
        </div>

        <div>
          <p className="text-white font-bold mb-2">Navigation</p>
          <ul className="space-y-1">
            {navLinks
              .filter(link => link.href !== pathname)
              .map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-emerald-800">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-bold mb-2">Contact</p>
          <ul className="underline font-bold space-y-1">
            <li>
              <a
                href="mailto:nickallen4492@gmail.com"
                className="hover:text-emerald-800"
              >
                nickallen4492@gmail.com
              </a>
            </li>
            <li>941‑249‑2577</li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicholas-allen-75465124b"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-800"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-neutral-500 pb-6">
        © 2026 Nicholas Allen
      </div>
    </footer>
  );
}