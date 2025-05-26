import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowUpLeftIcon,
  CheckIcon,
  Search,
  SendHorizonalIcon,
  Sparkles,
  SparklesIcon,
} from "lucide-react";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Heading from "root/components/ui/Heading/Index";
import { ROUTES } from "root/constants/routes.constants";
import Paragraph from "root/components/ui/Paragraph/Index";
import Accordion from "root/components/ui/Accordion/Index";
import AccordionHeader from "root/components/ui/Accordion/Header";
import AccordionContent from "root/components/ui/Accordion/Content";
import HeroSection from "root/components/templates/landing/HeroSection/Index";

const HomePage = () => {
  return (
    <>
      <Space />
      <div className="container relative">
        <HeroSection />

        <Heading size="xl">
          <h1 className="text-center">
            مکانی برای برنامه نویسی وب <br /> برای خدمات و آموزش با ما همراه باشید
          </h1>
        </Heading>
        <Space size="normal" />
        <Paragraph className="w-3/4 text-center mx-auto">
          لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥
          شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای
          طراحان رایانه ای...
        </Paragraph>
        <Space size="normal" />
        <label className="input input-outline w-1/2 mx-auto">
          <input className="input-field" type="text" placeholder="جستجوی هرچی میخوای..." />
          <Search className="compatible-icon" />
        </label>
        <Space size="normal" />
        <Flex className="w-3/4 mx-auto" justify="center" wrap="wrap">
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>بررسی آپدیت های جدید</span>
          </div>
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>یادگیری موارد جدید</span>
          </div>
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>ارائه خدمات وب</span>
          </div>
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>مشاوره خدمات</span>
          </div>
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>تیکت پشتیبانی</span>
          </div>
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>چیت شیت های فارسی</span>
          </div>
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>محصولات استارتاپی</span>
          </div>
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>مشاوره مسیر برنامه نویسی</span>
          </div>
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>پروژه های اوپن سورس</span>
          </div>
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>ایونت های جامعه</span>
          </div>
          <div className="badge">
            <Sparkles className="compatible-icon" />
            <span>رزومه قابل اطمینان</span>
          </div>
        </Flex>
      </div>

      <Space />
      <div className="bg-gradient-to-b from-foreground/10 to-transparent rounded-4xl pt-6">
        <Flex justify="center">
          <SparklesIcon className="compatible-icon" />
          <Heading className="text-center" size="lg">
            <h2>خدمات تیم ما به شما</h2>
          </Heading>
          <SparklesIcon className="compatible-icon -scale-x-100" />
        </Flex>

        <Space size="normal" />
        <Flex className="container">
          <Box className="w-1/3">
            <Heading>فرانت اند</Heading>
            <Space size="normal" />
            <div className="w-full aspect-square rounded-xl bg-foreground/10"></div>
            <Space size="normal" />
            <Link className="btn btn-outline" href={ROUTES.services}>
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </Box>
          <Box className="w-1/3">
            <Heading>بک اند</Heading>
            <Space size="normal" />
            <div className="w-full aspect-square rounded-xl bg-foreground/10"></div>
            <Space size="normal" />
            <Link className="btn btn-outline" href={ROUTES.services}>
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </Box>
          <Box className="w-1/3">
            <Heading>ربات تلگرام</Heading>
            <Space size="normal" />
            <div className="w-full aspect-square rounded-xl bg-foreground/10"></div>
            <Space size="normal" />
            <Link className="btn btn-outline" href={ROUTES.services}>
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </Box>
        </Flex>
      </div>

      <Space />
      <Flex justify="center">
        <SparklesIcon className="compatible-icon" />
        <Heading className="text-center" size="lg">
          <h2>نگاهتان از ما</h2>
        </Heading>
        <SparklesIcon className="compatible-icon -scale-x-100" />
      </Flex>
      <Space size="normal" />
      <div className="grid grid-cols-2 container gap-3">
        <Box>
          <Flex>
            <div className="size-16 min-w-16 bg-foreground/10 rounded-lg" />
            <div>
              <Heading size="sm">بهترین روش های برنامه ریزی!</Heading>
              <Space size="xs" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است...
              </Paragraph>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <div className="size-16 min-w-16 bg-foreground/10 rounded-lg" />
            <div>
              <Heading size="sm">بهترین روش های برنامه ریزی!</Heading>
              <Space size="xs" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است...
              </Paragraph>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <div className="size-16 min-w-16 bg-foreground/10 rounded-lg" />
            <div>
              <Heading size="sm">بهترین روش های برنامه ریزی!</Heading>
              <Space size="xs" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است...
              </Paragraph>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <div className="size-16 min-w-16 bg-foreground/10 rounded-lg" />
            <div>
              <Heading size="sm">بهترین روش های برنامه ریزی!</Heading>
              <Space size="xs" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است...
              </Paragraph>
            </div>
          </Flex>
        </Box>
      </div>
      <Space />
      <div className="container">
        {Array.from(new Array(3)).map(() => (
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
        <Flex>
          <Link className="btn btn-fill" href={ROUTES.about + "#FAQs"}>
            <span>درباره ما</span>
            <ArrowUpLeftIcon className="compatible-icon" />
          </Link>
          <Link className="btn btn-ghost" href={ROUTES.about + "#FAQs"}>
            <span>همه سوالات</span>
            <ArrowUpLeftIcon className="compatible-icon" />
          </Link>
        </Flex>
      </div>

      <Space />
      <Flex justify="center">
        <SparklesIcon className="compatible-icon" />
        <Heading className="text-center" size="lg">
          <h2>نظرات مشتریان/همکاران</h2>
        </Heading>
        <SparklesIcon className="compatible-icon -scale-x-100" />
      </Flex>
      <Space size="normal" />
      <Flex className="container overflow-x-auto" align="start">
        {Array.from(new Array(12)).map(() => (
          <div className="w-2/5 min-w-2/5" key={Math.random()}>
            <Heading size="sm">اردلان یزدان دوست</Heading>
            <Space size="sm" />
            <Paragraph className="bg-foreground/5 p-6 rounded-lg">
              {Array.from(new Array(Math.ceil(Math.random() * 10))).map(
                () => "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ بود."
              )}
              {".."}
            </Paragraph>
          </div>
        ))}
      </Flex>

      <Space />
      <Box className="container">
        <Heading>مشاوه میخواهید؟ با ما در ارتباط باشید!</Heading>
        <Space size="normal" />
        <Paragraph>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
          سوالات پیوسته اهل دنیای مورد استفاده قرار گیرد.
        </Paragraph>
        <Space size="normal" />
        <Flex>
          <div className="badge">
            <span>مشکل یابی</span>
            <CheckIcon className="compatible-icon" />
          </div>
          <div className="badge">
            <span>حل مسئله</span>
            <CheckIcon className="compatible-icon" />
          </div>
          <div className="badge">
            <span>مسیر انجام پروژه</span>
            <CheckIcon className="compatible-icon" />
          </div>
          <div className="badge">
            <span>مهندسی نیازمندی ها</span>
            <CheckIcon className="compatible-icon" />
          </div>
        </Flex>
        <Space size="normal" />
        <Link className="btn btn-fill" href={ROUTES.connect}>
          <span>درخواست دهید</span>
          <SendHorizonalIcon className="compatible-icon -scale-x-100" />
        </Link>
      </Box>

      <Space />
      <Flex justify="center">
        <SparklesIcon className="compatible-icon" />
        <Heading className="text-center" size="lg">
          <h2>آخرین مقالات سایت</h2>
        </Heading>
        <SparklesIcon className="compatible-icon -scale-x-100" />
      </Flex>
      <Space size="normal" />
      <Flex className="container overflow-x-auto">
        {Array.from(new Array(7)).map(() => (
          <Box className="w-2/5 min-w-2/5" key={Math.random()}>
            <div className="w-full aspect-video bg-foreground/10 rounded-lg" />

            <Space size="sm" />
            <Heading font="vazir">
              <h2>استفاده از تکنیک توسعه بر پایه دامنه</h2>
            </Heading>
            <Space size="xs" />
            <div className="badge">مهندسی نرم افزار</div>

            <Space size="sm" />
            <Paragraph>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
            </Paragraph>

            <Space size="sm" />
            <Link className="btn btn-outline w-full" href={ROUTES.articles + "/1"}>
              <span>بیشتر بخوانید</span>
              <ArrowUpLeft className="compatible-icon" />
            </Link>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default HomePage;
