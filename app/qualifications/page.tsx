// app/qualifications/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications, Skills & Training | Nicholas Allen',
  description:
    'Industry certifications, formal education, professional training, and technical skillsets across support, networking, automation, and systems.',
};

export default function CertificationsSkillsTrainingPage() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-100 fade-in">
      {/* Page Header */}
      <header className="max-w-6xl mx-auto px-6 pt-28 pb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Certifications, Skills &amp; Training
        </h1>
      </header>

      {/* Industry Certifications */}
      <section className="max-w-6xl mx-auto px-10 py-14 bg-zinc-700 border border-neutral-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-8">
          Industry Certifications (CompTIA)
        </h2>

        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold">CompTIA Security+ (Active)</h3>
            <p className="text-sm text-neutral-300">
              Issued Dec 2023 · Expires Dec 2026
            </p>
            <p className="mt-2">
              Access control, authentication, cryptography, network security,
              risk management, and incident response.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">CompTIA Network+ (Active)</h3>
            <p className="text-sm text-neutral-300">
              Issued Dec 2023 · Expires Dec 2026
            </p>
            <p className="mt-2">
              Network design, configuration, troubleshooting, TCP/IP,
              switching, routing, and wireless networking.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">CompTIA A+ (Active)</h3>
            <p className="text-sm text-neutral-300">
              Issued Dec 2023 · Expires Dec 2026
            </p>
            <p className="mt-2">
              Hardware, operating systems, troubleshooting methodology,
              and foundational IT support skills.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              CompTIA IT Fundamentals+ (ITF+)
            </h3>
            <p className="text-sm text-neutral-300">Issued Jan 2023</p>
            <p className="mt-2">
              Core IT concepts including hardware, software, databases,
              and basic security fundamentals.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10 py-6">
        <div className="h-px bg-neutral-400" />
      </div>

      {/* Formal Education */}
      <section className="max-w-6xl mx-auto px-10 py-14 bg-zinc-700 border border-neutral-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-8">Formal Education</h2>

        <div className="max-w-4xl space-y-4">
          <h3 className="text-xl font-semibold">
            California Institute of Applied Technology (CIAT)
          </h3>
          <p className="text-sm text-neutral-300">
            Certificate in Computer Information Systems · Networking &amp; IT
            (2022 – 2023)
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Computer hardware and operating system management</li>
            <li>Wired and wireless network design and troubleshooting</li>
            <li>
              Network infrastructure security, cryptography, and access control
            </li>
          </ul>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10 py-6">
        <div className="h-px bg-neutral-400" />
      </div>

      {/* Professional Development */}
      <section className="max-w-6xl mx-auto px-10 py-14 bg-zinc-700 border border-neutral-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-8">
          Professional Development &amp; Continuing Education
        </h2>

        <div className="max-w-4xl space-y-10">
          <div>
            <h3 className="text-xl font-semibold">AI &amp; Automation</h3>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Extend Microsoft 365 Copilot with AI Agents</li>
              <li>Building in Microsoft Copilot Studio</li>
              <li>
                Getting Started with Autonomous Agents in Copilot Studio
              </li>
            </ul>
            <p className="text-sm text-neutral-300 mt-2">
              Completed Feb 2026
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Customer Support &amp; Communication
            </h3>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Tackling Intense Customer Service Moments</li>
              <li>Customer Service: Call Control Strategies</li>
              <li>Phone-Based Customer Service</li>
              <li>Customer Service Foundations</li>
              <li>Building Rapport with Customers</li>
              <li>Creating Positive Conversations</li>
            </ul>
            <p className="text-sm text-neutral-300 mt-2">
              Completed Jan 2025
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Professional Effectiveness
            </h3>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Develop a High-Performance Mindset</li>
              <li>Build a Personal Learning Plan</li>
              <li>Setting a Vision: Career Goal Clarity</li>
            </ul>
            <p className="text-sm text-neutral-300 mt-2">
              Completed Jan 2025
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10 py-6">
        <div className="h-px bg-neutral-400" />
      </div>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-10 py-14 bg-zinc-700 border border-neutral-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-8">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <ul className="list-disc list-inside space-y-1">
            <li>Customer Support & De-escalation</li>
            <li>Help Desk / IT Support</li>
            <li>Troubleshooting (Device & Network)</li>
            <li>POS Systems</li>
            <li>Salesforce Ticketing</li>
            <li>Phone-Based Support</li>
          </ul>

          <ul className="list-disc list-inside space-y-1">
            <li>Networking (TCP/IP, DNS, DHCP)</li>
            <li>VoIP Troubleshooting</li>
            <li>Hardware & Cabling</li>
            <li>Field Support</li>
            <li>Windows & Basic Linux</li>
            <li>Command Line (Support Context)</li>
          </ul>

          <ul className="list-disc list-inside space-y-1">
            <li>AI Agents & Automation</li>
            <li>Custom GPT Development</li>
            <li>Microsoft Copilot & Copilot Studio</li>
            <li>Prompt Engineering</li>
            <li>Power Automate</li>
            <li>Workflow Design</li>
          </ul>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10 py-6">
        <div className="h-px bg-neutral-400" />
      </div>

      {/* Honors */}
      <section className="max-w-6xl mx-auto px-10 py-14 bg-zinc-700 border border-neutral-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-8">Honors &amp; Awards</h2>

        <div className="max-w-4xl space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              Employee of the Month (Mad Props Winner)
            </h3>
            <p className="text-sm text-neutral-300">
              Mad Mobile · Issued Nov 2025
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Academic Honors</h3>
            <p className="text-sm text-neutral-300">
              CIAT · Issued Jan 2023 · GPA 3.9
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}