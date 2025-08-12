"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSectionLogos = () => {
  return (
    <div className="container relative dark:invert-100 max-lg:hidden">
      <motion.div
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="size-12 absolute top-0 right-23"
      >
        <Image src={"/logos/javascript.svg"} alt="زبان javascript" fill />
      </motion.div>
      <motion.div
        className="size-20 absolute top-22 right-3"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image src={"/logos/react.svg"} alt="پکیج react" fill />
      </motion.div>
      <motion.div
        className="size-12  absolute top-47 right-33"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      >
        <Image src={"/logos/angular.svg"} alt="پکیج angular" fill />
      </motion.div>
      <motion.div
        className="size-16 absolute top-65 right-3"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Image src={"/logos/tailwind.svg"} alt="پکیج tailwind" fill />
      </motion.div>

      <motion.div
        className="size-12 absolute top-0 left-23"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Image src={"/logos/node.svg"} alt="زبان node" fill />
      </motion.div>
      <motion.div
        className="size-20 absolute top-22 left-3"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image src={"/logos/docker.svg"} alt="ابزار docker" fill />
      </motion.div>
      <motion.div
        className="size-12  absolute top-47 left-33"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      >
        <Image src={"/logos/nest.svg"} alt="پکیج nest" fill />
      </motion.div>
      <motion.div
        className="size-16 absolute top-65 left-3"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Image src={"/logos/pgsql.svg"} alt="دیتابیس pgsql" fill />
      </motion.div>
    </div>
  );
};

export default HeroSectionLogos;
