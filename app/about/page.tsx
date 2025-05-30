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

import ScrollX from "root/components/ui/ScrollX/Index";
import Accordion from "root/components/ui/Accordion/Index";
import PageHero from "root/components/modules/PageHero/Index";
import AccordionHeader from "root/components/ui/Accordion/Header";
import ScrollXContainer from "root/components/ui/ScrollX/Container";
import AccordionContent from "root/components/ui/Accordion/Content";
import CtaAnimation from "root/components/modules/CtaAnimation/Index";

const AboutPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <div className="f-align mt-9 container relative" dir="ltr">
        <div className="absolute pointer-events-none top-0 bottom-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent" />
        <div className="absolute pointer-events-none top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />

        <div className="f-align overflow-x-auto *:min-w-fit" style={{ scrollbarWidth: "none" }}>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="compatible-icon" />
            <span>Apple</span>
          </div>
        </div>
      </div>

      <div className="container mt-9">
        <video className="bg-foreground-5 card w-full aspect-video" />
      </div>

      <div className="container mt-9">
        <div className="f-center">
          <SparklesIcon className="compatible-icon" />
          <h2 className="text-2xl text-center font-kalameh-bold">
            ما چه کارهایی می‌توانیم انجام دهیم؟
          </h2>
          <SparklesIcon className="compatible-icon -scale-x-100" />
        </div>
        <ScrollX className="mt-3">
          <ScrollXContainer>
            {Array.from(new Array(7)).map(() => (
              <div className="card card-effect w-1/3 min-w-1/3" key={Math.random()}>
                <div className="w-2/3 mx-auto aspect-square rounded-lg bg-foreground-5" />
                <p className="text-xl mt-6 text-center font-kalameh-bold">
                  جذب {(3_637_000).toLocaleString("fa")} کاربر
                </p>
                <p className="text-center mt-3">
                  ما در پیشرفته ترین سازمان های ایران با افراد زیبا کار کرده ایم...
                </p>
              </div>
            ))}
          </ScrollXContainer>
        </ScrollX>
      </div>

      <div className="mt-9">
        <CtaAnimation>
          <div className="card card-effect">
            <h3 className="text-xl font-vazir-black">خدمات ما راه موفقیت کسب و کار شماست!</h3>
            <p className="mt-3">
              معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده
              می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد
              از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در
              نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند
            </p>
            <div className="f-align mt-3">
              <div className="badge">
                <CheckIcon className="compatible-icon" />
                <span>حسابداری</span>
              </div>
              <div className="badge">
                <CheckIcon className="compatible-icon" />
                <span>فروشگاهی</span>
              </div>
              <div className="badge">
                <CheckIcon className="compatible-icon" />
                <span>اتوماسیون</span>
              </div>
              <div className="badge">
                <CheckIcon className="compatible-icon" />
                <span>آموزشگاهی</span>
              </div>
              <div className="badge">
                <CheckIcon className="compatible-icon" />
                <span>مدیریت مشتری</span>
              </div>
            </div>
            <Link href={"/"} className="btn btn-fill mt-3">
              <span>مشاهده خدمات</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
        </CtaAnimation>
      </div>

      <div className="container mt-9">
        <div className="f-center">
          <SparklesIcon className="compatible-icon" />
          <h2 className="text-2xl font-vazir-bold">نمونه پروژه های ما</h2>
          <SparklesIcon className="compatible-icon -scale-x-100" />
        </div>
      </div>
      <div className="container mt-9 grid grid-cols-2">
        {Array.from(new Array(7)).map(() => (
          <div className="card card-effect" key={Math.random()}>
            <div className="w-1/3 mx-auto f-center p-3 aspect-square border border-foreground rounded-full">
              <BiohazardIcon className="size-full" />
            </div>

            <h2 className="text-xl font-vazir-bold mt-3">استفاده از تکنیک توسعه بر پایه دامنه</h2>
            <div className="badge mx-auto mt-1.5">مهندسی نرم افزار</div>

            <p className="text-center mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از طراحان گرافیک است چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>

            <Link className="w-full mt-3" href={"https://melktoday.ir/ads"}>
              <button className="w-full btn btn-outline">
                <span>مشاهده</span>
                <ArrowUpLeft className="compatible-icon" />
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="container mt-6">
        <div className="f-center">
          <SparklesIcon className="compatible-icon" />
          <h2 className="text-2xl font-vazir-bold">پاسخ های سوال هایتان</h2>
          <SparklesIcon className="compatible-icon -scale-x-100" />
        </div>
      </div>
      <div className="container mt-6" id="FAQs">
        {Array.from(new Array(6)).map(() => (
          <Accordion key={Math.random()}>
            <AccordionHeader>
              <h4 className="text-lg font-vazir-bold">
                چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
              </h4>
            </AccordionHeader>
            <AccordionContent>
              <p className="pt-3">
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

        <button className="mx-auto mt-6 btn btn-soft">
          <span>بیشتر</span>
          <PlusIcon className="compatible-icon" />
        </button>
      </div>
    </>
  );
};

export default AboutPage;
