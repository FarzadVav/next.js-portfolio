import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

import Flex from "../../ui/Flex/Index";
import Button from "../../ui/Button/Index";
import DropDown from "../../ui/DropDown/Index";
import DropDownWrapper from "../../ui/DropDown/Wrapper";

const Header = () => {
  return (
    <header className="border-b border-foreground/10">
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
              <Link href={"/project"}>
                <Button shape="ghost">سفارش پروژه</Button>
              </Link>
              <Link href={"/"}>
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
          <Link href={"/"}>
            <Button shape="ghost">تیکت</Button>
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
                <Button shape="ghost">جامعه</Button>
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
