"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkLoader } from "@kadoui/next";
import { AccessNavigation, Popover, Sheet } from "@kadoui/react";
import { ArrowRightIcon, ChevronDownIcon, LoaderIcon, MenuIcon } from "lucide-react";

import logoImg from "root/public/logo.png";

const Header = () => {
  return (
    <header className="border-b-2 border-separator sticky top-0 z-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-[200%] top-0 left-0 right-0 bg-background/25 backdrop-blur-xl" />
      </div>

      <div className="container f-align justify-between h-16 relative">
        <Link className="f-align gap-3 md:hidden" href={"/"}>
          <span className="size-9 f-center">
            <LinkLoader loader={<LoaderIcon className="size-4.5 animate-spin" />}>
              <Image
                width={36}
                height={36}
                src={logoImg}
                alt="ArrowUp logo"
                className="rounded-full size-9 dark:invert-100"
              />
            </LinkLoader>
          </span>
          <span>ArrowUp</span>
        </Link>

        <AccessNavigation className="max-md:hidden">
          <Popover className="popover">
            <Popover.Toggle className="btn btn-ghost group font-bold" dir="ltr">
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

            <Popover.Body className="popover-body-b" preventClose>
              <div className="menu menu-y">
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
                <button className="btn btn-ghost" disabled>
                  Survey
                </button>
                <button className="btn btn-ghost" disabled>
                  Donate
                </button>
                <button className="btn btn-ghost" disabled>
                  Hiring
                </button>
              </div>
            </Popover.Body>
          </Popover>
        </AccessNavigation>

        <AccessNavigation className="f-align gap-3 max-md:hidden" direction="x">
          <Link className="btn btn-ghost btn-link relative" href="/services">
            <LinkLoader
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">Services</span>
                </>
              }
            >
              <span>Services</span>
            </LinkLoader>
          </Link>

          <button className="btn btn-ghost" disabled>
            Products
          </button>

          <Link className="btn btn-ghost btn-link relative" href="/tools">
            <LinkLoader
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">Tools</span>
                </>
              }
            >
              <span>Tools</span>
            </LinkLoader>
          </Link>

          <Link className="btn btn-ghost btn-link relative" href="/articles">
            <LinkLoader
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">Articles</span>
                </>
              }
            >
              <span>Articles</span>
            </LinkLoader>
          </Link>

          <Link className="btn btn-ghost btn-link relative" href="/about-us">
            <LinkLoader
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">About us</span>
                </>
              }
            >
              <span>About us</span>
            </LinkLoader>
          </Link>

          <Link className="btn btn-ghost btn-link relative" href="/contact-us">
            <LinkLoader
              loader={
                <>
                  <LoaderIcon className="btn-icon-size absolute animate-spin" />
                  <span className="opacity-0">Contact us</span>
                </>
              }
            >
              <span>Contact us</span>
            </LinkLoader>
          </Link>
        </AccessNavigation>

        <Sheet>
          <Sheet.Toggle className="btn btn-ghost md:hidden">
            <MenuIcon className="btn-icon-size" />
          </Sheet.Toggle>

          <Sheet.Portal className="sheet-portal md:hidden">
            <Sheet.Body className="sheet-body w-full group">
              <Sheet.Header className="sheet-header h-auto p-3">
                <span className="w-1/4 h-1 rounded-full bg-background-thin" />
              </Sheet.Header>

              <Sheet.Content className="sheet-content space-y-3">
                <Link className="btn btn-ghost w-full justify-between" href={"/services"}>
                  <span>Services</span>
                  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                    <ArrowRightIcon className="btn-icon-size" />
                  </LinkLoader>
                </Link>
                <Link className="btn btn-ghost w-full justify-between" href={"/tools"}>
                  <span>Tools</span>
                  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                    <ArrowRightIcon className="btn-icon-size" />
                  </LinkLoader>
                </Link>
                <Link className="btn btn-ghost w-full justify-between" href={"/articles"}>
                  <span>Articles</span>
                  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                    <ArrowRightIcon className="btn-icon-size" />
                  </LinkLoader>
                </Link>
                <Link className="btn btn-ghost w-full justify-between" href={"/about-us"}>
                  <span>About us</span>
                  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                    <ArrowRightIcon className="btn-icon-size" />
                  </LinkLoader>
                </Link>
                <Link className="btn btn-ghost w-full justify-between" href={"/contact-us"}>
                  <span>Contact us</span>
                  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                    <ArrowRightIcon className="btn-icon-size" />
                  </LinkLoader>
                </Link>
              </Sheet.Content>
            </Sheet.Body>
          </Sheet.Portal>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
