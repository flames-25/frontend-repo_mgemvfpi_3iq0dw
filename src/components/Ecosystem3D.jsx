import Spline from '@splinetool/react-spline';
import { AppWindow, Database, Users2, Briefcase, LineChart, Workflow, Package, CreditCard } from 'lucide-react';

const nodes = [
  { label: 'CRM', icon: AppWindow, color: 'from-indigo-500/30 to-indigo-500/0' },
  { label: 'HRMS', icon: Users2, color: 'from-pink-500/30 to-pink-500/0' },
  { label: 'Finance', icon: CreditCard, color: 'from-amber-500/30 to-amber-500/0' },
  { label: 'Operations', icon: Briefcase, color: 'from-blue-500/30 to-blue-500/0' },
  { label: 'Supply Chain', icon: Package, color: 'from-emerald-500/30 to-emerald-500/0' },
  { label: 'Analytics', icon: LineChart, color: 'from-cyan-500/30 to-cyan-500/0' },
  { label: 'Automation', icon: Workflow, color: 'from-violet-500/30 to-violet-500/0' },
  { label: 'Data Platform', icon: Database, color: 'from-fuchsia-500/30 to-fuchsia-500/0' },
];

export default function Ecosystem3D() {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-16">
      {/* 3D Spline background for depth */}
      <div className="absolute inset-0 -z-10 h-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Vignette and gradient mask for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">3D Ecosystem Constellation</h2>
          <p className="mt-2 text-gray-600">A visual, spatial map of your applications orbiting a shared data core.</p>
        </div>

        {/* Orbital layout */}
        <div className="relative mx-auto mt-8 md:mt-12 h-[420px] md:h-[520px] max-w-5xl">
          {/* Core */}
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/80 shadow-xl ring-1 ring-black/5 backdrop-blur flex items-center justify-center ecosystem-core">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-b from-indigo-500/15 to-indigo-500/0 blur-2xl" />
              <div className="relative text-center">
                <Database className="h-6 w-6 text-indigo-600" />
                <div className="mt-1 text-xs font-medium text-gray-800">Unified Data</div>
              </div>
            </div>
          </div>

          {/* Orbits (two rings) */}
          <div className="absolute inset-0">
            {/* Outer ring path */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-indigo-200/50" />
            {/* Inner ring path */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-indigo-100/60" />
          </div>

          {/* Nodes positioned around the orbit with subtle 3D tilt and float */}
          {nodes.map((n, i) => {
            const Icon = n.icon;
            // Distribute 8 nodes: 5 on outer, 3 on inner ring
            const outerPositions = [0, 72, 144, 216, 288];
            const innerPositions = [30, 150, 270];
            const isOuter = i < 5;
            const angle = (isOuter ? outerPositions[i] : innerPositions[i - 5]) * (Math.PI / 180);
            const radius = isOuter ? 210 : 150; // px, matches ring sizes /2
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const floatDelay = i * 0.12;
            return (
              <div
                key={n.label}
                className="ecosystem-node group absolute left-1/2 top-1/2 will-change-transform"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                <div
                  className="relative rounded-xl bg-white/85 backdrop-blur shadow-lg ring-1 ring-black/5 px-3.5 py-2.5 md:px-4 md:py-3 hover:shadow-xl transition-shadow duration-300 [transform-style:preserve-3d] animate-float"
                  style={{ animationDelay: `${floatDelay}s` }}
                >
                  <div className={`pointer-events-none absolute -inset-6 rounded-[28px] bg-gradient-to-b ${n.color} blur-2xl`} />
                  <div className="relative z-10 flex items-center gap-2 md:gap-2.5">
                    <Icon className="h-4 w-4 md:h-5 md:w-5 text-indigo-600 drop-shadow-sm" />
                    <span className="text-sm md:text-base font-medium text-gray-800 drop-shadow-sm">{n.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
