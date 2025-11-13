import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Section3D
 * Wrap any content with a full-width Spline background, soft gradient veil,
 * and subtle parallax based on scroll. Designed to make flat sections feel 3D.
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

  return (
    <section className={`relative w-full overflow-hidden ${className}`} style={{ height }}>
      <motion.div className="absolute inset-0 -z-10" style={{ y, scale }}>
        <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${overlay}`} />
      </motion.div>
      <div className="relative">
        {children}
      </div>
    </section>
  );
}
