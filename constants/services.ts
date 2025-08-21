export type ServiceT = {
  id: number;
  thumbnail: string;
  title: string;
  techStack: string[];
  features: string[];
};

export const SERVICES: ServiceT[] = [
  {
    id: 1,
    thumbnail: "",
    title: "Front-End",
    techStack: ["Next.js", "React.js", "Tanstack", "SWR", "Zustand", "Tailwind", "Emotion"],
    features: [],
  },
  {
    id: 2,
    thumbnail: "",
    title: "Back-End",
    techStack: ["Node.js", "Express.js", "Nest.js", "PostgreSQL", "Prisma"],
    features: [],
  },
  {
    id: 3,
    thumbnail: "",
    title: "Mobile app",
    techStack: [],
    features: [],
  },
  {
    id: 1,
    thumbnail: "",
    title: "Desktop app",
    techStack: [],
    features: [],
  },
  {
    id: 1,
    thumbnail: "",
    title: "Telegram bot",
    techStack: [],
    features: [],
  },
  {
    id: 1,
    thumbnail: "",
    title: "Discord bot",
    techStack: [],
    features: [],
  },
  {
    id: 1,
    thumbnail: "",
    title: "Web scraping",
    techStack: [],
    features: [],
  },
];
