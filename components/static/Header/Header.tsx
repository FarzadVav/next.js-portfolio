"use client";

import Link from "next/link";
import { AccessNavigation, LinkLoader, Sheet } from "@kadoui/react";
import { ChevronRightIcon, LoaderIcon, MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b-2 border-separator sticky top-0 z-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-[200%] top-0 left-0 right-0 bg-background/25 backdrop-blur-xl" />
      </div>

      <div className="container f-align justify-between h-16 relative">
        <AccessNavigation className="f-align justify-between flex-1" direction="x">
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

          <div className="f-align gap-3 max-md:hidden">
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

            <Link className="btn btn-ghost btn-link relative" href="/lab">
              <LinkLoader
                loader={
                  <>
                    <LoaderIcon className="btn-icon-size absolute animate-spin" />
                    <span className="opacity-0">Lab</span>
                  </>
                }
              >
                <span>Lab</span>
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
        </AccessNavigation>

        <Sheet>
          <Sheet.Toggle className="btn btn-ghost md:hidden">
            <MenuIcon className="btn-icon-size" />
          </Sheet.Toggle>

          <Sheet.Portal className="sheet-portal md:hidden">
            <Sheet.Body className="sheet-body w-full group">
              <Sheet.Header className="sheet-header h-auto p-3">
                <span className="w-1/4 h-1 rounded-full bg-background-thick" />
              </Sheet.Header>

              <Sheet.Content className="sheet-content space-y-6">
                <Link className="btn btn-ghost w-full justify-between" href={"/services"}>
                  <span>Services</span>
                  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                    <ChevronRightIcon className="btn-icon-size" />
                  </LinkLoader>
                </Link>
                <Link className="btn btn-ghost w-full justify-between" href={"/lab"}>
                  <span>Lab</span>
                  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                    <ChevronRightIcon className="btn-icon-size" />
                  </LinkLoader>
                </Link>
                <Link className="btn btn-ghost w-full justify-between" href={"/about-me"}>
                  <span>About me</span>
                  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                    <ChevronRightIcon className="btn-icon-size" />
                  </LinkLoader>
                </Link>
                <Link className="btn btn-ghost w-full justify-between" href={"/contact-me"}>
                  <span>Contact me</span>
                  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                    <ChevronRightIcon className="btn-icon-size" />
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
