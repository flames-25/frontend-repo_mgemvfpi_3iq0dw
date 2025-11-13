import { motion } from 'framer-motion';
import Section3D from './Section3D';

// Deep feature matrix tailored to many modules across applications, with 3D accents
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
    <Section3D height="auto" overlay="from-white via-white/85 to-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Modules & Sub-features</h2>
          <p className="mt-2 text-gray-700 max-w-2xl">A concise inventory of what your team can deliver across all applications.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, gi) => (
            <motion.div
              key={group.module}
              className="relative rounded-2xl border border-white/50 bg-white/80 backdrop-blur p-6 shadow-sm [transform-style:preserve-3d]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ rotateX: 4, rotateY: -3, z: 24, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            >
              <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-cyan-500/0 to-fuchsia-500/0 group-hover:from-indigo-500/10 group-hover:via-cyan-500/10 group-hover:to-fuchsia-500/10" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </Section3D>
  );
}
