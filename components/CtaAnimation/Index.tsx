"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const CtaAnimation: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: "5vh" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "all" }}
    >
      {children}
    </motion.div>
  );
};

export default CtaAnimation;
