

export default function CustomerSolutionsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white fade-in">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <h1 className="text-4xl font-bold tracking-tight">
          Customer Solutions / Support Operations
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-3xl">
          Customer-first support driven by ownership, communication, operational discipline,
          and technical problem-solving in high-pressure environments.
        </p>
      </header>
<div className="max-w-6xl mx-auto px-10 py-4">
  <div className="h-px bg-neutral-800" />
</div>
      {/* Summary */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-8">Role Overview</h2>
        <p className="text-neutral-300 max-w-4xl">
          My background combines technical production support with over a decade of
          customer-facing leadership experience. I focus on ownership, de-escalation,
          clear communication, and follow-through while supporting users through
          business-critical issues. This allows me to bridge technical troubleshooting
          with strong customer trust and operational awareness.
        </p>
      </section>
<div className="max-w-6xl mx-auto px-10 py-4">
  <div className="h-px bg-neutral-800" />
</div>
      {/* Core Strengths */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-8">Customer Solutions Strengths</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-neutral-300 list-disc list-inside">
          <li>Customer de-escalation under pressure</li>
          <li>Clear communication with non-technical users</li>
          <li>End-to-end case ownership</li>
          <li>Expectation setting and follow-up</li>
          <li>Balancing speed and accuracy</li>
          <li>Operational awareness</li>
          <li>High emotional intelligence</li>
          <li>Cross-team coordination</li>
        </ul>
      </section>
<div className="max-w-6xl mx-auto px-10 py-4">
  <div className="h-px bg-neutral-800" />
</div>
      {/* Professional Experience */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-8">Professional Experience</h2>

        {/* Mad Mobile */}
        <div className="bg-neutral-900 border border-neutral-800 rounded p-6 mb-8">
          <h3 className="text-xl">L1 Technical Support Specialist</h3>
          <p className="text-sm text-neutral-400 mb-4">
            Mad Mobile (Cake POS Platform) · Jan 2025 – Present
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Handle high-stress customer situations involving live POS outages.</li>
            <li>De-escalate frustration and restore confidence.</li>
            <li>Own cases from initial contact through resolution or escalation.</li>
          </ul>
        </div>

        {/* Restaurant Leadership */}
        <div className="bg-neutral-900 border border-neutral-800 rounded p-6 mb-8">
          <h3 className="text-xl">Restaurant General Manager</h3>
          <p className="text-sm text-neutral-400 mb-4">
            BDE LLC · Mar 2023 – Oct 2023
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Led daily operations in high-volume restaurant environments.</li>
            <li>Handled customer complaints and conflict resolution.</li>
            <li>Managed scheduling, onboarding, and accountability.</li>
          </ul>
        </div>

        {/* Assistant Manager */}
        <div className="bg-neutral-900 border border-neutral-800 rounded p-6">
          <h3 className="text-xl">Assistant Store Manager</h3>
          <p className="text-sm text-neutral-400 mb-4">
            Furman's Inc. · May 2015 – Jan 2019
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Supported daily operations and customer service at scale.</li>
            <li>Trained staff and handled escalated complaints.</li>
          </ul>
        </div>
      </section>
{/* Role CTA */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8">
    <h3 className="text-2xl font-semibold mb-3">
      Need a Customer‑Focused Support Professional?
    </h3>

    <p className="text-neutral-300 max-w-3xl mb-6">
      If you’re hiring for a Customer Solutions or Support Operations role requiring
strong communication, calm de-escalation, and end-to-end ownership of complex
customer issues, my background combines technical understanding with
customer-first problem solving.
    </p>

    <div className="flex flex-wrap gap-4">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 rounded-md bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition"
      >
        Download Resume (PDF)
      </a>

      <a
        href="/case-studies"
        className="inline-flex items-center px-6 py-3 rounded-md border border-neutral-700 text-white hover:bg-neutral-800 transition"
      >
        View Relevant Case Studies
      </a>
    </div>
  </div>
</section>
      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
        © 2026 Nicholas Allen
      </footer>
    </div>
  );
}