import { UrlObject } from "url";
import { StaticImageData } from "next/image";

import githubImg from "root/public/github.svg";
import telegramImg from "root/public/telegram.svg";
import linkedinImg from "root/public/linkedin.svg";
import mellatParkImg from "root/public/mellat-park.jpg";

export const EMAIL = "farzad.vav.work@gmail.com";

export const PHONE_NUMBER = "0938 0946 1065";

export type LinkT = {
  id: number;
  logo: StaticImageData;
  name: string;
  link: UrlObject | __next_route_internal_types__.RouteImpl<string>;
  description: string;
  invert: boolean;
};
export const LINKS: LinkT[] = [
  {
    id: 1,
    logo: telegramImg,
    name: "Telegram",
    link: "https://t.me/farzad_vav",
    description: "My daily channel from my activities and routines",
    invert: false,
  },
  {
    id: 2,
    logo: linkedinImg,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/farzad-vahdati",
    description: "Contentful activities and my work resume profile",
    invert: false,
  },
  {
    id: 3,
    logo: githubImg,
    name: "GitHub",
    link: "https://github.com/FarzadVav",
    description: "Open source world that i have",
    invert: true,
  },
];

export type EventT = {
  id: number;
  title: string;
  thumbnail: StaticImageData;
  description: string;
  date: Date;
};
export const EVENTS: EventT[] = [
  {
    id: 1,
    title: "Dev talk",
    thumbnail: mellatParkImg,
    description:
      "Let's talk about software community of Iran. How can we manage our skills or how we can work with the largest companies at Iran/Mashhad.",
    date: new Date("2025-11-05"),
  },
];

export type CommentT = {
  id: number;
  fullname: string;
  link: UrlObject | __next_route_internal_types__.RouteImpl<string>;
  text: string;
  createdAt: string;
};
export const COMMENTS: CommentT[] = [];
