import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeftIcon } from "lucide-react";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Button from "root/components/ui/Button/Index";
import githubImg from "root/public/logos/github.svg";
import youtubeImg from "root/public/logos/youtube.svg";
import Heading from "root/components/ui/Heading/Index";
import discordImg from "root/public/logos/discord.svg";
import telegramImg from "root/public/logos/telegram.svg";
import linkedinImg from "root/public/logos/linkedin.svg";
import instagramImg from "root/public/logos/instagram.svg";
import Paragraph from "root/components/ui/Paragraph/Index";
import PageHero from "root/components/modules/PageHero/Index";

const CommunityPage = () => {
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
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
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
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
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
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
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
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
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
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
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
              <Link href={"https://telegram.org"} target="_blank">
                <Button shape="outline">
                  <span>مشاهده</span>
                  <ArrowUpLeftIcon className="compatible-icon-size" />
                </Button>
              </Link>
            </div>
          </Flex>
        </Box>
      </div>
    </>
  );
};

export default CommunityPage;
