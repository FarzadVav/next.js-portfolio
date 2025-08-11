"use client";

import Link from "next/link";
import { CheckCircleIcon } from "lucide-react";

import ScrollX from "root/components/ui/ScrollX/Index";
import { ROUTES } from "root/constants/routes.constants";
import PageHero from "root/components/PageHero/Index";
import ScrollXContainer from "root/components/ui/ScrollX/Container";

const ServicesPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <div className="p-1.5 mt-9 f-align w-fit mx-auto rounded-lg gap-1.5 bg-foreground-6">
        <button className="btn-fill">فرانت اند</button>
        <button className="btn-ghost">بک اند</button>
        <button className="btn-ghost">موبایل</button>
        <button className="btn-ghost">دسکتاپ</button>
        <button className="btn-ghost">کلاود</button>
      </div>

      <div className="container mt-6 grid grid-cols-2">
        {Array.from(new Array(7)).map(() => (
          <div className="card-effect" key={Math.random()}>
            <div className="f-align gap-3">
              <div className="size-9 rounded-full bg-foreground-5"></div>
              <h2 className="text-xl font-vazir-bold">اپلیکیشن فرانت اند</h2>
            </div>

            <ScrollX className="mt-3">
              <ScrollXContainer className="gap-1.5 no-scrollbar">
                <div className="badge">Javascript</div>
                <div className="badge">React</div>
                <div className="badge">Next</div>
                <div className="badge">Tailwind</div>
                <div className="badge">Chart</div>
                <div className="badge">Astro</div>
                <div className="badge">Vitest</div>
                <div className="badge">Remix</div>
                <div className="badge">Sass</div>
                <div className="badge">Framer</div>
                <div className="badge">PWA</div>
              </ScrollXContainer>
            </ScrollX>

            <p className="mt-3 line-clamp-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
            </p>

            <ul className="mt-3 space-y-1.5 list-disc pr-3">
              <li>داشبورد ادمین</li>
              <li>پنل مدیریت مشتری</li>
              <li>شاپینگ حرفه ای</li>
            </ul>

            <div className="mt-6 f-align gap-3">
              <button className="btn-fill w-1/2">
                <span>ثبت سفارش</span>
                <CheckCircleIcon className="btn-icon-size" />
              </button>
              <Link className="btn-ghost w-1/2" href={ROUTES.services + "/1"}>
                بیشتر بخوانید
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
