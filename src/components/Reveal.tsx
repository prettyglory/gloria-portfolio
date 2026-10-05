import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: .5, delay, ease: [.32,.72,0,1] }}>{children}</motion.div>;
}
