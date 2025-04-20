"use client";

import Link from "next/link";
import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import Flex from "root/components/ui/Flex/Index";
import Button from "root/components/ui/Button/Index";
import DropDown from "root/components/ui/DropDown/Index";
import { ROUTES } from "root/constants/routes.constants";
import MobileSheet from "root/components/ui/MobileSheet/Index";
import DropDownWrapper from "root/components/ui/DropDown/Wrapper";
import MobileSheetDrawer from "root/components/ui/MobileSheet/Drawer";
import MobileSheetHeader from "root/components/ui/MobileSheet/Header";
import MobileSheetContent from "root/components/ui/MobileSheet/Content";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background border-b border-foreground/10 sticky top-0 z-20">
      <Flex className="container h-20">
        {/* <Link href={"/"}> */}
        <Button onClick={() => setOpen(true)}>
          <span>شروع کنید</span>
        </Button>
        {/* </Link> */}

        <MobileSheet isOpen={open} closeHandler={() => setOpen(false)}>
          <MobileSheetDrawer>
            <MobileSheetHeader />
            <MobileSheetContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique culpa facere
              doloribus sapiente obcaecati iste, enim minima vitae exercitationem atque, cupiditate
              eligendi. Quae iusto quibusdam esse nulla modi distinctio amet. Nesciunt distinctio
              ratione tempora! Magnam quas laboriosam quidem, hic sit inventore animi fugiat nam
              excepturi eligendi perspiciatis reprehenderit explicabo temporibus doloribus eos,
              voluptatem dolor necessitatibus tempora aperiam ipsa exercitationem. Neque nemo saepe
              porro dolore in quisquam! Commodi dolore, vero neque, dolor, expedita magnam nemo
              explicabo ipsum accusamus dolorem perferendis exercitationem. Laborum molestias modi
              fuga debitis. Hic ullam cumque magni. Veritatis quibusdam amet expedita, ratione
              minima incidunt enim nesciunt temporibus sed!
            </MobileSheetContent>
          </MobileSheetDrawer>
        </MobileSheet>

        <Flex className="mx-auto">
          <DropDownWrapper>
            <Button shape="ghost">
              <span>خدمات</span>
              <DynamicIcon name="chevron-down" className="compatible-icon-size" />
            </Button>

            <DropDown>
              <Link href={ROUTES.services}>
                <Button shape="ghost">سفارش خدمات</Button>
              </Link>
              <Link href={ROUTES.products}>
                <Button shape="ghost">محصلات ما</Button>
              </Link>
              <Link href={ROUTES.openSources}>
                <Button shape="ghost">اوپن سورس</Button>
              </Link>
            </DropDown>
          </DropDownWrapper>
          <Link href={"/"}>
            <Button shape="ghost">مقالات</Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost">پرسش و پاسخ</Button>
          </Link>
          <DropDownWrapper>
            <Button shape="ghost">
              <span>تیم ایکس کد</span>
              <DynamicIcon name="chevron-down" className="compatible-icon-size" />
            </Button>

            <DropDown>
              <Link href={"/"}>
                <Button shape="ghost">رزومه / درباره ما</Button>
              </Link>
              <Link href={"/"}>
                <Button shape="ghost">ارتباط با ما</Button>
              </Link>
              <Link href={"/"}>
                <Button shape="ghost">تیکت و پشتیبانی</Button>
              </Link>
            </DropDown>
          </DropDownWrapper>
        </Flex>

        <Link href={"/"}>
          <Button shape="outline">
            <span>شما</span>
            <DynamicIcon name="user" className="compatible-icon-size" />
          </Button>
        </Link>
      </Flex>
    </header>
  );
};

export default Header;
