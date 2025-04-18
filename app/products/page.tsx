"use client";

import Link from "next/link";
import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";
import Badge from "root/components/ui/Badge/Index";
import Button from "root/components/ui/Button/Index";
import Heading from "root/components/ui/Heading/Index";
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

      <div className="container">
        <Box>
          <Flex className="items-stretch">
            <div className="size-64 shrink-0 rounded-2xl bg-foreground/10" />
            <Flex direction="column" align="start" justify="between">
              <Heading font="vazir">
                <h2>سیستم مدیریت مشتری فروشگاه</h2>
              </Heading>
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون لورم ایپسوم متن ساختگی با
                تولید سادگی نامفهوم از صنعت چاپ و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، لورم ایپسوم متن
                ساختگی با تولید سادگی نامفهوم از صنعت چاپ کتابهای زیادی در شصت و سه درصد گذشته حال و
                آینده...
              </Paragraph>
              <Flex>
                <Badge>تقویت موتور</Badge>
                <Badge>سرعت بالا</Badge>
                <Badge>جزییات کامل</Badge>
                <Badge>سیستم پولسازی</Badge>
              </Flex>
              <Flex>
                <Button onClick={() => setOpen(true)}>
                  <span>سفارش محصول</span>
                  <DynamicIcon name="check-circle" className="compatible-icon-size" />
                </Button>
                <Link href={`/products/${1}`}>
                  <Button shape="ghost">بیشتر بخوانید</Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Space size="normal" />

        <Box>
          <Flex className="items-stretch">
            <div className="size-64 shrink-0 rounded-2xl bg-foreground/10" />
            <Flex direction="column" align="start" justify="between">
              <Heading font="vazir">
                <h2>سیستم مدیریت مشتری فروشگاه</h2>
              </Heading>
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون لورم ایپسوم متن ساختگی با
                تولید سادگی نامفهوم از صنعت چاپ و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، لورم ایپسوم متن
                ساختگی با تولید سادگی نامفهوم از صنعت چاپ کتابهای زیادی در شصت و سه درصد گذشته حال و
                آینده...
              </Paragraph>
              <Flex>
                <Badge>تقویت موتور</Badge>
                <Badge>سرعت بالا</Badge>
                <Badge>جزییات کامل</Badge>
                <Badge>سیستم پولسازی</Badge>
              </Flex>
              <Flex>
                <Button onClick={() => setOpen(true)}>
                  <span>سفارش محصول</span>
                  <DynamicIcon name="check-circle" className="compatible-icon-size" />
                </Button>
                <Link href={`/products/${1}`}>
                  <Button shape="ghost">بیشتر بخوانید</Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <Space size="normal" />

        <Box>
          <Flex className="items-stretch">
            <div className="size-64 shrink-0 rounded-2xl bg-foreground/10" />
            <Flex direction="column" align="start" justify="between">
              <Heading font="vazir">
                <h2>سیستم مدیریت مشتری فروشگاه</h2>
              </Heading>
              <Paragraph size="sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون لورم ایپسوم متن ساختگی با
                تولید سادگی نامفهوم از صنعت چاپ و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، لورم ایپسوم متن
                ساختگی با تولید سادگی نامفهوم از صنعت چاپ کتابهای زیادی در شصت و سه درصد گذشته حال و
                آینده...
              </Paragraph>
              <Flex>
                <Badge>تقویت موتور</Badge>
                <Badge>سرعت بالا</Badge>
                <Badge>جزییات کامل</Badge>
                <Badge>سیستم پولسازی</Badge>
              </Flex>
              <Flex>
                <Button onClick={() => setOpen(true)}>
                  <span>سفارش محصول</span>
                  <DynamicIcon name="check-circle" className="compatible-icon-size" />
                </Button>
                <Link href={`/products/${1}`}>
                  <Button shape="ghost">بیشتر بخوانید</Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </div>

      <PageModal isOpen={isOpen} closeHandler={() => setOpen(false)}>
        <PageModalHeader title="سیستم مدیریت فروشگاه چند منظوره" />

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
