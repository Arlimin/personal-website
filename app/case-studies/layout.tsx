import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Nicholas Allen',
  description:
    'Real-world technical support case studies demonstrating structured troubleshooting, customer communication, and clean escalation in production environments.',
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}