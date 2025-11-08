import { AppWindow, Layers, Puzzle, Shield } from 'lucide-react';

const apps = [
  { name: 'App 1 — Identity', modules: 6, highlights: ['SSO', 'MFA', 'User Directory'] },
  { name: 'App 2 — Billing', modules: 5, highlights: ['Subscriptions', 'Invoices', 'Taxes'] },
  { name: 'App 3 — Commerce', modules: 7, highlights: ['Catalog', 'Cart', 'Checkout'] },
  { name: 'App 4 — Analytics', modules: 6, highlights: ['Dashboards', 'Funnels', 'Exports'] },
  { name: 'App 5 — Automation', modules: 8, highlights: ['Workflows', 'Webhooks', 'Schedules'] },
  { name: 'App 6 — Messaging', modules: 5, highlights: ['Email', 'SMS', 'Push'] },
  { name: 'App 7 — Operations', modules: 6, highlights: ['Tickets', 'SLA', 'Status'] },
  { name: 'App 8 — Admin', modules: 4, highlights: ['Roles', 'Audit Log', 'Policies'] },
];

export default function ApplicationsOverview() {
  return (
    <section className="relative py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 md:mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">8 Applications Overview</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Each application is composed of multiple modules and sub-features. Explore the high-level scope below.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => (
            <div key={app.name} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-gray-900 font-semibold">
                  <AppWindow className="h-4 w-4 text-indigo-600" />
                  {app.name}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 px-2 py-0.5 text-xs font-medium">
                  <Layers className="h-3.5 w-3.5" /> {app.modules} modules
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {app.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                    <Puzzle className="h-3.5 w-3.5 text-indigo-600" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500">
                <Shield className="h-3.5 w-3.5 text-emerald-600" /> Enterprise-ready modules available
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
