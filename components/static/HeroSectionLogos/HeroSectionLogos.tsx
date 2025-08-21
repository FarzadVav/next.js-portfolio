"use client";

import { motion } from "framer-motion";
import { HashIcon } from "lucide-react";

const HeroSectionLogos = () => {
  return (
    <div className="container relative uppercase max-lg:hidden">
      {/* Right */}
      <motion.div
        className="absolute top-0 right-0"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover="groupHover"
      >
        <motion.span
          className="badge"
          style={createLogoStyles("right").style}
          variants={createLogoStyles("right").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>javascript</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-18 right-27"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover="groupHover"
      >
        <motion.span
          className="badge"
          style={createLogoStyles("right").style}
          variants={createLogoStyles("right").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>react.js</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-27 right-0"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover="groupHover"
      >
        <motion.span
          className="badge"
          style={createLogoStyles("right").style}
          variants={createLogoStyles("right").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>tailwind</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-45 right-27"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover="groupHover"
      >
        <motion.span
          className="badge"
          style={createLogoStyles("right").style}
          variants={createLogoStyles("right").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>node.js</span>
        </motion.span>
      </motion.div>

      {/* Left */}
      <motion.div
        className="absolute top-0 left-0"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover="groupHover"
      >
        <motion.span
          className="badge"
          style={createLogoStyles("left").style}
          variants={createLogoStyles("left").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>typescript</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-18 left-27"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover="groupHover"
      >
        <motion.span
          className="badge"
          style={createLogoStyles("left").style}
          variants={createLogoStyles("left").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>next.js</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-27 left-0"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover="groupHover"
      >
        <motion.span
          className="badge"
          style={createLogoStyles("left").style}
          variants={createLogoStyles("left").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>tanstack</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-45 left-27"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover="groupHover"
      >
        <motion.span
          className="badge"
          style={createLogoStyles("left").style}
          variants={createLogoStyles("left").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>postgresql</span>
        </motion.span>
      </motion.div>
    </div>
  );
};

const createLogoStyles = (side: "left" | "right") => {
  return {
    style: {
      width: "100%",
      height: "100%",
      filter: "blur(1px)",
      opacity: 0.5,
      perspective: 800,
      rotateY: 25,
      rotateX: side === "left" ? 5 : -5,
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
