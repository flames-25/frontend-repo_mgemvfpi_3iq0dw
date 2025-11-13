import Spline from '@splinetool/react-spline';
import { Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Section3D from './Section3D';

export default function HeaderHero() {
  return (
    <Section3D height="560px" overlay="from-black/10 via-black/30 to-black/70">
      <header className="relative w-full h-[560px]">
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                <Star className="h-3.5 w-3.5 text-yellow-300" />
                Simple, transparent pricing
              </span>
              <motion.h1
                className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                An interconnected ecosystem
                <span className="block text-white/90 font-semibold md:font-extrabold">where data flows across every application</span>
              </motion.h1>
              <motion.p
                className="mt-4 max-w-2xl text-base md:text-lg text-white/80"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                CRM, HRMS, Financial Accounting, Operations, Supply Chain and more — unified by seamless data movement.
              </motion.p>
              <motion.div
                className="mt-6 flex items-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <button className="rounded-xl bg-white text-gray-900 px-4 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition [transform-style:preserve-3d] hover:rotateX-2 hover:-rotateY-2">
                  Start free
                </button>
                <button className="rounded-xl bg-indigo-600/90 text-white px-4 py-2.5 text-sm font-semibold shadow-md hover:bg-indigo-600 hover:shadow-lg transition [transform-style:preserve-3d] hover:-rotateX-2 hover:rotateY-2 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" /> See it in action
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>
    </Section3D>
  );
}
