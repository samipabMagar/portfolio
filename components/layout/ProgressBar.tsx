"use client";

import { motion, useScroll } from "motion/react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1  bg-brand z-[100] origin-left drop-shadow-md"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
