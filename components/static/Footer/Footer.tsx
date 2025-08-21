import Link from "next/link";
import Image from "next/image";
import { LinkLoader } from "@kadoui/next";
import { LoaderIcon, MailIcon, PhoneIcon } from "lucide-react";

import profileImg from "root/public/profile.jpg";
import githubImg from "root/public/github.svg";
import telegramImg from "root/public/telegram.svg";
import linkedinImg from "root/public/linkedin.svg";

const Footer = () => {
  return (
    <footer className="mt-20 py-20 border-t-2 border-separator group">
      <div className="container">
        <Image
          width={108}
          height={108}
          src={profileImg}
          alt="Farzad Vahdati"
          className="size-27 rounded-full mx-auto transition-all not-group-hover:saturate-0"
        />

        <div className="f-center flex-wrap gap-3 mt-6">
          <Link className="btn btn-ghost" href={"tel:09389461065"}>
            <PhoneIcon className="btn-icon-size" />
            <span dir="ltr">0938 0946 1065</span>
          </Link>

          <Link className="btn btn-ghost" href={"mailto:farzad.vav.work@gmail"}>
            <MailIcon className="btn-icon-size" />
            <span>farzad.vav.work@gmail.com</span>
          </Link>
        </div>

        <div className="f-center gap-3 mt-6">
          <Link className="btn btn-ghost btn-link relative" href="/">
            <LinkLoader
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">Home</span>
                </>
              }
            >
              <span>Home</span>
            </LinkLoader>
          </Link>

          <Link className="btn btn-ghost btn-link relative" href="/about-us">
            <LinkLoader
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">About me</span>
                </>
              }
            >
              <span>About me</span>
            </LinkLoader>
          </Link>

          <Link className="btn btn-ghost btn-link relative" href="/contact-us">
            <LinkLoader
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">Contact me</span>
                </>
              }
            >
              <span>Contact me</span>
            </LinkLoader>
          </Link>
        </div>

        <div className="f-center gap-6 mt-6">
          <Link className="size-9" href={"https://t.me/arrowupteam"}>
            <Image width={64} height={64} alt="telegram" src={telegramImg} className="size-full" />
          </Link>
          <Link className="size-9" href={"https://www.linkedin.com/company/arrow-up-team"}>
            <Image width={64} height={64} alt="linkedin" src={linkedinImg} className="size-full" />
          </Link>
          <Link className="size-9" href={"https://github.com/ArrowUpTeam"}>
            <Image
              width={64}
              height={64}
              alt="github"
              src={githubImg}
              className="size-full dark:invert-100"
            />
          </Link>
        </div>

        <p className="text-center text-xs mt-20">
          All rights and ownership of this site belong to Farzad Vahdati ©
        </p>
      </div>
    </footer>
  );
};

export default Footer;
