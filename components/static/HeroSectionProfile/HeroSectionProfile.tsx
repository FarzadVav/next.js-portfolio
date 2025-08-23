"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROFILE } from "root/constants/about";

function HeroSectionProfile() {
  return (
    <div className="size-52 relative mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-full bg-foreground/50 dark:bg-foreground/25 top-1/3 left-0 right-0 rounded-full blur-3xl absolute -z-10"
      />

      <motion.div
        initial={{ scale: 0, opacity: 0, y: "100%" }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="size-full ring-8 ring-background-thick  rounded-full overflow-hidden"
      >
        <Image width={208} height={208} src={PROFILE} alt="Farzad Vahdati" className="size-full" />
      </motion.div>
    </div>
  );
}

export default HeroSectionProfile;
