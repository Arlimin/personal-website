import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Support / Service Desk | Nicholas Allen',
  description:
    'Front-line Technical Support and Service Desk experience supporting Linux-based POS and payment systems, with structured troubleshooting, de-escalation, and high-quality documentation.',
};

export default function TechnicalSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}