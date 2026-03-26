import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Support / SaaS Support | Nicholas Allen',
  description:
    'Product and SaaS support experience translating customer-reported issues into reproducible cases, clean Salesforce documentation, and actionable escalations to engineering teams.',
};

export default function ProductSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}