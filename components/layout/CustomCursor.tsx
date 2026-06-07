"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers hover state if the hovered element or any of its parents are interactive
      const isClickable = target.closest('a, button, input, select, textarea, [role="button"]');
      if (isClickable) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, input, select, textarea, [role="button"]');
      if (isClickable) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
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
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.7 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
