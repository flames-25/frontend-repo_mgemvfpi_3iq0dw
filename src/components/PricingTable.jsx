import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Section3D from './Section3D';

// Pricing designed to map to many modules across 8 applications with 3D accents
const plans = [
  {
    name: 'Starter',
    priceMo: 49,
    priceYr: 490,
    description: 'For small teams documenting modules across a few apps.',
    modulesIncluded: 'Up to 50 modules total',
    features: [
      'Unlimited viewers',
      '5 editors',
      '3 environments per app',
      'Module docs & checklists',
      'Email support',
    ],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Growth',
    priceMo: 149,
    priceYr: 1490,
    description: 'Best for teams rolling out modules across all 8 apps.',
    modulesIncluded: 'Up to 250 modules total',
    features: [
      'Unlimited viewers',
      '20 editors',
      'Advanced module matrix',
      'Automation rules & approvals',
      'Priority support',
    ],
    cta: 'Choose Growth',
    highlighted: true,
  },
  {
    name: 'Scale',
    priceMo: 399,
    priceYr: 3990,
    description: 'For enterprises with deep module hierarchies and controls.',
    modulesIncluded: 'Unlimited modules',
    features: [
      'SSO, SCIM & audit logs',
      'Custom roles & policies',
      'Dedicated success manager',
      'HIPAA/BAA and SOC 2 reports',
      '24/7 support & SLA',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function PricingTable() {
  return (
    <Section3D height="auto" overlay="from-white via-white/85 to-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Plans for every rollout</h2>
          <p className="mt-2 text-gray-700">Monthly or annual (2 months free). Switch anytime.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border ${plan.highlighted ? 'border-indigo-300 ring-2 ring-indigo-200' : 'border-white/50'} bg-white/80 backdrop-blur p-6 shadow-sm [transform-style:preserve-3d]`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ rotateX: 4, rotateY: -4, z: 24, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">Most popular</div>
              )}
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-gray-900">${plan.priceMo}</span>
                  <span className="text-sm text-gray-500">/mo</span>
                  <div className="text-xs text-gray-500">or ${plan.priceYr}/yr</div>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-medium text-indigo-800">{plan.modulesIncluded}</div>
              <ul className="mt-5 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`${plan.highlighted ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-900 text-white hover:bg-black'} mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition`}>
                {plan.cta}
              </button>
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-cyan-500/0 to-fuchsia-500/0 group-hover:from-indigo-500/10 group-hover:via-cyan-500/10 group-hover:to-fuchsia-500/10" />
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">Prices in USD. Taxes may apply.</p>
      </div>
    </Section3D>
  );
}
