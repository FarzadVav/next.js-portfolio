import { UrlObject } from "url";
import { StaticImageData } from "next/image";

import profileImg from "root/public/profile.jpg";
import melkTodayImg from "root/public/melktoday.png";
import beautyPlusImg from "root/public/beautyplus.png";
import sarvestanImg from "root/public/melktoday.png";
import appleServiceImg from "root/public/apple-service.png";
import shahinTanzimSanatImg from "root/public/shahintanzimsanat.png";

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

export type ProjectT = {
  id: number;
  title: string;
  thumbnail: StaticImageData;
  description: string;
  link: UrlObject | __next_route_internal_types__.RouteImpl<string>;
};
export const PROJECTS: ProjectT[] = [
  {
    id: 1,
    title: "MelkToday",
    thumbnail: melkTodayImg,
    description:
      "The Malek Today platform offers a wide range of services that are by your side, focusing on three principles: high quality customer service, security, and uniqueness. In the first stage, this platform is fully specialized in providing zero to one hundred services in the field of property and real estate. Malek Today offers you the best and most practical services in the field of property and real estate. You can have the most complete and up-to-date files at Malek Today, contact the best and most expert real estate consultants in the city, and take action to buy, sell, and provide the desired services related to your property in the shortest possible time. To contact us, contact our experts and consultants through the Contact Us section of the site",
    link: "https://melktoday.ir",
  },
  {
    id: 2,
    title: "BeautyPlus",
    thumbnail: beautyPlusImg,
    description:
      "Beauty Plus is the first and most complete management platform in the beauty industry, which officially began its activity in 1402. At Beauty Plus, we have created a space for you, dear ones, to multiply your business income with optimal management and the use of practical tools! Men's barbershops and women's beauty salons, beauty clinics, dentistry and massage centers ...are under the Beauty Plus platform",
    link: "https://www.beautyplusapp.ir",
  },
  {
    id: 3,
    title: "Sarvestan",
    thumbnail: sarvestanImg,
    description:
      "Sarvestan, the most powerful and optimized application in the field of treatment services for patients and doctors, began its activity in 1403. This platform is very different in infrastructure and implementation from similar platforms. Because Sarvestan is the result of 20 years of research by Iranian doctors and engineers. For the first time, by utilizing the most powerful search engine that specializes in intelligently finding connections between diseases and treatment",
    link: "https://sarvestan.app",
  },
  {
    id: 4,
    title: "Apple-Service",
    thumbnail: appleServiceImg,
    description:
      "Apple Service Iran, a subsidiary of Arad Amertat Holding, operates in Iran with more than a decade of experience in supplying and providing original Apple parts and products. The driving force behind Apple Service Iran’s activities over the years has been the satisfaction of customers’ trust in the company, and in this regard, it has tried to continue improving and developing its performance.Therefore, today we are proud to supply other products of popular brands that our customers need",
    link: "https://apple-service.ir",
  },
  {
    id: 5,
    title: "Shahin Tanzim Sanat",
    thumbnail: shahinTanzimSanatImg,
    description:
      "Acquiring new technologies requires a lot of effort and effort. Balance technology is one of the vital needs of every advanced country today. Two decades of activity, research, development, and industrial work in this field have put us at the forefront of work, which is of great value to all members of the nation and helps us in serving the people, and our pride in serving and developing business in the best and purest way possible. And in our efforts, we wish you well-being and prosperity",
    link: "https://shahintanzimsanat.com",
  },
];

export type FaqT = {
  id: number;
  question: string;
  answer: string;
};
export const FAQS: FaqT[] = [
  {
    id: 1,
    question: "What is Next.js, and why do you use it for web development?",
    answer:
      "Next.js is a powerful React framework that enables server-side rendering (SSR), static site generation (SSG), and API routes for building fast, scalable, and SEO-friendly web applications. We use Next.js because it simplifies development with features like automatic code splitting, hot reloading, and built-in routing, ensuring high performance and a great user experience. It’s trusted by companies like Netflix and Nike for its versatility and speed",
  },
  {
    id: 2,
    question: "How does your service ensure my website performs well under high traffic?",
    answer:
      "Our Next.js-based solutions leverage server-side rendering (SSR) and static site generation (SSG) to handle high traffic efficiently. Features like Incremental Static Regeneration (ISR) allow content updates without full rebuilds, ensuring scalability. We also integrate with CDNs and optimize code to reduce latency, delivering fast load times even with millions of users",
  },
  {
    id: 3,
    question: "Can you help me integrate my Next.js website with a headless CMS?",
    answer:
      "Yes, we specialize in integrating Next.js with headless CMS platforms like Storyblok or BCMS. This setup allows for flexible content management while maintaining fast performance through SSR and SSG. Our team ensures seamless API connections for real-time content updates, ideal for content-heavy sites like blogs or e-commerce platforms",
  },
  {
    id: 4,
    question: "Is Next.js suitable for building a SaaS platform?",
    answer:
      "Absolutely. Next.js is ideal for SaaS platforms due to its scalability, support for API routes, and ability to handle dynamic data. However, we recommend separating frontend and backend logic for complex SaaS architectures to avoid coupling issues, ensuring maintainability and flexibility as your platform grows",
  },
  {
    id: 5,
    question: "How do you handle SEO for Next.js websites?",
    answer:
      "Next.js enhances SEO through server-side rendering and static site generation, which ensure search engines can crawl and index content efficiently. We optimize metadata, use the Next.js Image component for faster image loading, and implement best practices to improve Core Web Vitals, helping your site rank higher",
  },
  {
    id: 6,
    question: "What are the challenges of using Next.js, and how do you address them?",
    answer:
      "Some developers find Next.js complex due to features like server components, caching, or fetch configurations. We mitigate this by following best practices, using clear documentation, and structuring projects to minimize complexity. Our team also provides training and support to ensure smooth development and maintenance",
  },
  {
    id: 7,
    question: "Can I deploy my Next.js website on platforms other than Vercel?",
    answer:
      "Yes, while Vercel is optimized for Next.js, we can deploy your site on platforms like AWS, Netlify, or others using tools like OpenNext for serverless environments. We tailor deployments to your infrastructure needs, ensuring cost-efficiency and compatibility with your existing systems",
  },
];

export const CV = null; // TODO: add CV file

type CommentT = {
  id: number;
  fullname: string;
  position: string;
  link: UrlObject | __next_route_internal_types__.RouteImpl<string>;
  text: string;
};
export const COMMENTS: CommentT[] = [
  {
    id: 1,
    fullname: "Alireza Nemati",
    position: "CEO",
    link: "https://instagram.com",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quo provident error maiores neque tenetur sunt molestiae sed excepturi corrupti perspiciatis laudantium ab aliquid tempore magnam! Ad dolores sapiente consequuntur",
  },
  {
    id: 2,
    fullname: "Hadi Varazgani",
    position: "Co-Founder, Tech lead",
    link: "https://instagram.com",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quo provident error maiores neque tenetur sunt molestiae sed excepturi corrupti perspiciatis laudantium ab aliquid tempore magnam! Ad dolores sapiente consequuntur",
  },
  {
    id: 3,
    fullname: "Shahriar Vaziri",
    position: "Co-Founder, Graphic Designer",
    link: "https://instagram.com",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quo provident error maiores neque tenetur sunt molestiae sed excepturi corrupti perspiciatis laudantium ab aliquid tempore magnam! Ad dolores sapiente consequuntur",
  },
  {
    id: 4,
    fullname: "Younes Hajizadeh",
    position: "Fullstack JS developer",
    link: "https://linkedin.com",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quo provident error maiores neque tenetur sunt molestiae sed excepturi corrupti perspiciatis laudantium ab aliquid tempore magnam! Ad dolores sapiente consequuntur",
  },
  {
    id: 5,
    fullname: "Alireza Gholami",
    position: "Software engineer",
    link: "https://linkedin.com",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quo provident error maiores neque tenetur sunt molestiae sed excepturi corrupti perspiciatis laudantium ab aliquid tempore magnam! Ad dolores sapiente consequuntur",
  },
  {
    id: 6,
    fullname: "Puuya Ghasemi",
    position: "IT admin",
    link: "https://instagram.com",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, quo provident error maiores neque tenetur sunt molestiae sed excepturi corrupti perspiciatis laudantium ab aliquid tempore magnam! Ad dolores sapiente consequuntur",
  },
];
