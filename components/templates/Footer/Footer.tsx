import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft, MailIcon, PhoneIcon } from "lucide-react";

import githubImg from "root/public/logos/github.svg";
import youtubeImg from "root/public/logos/youtube.svg";
import discordImg from "root/public/logos/discord.svg";
import telegramImg from "root/public/logos/telegram.svg";
import linkedinImg from "root/public/logos/linkedin.svg";
import { ROUTES } from "root/constants/routes.constants";
import instagramImg from "root/public/logos/instagram.svg";

const Footer = () => {
  return (
    <footer className="container mt-9 py-10 border-t border-foreground/10">
      <div className="f-center gap-3">
        <Link className="btn btn-ghost" href={"tel:09389461065"}>
          <span dir="ltr">0938 0946 1065</span>
          <PhoneIcon className="compatible-icon" />
        </Link>

        <Link className="btn btn-ghost" href={"mailto:farzad.vav.work@gmail"}>
          <span>farzad.vav.work@gmail.com</span>
          <MailIcon className="compatible-icon" />
        </Link>
      </div>

      <div className="f-center gap-3 mt-6">
        <Link className="btn btn-ghost" href={ROUTES.landing}>
          <span>لندینگ تبلیغاتی</span>
          <ArrowUpLeft className="compatible-icon" />
        </Link>

        <Link className="btn btn-ghost" href={ROUTES.survey}>
          <span>نظرسنجی</span>
          <ArrowUpLeft className="compatible-icon" />
        </Link>

        <Link className="btn btn-ghost" href={ROUTES.donate}>
          <span>حمایت از ما</span>
          <ArrowUpLeft className="compatible-icon" />
        </Link>

        <button className="btn btn-ghost" disabled>
          <span>استخدام</span>
          <ArrowUpLeft className="compatible-icon" />
        </button>
      </div>

      <div className="f-center gap-3 mt-6">
        <Link className="size-9" href={"https://instagram.com"}>
          <Image
            className="size-full rounded-full"
            src={instagramImg}
            alt="instagram"
            width={64}
            height={64}
          />
        </Link>
        <Link className="size-9" href={"https://instagram.com"}>
          <Image
            className="size-full rounded-full"
            src={githubImg}
            alt="instagram"
            width={64}
            height={64}
          />
        </Link>
        <Link className="size-9" href={"https://instagram.com"}>
          <Image
            className="size-full rounded-full"
            src={youtubeImg}
            alt="instagram"
            width={64}
            height={64}
          />
        </Link>
        <Link className="size-9" href={"https://instagram.com"}>
          <Image
            className="size-full rounded-full"
            src={discordImg}
            alt="instagram"
            width={64}
            height={64}
          />
        </Link>
        <Link className="size-9" href={"https://instagram.com"}>
          <Image
            className="size-full rounded-full"
            src={telegramImg}
            alt="instagram"
            width={64}
            height={64}
          />
        </Link>
        <Link className="size-9" href={"https://instagram.com"}>
          <Image
            className="size-full rounded-full"
            src={linkedinImg}
            alt="instagram"
            width={64}
            height={64}
          />
        </Link>
      </div>

      <p className="text-center mt-9 text-sm">
        کليه حقوق و مالکیت محتوای اين سایت متعلق به وب تیونرز می باشد ©
      </p>
    </footer>
  );
};

export default Footer;
