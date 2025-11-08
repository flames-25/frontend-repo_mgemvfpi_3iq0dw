/*
  FeatureMatrix renders modules with nested sub-features in a clean, readable grid.
*/

const features = [
  {
    module: 'Core Platform',
    description: 'Foundational tools to build and ship with confidence.',
    items: [
      { name: 'Real-time Collaboration', note: 'Multiplayer editing with presence' },
      { name: 'Version History', note: 'Time travel across edits' },
      { name: 'Unlimited Projects', note: 'No caps while you explore' },
    ],
  },
  {
    module: 'Automation',
    description: 'Scale repetitive workflows with smart triggers.',
    items: [
      { name: 'Workflow Builder', note: 'Drag-and-drop logic' },
      { name: 'Scheduled Jobs', note: 'CRON & human-friendly intervals' },
      { name: 'Webhooks', note: 'Push events to your stack' },
    ],
  },
  {
    module: 'Insights',
    description: 'Understand adoption and ship what matters most.',
    items: [
      { name: 'Dashboard Overview', note: 'KPIs at a glance' },
      { name: 'Funnel Analytics', note: 'See where users drop off' },
      { name: 'Export to CSV', note: 'Audit-friendly data access' },
    ],
  },
];

export default function FeatureMatrix() {
  return (
    <section className="relative py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Modules & Sub‑modules</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">A structured overview to quickly understand what you get in each area.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((group) => (
            <div key={group.module} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{group.module}</h3>
              <p className="mt-1 text-sm text-gray-600">{group.description}</p>
              <ul className="mt-4 space-y-3">
                {group.items.map((it) => (
                  <li key={it.name} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{it.name}</p>
                      <p className="text-xs text-gray-600">{it.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
