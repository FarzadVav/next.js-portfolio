import Link from "next/link";
import Flex from "../ui/Flex";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="container py-10 border-t border-foreground/10 mt-10">
      <Flex justify="center">
        <Link href={"/"}>
          <Button color="foreground" shape="ghost">
            لینک
          </Button>
        </Link>
        <Link href={"/"}>
          <Button color="foreground" shape="ghost">
            لینک
          </Button>
        </Link>
        <Link href={"/"}>
          <Button color="foreground" shape="ghost">
            لینک
          </Button>
        </Link>
        <Link href={"/"}>
          <Button color="foreground" shape="ghost">
            لینک
          </Button>
        </Link>
      </Flex>
    </footer>
  );
};

export default Footer;
