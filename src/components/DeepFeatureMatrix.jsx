// Deep feature matrix tailored to many modules across applications
const groups = [
  {
    module: 'Core Platform',
    items: [
      { name: 'Users', note: 'CRUD, import/export, segments' },
      { name: 'Permissions', note: 'RBAC, policies, audit' },
      { name: 'Environments', note: 'Dev/Staging/Prod isolation' },
    ],
  },
  {
    module: 'Automation',
    items: [
      { name: 'Workflow Builder', note: 'Visual editor with branches' },
      { name: 'Triggers', note: 'Events, schedules, webhooks' },
      { name: 'Approvals', note: 'Multi-step with SLAs' },
    ],
  },
  {
    module: 'Insights',
    items: [
      { name: 'Dashboards', note: 'KPIs, drilldowns, filters' },
      { name: 'Funnels', note: 'Drop-off analysis' },
      { name: 'Exports', note: 'CSV, S3, BigQuery' },
    ],
  },
  {
    module: 'Security',
    items: [
      { name: 'SSO & SCIM', note: 'Okta, Azure AD, Google' },
      { name: 'Compliance', note: 'SOC 2, HIPAA options' },
      { name: 'Audit Log', note: 'Immutable trails' },
    ],
  },
];

export default function DeepFeatureMatrix() {
  return (
    <section className="relative py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Modules & Sub-features</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">A concise inventory of what your team can deliver across all applications.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.module} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{group.module}</h3>
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
