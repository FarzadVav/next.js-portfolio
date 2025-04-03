import Link from "next/link";

import Flex from "../ui/Flex";
import Space from "../ui/Space";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <>
      <Space />

      <footer className="container py-10 border-t border-foreground/10">
        <Flex justify="center">
          <Link href={"/"}>
            <Button shape="ghost">لینک</Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost">لینک</Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost">لینک</Button>
          </Link>
          <Link href={"/"}>
            <Button shape="ghost">لینک</Button>
          </Link>
        </Flex>
      </footer>
    </>
  );
};

export default Footer;
