import Link from "next/link";
import Image from "next/image";
import { MailIcon } from "lucide-react";

import githubImg from "root/public/logos/github.svg";
import telegramImg from "root/public/logos/telegram.svg";
import linkedinImg from "root/public/logos/linkedin.svg";

const Footer = () => {
  return (
    <footer className="container mt-16 py-10 border-t border-separator">
      <div className="f-center gap-3">
        {/* <Link className="btn-ghost" href={"tel:09389461065"}>
          <PhoneIcon className="btn-icon-size" />
          <span dir="ltr">0938 0946 1065</span>
        </Link> */}

        <Link className="btn-ghost" href={"mailto:farzad.vav.work@gmail"}>
          <MailIcon className="btn-icon-size" />
          <span>arrowupteam@gmail.com</span>
        </Link>
      </div>

      <div className="f-center gap-3 mt-6">
        <Link className="btn-ghost btn-link" href={"/"}>
          <span>Home</span>
        </Link>

        <Link className="btn-ghost btn-link" href={"/"}>
          <span>Survey</span>
        </Link>

        <Link className="btn-ghost btn-link" href={"/"}>
          <span>Donate</span>
        </Link>

        <button className="btn-ghost" disabled>
          Hiring
        </button>
      </div>

      <div className="f-center gap-3 mt-6">
        <Link className="size-12" href={"https://t.me/arrowupteam"}>
          <Image width={64} height={64} alt="telegram" src={telegramImg} className="size-full" />
        </Link>
        <Link className="size-12" href={"https://www.linkedin.com/company/arrow-up-team"}>
          <Image width={64} height={64} alt="linkedin" src={linkedinImg} className="size-full" />
        </Link>
        <Link className="size-12" href={"https://github.com/ArrowUpTeam"}>
          <Image
            width={64}
            height={64}
            alt="github"
            src={githubImg}
            className="size-full dark:invert-100"
          />
        </Link>
      </div>

      <p className="text-center mt-12">
        All rights and ownership of this site belong to ArrowUp team ©
      </p>
    </footer>
  );
};

export default Footer;
