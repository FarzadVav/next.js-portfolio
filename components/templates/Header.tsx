import Link from "next/link";
import { IconUser } from "@tabler/icons-react";

import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="border-b border-foreground/10">
      <nav className="container row-items gap-3 h-20">
        <Link href={"/"}>
          <Button>شروع پروژه</Button>
        </Link>
        <Link href={"/"}>
          <Button shape="ghost">
            <IconUser className="size-5" />
          </Button>
        </Link>

        <div className="row-items mx-auto gap-3">
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
        </div>

        <Link href={"/"}>
          <Button shape="outline">تیکت پشتیبانی</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
