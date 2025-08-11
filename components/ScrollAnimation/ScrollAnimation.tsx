"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type ScrollAnimationPropsT = HTMLMotionProps<"div">;

export function ScrollAnimation(props: ScrollAnimationPropsT) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "50%" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1 }}
      {...props}
    />
  );
}
