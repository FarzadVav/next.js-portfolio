import Link from "next/link";
import {
  AppleIcon,
  ArrowUpLeft,
  ArrowUpLeftIcon,
  BiohazardIcon,
  CheckIcon,
  PlusIcon,
  SparklesIcon,
} from "lucide-react";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Badge from "root/components/ui/Badge/Index";
import Button from "root/components/ui/Button/Index";
import Heading from "root/components/ui/Heading/Index";
import Paragraph from "root/components/ui/Paragraph/Index";
import Accordion from "root/components/ui/Accordion/Index";
import PageHero from "root/components/modules/PageHero/Index";
import AccordionHeader from "root/components/ui/Accordion/Header";
import AccordionContent from "root/components/ui/Accordion/Content";
import CtaAnimation from "root/components/modules/CtaAnimation/Index";

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
      <div className="container">
        <Box>
          <video className="bg-foreground/10 rounded-lg w-full aspect-video" />
        </Box>
      </div>

      <Space />
      <div className="container">
        <Flex justify="center">
          <SparklesIcon className="compatible-icon-size" />
          <Heading className="text-center" size="lg">
            <h2>ما چه کارهایی می‌توانیم انجام دهیم؟</h2>
          </Heading>
          <SparklesIcon className="compatible-icon-size -scale-x-100" />
        </Flex>
        <Space size="normal" />
        <Flex className="overflow-x-auto pb-3">
          {Array.from(new Array(7)).map(() => (
            <Box className="w-1/3 min-w-1/3" key={Math.random()}>
              <div className="w-2/3 mx-auto aspect-square rounded-lg bg-foreground/10" />
              <Space size="normal" />
              <Heading className="text-center">
                <p>جذب {(3_637_000).toLocaleString("fa")} کاربر</p>
              </Heading>
              <Space size="sm" />
              <Paragraph className="text-center">
                ما در پیشرفته ترین سازمان های ایران با افراد زیبا کار کرده ایم...
              </Paragraph>
            </Box>
          ))}
        </Flex>
      </div>

      <Space />
      <CtaAnimation>
        <Box space="lg">
          <h3 className="text-xl font-vazir-black">خدمات ما راه موفقیت کسب و کار شماست!</h3>
          <p className="mt-3">
            معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند
            تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه
            متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
            شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند
          </p>
          <Flex className="mt-3">
            <Badge>
              <CheckIcon className="compatible-icon-size" />
              <span>حسابداری</span>
            </Badge>
            <Badge>
              <CheckIcon className="compatible-icon-size" />
              <span>فروشگاهی</span>
            </Badge>
            <Badge>
              <CheckIcon className="compatible-icon-size" />
              <span>اتوماسیون</span>
            </Badge>
            <Badge>
              <CheckIcon className="compatible-icon-size" />
              <span>آموزشگاهی</span>
            </Badge>
            <Badge>
              <CheckIcon className="compatible-icon-size" />
              <span>مدیریت مشتری</span>
            </Badge>
          </Flex>
          <Link href={"/"} className="mt-3">
            <Button>
              <span>مشاهده خدمات</span>
              <ArrowUpLeftIcon className="compatible-icon-size" />
            </Button>
          </Link>
        </Box>
      </CtaAnimation>

      <Space />
      <div className="container">
        <Flex justify="center">
          <SparklesIcon className="compatible-icon-size" />
          <Heading className="text-center" size="lg">
            <h2>نمونه پروژه های ما</h2>
          </Heading>
          <SparklesIcon className="compatible-icon-size -scale-x-100" />
        </Flex>
      </div>
      <Space />
      <div className="container grid grid-cols-2 gap-3">
        {Array.from(new Array(7)).map(() => (
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

      <Space />
      <div className="container">
        <Flex justify="center">
          <SparklesIcon className="compatible-icon-size" />
          <Heading className="text-center" size="lg">
            <h2>پاسخ های سوال هایتان</h2>
          </Heading>
          <SparklesIcon className="compatible-icon-size -scale-x-100" />
        </Flex>
      </div>
      <Space />
      <div className="container" id="FAQs">
        {Array.from(new Array(6)).map(() => (
          <Accordion key={Math.random()}>
            <AccordionHeader>
              <Heading font="vazir" size="sm">
                <h4>چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟</h4>
              </Heading>
            </AccordionHeader>
            <AccordionContent>
              <Space size="normal" />
              <Paragraph>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                طراحی اساسا مورد استفاده قرار گیرد.
              </Paragraph>
            </AccordionContent>
          </Accordion>
        ))}

        <Space size="normal" />
        <Button className="mx-auto" shape="soft">
          <span>بیشتر</span>
          <PlusIcon className="compatible-icon-size" />
        </Button>
      </div>
    </>
  );
};

export default AboutPage;
