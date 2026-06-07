"use client";

import { ElementType } from "react";
import { motion } from "motion/react";

export const WordSlideIn = ({
  text,
  className,
  as: Tag = "div",
  delay = 0,
  stagger = 0.08,
  highlights = {},
}: {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
  highlights?: Record<string, string>;
}) => {
  const words = text.trim().split(/\s+/);

  return (
    <Tag className={`flex flex-wrap ${className ?? ""}`} aria-label={text}>
      {words.map((word, i) => {
        const key = word.toLowerCase();
        const highlightClass = highlights[key] ?? "";

        return (
          <span
            key={i}
            className={`inline-flex overflow-hidden mr-[0.25em] ${highlightClass}`}
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 22,
                stiffness: 160,
                delay: delay + i * stagger,
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
};
