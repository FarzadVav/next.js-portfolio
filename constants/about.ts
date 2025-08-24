import { ReactNode } from "react";
import { StaticImageData } from "next/image";

import profileImg from "root/public/profile.jpg";

export const PROFILE = profileImg;

export const NAME = "Farzad Vahdati";

export const ABOUT_ME =
  "Hi, I'm a fullstack web developer focused on Next.js 💻 My expertise is building powerful applications with Javascript ✌️ I work on optimizing web applications for SEO, performance, state management, accessibility, and other important web parameters ✅";

export const DETAIL = {
  birthday: "1384/8/5",
  location: "Iran, Mashhad",
  english: "Intermediate",
  scope: "Fullstack Javascript",
  experience: 3,
};

export type TechnicalSkillT = {
  id: number;
  name: string;
  color: {
    bg: string;
    fr: string;
  };
};
export type ProfessionalSkillT = string;
export type SkillsT = {
  technical: TechnicalSkillT[];
  professional: ProfessionalSkillT[];
};
export const SKILLS: SkillsT = {
  technical: [
    { id: 1, name: "Javascript", color: { bg: "#f0d24120", fr: "#f0d241" } },
    { id: 2, name: "Typescript", color: { bg: "#3178c620", fr: "#3178c6" } },
    { id: 3, name: "React.js", color: { bg: "#55c3db20", fr: "#55c3db" } },
    {
      id: 4,
      name: "Next.js",
      color: {
        bg: "color-mix(in oklab, var(--color-foreground) 10%, transparent)",
        fr: "var(--color-foreground)",
      },
    },
    { id: 5, name: "Tanstack", color: { bg: "#fe5d3720", fr: "#fe5d37" } },
    { id: 6, name: "Sass", color: { bg: "#cc669920", fr: "#cc6699" } },
    { id: 7, name: "TailwindCSS", color: { bg: "#00bcff20", fr: "#00bcff" } },
    { id: 8, name: "Node.js", color: { bg: "#49aa4d20", fr: "#49aa4d" } },
    {
      id: 9,
      name: "Express.js",
      color: {
        bg: "color-mix(in oklab, var(--color-foreground) 10%, transparent)",
        fr: "var(--color-foreground)",
      },
    },
    { id: 10, name: "Nest.js", color: { bg: "#e0234e20", fr: "#e0234e" } },
    { id: 11, name: "PostgreSQL", color: { bg: "#3f7f7f20", fr: "#3f7f7f" } },
    { id: 12, name: "Prisma", color: { bg: "#a9a6f020", fr: "#a9a6f0" } },
  ],
  professional: ["Team work", "Team leadership", "Problem solving", "Creativity"],
};

export type FeatureT = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
};
export const FEATURES: FeatureT[] = [];

export type ProjectT = {
  id: number;
  title: string;
  thumbnail: StaticImageData;
  description: string;
  link: string;
};
export const PROJECTS: ProjectT[] = [];

export type FaqT = {
  id: number;
  question: string;
  answer: string;
};
export const FAQS: FaqT[] = [];

export const CV = null; // TODO: add CV file
