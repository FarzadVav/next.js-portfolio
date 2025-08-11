"use client";

import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { AccessNavigation, Popover } from "@kadoui/react";

const Header = () => {
  return (
    <header className="border-b-2 border-separator sticky top-0 z-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-[200%] top-0 left-0 right-0 bg-background/50 backdrop-blur-2xl" />
      </div>

      <div className="container f-align justify-between h-20 relative">
        <AccessNavigation className="f-align gap-3" direction="x">
          <Link className="btn-ghost btn-link" href="/services">
            Services
          </Link>
          <button className="btn-ghost btn-link" disabled>
            Products
          </button>
          <Link className="btn-ghost btn-link" href="/tools">
            Tools
          </Link>
          <Link className="btn-ghost btn-link" href="/articles">
            Articles
          </Link>
          <Link className="btn-ghost btn-link" href="/about">
            About Us
          </Link>
          <Link className="btn-ghost btn-link" href="/connect">
            Contact Us
          </Link>
        </AccessNavigation>

        <AccessNavigation>
          <Popover className="popover">
            <Popover.Toggle className="btn-ghost group font-bold" dir="ltr">
              <span>ArrowUp</span>
              <ChevronDownIcon className="btn-icon-size transition-transform group-data-[state=active]:-scale-y-100" />
            </Popover.Toggle>

            <Popover.Body className="popover-body-b">
              <div className="menu-y">
                <Link className="btn-ghost btn-link" href="/">
                  Home
                </Link>
                <Link className="btn-ghost btn-link" href="/">
                  Survey
                </Link>
                <Link className="btn-ghost btn-link" href="/">
                  Donate
                </Link>
                <button className="btn-ghost btn-link" disabled>
                  Hiring
                </button>
              </div>
            </Popover.Body>
          </Popover>
        </AccessNavigation>
      </div>
    </header>
  );
};

export default Header;
