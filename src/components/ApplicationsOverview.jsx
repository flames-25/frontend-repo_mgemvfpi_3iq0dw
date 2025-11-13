import { AppWindow, Layers, Puzzle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Section3D from './Section3D';

const apps = [
  { name: 'CRM', modules: 8, highlights: ['Leads', 'Opportunities', 'Accounts'] },
  { name: 'HRMS', modules: 6, highlights: ['Recruiting', 'Onboarding', 'Payroll'] },
  { name: 'Financial Accounting', modules: 7, highlights: ['GL', 'AP/AR', 'Revenue'] },
  { name: 'Operations Management', modules: 6, highlights: ['Work Orders', 'SLAs', 'Capacity'] },
  { name: 'Supply Chain Management', modules: 7, highlights: ['Inventory', 'Procurement', 'Logistics'] },
  { name: 'Procurement', modules: 5, highlights: ['Vendors', 'POs', 'Contracts'] },
  { name: 'Analytics', modules: 6, highlights: ['Dashboards', 'Funnels', 'Exports'] },
  { name: 'Automation', modules: 8, highlights: ['Workflows', 'Webhooks', 'Schedules'] },
];

function FlowChip({ label }) {
  return (
    <div className="shrink-0 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-white/50">
      {label}
    </div>
  );
}

export default function ApplicationsOverview() {
  const flow = [
    'CRM',
    'HRMS',
    'Financial Accounting',
    'Operations',
    'Supply Chain',
    'Analytics',
    'Automation',
  ];

  return (
    <Section3D height="auto" overlay="from-white via-white/85 to-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="mb-6 md:mb-10 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Interconnected Applications</h2>
            <p className="mt-2 text-gray-700 max-w-3xl">A unified ecosystem where customer, people, finance, operations, and supply chain data move seamlessly between applications.</p>
          </div>

          {/* Data flow ribbon (3D layered lines) */}
          <div className="relative rounded-2xl border border-indigo-100/60 bg-indigo-50/50 p-4 overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 top-3 h-0.5 w-[140%] bg-gradient-to-r from-indigo-400/60 via-indigo-500/80 to-fuchsia-500/60 blur-[1px]" />
              <div className="absolute -left-24 top-8 h-0.5 w-[140%] bg-gradient-to-r from-cyan-400/60 via-blue-500/80 to-indigo-500/60 blur-[1px]" />
              <div className="absolute -left-16 top-13 h-0.5 w-[140%] bg-gradient-to-r from-emerald-400/60 via-teal-500/80 to-cyan-500/60 blur-[1px]" />
            </div>
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-indigo-800">Data flows across the ecosystem</div>
            <div className="relative">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {flow.map((label, idx) => (
                  <div key={label} className="flex items-center gap-2">
                    <FlowChip label={label} />
                    {idx < flow.length - 1 && (
                      <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="shrink-0" aria-hidden>
                        <path d="M1 8 H22" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22 3 L27 8 L22 13" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              className="group rounded-2xl border border-white/50 bg-white/80 backdrop-blur p-5 shadow-sm transition [transform-style:preserve-3d] hover:shadow-xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ rotateX: 4, rotateY: -4, z: 20, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            >
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
                <Shield className="h-3.5 w-3.5 text-emerald-600" /> Seamless integration with shared data model
              </div>
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-fuchsia-500/0 group-hover:from-indigo-500/10 group-hover:via-cyan-500/10 group-hover:to-fuchsia-500/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section3D>
  );
}
