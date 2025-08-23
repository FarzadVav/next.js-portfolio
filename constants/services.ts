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
import nextJsImg from "root/public/next-js.svg";

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
    title: "Front-End Development",
    description:
      "Create engaging, high-performance websites that captivate users and drive results. Our front-end solutions prioritize speed, responsiveness, and seamless user experiences across all devices, with a focus on SEO and accessibility to maximize your online presence",
    techStack: [
      "Next.js",
      "React.js",
      "Tanstack Query",
      "SWR",
      "Zustand",
      "Tailwind CSS",
      "Emotion",
      "TypeScript",
    ],
    features: [
      {
        name: "SEO Optimization",
        description:
          "Enhance search engine rankings with server-side rendering and optimized metadata",
      },
      {
        name: "State Management",
        description:
          "Efficiently manage complex application states with modern libraries like Zustand",
      },
      {
        name: "Performance Optimization",
        description: "Leverage code-splitting and lazy loading for lightning-fast load times",
      },
      {
        name: "UI/UX Design",
        description: "Deliver intuitive, visually appealing interfaces tailored to your brand",
      },
      {
        name: "Web Accessibility",
        description: "Ensure compliance with WCAG standards for inclusive user experiences",
      },
      {
        name: "Responsive Design",
        description: "Build mobile-first designs that adapt seamlessly to any screen size",
      },
    ],
    questions: [
      {
        title: "How do you ensure fast website performance?",
        description:
          "We use Next.js for server-side rendering, lazy loading, and image optimization to deliver blazing-fast load times",
      },
      {
        title: "Can you integrate our brand's design?",
        description:
          "Absolutely, we tailor UI/UX to match your brand guidelines using tools like Tailwind CSS and Emotion",
      },
      {
        title: "Is accessibility a priority?",
        description:
          "Yes, we follow WCAG guidelines to ensure your site is usable by everyone, including those with disabilities",
      },
    ],
  },
  {
    id: 2,
    thumbnail: backendImg,
    title: "Back-End Development",
    description:
      "Power your applications with robust, scalable, and secure back-end systems. We build APIs, manage databases, and implement authentication to ensure your business runs smoothly and securely, with seamless integration to front-end platforms",
    techStack: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "GraphQL",
    ],
    features: [
      {
        name: "High-Performance Servers",
        description:
          "Build APIs that handle high traffic with minimal latency using Node.js and Nest.js",
      },
      {
        name: "Front-End Compatibility",
        description: "Seamlessly integrate with modern front-end frameworks like React and Next.js",
      },
      {
        name: "Scalable Architecture",
        description: "Design modular systems with microservices and clean architecture patterns",
      },
      {
        name: "Database Optimization",
        description: "Optimize queries and indexing for fast, efficient data retrieval",
      },
      {
        name: "Security First",
        description: "Implement JWT, OAuth, and encryption to protect sensitive data",
      },
    ],
    questions: [
      {
        title: "How do you ensure back-end security?",
        description:
          "We use industry-standard practices like JWT, OAuth, and data encryption, plus regular security audits",
      },
      {
        title: "Can you scale the back-end for growth?",
        description:
          "Yes, we design with microservices and cloud-ready solutions to handle increasing traffic",
      },
      {
        title: "Do you support custom APIs?",
        description: "We build tailored REST or GraphQL APIs to meet your specific business needs",
      },
    ],
  },
  {
    id: 3,
    thumbnail: mobileImg,
    title: "Mobile App Development",
    description:
      "Reach your audience on the go with cross-platform mobile apps that deliver native-like performance. Using React Native and Expo, we create cost-effective, feature-rich apps for iOS and Android with a single codebase",
    techStack: ["React Native", "Expo", "TypeScript", "Redux", "React Navigation"],
    features: [
      {
        name: "Cross-Platform Apps",
        description: "Develop once, deploy on both iOS and Android for cost efficiency",
      },
      {
        name: "Web Integration",
        description: "Enable web support for apps to reach broader audiences",
      },
      {
        name: "Rapid Development",
        description: "Leverage Expo’s tooling for faster development and deployment cycles",
      },
      {
        name: "Maintenance Included",
        description: "Provide ongoing updates and support for long-term app reliability",
      },
      {
        name: "Modern UI/Animations",
        description: "Create engaging interfaces with smooth animations and transitions",
      },
    ],
    questions: [
      {
        title: "How do you ensure app performance?",
        description:
          "We optimize with React Native’s native modules and test on real devices for smooth performance",
      },
      {
        title: "Can you publish to app stores?",
        description:
          "Yes, we handle the full publishing process for both iOS App Store and Google Play",
      },
      {
        title: "Do you support app updates?",
        description:
          "We provide maintenance plans to keep your app updated with new features and OS changes",
      },
    ],
  },
  {
    id: 4,
    thumbnail: desktopImg,
    title: "Desktop App Development",
    description:
      "Build powerful, cross-platform desktop applications for Windows, Mac, and Linux. Using Electron.js, we create apps with native-like performance and seamless integration with web technologies, tailored to your business needs",
    techStack: ["Electron.js", "Node.js", "TypeScript", "React", "Webpack"],
    features: [
      {
        name: "Cross-Platform Support",
        description: "Develop one app that runs flawlessly on Windows, Mac, and Linux",
      },
      {
        name: "Rapid Development",
        description: "Use web technologies for faster development and easier updates",
      },
      {
        name: "Integrated Maintenance",
        description: "Provide ongoing support to ensure compatibility and performance",
      },
      {
        name: "Custom Features",
        description:
          "Build tailored functionalities like file system access or system tray integration",
      },
    ],
    questions: [
      {
        title: "Can you integrate with existing systems?",
        description:
          "Yes, Electron.js apps can integrate with local and web-based systems seamlessly",
      },
      {
        title: "How do you handle updates?",
        description:
          "We implement auto-update mechanisms to keep your app current without user hassle",
      },
      {
        title: "Are desktop apps secure?",
        description: "We use secure coding practices and sandboxing to protect your app and data",
      },
    ],
  },
  {
    id: 5,
    thumbnail: telegramImg,
    title: "Telegram Bot Development",
    description:
      "Automate customer interactions and enhance engagement with custom Telegram bots. From customer support to e-commerce, our bots streamline processes and improve user experiences on the Telegram platform",
    techStack: ["Node.js", "Telegraf.js", "TypeScript", "MongoDB"],
    features: [
      {
        name: "Customer Support Bots",
        description: "Automate responses to common queries, reducing support workload",
      },
      {
        name: "Notification Systems",
        description: "Send real-time updates and alerts to users or groups",
      },
      {
        name: "E-Commerce Integration",
        description: "Enable product browsing and payments directly in Telegram",
      },
      {
        name: "Custom Automation",
        description: "Build bots tailored to your unique business processes",
      },
    ],
    questions: [
      {
        title: "Can bots handle complex tasks?",
        description:
          "Yes, we design bots with advanced logic to handle tasks like order processing or data retrieval",
      },
      {
        title: "How secure are Telegram bots?",
        description: "We use secure APIs and encryption to protect user data and interactions",
      },
      {
        title: "Can you integrate with our systems?",
        description:
          "We can connect bots to your existing APIs or databases for seamless functionality",
      },
    ],
  },
  {
    id: 6,
    thumbnail: discordImg,
    title: "Discord Bot Development",
    description:
      "Enhance your Discord community with custom bots that automate tasks, engage users, and add functionality. From moderation to entertainment, our bots make your server more interactive and efficient",
    techStack: ["Node.js", "Discord.js", "TypeScript", "MongoDB"],
    features: [
      {
        name: "Moderation Tools",
        description: "Automate user management, content filtering, and server rules enforcement",
      },
      {
        name: "Music Bots",
        description: "Stream music and manage playlists directly in your Discord server",
      },
      {
        name: "Game Integrations",
        description: "Add game stats, leaderboards, or interactive features to engage users",
      },
      {
        name: "Custom Commands",
        description: "Create tailored commands to match your community’s needs",
      },
    ],
    questions: [
      {
        title: "Can bots handle large servers?",
        description: "Yes, we optimize bots for performance even in high-traffic Discord servers",
      },
      {
        title: "Are custom features possible?",
        description: "We can build unique commands and integrations tailored to your community",
      },
      {
        title: "How do you ensure bot uptime?",
        description: "We deploy bots with reliable hosting and monitoring to minimize downtime",
      },
    ],
  },
  {
    id: 7,
    thumbnail: webScrapingImg,
    title: "Web Scraping Solutions",
    description:
      "Unlock valuable insights with automated web scraping solutions. We extract and organize data for market research, competitor analysis, price monitoring, or lead generation, delivering clean, usable data in your preferred format",
    techStack: [
      "Node.js",
      "Puppeteer",
      "Playwright",
      "Cheerio",
      "Crawler.js",
      "Superagent",
      "TypeScript",
    ],
    features: [
      {
        name: "Real-Time Data Collection",
        description: "Scrape data as it updates to keep your insights current",
      },
      {
        name: "Flexible Output Formats",
        description: "Deliver data in Excel, JSON, CSV, or directly to your database",
      },
      {
        name: "Web Monitoring",
        description: "Track changes on websites for price updates or content shifts",
      },
      {
        name: "API Integration",
        description: "Connect scraped data to your existing systems or third-party APIs",
      },
    ],
    questions: [
      {
        title: "Is web scraping legal?",
        description:
          "We adhere to ethical scraping practices and comply with website terms and regulations",
      },
      {
        title: "Can you scrape complex websites?",
        description: "Yes, we use tools like Puppeteer to handle dynamic, JavaScript-heavy sites",
      },
      {
        title: "How do you ensure data accuracy?",
        description: "We implement validation and error-checking to deliver clean, reliable data",
      },
    ],
  },
  {
    id: 8,
    thumbnail: cliImg,
    title: "CLI App Development",
    description:
      "Streamline workflows with custom command-line interface (CLI) tools. Perfect for developers and businesses, our CLI apps automate tasks, enhance productivity, and integrate seamlessly into CI/CD pipelines or developer environments",
    techStack: ["Node.js", "Commander.js", "Inquirer.js", "TypeScript", "ShellJS"],
    features: [
      {
        name: "CI/CD Integration",
        description: "Build tools that enhance automation in continuous integration pipelines",
      },
      {
        name: "Task Automation",
        description: "Automate repetitive tasks like file processing or deployments",
      },
      {
        name: "Developer Tools",
        description: "Create utilities to improve coding workflows and productivity",
      },
      {
        name: "Project Scaffolding",
        description: "Generate project structures and boilerplates with a single command",
      },
    ],
    questions: [
      {
        title: "Can CLI tools integrate with our systems?",
        description: "Yes, we design CLIs to work with your existing tools and pipelines",
      },
      {
        title: "Are CLI apps easy to use?",
        description: "We prioritize intuitive commands and clear documentation for all users",
      },
      {
        title: "Do you support cross-platform CLIs?",
        description: "Our CLI tools are built to run on Windows, Mac, and Linux",
      },
    ],
  },
  {
    id: 9,
    thumbnail: engineeringImg,
    title: "Software Engineering & DevOps",
    description:
      "Deliver reliable, scalable software with our comprehensive engineering services. From Agile project management to DevOps and testing, we ensure your projects are built efficiently, tested thoroughly, and maintained for long-term success",
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
      "GitHub Actions",
    ],
    features: [
      {
        name: "Technical Leadership",
        description: "Guide projects with expertise in architecture and best practices",
      },
      {
        name: "Team Collaboration",
        description: "Foster efficient teamwork with Agile and Scrum methodologies",
      },
      {
        name: "Product Ownership",
        description: "Manage product lifecycles from ideation to deployment",
      },
      {
        name: "DevOps Pipelines",
        description: "Automate deployments and scaling with CI/CD and Docker",
      },
      {
        name: "Comprehensive Testing",
        description: "Ensure quality with unit, integration, and end-to-end tests",
      },
      {
        name: "Ongoing Maintenance",
        description: "Provide updates and optimizations for long-term reliability",
      },
    ],
    questions: [
      {
        title: "How do you manage large projects?",
        description:
          "We use Agile/Scrum and tools like Jira to ensure transparency and timely delivery",
      },
      {
        title: "Can you improve our DevOps?",
        description: "We implement CI/CD pipelines and containerization to streamline deployments",
      },
      {
        title: "Do you offer testing services?",
        description:
          "Yes, we cover unit, integration, and E2E testing with tools like Jest and Cypress",
      },
    ],
  },
];

export const NEXT_JS: ServiceT = {
  id: 10,
  thumbnail: nextJsImg,
  title: "Next.js Development",
  description:
    "Build cutting-edge web applications with Next.js, the leading React framework for server-side rendering and static site generation. We create high-performance, SEO-friendly websites that deliver exceptional user experiences across all devices",
  techStack: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "SWR",
    "Zustand",
    "Zod",
    "Prisma",
    "GraphQL",
    "WebRTC",
    "WebSocket",
  ],
  features: [
    {
      name: "Server-Side Rendering",
      description: "Improve SEO and load times with dynamic server-side content rendering",
    },
    {
      name: "Static Site Generation",
      description: "Deliver blazing-fast static pages with Next.js’s SSG capabilities",
    },
    {
      name: "API Routes",
      description: "Build backend functionality directly into your Next.js app with API routes",
    },
    {
      name: "Image Optimization",
      description: "Automatically optimize images for faster load times and better performance",
    },
    {
      name: "Incremental Static Regeneration",
      description:
        "Update static content on-demand without rebuilding the entire site, ensuring fresh content",
    },
  ],
  questions: [
    {
      title: "Why choose Next.js for our project?",
      description:
        "Next.js offers a powerful combination of performance, SEO, and developer experience, making it ideal for modern web applications",
    },
    {
      title: "Can you integrate with our existing systems?",
      description:
        "Yes, we can connect Next.js apps to your existing APIs, databases, or third-party services seamlessly",
    },
    {
      title: "How do you ensure scalability?",
      description:
        "We design Next.js applications with scalability in mind, using best practices and cloud-ready architectures",
    },
  ],
};
