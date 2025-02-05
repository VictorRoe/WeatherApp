import React from "react";
import { motion, Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  delay?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, delay = 0 }) => {
  const letters = text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delay,
      },
    },
  };

  const letterAnimation: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="inline-block overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-flex" }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
