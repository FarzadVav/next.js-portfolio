import Link from "next/link";
import { AppleIcon, ArrowUpLeft, ArrowUpLeftIcon, CheckIcon, PlusIcon } from "lucide-react";

import ScrollX from "root/components/ui/ScrollX/Index";
import Accordion from "root/components/ui/Accordion/Index";
import PageHero from "root/components/modules/PageHero/Index";
import PageTitle from "root/components/modules/PageTitle/Index";
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
        <div className="absolute pointer-events-none top-0 bottom-0 right-0 w-1/3 bg-gradient-to-l from-background-1 to-transparent" />
        <div className="absolute pointer-events-none top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-background-1 to-transparent" />

        <div className="f-align overflow-hidden no-scrollbar gap-3 *:min-w-fit">
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
          <div className="badge">
            <AppleIcon className="btn-icon-size" />
            <span>Apple</span>
          </div>
        </div>
      </div>

      <div className="container mt-9 card-effect">
        <video className="bg-foreground-5 w-full card aspect-video" />
      </div>

      <PageTitle className="mt-9">
        <h2>ما چه کارهایی می‌توانیم انجام دهیم؟</h2>
      </PageTitle>
      <ScrollX className="container mt-6">
        <ScrollXContainer>
          {Array.from(new Array(7)).map(() => (
            <div className="card-effect w-2/5 min-w-2/5" key={Math.random()}>
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

      <div className="mt-9">
        <CtaAnimation>
          <div className="card-effect">
            <h3 className="text-2xl font-kalameh-bold">خدمات ما راه موفقیت کسب و کار شماست!</h3>

            <p className="mt-3">
              معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده
              می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد
              از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در
              نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند
            </p>

            <div className="f-align gap-3 mt-6">
              <div className="badge">
                <CheckIcon className="btn-icon-size" />
                <span>حسابداری</span>
              </div>
              <div className="badge">
                <CheckIcon className="btn-icon-size" />
                <span>فروشگاهی</span>
              </div>
              <div className="badge">
                <CheckIcon className="btn-icon-size" />
                <span>اتوماسیون</span>
              </div>
              <div className="badge">
                <CheckIcon className="btn-icon-size" />
                <span>آموزشگاهی</span>
              </div>
              <div className="badge">
                <CheckIcon className="btn-icon-size" />
                <span>مدیریت مشتری</span>
              </div>
            </div>

            <Link href={"/"} className="btn-fill mt-6">
              <span>مشاهده خدمات</span>
              <ArrowUpLeftIcon className="btn-icon-size" />
            </Link>
          </div>
        </CtaAnimation>
      </div>

      <PageTitle className="mt-9">
        <h4>نمونه پروژه های ما</h4>
      </PageTitle>
      <div className="container mt-6 grid grid-cols-2">
        {Array.from(new Array(7)).map(() => (
          <div className="card-effect" key={Math.random()}>
            <div className="w-full aspect-video bg-foreground-5 rounded-lg" />

            <h6 className="text-xl mt-3 font-vazir-bold">استفاده از توسعه بر پایه دامنه</h6>

            <div className="badge mt-3">مهندسی نرم افزار</div>

            <p className="mt-3 line-clamp-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>

            <Link className="mt-6 btn-outline" href={"https://github.com"}>
              <span>بیشتر بخوانید</span>
              <ArrowUpLeft className="btn-icon-size" />
            </Link>
          </div>
        ))}
      </div>

      <PageTitle className="mt-9">
        <h5>پاسخ های سوال هایتان</h5>
      </PageTitle>
      <div className="container mt-6" id="FAQs">
        {Array.from(new Array(6)).map(() => (
          <Accordion key={Math.random()}>
            <AccordionHeader>
              <h6>چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟</h6>
            </AccordionHeader>
            <AccordionContent>
              <p className="pt-6">
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

        <button className="mx-auto mt-6 btn-soft">
          <span>بیشتر</span>
          <PlusIcon className="btn-icon-size" />
        </button>
      </div>
    </>
  );
};

export default AboutPage;
