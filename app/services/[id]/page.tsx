import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Input from "root/components/ui/Input/Index";
import Button from "root/components/ui/Button/Index";
import TextArea from "root/components/ui/Input/Textarea";
import Paragraph from "root/components/ui/Paragraph/Index";
import InputWrapper from "root/components/ui/Input/Wrapper";
import PageHero from "root/components/modules/PageHero/Index";
import {
  ArrowUpLeft,
  ArrowUpLeftIcon,
  PhoneIcon,
  SendHorizonalIcon,
  SparklesIcon,
  UserIcon,
} from "lucide-react";

const ServicesDetailPage = () => {
  return (
    <>
      <Space />

      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <Space />

      <div className="container grid grid-cols-3 gap-3">
        {Array.from(new Array(6)).map(() => (
          <Box key={Math.random()}>
            <div className="size-12 bg-success/10 p-3 rounded-full center-items">
              <SparklesIcon className="size-full text-success" />
            </div>
            <Space size="sm" />
            <h2 className="text-lg font-vazir-black">پشتیانی ۶ ماهه</h2>
            <Space size="xs" />
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است...
            </p>
          </Box>
        ))}
      </div>

      <Space />

      <div className="container">
        <h3 className="text-xl font-kalameh-bold">برای کارهای بزرگ تر باید چه کرد؟</h3>
        <Space size="sm" />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>

        <Space />
        <h3 className="text-xl font-kalameh-bold">برای کارهای بزرگ تر باید چه کرد؟</h3>
        <Space size="sm" />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>

        <Space />
        <h3 className="text-xl font-kalameh-bold">برای کارهای بزرگ تر باید چه کرد؟</h3>
        <Space size="sm" />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
          افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>

      <Space />

      <Flex
        className="container py-20 bg-gradient-to-b from-foreground/10 to-transparent rounded-2xl"
        wrap="wrap"
        justify="center"
      >
        <Link href={"https://melktoday.ir"}>
          <Button shape="outline">
            <span className="font-vazir-black">1.</span>
            <span>مدیریت املاک</span>
            <ArrowUpLeftIcon className="compatible-icon-size" />
          </Button>
        </Link>
        <Link href={"https://melktoday.ir"}>
          <Button shape="outline">
            <span className="font-vazir-black">2.</span>
            <span>دستیار هوشمند قرارداد</span>
            <ArrowUpLeftIcon className="compatible-icon-size" />
          </Button>
        </Link>{" "}
        <Link href={"https://melktoday.ir"}>
          <Button shape="outline">
            <span className="font-vazir-black">3.</span>
            <span>نئو بانک اینترنتی</span>
            <ArrowUpLeftIcon className="compatible-icon-size" />
          </Button>
        </Link>{" "}
        <Link href={"https://melktoday.ir"}>
          <Button shape="outline">
            <span className="font-vazir-black">4.</span>
            <span>سیستم ساخت میومیو</span>
            <ArrowUpLeftIcon className="compatible-icon-size" />
          </Button>
        </Link>{" "}
        <Link href={"https://melktoday.ir"}>
          <Button shape="outline">
            <span className="font-vazir-black">5.</span>
            <span>آکادمی آموزش زبان تایلندی</span>
            <ArrowUpLeftIcon className="compatible-icon-size" />
          </Button>
        </Link>{" "}
        <Link href={"https://melktoday.ir"}>
          <Button shape="outline">
            <span className="font-vazir-black">6.</span>
            <span>پلتفرم پزشکی سروستان</span>
            <ArrowUpLeftIcon className="compatible-icon-size" />
          </Button>
        </Link>{" "}
        <Link href={"https://melktoday.ir"}>
          <Button shape="outline">
            <span className="font-vazir-black">7.</span>
            <span>آنلاین شاپ ریحون</span>
            <ArrowUpLeftIcon className="compatible-icon-size" />
          </Button>
        </Link>
      </Flex>
      <Paragraph className="text-center" size="sm">
        طرح سفارش گرفته شده استفاده می نماید، تا از چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا
        برای صفحه‌آرایی...
      </Paragraph>

      <Space />

      <Box className="container">
        <h4 className="text-2xl font-kalameh-black text-center">ثبت پروژه حرفه ای شما</h4>
        <Space />
        <Flex>
          <InputWrapper htmlFor="fullname">
            <Input placeholder="نام و نام خانوادگی" id="fullname" />
            <UserIcon className="compatible-icon-size" />
          </InputWrapper>
          <InputWrapper htmlFor="phone" dir="ltr">
            <Input placeholder="09*********" id="phone" />
            <PhoneIcon className="compatible-icon-size" />
          </InputWrapper>
        </Flex>
        <Space size="sm" />
        <InputWrapper htmlFor="description" textarea-size="normal">
          <TextArea placeholder="شرح درخواست شما..." id="description" />
        </InputWrapper>
        <Space size="sm" />
        <Button>
          <span>ثبت درخواست</span>
          <SendHorizonalIcon className="compatible-icon-size -scale-x-100" />
        </Button>
      </Box>
    </>
  );
};

export default ServicesDetailPage;
