import Link from "next/link";
import {
  Search,
  ArrowUpLeft,
  ArrowUpLeftIcon,
  CheckIcon,
  SendHorizonalIcon,
  Sparkles,
} from "lucide-react";

import ScrollX from "root/components/ui/ScrollX/Index";
import { ROUTES } from "root/constants/routes.constants";
import Accordion from "root/components/ui/Accordion/Index";
import PageTitle from "root/components/modules/PageTitle/Index";
import AccordionHeader from "root/components/ui/Accordion/Header";
import AccordionContent from "root/components/ui/Accordion/Content";
import ScrollXContainer from "root/components/ui/ScrollX/Container";
import HeroSectionLogos from "root/components/templates/Home/HeroSectionLogos/Index";

const HomePage = () => {
  return (
    <>
      <div className="container mt-9 relative">
        <HeroSectionLogos />

        <h1 className="text-3xl text-center font-kalameh-bold">
          مکانی برای برنامه نویسی وب <br /> برای خدمات و آموزش با ما همراه باشید
        </h1>

        <p className="w-3/4 text-center mx-auto mt-6">
          لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥
          شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای
          طراحان رایانه ای...
        </p>

        <label className="input-outline w-1/2 mx-auto mt-6">
          <input className="input-field" type="text" placeholder="جستجوی هرچی میخوای..." />
          <Search className="compatible-icon" />
        </label>

        <div className="f-center flex-wrap w-3/4 gap-3 mx-auto mt-6">
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
        </div>
      </div>

      <div className="bg-gradient-to-b from-foreground-5 to-transparent rounded-t-[5%] pt-9 mt-9">
        <PageTitle>
          <h2>خدمات تیم ما به شما</h2>
        </PageTitle>

        <div className="container mt-6 f-align">
          <div className="card-effect w-1/3">
            <span className="text-xl font-vazir-bold">فرانت اند</span>
            <div className="w-full mt-6 aspect-square rounded-xl bg-foreground-5"></div>
            <Link className="btn-outline mt-6" href={ROUTES.services}>
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
          <div className="card-effect w-1/3">
            <span className="text-xl font-vazir-bold">بک اند</span>
            <div className="w-full mt-6 aspect-square rounded-xl bg-foreground-5"></div>
            <Link className="mt-6 btn-outline" href={ROUTES.services}>
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
          <div className="card-effect w-1/3">
            <span className="text-xl font-vazir-bold">ربات تلگرام</span>
            <div className="w-full mt-6 aspect-square rounded-xl bg-foreground-5"></div>
            <Link className="mt-6 btn-outline" href={ROUTES.services}>
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
        </div>
      </div>

      <PageTitle className="mt-9">
        <h3>نگاهتان از ما</h3>
      </PageTitle>
      <div className="grid mt-6 grid-cols-2 container">
        <div className="f-align card-effect gap-3">
          <div className="size-16 min-w-16 bg-foreground-5 rounded-lg" />
          <div>
            <span className="font-vazir-bold text-lg">بهترین روش های برنامه ریزی!</span>
            <p className="text-sm mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </div>
        </div>

        <div className="f-align card-effect gap-3">
          <div className="size-16 min-w-16 bg-foreground-5 rounded-lg" />
          <div>
            <span className="font-vazir-bold text-lg">بهترین روش های برنامه ریزی!</span>
            <p className="text-sm mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </div>
        </div>

        <div className="f-align card-effect gap-3">
          <div className="size-16 min-w-16 bg-foreground-5 rounded-lg" />
          <div>
            <span className="font-vazir-bold text-lg">بهترین روش های برنامه ریزی!</span>
            <p className="text-sm mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </div>
        </div>

        <div className="f-align card-effect gap-3">
          <div className="size-16 min-w-16 bg-foreground-5 rounded-lg" />
          <div>
            <span className="font-vazir-bold text-lg">بهترین روش های برنامه ریزی!</span>
            <p className="text-sm mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-9">
        {Array.from(new Array(3)).map(() => (
          <Accordion key={Math.random()}>
            <AccordionHeader>
              <h6>چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟</h6>
            </AccordionHeader>
            <AccordionContent>
              <p className="mt-6">
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

        <div className="f-align gap-3 mt-6">
          <Link className="btn-fill" href={ROUTES.about + "#FAQs"}>
            <span>درباره ما</span>
            <ArrowUpLeftIcon className="compatible-icon" />
          </Link>
          <Link className="btn-ghost" href={ROUTES.about + "#FAQs"}>
            <span>همه سوالات</span>
            <ArrowUpLeftIcon className="compatible-icon" />
          </Link>
        </div>
      </div>

      <PageTitle className="mt-9">
        <h4>نظرات مشتریان/همکاران</h4>
      </PageTitle>
      <ScrollX className="container mt-6">
        <ScrollXContainer className="items-start gap-3">
          {Array.from(new Array(12)).map(() => (
            <div className="w-2/5 min-w-2/5" key={Math.random()}>
              <span className="font-vazir-bold text-lg">اردلان یزدان دوست</span>
              <p className="bg-foreground-6 mt-3 card">
                {Array.from(new Array(Math.ceil(Math.random() * 10))).map(
                  () => "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ بود."
                )}
                {".."}
              </p>
            </div>
          ))}
        </ScrollXContainer>
      </ScrollX>

      <div className="container card-effect mt-9">
        <h5 className="text-xl font-kalameh-bold">مشاوه میخواهید؟ با ما در ارتباط باشید!</h5>
        <p className="mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
          سوالات پیوسته اهل دنیای مورد استفاده قرار گیرد.
        </p>
        <div className="mt-6 f-align gap-3">
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
        </div>
        <Link className="mt-6 btn-fill" href={ROUTES.connect}>
          <span>درخواست دهید</span>
          <SendHorizonalIcon className="compatible-icon -scale-x-100" />
        </Link>
      </div>

      <PageTitle className="mt-9">
        <h6>آخرین مقالات سایت</h6>
      </PageTitle>
      <ScrollX className="container mt-6">
        <ScrollXContainer>
          {Array.from(new Array(7)).map(() => (
            <div className="w-2/5 card-effect min-w-2/5" key={Math.random()}>
              <div className="w-full aspect-video bg-foreground-5 rounded-lg" />

              <h6 className="text-xl mt-3 font-vazir-bold">استفاده از توسعه بر پایه دامنه</h6>

              <div className="badge mt-3">مهندسی نرم افزار</div>

              <p className="mt-3 line-clamp-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد
              </p>

              <Link className="mt-6 btn-outline" href={ROUTES.articles + "/1"}>
                <span>بیشتر بخوانید</span>
                <ArrowUpLeft className="compatible-icon" />
              </Link>
            </div>
          ))}
        </ScrollXContainer>
      </ScrollX>
    </>
  );
};

export default HomePage;
