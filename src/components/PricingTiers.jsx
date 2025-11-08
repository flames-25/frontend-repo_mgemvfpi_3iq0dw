import { Check, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    priceMonthly: 12,
    priceYearly: 120,
    tagline: 'Everything to get moving',
    features: [
      'Unlimited viewers',
      '3 active projects',
      'Community support',
      'Basic automations',
    ],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Growth',
    priceMonthly: 29,
    priceYearly: 290,
    tagline: 'For teams shipping faster',
    features: [
      'Unlimited projects',
      'Advanced automations',
      'Team roles & permissions',
      'Priority support',
    ],
    cta: 'Choose Growth',
    highlight: true,
  },
  {
    name: 'Scale',
    priceMonthly: 79,
    priceYearly: 790,
    tagline: 'Security and control at scale',
    features: [
      'SSO & audit logs',
      'Custom limits & SLAs',
      'Dedicated success manager',
      'Enterprise security reviews',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
];

export default function PricingTiers() {
  return (
    <section className="relative py-10 md:py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50/50 to-white" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pricing</h2>
          <p className="mt-2 text-gray-600">Three simple plans. Switch or cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border ${tier.highlight ? 'border-indigo-300 ring-2 ring-indigo-200' : 'border-gray-200'} bg-white p-6 shadow-sm`}>
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">
                  <Zap className="h-3.5 w-3.5" /> Most popular
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                  <p className="text-sm text-gray-600">{tier.tagline}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-gray-900">${tier.priceMonthly}</span>
                  <span className="text-sm text-gray-500">/mo</span>
                  <div className="text-xs text-gray-500">or ${tier.priceYearly}/yr</div>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition ${tier.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-900 text-white hover:bg-black'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">Prices in USD. Taxes may apply.</p>
      </div>
    </section>
  );
}
