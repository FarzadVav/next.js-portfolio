"use client";

import Link from "next/link";

import Flex from "root/components/ui/Flex/Index";
import { ROUTES } from "root/constants/routes.constants";
import DropDown from "root/components/ui/DropDown/Index";
import DropDownTrigger from "root/components/ui/DropDown/Trigger";
import DropDownContent from "root/components/ui/DropDown/Content";

const Header = () => {
  return (
    <header className="bg-background border-b border-foreground/10 sticky top-0 z-20">
      <Flex className="container font-vazir-bold h-20">
        <Link className="btn btn-ghost" href={ROUTES.services}>
          خدمات
        </Link>
        <button className="btn btn-ghost" disabled>
          محصولات
        </button>
        <button className="btn btn-ghost" disabled>
          ابزار ها
        </button>
        <Link className="btn btn-ghost" href={ROUTES.articles}>
          مقالات
        </Link>
        <Link className="btn btn-ghost" href={ROUTES.about}>
          درباره ما
        </Link>
        <Link className="btn btn-ghost" href={ROUTES.connect}>
          ارتباط با ما
        </Link>

        <DropDown className="mr-auto">
          <DropDownTrigger className="btn btn-ghost font-kalameh-black" dir="ltr">
            <span>WEB TUNERS</span>
          </DropDownTrigger>

          <DropDownContent className="**:w-full **:justify-start">
            <Link className="btn btn-ghost" href={ROUTES.home}>
              صفحه اصلی
            </Link>
            <Link className="btn btn-ghost" href={ROUTES.home} target="_blank">
              لندینگ
            </Link>
            <Link className="btn btn-ghost" href={ROUTES.home} target="_blank">
              نظرسنجی
            </Link>
            <Link className="btn btn-ghost" href={ROUTES.home} target="_blank">
              حمایت
            </Link>
            <button className="btn btn-ghost" disabled>
              استخدام
            </button>
          </DropDownContent>
        </DropDown>
      </Flex>
    </header>
  );
};

export default Header;
