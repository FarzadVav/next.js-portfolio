import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

import { ROUTES } from "root/constants/routes.constants";
import PageHero from "root/components/modules/PageHero/Index";

const ArticlesPage = () => {
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
            <div className="w-full aspect-video bg-foreground-5 rounded-lg" />

            <h6 className="text-xl mt-3 font-vazir-bold">استفاده از توسعه بر پایه دامنه</h6>

            <div className="badge mt-3">مهندسی نرم افزار</div>

            <p className="mt-3 line-clamp-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>

            <Link className="mt-6 btn-outline" href={ROUTES.articles + "/1"}>
              <span>بیشتر بخوانید</span>
              <ArrowUpLeft className="btn-icon-size" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
