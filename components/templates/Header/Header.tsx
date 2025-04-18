import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

import Flex from "root/components/ui/Flex/Index";
import Button from "root/components/ui/Button/Index";
import { ROUTES } from "root/constants/routes.constants";
import DropDown from "root/components/ui/DropDown/Index";
import DropDownWrapper from "root/components/ui/DropDown/Wrapper";

const Header = () => {
  return (
    <header className="bg-background border-b border-foreground/10 sticky top-0 z-20">
      <Flex className="container h-20">
        <Link href={"/"}>
          <Button>
            <span>شروع کنید</span>
          </Button>
        </Link>
        <Flex className="mx-auto">
          <DropDownWrapper>
            <Button shape="ghost">
              <span>خدمات</span>
              <DynamicIcon name="chevron-down" className="compatible-icon-size" />
            </Button>

            <DropDown>
              <Link href={ROUTES.services}>
                <Button shape="ghost">سفارش پروژه</Button>
              </Link>
              <Link href={ROUTES.products}>
                <Button shape="ghost">محصلات ما</Button>
              </Link>
              <Link href={"/"}>
                <Button shape="ghost">ابزار ها</Button>
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
