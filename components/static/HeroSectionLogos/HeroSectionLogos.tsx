"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSectionLogos = () => {
  return (
    <div className="container relative dark:invert-100 max-lg:hidden">
      {/* Right */}
      <motion.div
        transition={{ delay: 0.1 }}
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        className="size-12 absolute top-0 right-23"
        whileHover="groupHover"
      >
        <motion.div
          style={createLogoStyles("right").style}
          variants={createLogoStyles("right").variant}
        >
          <Image src={"/logos/javascript.svg"} alt="JS" fill />
        </motion.div>
      </motion.div>

      <motion.div
        className="size-20 absolute top-22 right-3"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover="groupHover"
      >
        <motion.div
          style={createLogoStyles("right").style}
          variants={createLogoStyles("right").variant}
        >
          <Image src={"/logos/react.svg"} alt="React" fill />
        </motion.div>
      </motion.div>

      <motion.div
        className="size-12  absolute top-47 right-33"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        whileHover="groupHover"
      >
        <motion.div
          style={createLogoStyles("right").style}
          variants={createLogoStyles("right").variant}
        >
          <Image src={"/logos/angular.svg"} alt="Angular" fill />
        </motion.div>
      </motion.div>

      <motion.div
        className="size-16 absolute top-65 right-3"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover="groupHover"
      >
        <motion.div
          style={createLogoStyles("right").style}
          variants={createLogoStyles("right").variant}
        >
          <Image src={"/logos/tailwind.svg"} alt="Tailwind" fill />
        </motion.div>
      </motion.div>

      {/* Left */}
      <motion.div
        className="size-12 absolute top-0 left-23"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover="groupHover"
      >
        <motion.div
          style={createLogoStyles("left").style}
          variants={createLogoStyles("left").variant}
        >
          <Image src={"/logos/node.svg"} alt="Node" fill />
        </motion.div>
      </motion.div>

      <motion.div
        className="size-20 absolute top-22 left-3"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover="groupHover"
      >
        <motion.div
          style={createLogoStyles("left").style}
          variants={createLogoStyles("left").variant}
        >
          <Image src={"/logos/docker.svg"} alt="Docker" fill />
        </motion.div>
      </motion.div>

      <motion.div
        className="size-12  absolute top-47 left-33"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        whileHover="groupHover"
      >
        <motion.div
          style={createLogoStyles("left").style}
          variants={createLogoStyles("left").variant}
        >
          <Image src={"/logos/nest.svg"} alt="Nest" fill />
        </motion.div>
      </motion.div>

      <motion.div
        className="size-16 absolute top-65 left-3"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover="groupHover"
      >
        <motion.div
          style={createLogoStyles("left").style}
          variants={createLogoStyles("left").variant}
        >
          <Image src={"/logos/pgsql.svg"} alt="PostgreSQL" fill />
        </motion.div>
      </motion.div>
    </div>
  );
};

const createLogoStyles = (side: "left" | "right") => {
  return {
    style: {
      width: "100%",
      height: "100%",
      filter: "blur(2px)",
      opacity: 0.5,
      perspective: 800,
      rotateY: 25,
      rotateX: side === "left" ? 15 : -15,
    },
    variant: {
      groupHover: {
        filter: "",
        opacity: 1,
        scale: 1.15,
        rotateY: -10,
        y: -20,
      },
    },
  };
};

export default HeroSectionLogos;
