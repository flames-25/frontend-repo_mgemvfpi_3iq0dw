import { Rocket, Star } from 'lucide-react';

export default function HeaderHero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <Star className="h-3.5 w-3.5 fill-indigo-600 text-indigo-600" />
            Simple, transparent pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Pick the plan that fits
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">your product journey</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-gray-600">
            Clear modules, powerful sub‑features, and room to grow. Switch plans anytime.
          </p>
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 px-4 py-2 backdrop-blur">
            <div className="text-sm text-gray-700">
              <span className="font-semibold text-indigo-700">2 months free</span> when billed annually
            </div>
            <Rocket className="h-4 w-4 text-indigo-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
