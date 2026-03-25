import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Solutions & Support Operations | Nicholas Allen',
  description:
    'Customer-first support professional focused on de-escalation, communication clarity, operational discipline, and end-to-end case ownership.',
};

export default function CustomerSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}