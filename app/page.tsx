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

import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import ScrollX from "root/components/ui/ScrollX/Index";
import { ROUTES } from "root/constants/routes.constants";
import Accordion from "root/components/ui/Accordion/Index";
import AccordionHeader from "root/components/ui/Accordion/Header";
import AccordionContent from "root/components/ui/Accordion/Content";
import ScrollXContainer from "root/components/ui/ScrollX/Container";
import HeroSection from "root/components/templates/landing/HeroSection/Index";

const HomePage = () => {
  return (
    <>
      <Space />
      <div className="container relative">
        <HeroSection />

        <h1 className="text-3xl text-center font-kalameh-bold">
          مکانی برای برنامه نویسی وب <br /> برای خدمات و آموزش با ما همراه باشید
        </h1>
        <Space size="normal" />
        <p className="w-3/4 text-center mx-auto">
          لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥
          شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای
          طراحان رایانه ای...
        </p>
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
          <h2 className="font-kalameh-bold text-center text-2xl">خدمات تیم ما به شما</h2>
          <SparklesIcon className="compatible-icon -scale-x-100" />
        </Flex>

        <Space size="normal" />
        <Flex className="container">
          <div className="card card-effect w-1/3">
            <span className="text-xl font-vazir-bold">فرانت اند</span>
            <Space size="normal" />
            <div className="w-full aspect-square rounded-xl bg-foreground/10"></div>
            <Space size="normal" />
            <Link className="btn btn-outline" href={ROUTES.services}>
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
          <div className="card card-effect w-1/3">
            <span className="text-xl font-vazir-bold">بک اند</span>
            <Space size="normal" />
            <div className="w-full aspect-square rounded-xl bg-foreground/10"></div>
            <Space size="normal" />
            <Link className="btn btn-outline" href={ROUTES.services}>
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
          <div className="card card-effect w-1/3">
            <span className="text-xl font-vazir-bold">ربات تلگرام</span>
            <Space size="normal" />
            <div className="w-full aspect-square rounded-xl bg-foreground/10"></div>
            <Space size="normal" />
            <Link className="btn btn-outline" href={ROUTES.services}>
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
        </Flex>
      </div>

      <Space />
      <Flex justify="center">
        <SparklesIcon className="compatible-icon" />
        <h3 className="text-center text-2xl font-kalameh-bold">نگاهتان از ما</h3>
        <SparklesIcon className="compatible-icon -scale-x-100" />
      </Flex>
      <Space size="normal" />
      <div className="grid grid-cols-2 container gap-3">
        <Flex className="card card-effect">
          <div className="size-16 min-w-16 bg-foreground/10 rounded-lg" />
          <div>
            <span className="font-vazir-bold text-lg">بهترین روش های برنامه ریزی!</span>
            <Space size="xs" />
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </div>
        </Flex>

        <Flex className="card card-effect">
          <div className="size-16 min-w-16 bg-foreground/10 rounded-lg" />
          <div>
            <span className="font-vazir-bold text-lg">بهترین روش های برنامه ریزی!</span>
            <Space size="xs" />
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </div>
        </Flex>

        <Flex className="card card-effect">
          <div className="size-16 min-w-16 bg-foreground/10 rounded-lg" />
          <div>
            <span className="font-vazir-bold text-lg">بهترین روش های برنامه ریزی!</span>
            <Space size="xs" />
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </div>
        </Flex>

        <Flex className="card card-effect">
          <div className="size-16 min-w-16 bg-foreground/10 rounded-lg" />
          <div>
            <span className="font-vazir-bold text-lg">بهترین روش های برنامه ریزی!</span>
            <Space size="xs" />
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </div>
        </Flex>
      </div>
      <Space />
      <div className="container">
        {Array.from(new Array(3)).map(() => (
          <Accordion key={Math.random()}>
            <AccordionHeader>
              <h6 className="font-vazir-bold text-xl">
                چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
              </h6>
            </AccordionHeader>
            <AccordionContent>
              <Space size="normal" />
              <p className="">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                طراحی اساسا مورد استفاده قرار گیرد.
              </p>
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
        <h4 className="font-kalameh-bold text-center text-2xl">نظرات مشتریان/همکاران</h4>
        <SparklesIcon className="compatible-icon -scale-x-100" />
      </Flex>
      <Space size="normal" />
      <ScrollX className="container">
        <ScrollXContainer className="items-start">
          {Array.from(new Array(12)).map(() => (
            <div className="w-2/5 min-w-2/5" key={Math.random()}>
              <span className="font-vazir-bold text-lg">اردلان یزدان دوست</span>
              <Space size="sm" />
              <p className="bg-foreground/5 card">
                {Array.from(new Array(Math.ceil(Math.random() * 10))).map(
                  () => "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ بود."
                )}
                {".."}
              </p>
            </div>
          ))}
        </ScrollXContainer>
      </ScrollX>

      <Space />
      <div className="container card card-effect">
        <h5 className="text-xl font-kalameh-bold">مشاوه میخواهید؟ با ما در ارتباط باشید!</h5>
        <Space size="normal" />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
          سوالات پیوسته اهل دنیای مورد استفاده قرار گیرد.
        </p>
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
      </div>

      <Space />
      <Flex justify="center">
        <SparklesIcon className="compatible-icon" />
        <h6 className="font-kalameh-bold text-2xl text-center">آخرین مقالات سایت</h6>
        <SparklesIcon className="compatible-icon -scale-x-100" />
      </Flex>
      <Space size="normal" />
      {/* <div className="container f-row-scroll"> */}
      <ScrollX className="container">
        <ScrollXContainer>
          {Array.from(new Array(7)).map(() => (
            <div className="w-2/5 card card-effect min-w-2/5" key={Math.random()}>
              <div className="w-full aspect-video bg-foreground/10 rounded-lg" />

              <Space size="sm" />
              <h6 className="text-xl font-vazir-bold">استفاده از تکنیک توسعه بر پایه دامنه</h6>
              <Space size="xs" />
              <div className="badge">مهندسی نرم افزار</div>

              <Space size="sm" />
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد{" "}
              </p>

              <Space size="sm" />
              <Link className="btn btn-outline w-full" href={ROUTES.articles + "/1"}>
                <span>بیشتر بخوانید</span>
                <ArrowUpLeft className="compatible-icon" />
              </Link>
            </div>
          ))}
        </ScrollXContainer>
      </ScrollX>
      {/* </div> */}
    </>
  );
};

export default HomePage;
