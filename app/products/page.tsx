"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircleIcon } from "lucide-react";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Badge from "root/components/ui/Badge/Index";
import Button from "root/components/ui/Button/Index";
import { $mergeKeys } from "root/utils/general.utils";
import Heading from "root/components/ui/Heading/Index";
import { ROUTES } from "root/constants/routes.constants";
import Paragraph from "root/components/ui/Paragraph/Index";
import PageHero from "root/components/modules/PageHero/Index";
import PageModal from "root/components/modules/PageModal/Index";
import PageModalHeader from "root/components/modules/PageModal/Header";
import PageModalContent from "root/components/modules/PageModal/Content";

const ProductsPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Space />

      <PageHero
        src=""
        title="بیاید باهم پروژه های خفن رو پیاده کنیم"
        description="لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای..."
      />

      <Space />

      <div className="container grid grid-cols-2 gap-3">
        {Array.from(new Array(7)).map(() => (
          <Box key={Math.random()}>
            <Flex>
              <div className="size-7 rounded-full bg-foreground/10"></div>
              <Heading font="vazir">
                <h2>اپلیکیشن فرانت اند</h2>
              </Heading>
            </Flex>
            <Space size="sm" />
            <Flex className="overflow-x-auto pb-1">
              <Badge>Javascript</Badge>
              <Badge>React</Badge>
              <Badge>Next</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Chart</Badge>
              <Badge>Astro</Badge>
              <Badge>Vitest</Badge>
              <Badge>Remix</Badge>
              <Badge>Sass</Badge>
              <Badge>Framer</Badge>
              <Badge>PWA</Badge>
            </Flex>
            <Space size="sm" />
            <Paragraph>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
            </Paragraph>
            <Space size="sm" />
            <ul className="space-y-1 list-disc pr-3">
              <li>داشبورد ادمین</li>
              <li>پنل مدیریت مشتری</li>
              <li>شاپینگ حرفه ای</li>
            </ul>
            <Space size="sm" />
            <Flex>
              <Button className="w-1/2" onClick={() => setOpen(true)}>
                <span>ثبت سفارش</span>
                <CheckCircleIcon className="compatible-icon-size" />
              </Button>
              <Link className="w-1/2" href={$mergeKeys("/", [ROUTES.products, 1])}>
                <Button className="w-full" shape="ghost">
                  بیشتر بخوانید
                </Button>
              </Link>
            </Flex>
          </Box>
        ))}
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

export default ProductsPage;
