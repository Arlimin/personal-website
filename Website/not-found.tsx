import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-4">404</h1>

        <p className="text-lg text-neutral-300 mb-8 max-w-md mx-auto">
          The page you’re looking for doesn’t exist, or the link may be outdated.
          You can still jump directly to a relevant role below.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 border border-neutral-700 rounded hover:bg-neutral-800 transition"
          >
            Overview
          </Link>

          <Link
            href="/technical-support"
            className="px-6 py-3 border border-neutral-700 rounded hover:bg-neutral-800 transition"
          >
            Technical Support
          </Link>

          <Link
            href="/product-support"
            className="px-6 py-3 border border-neutral-700 rounded hover:bg-neutral-800 transition"
          >
            Product Support / SaaS
          </Link>

          <Link
            href="/customer-solutions"
            className="px-6 py-3 border border-neutral-700 rounded hover:bg-neutral-800 transition"
          >
            Customer Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}