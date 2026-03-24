export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-transparent text-white fade-in">
      <header className="max-w-6xl mx-auto px-10 pt-16 pb-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Case Studies
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-3xl">
          Real-world support scenarios demonstrating structured troubleshooting,
          clear communication, and clean escalation in production POS and SaaS
          environments.
        </p>
      </header>

      {/* Case Study 1 */}
      <section className="max-w-6xl mx-auto px-10 py-6">
        <div className="bg-zinc-700 border border-neutral-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Intermittent Payment Failures During Dinner Rush
          </h2>
          <p className="text-sm text-neutral-100 mb-6">
            L1 Technical Support · Live Production Incident · High Business Impact
          </p>

          <div className="space-y-4 text-neutral-100 max-w-4xl">
            <p>
              <strong>Situation:</strong> A restaurant reported intermittent
              card payment failures across multiple terminals during peak hours,
              creating customer delays and rising frustration.
            </p>
            <p>
              <strong>Assessment:</strong> Initial symptoms did not align with a
              processor-wide outage. I gathered timelines, recent changes, and
              verified device scope to rule out application-side failures.
            </p>
            <p>
              <strong>Action:</strong> Validated router-centered network topology,
              isolated affected terminals, confirmed LAN vs WAN behavior, and
              documented reproducible failure windows with timestamps.
            </p>
            <p>
              <strong>Outcome:</strong> Escalated to L2 with complete reproduction
              notes, allowing downstream teams to identify the root cause without
              rework and restore stable payment flow.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="max-w-6xl mx-auto px-10 py-6">
        <div className="bg-zinc-700 border border-neutral-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Printer and Terminal Outages After Network Hardware Change
          </h2>
          <p className="text-sm text-neutral-100 mb-6">
            Product Support Context · Hardware and Network Troubleshooting
          </p>

          <div className="space-y-4 text-neutral-100 max-w-4xl">
            <p>
              <strong>Situation:</strong> A merchant replaced network equipment
              and immediately lost printer and terminal connectivity across the
              store.
            </p>
            <p>
              <strong>Assessment:</strong> Determined the application was
              functioning normally by validating workflows and isolating
              connectivity failures at the device level.
            </p>
            <p>
              <strong>Action:</strong> Walked the customer through structured port
              checks, cabling validation, and device re-registration while
              maintaining calm during escalating frustration.
            </p>
            <p>
              <strong>Outcome:</strong> Restored connectivity without escalation,
              minimizing downtime and reinforcing customer confidence in support.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 3 */}
      <section className="max-w-6xl mx-auto px-10 py-6">
        <div className="bg-zinc-700 border border-neutral-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Reducing Escalation Delays Caused by Inconsistent Case Notes
          </h2>
          <p className="text-sm text-neutral-100 mb-6">
            Support Operations · Process Improvement
          </p>

          <div className="space-y-4 text-neutral-100 max-w-4xl">
            <p>
              <strong>Situation:</strong> L2 and Payments teams frequently needed
              clarification due to inconsistent intake notes, slowing
              investigation and resolution.
            </p>
            <p>
              <strong>Assessment:</strong> Identified that case summaries and
              reproduction steps varied widely depending on agent experience.
            </p>
            <p>
              <strong>Action:</strong> Built Power Automate and Copilot Studio
              workflows to convert Dialpad transcripts into standardized,
              Salesforce-ready case notes with consistent categorization.
            </p>
            <p>
              <strong>Outcome:</strong> Reduced escalation back-and-forth,
              improved downstream efficiency, and lowered per-case wrap-up time.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}