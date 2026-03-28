// app/page.tsx

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-100 fade-in">
      {/* Hero / Identity */}
      <header className="max-w-6xl mx-auto px-6 pt-28 pb-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight leading-tight text-neutral-100">
            Nicholas Allen
          </h1>

          <p className="mt-4 text-xl text-neutral-100 leading-relaxed">
            Technical Support Specialist focused on Linux‑based POS and SaaS platforms,
            production incident response, and clean, actionable documentation.
          </p>

          <p className="mt-3 text-neutral-100">
            Sarasota, FL · Open to Remote & Hybrid Roles
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/generalresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-neutral-900 font-medium hover:bg-emerald-700 transition"
            >
              Download Resume (PDF)
            </a>

            <a
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-neutral-900 font-medium hover:bg-emerald-700 transition"
            >
              View Case Studies
            </a>
          </div>

          <div className="mt-10 text-sm text-neutral-100 space-y-1">
            <p>
              Email:{' '}
              <a
                href="mailto:nickallen4492@gmail.com"
                className="underline hover:text-emerald-500"
              >
                nickallen4492@gmail.com
              </a>
            </p>
            <p>Mobile: 941-249-2577 · Alternate: 941-467-6841</p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/nicholas-allen-75465124b"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-emerald-500"
              >
                linkedin.com/in/nicholas-allen-75465124b
              </a>
            </p>
          </div>
        </div>
      </header>


      {/* Professional Summary */}
<section className="max-w-6xl mx-auto px-10 py-14 md:py-14 bg-zinc-700 border border-neutral-800 rounded-lg">
  <h2 className="text-3xl font-semibold mb-8">Professional Summary</h2>

  <div className="max-w-4xl text-neutral-100 leading-relaxed">
    <p>
      L1 Technical Support Specialist supporting a Linux-based POS and payments
      ecosystem (Cake by Mad Mobile) in high-volume, customer-facing production
      environments. Experienced in structured incident intake, application and
      network-level troubleshooting, command-line validation, and precise
      Salesforce documentation. Known for converting real-world merchant symptoms
      into technically complete, reproducible cases that downstream teams (L2,
      Payments, Engineering) can act on without guesswork. Strong communicator
      with proven de-escalation skills during time-sensitive outages. CompTIA A+,
      Network+, and Security+ certified, with a solid foundation in networking
      fundamentals and structured troubleshooting. Proactively improves support
      efficiency through workflow automation using Power Automate, Copilot
      Studio, and custom GPTs.
    </p>
  </div>
</section>
<div className="max-w-6xl mx-auto px-10 py-4">
  <div className="h-px bg-neutral-400" />
</div>

      {/* Support & Technical Skills */}
<section className="max-w-6xl mx-auto px-10 py-14 md:py-16 bg-zinc-700 border border-neutral-800 rounded-lg">
  <h2 className="text-3xl font-semibold mb-8">
    Support & Technical Skills
  </h2>

  <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-neutral-100">
    <li>Phone, chat, and email technical support</li>
    <li>Linux-based POS & SaaS application support</li>
    <li>Command-line troubleshooting (support context)</li>
    <li>Incident intake, triage, and case ownership</li>
    <li>Customer coordination & de-escalation</li>
    <li>Step-by-step user guidance (“How do I?”)</li>
    <li>Networking fundamentals (TCP/IP, DNS, DHCP)</li>
    <li>POS peripherals (printers, payment terminals)</li>
    <li>Ticketing systems (Salesforce)</li>
    <li>Five9 & Dialpad (user-level)</li>
    <li>Accurate documentation & escalation hygiene</li>
    <li>Cross-team collaboration (L2, Engineering, Payments)</li>
    <li>Automation (Power Automate, Copilot Studio, custom GPTs)</li>
  </ul>
</section>
<div className="max-w-6xl mx-auto px-10 py-4">
  <div className="h-px bg-neutral-400" />
</div>

      {/* Projects & Initiatives */}
<section className="max-w-6xl mx-auto px-10 py-14 md:py-16 bg-zinc-700 border border-neutral-800 rounded-lg">
  <h2 className="text-3xl font-semibold mb-8">
    Projects & Initiatives
  </h2>

  <ul className="list-disc list-inside space-y-4 text-neutral-100 max-w-4xl">
    <li>
      <strong>Personal Technical Portfolio Website:</strong> Designed and built
      a production-ready personal website to document professional experience,
      support responsibilities, projects, and certifications. Implemented a
      recruiter-focused information architecture using Next.js and React with
      emphasis on clarity, accuracy, and maintainability.
    </li>
    <li>
      <strong>Salesforce Support Notes Automation:</strong> Built Power Automate
      and Copilot Studio workflows converting Dialpad transcripts into
      structured, Salesforce-ready case notes.
    </li>
    <li>
      <strong>Custom GPT Support Tools:</strong> Created GPT-based assistants
      for standardized troubleshooting notes and customer-facing email drafting.
    </li>
  </ul>
</section>
      
    </div>
  );
}