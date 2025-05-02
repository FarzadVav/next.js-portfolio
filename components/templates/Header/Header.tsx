"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import Flex from "root/components/ui/Flex/Index";
import Button from "root/components/ui/Button/Index";
import DropDown from "root/components/ui/DropDown/Index";
import { ROUTES } from "root/constants/routes.constants";
import DropDownWrapper from "root/components/ui/DropDown/Wrapper";

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
        <Link href={ROUTES.openSources}>
          <Button shape="ghost">ابزار ها</Button>
        </Link>
        <Link href={"/"}>
          <Button shape="ghost">مقالات</Button>
        </Link>
        <Link href={"/"}>
          <Button shape="ghost">درباره ما</Button>
        </Link>
        <Link href={"/"}>
          <Button shape="ghost">ارتباط با ما</Button>
        </Link>
        <Link href={"/"}>
          <Button shape="ghost">جامعه</Button>
        </Link>

        <DropDownWrapper className="mr-auto">
          <Button className="font-kalameh-black" shape="ghost">
            <ChevronDown className="compatible-icon-size" />
            <span>LOGO</span>
          </Button>

          <DropDown>
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
              <Button shape="ghost">حمایت</Button>
            </Link>
          </DropDown>
        </DropDownWrapper>
      </Flex>
    </header>
  );
};

export default Header;
