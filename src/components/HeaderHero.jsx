import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function HeaderHero() {
  return (
    <header className="relative w-full">
      {/* Spline scene as animated background */}
      <div className="relative h-[560px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient veil to increase contrast over colorful scene; does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                <Star className="h-3.5 w-3.5 text-yellow-300" />
                Simple, transparent pricing
              </span>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                An interconnected ecosystem
                <span className="block text-white/90 font-semibold md:font-extrabold">where data flows across every application</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
                CRM, HRMS, Financial Accounting, Operations, Supply Chain and more — unified by seamless data movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
