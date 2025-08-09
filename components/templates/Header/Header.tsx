"use client";

import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { AccessNavigation, Popover } from "@kadoui/react";

const Header = () => {
  return (
    <header className="bg-background border-b border-separator sticky top-0 z-20">
      <div className="container f-align justify-between h-20">
        <AccessNavigation>
          <Popover className="popover">
            <Popover.Toggle className="btn-ghost" dir="ltr">
              <span>ArrowUp</span>
              <ChevronDownIcon className="compatible-icon" />
            </Popover.Toggle>

            <Popover.Body className="popover-body-b">
              <div className="menu-y">
                <Link className="btn-ghost" href="/">
                  Home
                </Link>
                <Link className="btn-ghost" href="/" target="_blank">
                  Survey
                </Link>
                <Link className="btn-ghost" href="/" target="_blank">
                  Support
                </Link>
                <button className="btn-ghost" disabled>
                  Hire Us
                </button>
              </div>
            </Popover.Body>
          </Popover>
        </AccessNavigation>

        <AccessNavigation className="f-align gap-3" direction="x">
          <Link className="btn-ghost" href="/connect">
            Contact Us
          </Link>
          <Link className="btn-ghost" href="/about">
            About Us
          </Link>
          <Link className="btn-ghost" href="/articles">
            Articles
          </Link>
          <Link className="btn-ghost" href="/tools">
            Tools
          </Link>
          <button className="btn-ghost" disabled>
            Products
          </button>
          <Link className="btn-ghost" href="/services">
            Services
          </Link>
        </AccessNavigation>
      </div>
    </header>
  );
};

export default Header;
