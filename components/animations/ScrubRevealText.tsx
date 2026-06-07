"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const WordReveal = ({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number> | any;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="inline-block transition-opacity duration-75"
    >
      {children}
    </motion.span>
  );
};

export const ScrubRevealText = ({
  text,
  className,
  as: Component = "p",
  progress,
  range = [0, 1],
}: {
  text: string;
  className?: string;
  as?: any;
  progress?: MotionValue<number> | any;
  range?: [number, number];
}) => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress: intrinsicProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center center"],
  });

  const activeProgress = progress || intrinsicProgress;
  const words = text.trim().split(/\s+/);

  return (
    <Component
      ref={containerRef}
      className={`flex flex-wrap ${className || ""}`}
    >
      {words.map((word, i) => {
        const localStart =
          range[0] + (i / words.length) * (range[1] - range[0]);
        const localEnd =
          range[0] + ((i + 1) / words.length) * (range[1] - range[0]);

        const isBrandWord = word.includes("purpose.");
        const spanClass = `mr-[0.27em] ${isBrandWord ? "italic text-brand" : ""}`;

        return (
          <span key={i} className={spanClass}>
            <WordReveal
              progress={activeProgress}
              range={[localStart, localEnd]}
            >
              {word}
            </WordReveal>
          </span>
        );
      })}
    </Component>
  );
};
