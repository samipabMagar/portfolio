"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Exact dot tracking (fast spring)
  const cursorX = useSpring(mouseX, { stiffness: 1000, damping: 40 });
  const cursorY = useSpring(mouseY, { stiffness: 1000, damping: 40 });

  // Floating blur tracking (loose, lazy spring for "trailing" effect)
  const blurX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const blurY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div className="hidden lg:block">
      {/* Tiny Sharp Target Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-brand rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Large Lazy Blur Background */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-brand/20 blur-[60px] rounded-full pointer-events-none z-[0]"
        style={{
          x: blurX,
          y: blurY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
