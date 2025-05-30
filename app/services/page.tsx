"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircleIcon } from "lucide-react";

import { $mergeKeys } from "root/utils/general.utils";
import ScrollX from "root/components/ui/ScrollX/Index";
import { ROUTES } from "root/constants/routes.constants";
import PageHero from "root/components/modules/PageHero/Index";
import PageModal from "root/components/modules/PageModal/Index";
import ScrollXContainer from "root/components/ui/ScrollX/Container";
import PageModalHeader from "root/components/modules/PageModal/Header";
import PageModalContent from "root/components/modules/PageModal/Content";

const ServicesPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <div className="p-1.5 mt-9 f-align w-fit mx-auto rounded-lg gap-1.5 bg-foreground-6">
        <button className="btn btn-fill">فرانت اند</button>
        <button className="btn btn-ghost">بک اند</button>
        <button className="btn btn-ghost">موبایل</button>
        <button className="btn btn-ghost">دسکتاپ</button>
        <button className="btn btn-ghost">کلاود</button>
      </div>

      <div className="container mt-6 grid grid-cols-2">
        {Array.from(new Array(7)).map(() => (
          <div className="card card-effect" key={Math.random()}>
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
              <button className="btn btn-fill w-1/2" onClick={() => setOpen(true)}>
                <span>ثبت سفارش</span>
                <CheckCircleIcon className="compatible-icon" />
              </button>
              <Link className="btn btn-ghost w-1/2" href={$mergeKeys("/", [ROUTES.services, 1])}>
                بیشتر بخوانید
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-9">
        <div className="f-align gap-6">
          <div className="size-16 min-w-16 rounded-full bg-foreground-5"></div>
          <div>
            <h3 className="text-xl font-kalameh-bold">ثبت درخواست پروژه</h3>
            <p className="mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
            </p>
          </div>
        </div>

        <div className="f-align gap-6 mt-9 justify-end" dir="ltr">
          <div className="size-16 min-w-16 rounded-full bg-foreground-5"></div>
          <div>
            <h3 className="text-xl font-kalameh-bold">ثبت درخواست پروژه</h3>
            <p className="mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
            </p>
          </div>
        </div>

        <div className="f-align gap-6 mt-9">
          <div className="size-16 min-w-16 rounded-full bg-foreground-5"></div>
          <div>
            <h3 className="text-xl font-kalameh-bold">ثبت درخواست پروژه</h3>
            <p className="mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
            </p>
          </div>
        </div>

        <div className="f-align gap-6 mt-9 justify-end" dir="ltr">
          <div className="size-16 min-w-16 rounded-full bg-foreground-5"></div>
          <div>
            <h3 className="text-xl font-kalameh-bold">ثبت درخواست پروژه</h3>
            <p className="mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
            </p>
          </div>
        </div>
      </div>

      <PageModal isOpen={isOpen} closeHandler={() => setOpen(false)}>
        <PageModalHeader title="ثبت پروژه ربات تلگرام" />

        <PageModalContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium non
            veritatis facilis perferendis ipsam fuga fugit perspiciatis ea, dolores nostrum
            quibusdam, dolorum dolore soluta, aliquid deleniti repudiandae officia. Impedit iste,
            laboriosam delectus doloribus assumenda esse quo soluta sunt vero in placeat dolorem.
            Enim repellat nihil, harum saepe ullam iusto corporis ea! Voluptate cum a porro
            dignissimos officiis? Totam delectus aperiam blanditiis dolores. Inventore obcaecati
            tempore a maxime, nesciunt consequuntur repudiandae cumque, delectus temporibus
            repellendus ipsa dolorum veritatis animi! Nemo aliquam ipsam hic repudiandae ab velit
            nam voluptate esse accusantium, omnis doloribus accusamus cumque reprehenderit, quasi
            consequatur vero impedit corporis.
          </p>
        </PageModalContent>
      </PageModal>
    </>
  );
};

export default ServicesPage;
