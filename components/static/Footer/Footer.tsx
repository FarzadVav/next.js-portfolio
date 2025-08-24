import Link from "next/link";
import Image from "next/image";
import { LinkLoader } from "@kadoui/next";
import { LoaderIcon, MailIcon, PhoneIcon } from "lucide-react";

import { NAME, PROFILE } from "root/constants/about-me";
import { EMAIL, LINKS, PHONE_NUMBER } from "root/constants/contact-me";

const Footer = () => {
  return (
    <footer className="mt-20 py-20 border-t-2 border-separator group">
      <div className="container">
        <Image
          width={108}
          height={108}
          src={PROFILE}
          alt="Farzad Vahdati"
          className="size-27 rounded-full mx-auto transition-all md:not-group-hover:saturate-0"
        />

        <div className="f-center flex-wrap gap-3 mt-6">
          <Link className="btn btn-ghost" href={`tel:${PHONE_NUMBER}`}>
            <PhoneIcon className="btn-icon-size" />
            <span dir="ltr">{PHONE_NUMBER}</span>
          </Link>

          <Link className="btn btn-ghost" href={`mailto:${EMAIL}`}>
            <MailIcon className="btn-icon-size" />
            <span>{EMAIL}</span>
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

          <Link className="btn btn-ghost btn-link relative" href="/about-me">
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

          <Link className="btn btn-ghost btn-link relative" href="/contact-me">
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
          {LINKS.map((item) => (
            <Link
              key={item.id}
              target="_blank"
              href={item.link}
              title={item.name}
              className="size-9"
            >
              <Image
                width={64}
                height={64}
                alt={item.name}
                src={item.logo}
                className={`size-full ${item.invert ? "dark:invert-100" : ""}`}
              />
            </Link>
          ))}
        </div>

        <p className="text-center text-xs mt-20">
          All rights and ownership of this site belong to {NAME} ©
        </p>
      </div>
    </footer>
  );
};

export default Footer;
