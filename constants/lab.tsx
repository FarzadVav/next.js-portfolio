import {
  FileUserIcon,
  LibraryBigIcon,
  LibraryIcon,
  PaletteIcon,
  PipetteIcon,
  ScanFaceIcon,
} from "lucide-react";
import { UrlObject } from "url";
import { ReactNode } from "react";

export type LabT = {
  id: number;
  icon: ReactNode;
  title: string;
  link: UrlObject | __next_route_internal_types__.RouteImpl<string>;
  description: string;
  techStack: string[];
};

export const LAB: LabT[] = [
  {
    id: 1,
    icon: <PaletteIcon className="size-full" />,
    title: "Kadoui-css",
    link: "https://github.com/FarzadVav/kadoui-css",
    description: "Kadoui TailwindCSS styles",
    techStack: ["CSS", "TailwindCSS", "PostCSS"],
  },
  {
    id: 2,
    icon: <LibraryIcon className="size-full" />,
    title: "Kadoui-react",
    link: "https://github.com/FarzadVav/kadoui-react",
    description: "Manage user accounts and profiles.",
    techStack: ["React.js", "Typescript", "Mantine-hooks"],
  },
  {
    id: 3,
    icon: <LibraryBigIcon className="size-full" />,
    title: "Kadoui-next",
    link: "https://github.com/FarzadVav/kadoui-react",
    description: "Implement real-time chat functionality.",
    techStack: ["Next.js", "Typescript"],
  },
  {
    id: 4,
    icon: <FileUserIcon className="size-full" />,
    title: "Next.js-business-portfolio",
    link: "https://github.com/FarzadVav/next.js-business-portfolio",
    description: "A Next.js portfolio template based on software service providers requirements",
    techStack: [
      "Next.js",
      "Typescript",
      "Kadoui-css",
      "Kadoui-react",
      "Kadoui-next",
      "Framer-motion",
    ],
  },
  {
    id: 5,
    icon: <PipetteIcon className="size-full" />,
    title: "Chrome-color-picker ",
    link: "https://github.com/FarzadVav/chrome-color-picker",
    description: "Chrome browser simple color picker extension for fast usage",
    techStack: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 6,
    icon: <ScanFaceIcon className="size-full" />,
    title: "Next.js-github-oauth",
    link: "https://github.com/FarzadVav/next.js-github-oauth",
    description: "A Next.js application for ready to use GitHub OAuth authentication example",
    techStack: ["Next.js", "Typescript", "TailwindCSS", "Daisyui", "Jose"],
  },
];
