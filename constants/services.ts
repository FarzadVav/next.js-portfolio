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
  description: string;
  techStack: string[];
  features: { name: string; description: string }[];
  questions: { title: string; description: string }[];
};

export const SERVICES: ServiceT[] = [
  {
    id: 1,
    thumbnail: frontendImg,
    title: "Front-End",
    description:
      "A beautiful website isn’t just about looks—it needs to be fast, responsive, and user-friendly. That’s where Next.js comes in. I build modern front-ends that load quickly, rank well on search engines, and work seamlessly across devices",
    techStack: ["Next.js", "React.js", "Tanstack", "SWR", "Zustand", "Tailwind", "Emotion"],
    features: [
      { name: "SEO friendly", description: "SEO friendly" },
      { name: "State management", description: "State management" },
      { name: "Performance optimization", description: "Performance optimization" },
      { name: "UI/UX design", description: "UI/UX design" },
      { name: "Web accessibility", description: "Web accessibility" },
      { name: "Mobile friendly", description: "Mobile friendly" },
    ],
    questions: [],
  },
  {
    id: 2,
    thumbnail: backendImg,
    title: "Back-End",
    description:
      "Your business runs on data—and you need a back-end that's secure, reliable, and scalable. I design and develop back-ends that handle everything from APIs to databases to authentication",
    techStack: ["Node.js", "Express.js", "Nest.js", "MongoDB", "PostgreSQL", "Prisma"],
    features: [
      { name: "Fast server", description: "Fast server" },
      { name: "Front-End compatibility", description: "Front-End compatibility" },
      {
        name: "Application architecture/Design pattern",
        description: "Application architecture/Design pattern",
      },
      { name: "Database optimization", description: "Database optimization" },
      { name: "Security support", description: "Security support" },
    ],
    questions: [],
  },
  {
    id: 3,
    thumbnail: mobileImg,
    title: "Mobile app",
    description:
      "Reaching customers on mobile is essential. With React Native & Expo, I develop apps that run smoothly on both iOS and Android—saving you time and cost",
    techStack: ["React-Native", "Expo", "Typescript"],
    features: [
      { name: "Cross-platfrom", description: "Cross-platfrom" },
      { name: "Web support", description: "Web support" },
      { name: "Fast development", description: "Fast development" },
      {
        name: "Development/Maintenance Integrated",
        description: "Development/Maintenance Integrated",
      },
      { name: "Modern design & animations", description: "Modern design & animations" },
    ],
    questions: [],
  },
  {
    id: 4,
    thumbnail: desktopImg,
    title: "Desktop app",
    description:
      "Need a desktop app that works on Windows, Mac, and Linux? I use Electron.js to build powerful apps with a single codebase",
    techStack: ["Electron.js", "Node.js", "Typescript"],
    features: [
      { name: "Cross-platfrom", description: "Cross-platfrom" },
      { name: "Fast development", description: "Fast development" },
      {
        name: "Development/Maintenance Integrated",
        description: "Development/Maintenance Integrated",
      },
    ],
    questions: [],
  },
  {
    id: 5,
    thumbnail: telegramImg,
    title: "Telegram bot",
    description:
      "Telegram is more than messaging—it’s a platform for automation, customer support, and engagement. I build Telegram bots that make your business more interactive",
    techStack: ["Node.js", "Telegraf.js"],
    features: [
      { name: "Customer support", description: "Customer support" },
      { name: "Notification systems", description: "Notification systems" },
      { name: "E-commerce bots", description: "E-commerce bots" },
      { name: "Automation tools", description: "Automation tools" },
    ],
    questions: [],
  },
  {
    id: 6,
    thumbnail: discordImg,
    title: "Discord bot",
    description:
      "For gaming communities, startups, and businesses, Discord bots create fun, automated, and powerful experiences",
    techStack: ["Node.js", "Discord.js"],
    features: [
      { name: "Moderation bots", description: "Moderation bots" },
      { name: "Music bots", description: "Music bots" },
      { name: "Game integrations", description: "Game integrations" },
      { name: "Custom commands", description: "Custom commands" },
    ],
    questions: [],
  },
  {
    id: 7,
    thumbnail: webScrapingImg,
    title: "Web scraping",
    description:
      "The internet is full of valuable data—but collecting it manually takes time. With web scraping, I help businesses extract, organize, and use data automatically. Whether it’s market research, competitor analysis, price monitoring, or lead generation, I can build scraping solutions tailored to your needs",
    techStack: ["Node.js", "Puppeteer.js", "Playwright", "Cheerio", "Crawler.js", "Superagent.js"],
    features: [
      { name: "Realtime data collection", description: "Realtime data collection" },
      { name: "Excel, JSON, or database", description: "Excel, JSON, or database" },
      { name: "Web monitoring", description: "Web monitoring" },
      { name: "API integration", description: "API integration" },
    ],
    questions: [],
  },
  {
    id: 8,
    thumbnail: cliImg,
    title: "CLI app",
    description:
      "Sometimes, the best tools don’t need a UI. I create CLI apps that automate tasks, improve developer workflows, and simplify operations",
    techStack: ["Node.js", "Commander.js", "Inquirer.js", "Typescript"],
    features: [
      { name: "CI/CD operations", description: "CI/CD operations" },
      { name: "Task automation", description: "Task automation" },
      { name: "Developer tools", description: "Developer tools" },
      { name: "Project scaffolding", description: "Project scaffolding" },
    ],
    questions: [],
  },
  {
    id: 9,
    thumbnail: engineeringImg,
    title: "Engineering",
    description:
      "Building apps is more than coding—it’s about process, reliability, and scalability. I bring my experience in Agile, DevOps, testing, and CI/CD to ensure projects are delivered smoothly",
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
      { name: "Technical leadership", description: "Technical leadership" },
      { name: "Team leadership", description: "Team leadership" },
      { name: "Product ownership", description: "Product ownership" },
      { name: "DevOps", description: "DevOps" },
      { name: "Testing", description: "Testing" },
      { name: "Maintenance", description: "Maintenance" },
    ],
    questions: [],
  },
];
