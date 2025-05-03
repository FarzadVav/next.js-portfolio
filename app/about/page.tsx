import Link from "next/link";
import { AppleIcon, ArrowUpLeft, BiohazardIcon } from "lucide-react";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Badge from "root/components/ui/Badge/Index";
import Button from "root/components/ui/Button/Index";
import Heading from "root/components/ui/Heading/Index";
import Paragraph from "root/components/ui/Paragraph/Index";
import PageHero from "root/components/modules/PageHero/Index";

const AboutPage = () => {
  return (
    <>
      <Space />
      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <Space />
      <Flex className="container relative" dir="ltr">
        <div className="absolute pointer-events-none top-0 bottom-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent" />
        <div className="absolute pointer-events-none top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />

        <Flex className="overflow-x-auto *:min-w-fit" style={{ scrollbarWidth: "none" }}>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
          <Badge>
            <AppleIcon className="compatible-icon-size" />
            <span>Apple</span>
          </Badge>
        </Flex>
      </Flex>

      <Space />
      <div className="container grid grid-cols-2 gap-3">
        {Array.from(new Array(16)).map(() => (
          <Box key={Math.random()}>
            <div className="w-1/3 mx-auto center-items p-3 aspect-square border border-foreground rounded-full">
              <BiohazardIcon className="size-full" />
            </div>

            <Space size="sm" />
            <Heading className="text-center" font="vazir">
              <h2>استفاده از تکنیک توسعه بر پایه دامنه</h2>
            </Heading>
            <Space size="xs" />
            <Badge className="w-fit mx-auto">مهندسی نرم افزار</Badge>

            <Space size="sm" />
            <Paragraph className="text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از طراحان گرافیک است چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </Paragraph>

            <Space size="sm" />
            <Link className="w-full" href={"https://melktoday.ir/ads"}>
              <Button className="w-full" shape="outline">
                <span>مشاهده</span>
                <ArrowUpLeft className="compatible-icon-size" />
              </Button>
            </Link>
          </Box>
        ))}
      </div>
    </>
  );
};

export default AboutPage;
