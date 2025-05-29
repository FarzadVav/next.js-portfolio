import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

import Space from "root/components/ui/Space/Index";
import { $mergeKeys } from "root/utils/general.utils";
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

      <div className="f-align mt-9 p-1 w-fit gap-3 mx-auto rounded-lg bg-foreground/5">
        <button className="btn btn-fill">فرانت اند</button>
        <button className="btn btn-ghost">بک اند</button>
        <button className="btn btn-ghost">موبایل</button>
        <button className="btn btn-ghost">دسکتاپ</button>
        <button className="btn btn-ghost">کلاود</button>
      </div>

      <div className="container mt-6 grid grid-cols-2">
        {Array.from(new Array(7)).map(() => (
          <div className="card card-effect" key={Math.random()}>
            <div className="w-full aspect-video bg-foreground/10 rounded-lg" />

            <h2 className="text-xl font-vazir-bold mt-3">استفاده از تکنیک توسعه بر پایه دامنه</h2>
            <Space size="xs" />
            <div className="badge">مهندسی نرم افزار</div>

            <p className="mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
            </p>

            <Link className="w-full mt-3" href={$mergeKeys("/", [ROUTES.articles, 1])}>
              <button className="w-full btn btn-outline">
                <span>بیشتر بخوانید</span>
                <ArrowUpLeft className="compatible-icon" />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
