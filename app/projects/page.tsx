// app/projects/page.tsx

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-100 fade-in">
      {/* Page Header */}
      <header className="max-w-6xl mx-auto px-6 pt-28 pb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Projects & Practical Experience
        </h1>
        <p className="mt-4 text-lg max-w-4xl">
          Professional, self‑taught, and academic projects across technical support,
          automation, networking, and systems troubleshooting.
        </p>
      </header>

      {/* Professional Experience Projects */}
      <section className="max-w-6xl mx-auto px-10 py-14 bg-zinc-700 border border-neutral-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-8">
          Professional Experience
        </h2>

        <div className="space-y-10 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold">
              Network Troubleshooting (POS Environments)
            </h3>
            <p className="text-sm text-neutral-300">
              Jan 2025 – Present · Mad Mobile
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Front‑line POS network troubleshooting for restaurant operators</li>
              <li>Supported CAKE star‑topology network design</li>
              <li>Guided unmanaged switch placement when router ports were exhausted</li>
              <li>Diagnosed configuration issues vs defective hardware</li>
              <li>Explained network design decisions to merchants</li>
            </ul>
            <p className="mt-2 text-sm text-neutral-300">
              Key Skills: TCP/IP, Network Troubleshooting, Ticketing Systems
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Phone System Usage (Dialpad & Five9)
            </h3>
            <p className="text-sm text-neutral-300">
              Jan 2025 – Present · Mad Mobile
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Daily use of Dialpad and Five9 in live support environments</li>
              <li>Managed calls, queues, and customer workflows</li>
            </ul>
            <p className="mt-2 text-sm text-neutral-300">
              Key Skills: Customer Service, Telephony Systems, Ticketing Systems
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10 py-6">
        <div className="h-px bg-neutral-400" />
      </div>

      {/* Self-Taught Automation & AI Projects */}
      <section className="max-w-6xl mx-auto px-10 py-14 bg-zinc-700 border border-neutral-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-8">
          Self‑Taught Automation & AI Projects
        </h2>

        <div className="space-y-10 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold">
              Salesforce Support Notes Generator (Custom GPT)
            </h3>
            <p className="text-sm text-neutral-300">
              Sep 2025 – Dec 2025 · Self‑Directed
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Built a GPT to convert raw call transcripts into Salesforce‑ready notes</li>
              <li>Extracted issues, actions, outcomes, and next steps</li>
              <li>Removed irrelevant transcript noise</li>
              <li>Designed output for direct pasting into Salesforce</li>
            </ul>
            <p className="mt-2 text-sm text-neutral-300">
              Key Skills: Artificial Intelligence, ChatGPT, Documentation Automation
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Salesforce Support Notes Generator (Copilot Studio & Power Automate)
            </h3>
            <p className="text-sm text-neutral-300">
              Jan 2026 – Mar 2026 · Self‑Directed
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Built an automation using Copilot Studio and Power Automate</li>
              <li>Ingested Dialpad CSV transcripts</li>
              <li>Extracted metadata and routed content into structured templates</li>
              <li>Automated categorization, summaries, and escalation notes</li>
              <li>Reduced manual wrap‑up time to near zero</li>
            </ul>
            <p className="mt-2 text-sm text-neutral-300">
              Key Skills: Copilot Studio, Power Automate, Workflow Automation
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Email Writing Assistant (Custom GPT)
            </h3>
            <p className="text-sm text-neutral-300">
              Aug 2025 – Sep 2025 · Self‑Directed
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Built a GPT to draft customer emails using approved templates</li>
              <li>Converted brief input into polished, send‑ready responses</li>
            </ul>
            <p className="mt-2 text-sm text-neutral-300">
              Key Skills: Artificial Intelligence, ChatGPT, Written Communication
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Email Writing Assistant (Copilot Studio)
            </h3>
            <p className="text-sm text-neutral-300">
              Sep 2025 · Self‑Directed
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Reimplemented GPT logic as a Copilot Studio agent</li>
              <li>Used standardized templates and guided prompts</li>
              <li>Optimized for internal support workflows</li>
            </ul>
            <p className="mt-2 text-sm text-neutral-300">
              Key Skills: Copilot Studio, Prompt Design, Workflow Design
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Custom GPT Creation Assistant
            </h3>
            <p className="text-sm text-neutral-300">
              Aug 2025 · Self‑Directed
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Built a GPT to accelerate creation of other GPTs</li>
              <li>Generated prompts, instructions, and configuration details</li>
              <li>Standardized internal AI tool creation processes</li>
            </ul>
            <p className="mt-2 text-sm text-neutral-300">
              Key Skills: Artificial Intelligence, ChatGPT, Workflow Design
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Personal Portfolio Website
            </h3>
            <p className="text-sm text-neutral-300">
              Mar 2026 · Self‑Directed
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Designed and built a multi‑page Next.js portfolio</li>
              <li>Implemented routing, shared layouts, and navigation</li>
              <li>Debugged deployment, layout, and styling issues</li>
            </ul>
            <p className="mt-2 text-sm text-neutral-300">
              Key Skills: Next.js, Tailwind CSS, Troubleshooting
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-10 py-6">
        <div className="h-px bg-neutral-400" />
      </div>

      {/* Field & Academic Work */}
      <section className="max-w-6xl mx-auto px-10 py-14 bg-zinc-700 border border-neutral-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-8">
          Field Work & Academic Labs
        </h2>

        <ul className="list-disc list-inside space-y-2 max-w-4xl">
          <li>Proprietary Ticketing System Usage · May–Sep 2024</li>
          <li>ISP Backup Replacement (Cradlepoint LTE) · Aug 2024</li>
          <li>Primary Internet Outage Diagnosis · Aug 2024</li>
          <li>Starlink Upgrade Site Survey · Aug 2024</li>
          <li>VOIP Upgrade (Grandstream) · Aug 2024</li>
          <li>Commercial Display Replacement · Jul 2024</li>
          <li>POS Workstation Connectivity Restoration · Jul 2024</li>
          <li>Indoor/Outdoor TV Backlight Repair · Jun 2024</li>
          <li>Security+ Labs · Feb 2023</li>
          <li>Network Design with Packet Tracer · Jan 2023</li>
          <li>Patch Panels, Punch‑Downs & Cable Crimping · Jan 2023</li>
          <li>Windows & Linux CLI Labs · Aug 2022</li>
          <li>PC Assembly, OS & VM Installation · Aug 2022</li>
        </ul>
      </section>
    </div>
  );
}