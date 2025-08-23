import { ReactNode } from "react";
import { StaticImageData } from "next/image";

import profileImg from "root/public/profile.jpg";

export const PROFILE = profileImg;

export const NAME = "Farzad Vahdati";

export const ABOUT_ME =
  "Hi, I'm a fullstack web developer focused on Next.js 💻 My expertise is building powerful applications with Javascript ✌️ I work on optimizing web applications for SEO, performance, state management, accessibility, and other important web parameters ✅";

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
