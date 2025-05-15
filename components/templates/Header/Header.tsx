"use client";

import Link from "next/link";

import Flex from "root/components/ui/Flex/Index";
import Button from "root/components/ui/Button/Index";
import { ROUTES } from "root/constants/routes.constants";
import DropDown from "root/components/ui/DropDown/Index";
import DropDownTrigger from "root/components/ui/DropDown/Trigger";
import DropDownContent from "root/components/ui/DropDown/Content";

const Header = () => {
  return (
    <header className="bg-background border-b border-foreground/10 sticky top-0 z-20">
      <Flex className="container font-vazir-bold h-20">
        <Link href={ROUTES.services}>
          <Button shape="ghost">خدمات</Button>
        </Link>
        <Link href={ROUTES.products}>
          <Button shape="ghost">محصولات</Button>
        </Link>
        <Link href={ROUTES.tools}>
          <Button shape="ghost">ابزار ها</Button>
        </Link>
        <Link href={ROUTES.articles}>
          <Button shape="ghost">مقالات</Button>
        </Link>
        <Link href={ROUTES.about}>
          <Button shape="ghost">درباره ما</Button>
        </Link>
        <Link href={ROUTES.connect}>
          <Button shape="ghost">ارتباط با ما</Button>
        </Link>

        <DropDown className="mr-auto">
          <DropDownTrigger className="font-kalameh-black" shape="ghost" dir="ltr">
            <span>WEB TUNERS</span>
          </DropDownTrigger>

          <DropDownContent>
            <Link href={ROUTES.home}>
              <Button shape="ghost">صفحه اصلی</Button>
            </Link>
            <Link href={ROUTES.home} target="_blank">
              <Button shape="ghost">لندینگ</Button>
            </Link>
            <Link href={ROUTES.home} target="_blank">
              <Button shape="ghost">نظرسنجی</Button>
            </Link>
            <Link href={ROUTES.home} target="_blank">
              <Button shape="ghost">استخدام (بزودی)</Button>
            </Link>
            <Link href={ROUTES.home} target="_blank">
              <Button shape="ghost">حمایت</Button>
            </Link>
          </DropDownContent>
        </DropDown>
      </Flex>
    </header>
  );
};

export default Header;
