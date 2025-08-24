"use client";

import { shuffle } from "lodash";
import { useState } from "react";
import { motion } from "framer-motion";
import { HashIcon } from "lucide-react";

import { SKILLS, TechnicalSkillT } from "root/constants/about";
import { useMounted } from "@mantine/hooks";

const HeroSectionLogos = () => {
  const isMounted = useMounted();

  const [skills, setSkills] = useState<TechnicalSkillT[]>(shuffle(SKILLS.technical).slice(0, 8));

  const setRandomSkills = () => {
    setSkills(shuffle(SKILLS.technical).slice(0, 8));
  };

  if (!isMounted) return null;

  return (
    <div className="container relative uppercase max-lg:hidden">
      {/* Right */}
      <motion.div
        className="absolute top-0 right-0"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover="groupHover"
        whileTap="groupTap"
        onClick={setRandomSkills}
      >
        <motion.span
          className="badge"
          style={{
            ...createLogoStyles("right").style,
            backgroundColor: skills[0].color.bg,
            color: skills[0].color.fr,
          }}
          variants={createLogoStyles("right").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>{skills[0].name}</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-18 right-27"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover="groupHover"
        whileTap="groupTap"
        onClick={setRandomSkills}
      >
        <motion.span
          className="badge"
          style={{
            ...createLogoStyles("right").style,
            backgroundColor: skills[1].color.bg,
            color: skills[1].color.fr,
          }}
          variants={createLogoStyles("right").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>{skills[1].name}</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-27 right-0"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover="groupHover"
        whileTap="groupTap"
        onClick={setRandomSkills}
      >
        <motion.span
          className="badge"
          style={{
            ...createLogoStyles("right").style,
            backgroundColor: skills[2].color.bg,
            color: skills[2].color.fr,
          }}
          variants={createLogoStyles("right").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>{skills[2].name}</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-45 right-27"
        initial={{ x: 500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover="groupHover"
        whileTap="groupTap"
        onClick={setRandomSkills}
      >
        <motion.span
          className="badge"
          style={{
            ...createLogoStyles("right").style,
            backgroundColor: skills[3].color.bg,
            color: skills[3].color.fr,
          }}
          variants={createLogoStyles("right").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>{skills[3].name}</span>
        </motion.span>
      </motion.div>

      {/* Left */}
      <motion.div
        className="absolute top-0 left-0"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover="groupHover"
        whileTap="groupTap"
        onClick={setRandomSkills}
      >
        <motion.span
          className="badge"
          style={{
            ...createLogoStyles("left").style,
            backgroundColor: skills[4].color.bg,
            color: skills[4].color.fr,
          }}
          variants={createLogoStyles("left").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>{skills[4].name}</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-18 left-27"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover="groupHover"
        whileTap="groupTap"
        onClick={setRandomSkills}
      >
        <motion.span
          className="badge"
          style={{
            ...createLogoStyles("left").style,
            backgroundColor: skills[5].color.bg,
            color: skills[5].color.fr,
          }}
          variants={createLogoStyles("left").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>{skills[5].name}</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-27 left-0"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover="groupHover"
        whileTap="groupTap"
        onClick={setRandomSkills}
      >
        <motion.span
          className="badge"
          style={{
            ...createLogoStyles("left").style,
            backgroundColor: skills[6].color.bg,
            color: skills[6].color.fr,
          }}
          variants={createLogoStyles("left").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>{skills[6].name}</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute top-45 left-27"
        initial={{ x: -500, y: 100, scale: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover="groupHover"
        whileTap="groupTap"
        onClick={setRandomSkills}
      >
        <motion.span
          className="badge"
          style={{
            ...createLogoStyles("left").style,
            backgroundColor: skills[7].color.bg,
            color: skills[7].color.fr,
          }}
          variants={createLogoStyles("left").variant}
        >
          <HashIcon className="badge-icon-size" />
          <span>{skills[7].name}</span>
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
      opacity: 0.75,
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
        cursor: "pointer",
      },
      groupTap: {
        scale: 0.9,
        perspective: 800,
        rotateY: 25,
        rotateX: side === "left" ? 5 : -5,
      },
    },
  };
};

export default HeroSectionLogos;
