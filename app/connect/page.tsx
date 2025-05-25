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

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Input from "root/components/ui/Input/Index";
import Space from "root/components/ui/Space/Index";
import githubImg from "root/public/logos/github.svg";
import { $mergeKeys } from "root/utils/general.utils";
import youtubeImg from "root/public/logos/youtube.svg";
import Heading from "root/components/ui/Heading/Index";
import discordImg from "root/public/logos/discord.svg";
import { ROUTES } from "root/constants/routes.constants";
import TextArea from "root/components/ui/Input/Textarea";
import telegramImg from "root/public/logos/telegram.svg";
import linkedinImg from "root/public/logos/linkedin.svg";
import Paragraph from "root/components/ui/Paragraph/Index";
import instagramImg from "root/public/logos/instagram.svg";
import InputWrapper from "root/components/ui/Input/Wrapper";
import PageHero from "root/components/modules/PageHero/Index";

const ConnectPage = () => {
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
        <Box>
          <Flex space="lg">
            <Image src={telegramImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link className="btn btn-outline" href={"https://telegram.org"} target="_blank">
                <span>مشاهده</span>
                <ArrowUpLeftIcon className="compatible-icon" />
              </Link>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex space="lg">
            <Image src={instagramImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link className="btn btn-outline" href={"https://telegram.org"} target="_blank">
                <span>مشاهده</span>
                <ArrowUpLeftIcon className="compatible-icon" />
              </Link>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex space="lg">
            <Image src={linkedinImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link className="btn btn-outline" href={"https://telegram.org"} target="_blank">
                <span>مشاهده</span>
                <ArrowUpLeftIcon className="compatible-icon" />
              </Link>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex space="lg">
            <Image src={discordImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link className="btn btn-outline" href={"https://telegram.org"} target="_blank">
                <span>مشاهده</span>
                <ArrowUpLeftIcon className="compatible-icon" />
              </Link>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex space="lg">
            <Image src={youtubeImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link className="btn btn-outline" href={"https://telegram.org"} target="_blank">
                <span>مشاهده</span>
                <ArrowUpLeftIcon className="compatible-icon" />
              </Link>
            </div>
          </Flex>
        </Box>
        <Box>
          <Flex space="lg">
            <Image src={githubImg} alt="Web tunners telegram channel" width={64} height={64} />
            <div>
              <Heading>کانال تلگرام ما</Heading>

              <Space size="sm" />
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...
              </Paragraph>

              <Space size="sm" />
              <Link className="btn btn-outline" href={"https://telegram.org"} target="_blank">
                <span>مشاهده</span>
                <ArrowUpLeftIcon className="compatible-icon" />
              </Link>
            </div>
          </Flex>
        </Box>
      </div>

      <Space />
      <div className="container">
        <Flex justify="center">
          <SparklesIcon className="compatible-icon" />
          <Heading className="text-center" size="lg">
            <h2>ایونت های جامعه</h2>
          </Heading>
          <SparklesIcon className="compatible-icon -scale-x-100" />
        </Flex>
      </div>

      <Space size="normal" />
      <div className="container grid grid-cols-2 gap-3">
        {Array.from(new Array(4)).map(() => (
          <Box key={Math.random()}>
            <div className="w-full aspect-video bg-foreground/10 rounded-lg" />

            <Space size="normal" />
            <Heading font="vazir">
              <h2>استفاده از تکنیک توسعه بر پایه دامنه</h2>
            </Heading>

            <Space size="sm" />
            <Paragraph>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
            </Paragraph>

            <Space size="sm" />
            <Link className="btn btn-outline w-full" href={$mergeKeys("/", [ROUTES.articles, 1])}>
              <span>ثبت نام</span>
              <UserPenIcon className="compatible-icon" />
            </Link>
          </Box>
        ))}
      </div>

      <Space />
      <div className="container">
        <Flex justify="center">
          <SparklesIcon className="compatible-icon" />
          <Heading className="text-center" size="lg">
            <h2>هر درخواستی از ما دارید بنویسید!</h2>
          </Heading>
          <SparklesIcon className="compatible-icon -scale-x-100" />
        </Flex>
      </div>

      <Space />
      <Paragraph className="container text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
        است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
        تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
        در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
        افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
        فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
        شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </Paragraph>

      <Space />
      <Flex className="container">
        <InputWrapper className="w-1/2" htmlFor="connect_topic">
          <Input placeholder="موضوع تیکت" id="connect_topic" name="connect_topic" />
          <ChevronDownIcon className="compatible-icon" />
        </InputWrapper>
        <InputWrapper className="w-1/2" htmlFor="connect_phone" dir="ltr">
          <Input placeholder="09** *** ****" id="connect_phone" name="connect_phone" />
        </InputWrapper>
      </Flex>
      <Space size="sm" />
      <div className="container">
        <InputWrapper htmlFor="connect_text" textarea-size="normal">
          <TextArea placeholder="متن تان را شرح دهید..." id="connect_text" name="connect_text" />
        </InputWrapper>
        <Space size="sm" />
        <button className="btn btn-outline">
          <span>فایل ضمیمه (اختیاری)</span>
          <FileIcon className="compatible-icon" />
        </button>
        <Space size="sm" />
        <button className="btn btn-fill mx-auto">
          <span>ثبت تیکت</span>
          <CheckIcon className="compatible-icon" />
        </button>
      </div>
    </>
  );
};

export default ConnectPage;
