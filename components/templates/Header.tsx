import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

import Flex from "../ui/Flex";
import Button from "../ui/Button";

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
          <Link href={"/"}>
            <Button shape="ghost">
              <span>خدمات</span>
              <DynamicIcon name="chevron-down" className="compatible-icon-size" />
            </Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost">مقالات</Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost">پرسش و پاسخ</Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost">تیکت</Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost">
              <span>تیم ایکس کد</span>
              <DynamicIcon name="chevron-down" className="compatible-icon-size" />
            </Button>
          </Link>
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
