import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft, MailIcon, PhoneIcon } from "lucide-react";

import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Button from "root/components/ui/Button/Index";
import githubImg from "root/public/logos/github.svg";
import youtubeImg from "root/public/logos/youtube.svg";
import discordImg from "root/public/logos/discord.svg";
import telegramImg from "root/public/logos/telegram.svg";
import linkedinImg from "root/public/logos/linkedin.svg";
import { ROUTES } from "root/constants/routes.constants";
import Paragraph from "root/components/ui/Paragraph/Index";
import instagramImg from "root/public/logos/instagram.svg";

const Footer = () => {
  return (
    <>
      <Space />
      <footer className="container py-10 border-t border-foreground/10">
        <Flex justify="between">
          <ul className="space-y-3">
            <li>
              <Link href={ROUTES.landing}>
                <Button shape="ghost">
                  <span>لندینگ تبلیغاتی</span>
                  <ArrowUpLeft className="compatible-icon-size" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href={ROUTES.survey}>
                <Button shape="ghost">
                  <span>نظرسنجی</span>
                  <ArrowUpLeft className="compatible-icon-size" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href={ROUTES.donate}>
                <Button shape="ghost">
                  <span>حمایت از ما</span>
                  <ArrowUpLeft className="compatible-icon-size" />
                </Button>
              </Link>
            </li>
            <li>
              <Button shape="ghost" disabled>
                <span>استخدام</span>
                <ArrowUpLeft className="compatible-icon-size" />
              </Button>
            </li>
          </ul>
          <ul className="space-y-3" dir="ltr">
            <li>
              <Link href={"mailto:farzad.vav.work@gmail"}>
                <Button shape="ghost">
                  <MailIcon className="compatible-icon-size" />
                  <span>farzad.vav.work@gmail.com</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"tel:09389461065"}>
                <Button shape="ghost">
                  <PhoneIcon className="compatible-icon-size" />
                  <span dir="ltr">0938 0946 1065</span>
                </Button>
              </Link>
            </li>
            <li>
              <Flex>
                <Link className="size-9" href={"https://instagram.com"}>
                  <Image
                    className="size-full rounded-full"
                    src={instagramImg}
                    alt="instagram"
                    width={64}
                    height={64}
                  />
                </Link>
                <Link className="size-9" href={"https://instagram.com"}>
                  <Image
                    className="size-full rounded-full"
                    src={githubImg}
                    alt="instagram"
                    width={64}
                    height={64}
                  />
                </Link>
                <Link className="size-9" href={"https://instagram.com"}>
                  <Image
                    className="size-full rounded-full"
                    src={youtubeImg}
                    alt="instagram"
                    width={64}
                    height={64}
                  />
                </Link>
                <Link className="size-9" href={"https://instagram.com"}>
                  <Image
                    className="size-full rounded-full"
                    src={discordImg}
                    alt="instagram"
                    width={64}
                    height={64}
                  />
                </Link>
                <Link className="size-9" href={"https://instagram.com"}>
                  <Image
                    className="size-full rounded-full"
                    src={telegramImg}
                    alt="instagram"
                    width={64}
                    height={64}
                  />
                </Link>
                <Link className="size-9" href={"https://instagram.com"}>
                  <Image
                    className="size-full rounded-full"
                    src={linkedinImg}
                    alt="instagram"
                    width={64}
                    height={64}
                  />
                </Link>
              </Flex>
            </li>
          </ul>
        </Flex>

        <Space />
        <Paragraph className="text-center" size="sm">
          کليه حقوق و مالکیت محتوای اين سایت متعلق به وب تیونرز می باشد ©
        </Paragraph>
      </footer>
    </>
  );
};

export default Footer;
