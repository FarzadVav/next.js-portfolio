import Link from "next/link";

import Flex from "../../ui/Flex/Index";
import Space from "../../ui/Space/Index";
import Button from "../../ui/Button/Index";

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
