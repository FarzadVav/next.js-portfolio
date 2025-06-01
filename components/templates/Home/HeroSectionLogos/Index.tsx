"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSectionLogos = () => {
  return (
    <div className="container relative dark:invert-100">
      <motion.div
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="size-12 absolute top-0 right-0"
      >
        <Image src={"/logos/javascript.svg"} alt="زبان javascript" fill />
      </motion.div>
      <motion.div
        className="size-20 absolute top-20 -right-24"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image src={"/logos/react.svg"} alt="پکیج react" fill />
      </motion.div>
      <motion.div
        className="size-12  absolute top-40 right-6"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      >
        <Image src={"/logos/angular.svg"} alt="پکیج angular" fill />
      </motion.div>
      <motion.div
        className="size-16 absolute top-60 -right-16"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Image src={"/logos/tailwind.svg"} alt="پکیج tailwind" fill />
      </motion.div>

      <motion.div
        className="size-12 absolute top-0 left-0"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Image src={"/logos/node.svg"} alt="زبان node" fill />
      </motion.div>
      <motion.div
        className="size-20 absolute top-20 -left-24"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image src={"/logos/docker.svg"} alt="ابزار docker" fill />
      </motion.div>
      <motion.div
        className="size-12  absolute top-40 left-6"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      >
        <Image src={"/logos/nest.svg"} alt="پکیج nest" fill />
      </motion.div>
      <motion.div
        className="size-16 absolute top-60 -left-16"
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
