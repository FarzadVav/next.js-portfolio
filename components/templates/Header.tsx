import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

import Flex from "../ui/Flex";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="border-b border-foreground/10">
      <Flex className="container h-20">
        <Link href={"/"}>
          <Button className="font-vazir-bold">شروع پروژه</Button>
        </Link>

        <Flex className="mx-auto">
          <Link href={"/"}>
            <Button shape="ghost">مقالات</Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost">درباره من</Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost">ارتباط با من</Button>
          </Link>
        </Flex>

        <Link href={"/"}>
          <Button shape="ghost">
            <DynamicIcon className="compatible-icon-size" name="user" />
          </Button>
        </Link>
        <Link href={"/"}>
          <Button shape="outline">تیکت پشتیبانی</Button>
        </Link>
      </Flex>
    </header>
  );
};

export default Header;
