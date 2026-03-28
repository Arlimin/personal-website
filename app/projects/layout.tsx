import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Nicholas Allen',
  description:
    'Professional, self-taught, and academic projects across technical support, automation, networking, and systems troubleshooting.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}