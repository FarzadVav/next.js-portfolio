import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeftIcon, CheckIcon, ChevronDownIcon, FileIcon, UserPenIcon } from "lucide-react";

import githubImg from "root/public/logos/github.svg";
import youtubeImg from "root/public/logos/youtube.svg";
import discordImg from "root/public/logos/discord.svg";
import { ROUTES } from "root/constants/routes.constants";
import telegramImg from "root/public/logos/telegram.svg";
import linkedinImg from "root/public/logos/linkedin.svg";
import instagramImg from "root/public/logos/instagram.svg";
import PageHero from "root/components/modules/PageHero/Index";
import PageTitle from "root/components/modules/PageTitle/Index";

const ConnectPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <div className="container grid grid-cols-3 gap-9 mt-9">
        <div className="f-align gap-6">
          <Image src={telegramImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-xs mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="btn-icon-size" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-6">
          <Image src={instagramImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-xs mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="btn-icon-size" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-6">
          <Image src={linkedinImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-xs mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="btn-icon-size" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-6">
          <Image src={discordImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-xs mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="btn-icon-size" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-6">
          <Image src={youtubeImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-xs mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="btn-icon-size" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-6">
          <Image src={githubImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-xs mt-1.5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="btn-icon-size" />
            </Link>
          </div>
        </div>
      </div>

      <PageTitle className="mt-9">
        <h2>ایونت های جامعه</h2>
      </PageTitle>
      <div className="container mt-6 grid grid-cols-2">
        {Array.from(new Array(4)).map(() => (
          <div className="card-effect" key={Math.random()}>
            <div className="w-full aspect-video bg-foreground-5 rounded-lg" />

            <h2 className="mt-3 text-xl font-vazir-bold">استفاده از تکنیک توسعه بر پایه دامنه</h2>

            <p className="mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
            </p>

            <Link className="mt-6 btn-outline" href={ROUTES.home}>
              <span>ثبت نام</span>
              <UserPenIcon className="btn-icon-size" />
            </Link>
          </div>
        ))}
      </div>

      <PageTitle className="mt-9">
        <h2>هر درخواستی از ما دارید بنویسید!</h2>
      </PageTitle>
      <p className="container mt-6 text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
        است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
        تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
        در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
        افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
        فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
        شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>

      <div className="container mt-6">
        <div className="f-align gap-3">
          <label className="input-outline w-1/2">
            <input className="input-field" placeholder="موضوع تیکت" name="connect_topic" />
            <ChevronDownIcon className="btn-icon-size" />
          </label>
          <label className="input-outline w-1/2" dir="ltr">
            <input className="input-field" placeholder="09** *** ****" name="connect_phone" />
          </label>
        </div>
        <div className="mt-3">
          <label className="input-outline input-textarea">
            <textarea
              name="connect_text"
              className="input-field"
              placeholder="متن تان را شرح دهید..."
            />
          </label>
          <button className="btn-outline mt-3">
            <span>فایل ضمیمه (اختیاری)</span>
            <FileIcon className="btn-icon-size" />
          </button>
          <button className="btn-fill mt-6">
            <span>ثبت تیکت</span>
            <CheckIcon className="btn-icon-size" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ConnectPage;
