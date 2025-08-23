import { StaticImageData } from "next/image";

import githubImg from "root/public/github.svg";
import telegramImg from "root/public/telegram.svg";
import linkedinImg from "root/public/linkedin.svg";

export const EMAIL = "";

export const PHONE_NUMBER = "";

export const LINKS = [
  { logo: telegramImg, name: "telegram", link: "https://t.me/farzad_vav" },
  { logo: linkedinImg, name: "linkedin", link: "https://www.linkedin.com/in/farzad-vahdati" },
  { logo: githubImg, name: "github", link: "https://github.com/FarzadVav" },
];

export type EventT = {
  id: number;
  title: string;
  thumbnail: StaticImageData;
  description: string;
  date: string;
};
export const EVENTS: EventT[] = [];

export type CommentT = {
  id: number;
  fullname: string;
  text: string;
  createdAt: string;
};
export const COMMENTS: CommentT[] = [];
