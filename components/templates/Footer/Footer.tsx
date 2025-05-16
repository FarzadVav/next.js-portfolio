import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";

import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Button from "root/components/ui/Button/Index";
import Paragraph from "root/components/ui/Paragraph/Index";

const Footer = () => {
  return (
    <>
      <Space />
      <footer className="container py-10 border-t border-foreground/10">
        <Flex>
          <Paragraph className="text-center" size="sm">
            کليه حقوق و مالکیت محتوای اين سایت متعلق به وب تیونرز می باشد ©
          </Paragraph>
          <Link className="mr-auto" href={"mailto:farzad.vav.work@gmail"}>
            <Button shape="ghost">
              <span>farzad.vav.work@gmail.com</span>
              <MailIcon className="compatible-icon-size" />
            </Button>
          </Link>
          <Link href={"tel:09389461065"}>
            <Button shape="ghost">
              <span dir="ltr">0938 0946 1065</span>
              <PhoneIcon className="compatible-icon-size" />
            </Button>
          </Link>
        </Flex>
      </footer>
    </>
  );
};

export default Footer;
