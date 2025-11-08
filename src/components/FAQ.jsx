export default function FAQ() {
  const faqs = [
    {
      q: 'Can I change plans later?',
      a: 'Yes, you can upgrade, downgrade, or cancel at any time from your workspace settings. Changes take effect immediately and are prorated.',
    },
    {
      q: 'Do you offer discounts?',
      a: 'Annual billing includes 2 months free. We also offer startup and education discounts—contact us to learn more.',
    },
    {
      q: 'Is my data secure?',
      a: 'We use encryption in transit and at rest, conduct regular security reviews, and offer SSO and audit logs on higher tiers.',
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-6">
        <h3 className="text-xl font-semibold text-gray-900">Frequently asked questions</h3>
        <dl className="mt-6 space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl border border-gray-200 bg-white p-5">
              <dt className="text-sm font-medium text-gray-900">{item.q}</dt>
              <dd className="mt-2 text-sm text-gray-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
