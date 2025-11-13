import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';

/**
 * Section3D
 * Wrap any content with a full-width Spline background, soft gradient veil,
 * and subtle parallax based on scroll. Includes graceful fallback if Spline
 * is slow or blocked: a nice gradient with subtle texture remains visible.
 */
export default function Section3D({
  scene = 'https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode',
  height = 'auto',
  className = '',
  overlay = 'from-white/60 via-white/70 to-white',
  children,
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 30]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.02]);
  const [loaded, setLoaded] = useState(false);

  return (
    <section className={`relative w-full overflow-hidden ${className}`} style={{ height }}>
      {/* Fallback gradient/backplate so section stays elegant even if Spline fails */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white" />

      {/* Parallax 3D background */}
      <motion.div className="absolute inset-0 -z-10" style={{ y, scale }}>
        <Spline
          scene={scene}
          style={{ width: '100%', height: '100%' }}
          onLoad={() => setLoaded(true)}
        />
        {/* Veil to improve text contrast */}
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${overlay}`} />
      </motion.div>

      {/* Subtle loading shimmer shown until Spline loads */}
      {!loaded && (
        <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/60 to-transparent" />
          <div className="absolute left-1/2 top-1/3 h-48 w-[120%] -translate-x-1/2 rotate-[-6deg] bg-gradient-to-r from-indigo-200/40 via-fuchsia-200/30 to-cyan-200/40 blur-2xl" />
        </div>
      )}

      <div className="relative">{children}</div>
    </section>
  );
}
