"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, LoaderIcon } from "lucide-react";
import { AccessNavigation, LoaderLink, Popover } from "@kadoui/react";

import logoImg from "root/public/logo.png";

const Header = () => {
  return (
    <header className="border-b-2 border-separator sticky top-0 z-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-[200%] top-0 left-0 right-0 bg-background/25 backdrop-blur-xl" />
      </div>

      <div className="container f-align justify-between h-16 relative">
        <AccessNavigation className="mr-auto">
          <Popover className="popover">
            <Popover.Toggle className="btn-ghost group font-bold" dir="ltr">
              <Image
                width={24}
                height={24}
                src={logoImg}
                alt="ArrowUp logo"
                className="rounded-full h-2/3 aspect-square mr-1.5 dark:invert-100"
              />

              <span>ArrowUp</span>
              <ChevronDownIcon className="btn-icon-size transition-transform group-data-[state=active]:-scale-y-100" />
            </Popover.Toggle>

            <Popover.Body className="popover-body-b">
              <div className="menu-y">
                <Link className="btn-ghost btn-link" href="/">
                  Home
                </Link>
                <button className="btn-ghost" disabled>
                  Survey
                </button>
                <button className="btn-ghost" disabled>
                  Donate
                </button>
                <button className="btn-ghost" disabled>
                  Hiring
                </button>
              </div>
            </Popover.Body>
          </Popover>
        </AccessNavigation>

        <AccessNavigation className="f-align gap-3" direction="x">
          <Link className="btn-ghost btn-link relative" href="/services">
            <LoaderLink
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">Services</span>
                </>
              }
            >
              <span>Services</span>
            </LoaderLink>
          </Link>

          <button className="btn-ghost" disabled>
            Products
          </button>

          <Link className="btn-ghost btn-link relative" href="/tools">
            <LoaderLink
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">Tools</span>
                </>
              }
            >
              <span>Tools</span>
            </LoaderLink>
          </Link>

          <Link className="btn-ghost btn-link relative" href="/articles">
            <LoaderLink
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">Articles</span>
                </>
              }
            >
              <span>Articles</span>
            </LoaderLink>
          </Link>

          <Link className="btn-ghost btn-link relative" href="/about-us">
            <LoaderLink
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">About us</span>
                </>
              }
            >
              <span>About us</span>
            </LoaderLink>
          </Link>

          <Link className="btn-ghost btn-link relative" href="/contact-us">
            <LoaderLink
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">Contact us</span>
                </>
              }
            >
              <span>Contact us</span>
            </LoaderLink>
          </Link>
        </AccessNavigation>
      </div>
    </header>
  );
};

export default Header;
