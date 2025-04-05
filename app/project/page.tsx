import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import Badge from "root/components/ui/Badge/Index";
import Box from "root/components/ui/Box/Index";
import Button from "root/components/ui/Button/Index";
import Flex from "root/components/ui/Flex/Index";
import Space from "root/components/ui/Space/Index";

const ProjectPage = () => {
  return (
    <>
      <Space />

      <Flex className="container" space="lg">
        <div className="size-44 min-w-44 rounded-full bg-foreground/10"></div>

        <div>
          <h1 className="text-xl font-kalameh-black leading-relaxed">
            بیاید باهم پروژه های خفن رو پیاده کنیم
          </h1>
          <Space size="sm" />
          <p>
            لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥
            شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای
            طراحان رایانه ای...
          </p>
        </div>
      </Flex>

      <Space />

      <div className="container grid grid-cols-2 gap-3">
        <Box>
          <Flex>
            <div className="size-7 rounded-full bg-foreground/10"></div>
            <h2 className="text-xl font-vazir-black">اپلیکیشن فرانت اند</h2>
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
          <p className="leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
          </p>
          <Space size="sm" />
          <ul className="space-y-1 list-disc pr-3">
            <li>داشبورد ادمین</li>
            <li>پنل مدیریت مشتری</li>
            <li>شاپینگ حرفه ای</li>
          </ul>
          <Space size="sm" />
          <Flex>
            <Button className="w-1/2">
              <span>ثبت سفارش</span>
              <DynamicIcon name="check-circle" className="compatible-icon-size" />
            </Button>
            <Link className="w-1/2" href={`/project/${1}`}>
              <Button className="w-full" shape="ghost">بیشتر بخوانید</Button>
            </Link>
          </Flex>
        </Box>
      </div>
    </>
  );
};

export default ProjectPage;
