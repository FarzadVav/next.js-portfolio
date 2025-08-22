import { StaticImageData } from "next/image";

import frontendImg from "root/public/frontend.png";
import backendImg from "root/public/backend.png";
import mobileImg from "root/public/mobile.png";
import desktopImg from "root/public/desktop.png";
import telegramImg from "root/public/telegram.png";
import discordImg from "root/public/discord.png";
import webScrapingImg from "root/public/web-scraping.png";
import cliImg from "root/public/cli.png";
import engineeringImg from "root/public/engineering.png";

export type ServiceT = {
  id: number;
  thumbnail: StaticImageData;
  title: string;
  techStack: string[];
  features: string[];
};

export const SERVICES: ServiceT[] = [
  {
    id: 1,
    thumbnail: frontendImg,
    title: "Front-End",
    techStack: ["Next.js", "React.js", "Tanstack", "SWR", "Zustand", "Tailwind", "Emotion"],
    features: [
      "SEO friendly",
      "State management",
      "Performance optimization",
      "UI/UX design",
      "Web accessibility",
      "Mobile friendly",
    ],
  },
  {
    id: 2,
    thumbnail: backendImg,
    title: "Back-End",
    techStack: ["Node.js", "Express.js", "Nest.js", "MongoDB", "PostgreSQL", "Prisma"],
    features: [
      "Fast server",
      "Front-End compatibility",
      "Application architecture/Design pattern",
      "Database optimization",
      "Security support",
    ],
  },
  {
    id: 3,
    thumbnail: mobileImg,
    title: "Mobile app",
    techStack: ["React-Native", "Expo", "Typescript"],
    features: [
      "Cross-platfrom",
      "Web support",
      "Fast development",
      "Development/Maintenance Integrated",
      "Modern design & animations",
    ],
  },
  {
    id: 4,
    thumbnail: desktopImg,
    title: "Desktop app",
    techStack: ["Electron.js", "Node.js", "Typescript"],
    features: ["Cross-platfrom", "Fast development", "Development/Maintenance Integrated"],
  },
  {
    id: 5,
    thumbnail: telegramImg,
    title: "Telegram bot",
    techStack: ["Node.js", "Telegraf.js"],
    features: ["Customer support", "Notification systems", "E-commerce bots", "Automation tools"],
  },
  {
    id: 6,
    thumbnail: discordImg,
    title: "Discord bot",
    techStack: ["Node.js", "Discord.js"],
    features: ["Moderation bots", "Music bots", "Game integrations", "Custom commands"],
  },
  {
    id: 7,
    thumbnail: webScrapingImg,
    title: "Web scraping",
    techStack: ["Node.js", "Puppeteer.js", "Playwright", "Cheerio", "Crawler.js", "Superagent.js"],
    features: [
      "Realtime data collection",
      "Excel, JSON, or database",
      "Web monitoring",
      "API integration",
    ],
  },
  {
    id: 8,
    thumbnail: cliImg,
    title: "CLI app",
    techStack: ["Node.js", "Commander.js", "Inquirer.js", "Typescript"],
    features: ["CI/CD operations", "Task automation", "Developer tools", "Project scaffolding"],
  },
  {
    id: 9,
    thumbnail: engineeringImg,
    title: "Engineering",
    techStack: [
      "Agile",
      "Scrum",
      "Linux",
      "Vite",
      "Turborepo",
      "Webpack",
      "Jest",
      "Vitest",
      "Cypress",
      "Playwright",
      "Docker",
    ],
    features: [
      "Technical leadership",
      "Team leadership",
      "Product ownership",
      "DevOps",
      "Testing",
      "Maintenance",
    ],
  },
];
