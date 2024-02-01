"use client";
import { motion } from "framer-motion";

export default function FadeIn({
  children,
  className,
  id,
  xInitial = 0,
  scaleInitial = 0.7,
  delay = 0.25,
  ease = [0, 0.71, 0.2, 1.01],
  duration = 1.5,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  xInitial?: number;
  scaleInitial?: number;
  delay?: number;
  ease?: number[];
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: scaleInitial, x: xInitial }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      //   animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: ease,
      }}
      viewport={{ once: true }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}
