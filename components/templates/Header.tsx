import Link from "next/link";
import { IconUser } from "@tabler/icons-react";

import Button from "../ui/Button";
import Flex from "../ui/Flex";

const Header = () => {
  return (
    <header className="border-b border-foreground/10">
      <Flex className="container h-20">
        <Link href={"/"}>
          <Button className="font-vazir-bold">شروع پروژه</Button>
        </Link>
        <Link href={"/"}>
          <Button shape="ghost">
            <IconUser className="size-5" />
          </Button>
        </Link>

        <Flex className="mx-auto">
          <Link href={"/"}>
            <Button shape="ghost" color="foreground">
              مقالات
            </Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost" color="foreground">
              درباره من
            </Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost" color="foreground">
              ارتباط با من
            </Button>
          </Link>
        </Flex>

        <Link href={"/"}>
          <Button shape="outline">تیکت پشتیبانی</Button>
        </Link>
      </Flex>
    </header>
  );
};

export default Header;
