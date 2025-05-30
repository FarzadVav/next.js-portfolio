import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpLeftIcon,
  CheckIcon,
  ChevronDownIcon,
  FileIcon,
  SparklesIcon,
  UserPenIcon,
} from "lucide-react";

import githubImg from "root/public/logos/github.svg";
import { $mergeKeys } from "root/utils/general.utils";
import youtubeImg from "root/public/logos/youtube.svg";
import discordImg from "root/public/logos/discord.svg";
import { ROUTES } from "root/constants/routes.constants";
import telegramImg from "root/public/logos/telegram.svg";
import linkedinImg from "root/public/logos/linkedin.svg";
import instagramImg from "root/public/logos/instagram.svg";
import PageHero from "root/components/modules/PageHero/Index";

const ConnectPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <div className="container grid grid-cols-3 mt-9">
        <div className="f-align gap-6">
          <Image src={telegramImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="text-xl font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-sm mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-6">
          <Image src={instagramImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="text-xl font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-sm mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-6">
          <Image src={linkedinImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="text-xl font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-sm mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-6">
          <Image src={discordImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="text-xl font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-sm mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-6">
          <Image src={youtubeImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="text-xl font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-sm mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-6">
          <Image src={githubImg} alt="Web tunners telegram channel" width={64} height={64} />
          <div>
            <span className="text-xl font-vazir-bold">کانال تلگرام ما</span>

            <p className="text-sm mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
            </p>

            <Link className="btn btn-outline mt-3" href={"https://telegram.org"} target="_blank">
              <span>مشاهده</span>
              <ArrowUpLeftIcon className="compatible-icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-9">
        <div className="f-center">
          <SparklesIcon className="compatible-icon" />
          <h2 className="text-2xl font-kalameh-bold">ایونت های جامعه</h2>
          <SparklesIcon className="compatible-icon -scale-x-100" />
        </div>
      </div>

      <div className="container mt-6 grid grid-cols-2 gap-3">
        {Array.from(new Array(4)).map(() => (
          <div className="card card-effect" key={Math.random()}>
            <div className="w-full aspect-video bg-foreground-5 rounded-lg" />

            <h2 className="mt-6 text-xl font-vazir-bold">استفاده از تکنیک توسعه بر پایه دامنه</h2>

            <p className="mt-3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
            </p>

            <Link
              className="btn mt-3 btn-outline w-full"
              href={$mergeKeys("/", [ROUTES.articles, 1])}
            >
              <span>ثبت نام</span>
              <UserPenIcon className="compatible-icon" />
            </Link>
          </div>
        ))}
      </div>

      <div className="container mt-9">
        <div className="f-center">
          <SparklesIcon className="compatible-icon" />
          <h2 className="text-2xl font-vazir-bold">هر درخواستی از ما دارید بنویسید!</h2>
          <SparklesIcon className="compatible-icon -scale-x-100" />
        </div>
      </div>

      <p className="container mt-9 text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
        است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
        تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
        در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
        افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
        فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
        شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>

      <div className="f-align gap-3 container">
        <label className="input input-outline w-1/2">
          <input className="input-field" placeholder="موضوع تیکت" name="connect_topic" />
          <ChevronDownIcon className="compatible-icon" />
        </label>
        <label className="input input-outline w-1/2" dir="ltr">
          <input className="input-field" placeholder="09** *** ****" name="connect_phone" />
        </label>
      </div>
      <div className="container mt-3">
        <label className="input input-outline input-textarea">
          <textarea
            name="connect_text"
            className="textarea-field"
            placeholder="متن تان را شرح دهید..."
          />
        </label>
        <button className="btn btn-outline mt-3">
          <span>فایل ضمیمه (اختیاری)</span>
          <FileIcon className="compatible-icon" />
        </button>
        <button className="btn btn-fill mx-auto mt-3">
          <span>ثبت تیکت</span>
          <CheckIcon className="compatible-icon" />
        </button>
      </div>
    </>
  );
};

export default ConnectPage;
