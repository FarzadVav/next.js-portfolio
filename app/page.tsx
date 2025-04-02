import { IconHash, IconSearch } from "@tabler/icons-react";

import Flex from "root/components/ui/Flex";
import Badge from "root/components/ui/Badge";
import Input from "root/components/ui/Input";
import InputWrapper from "root/components/ui/InputWrapper";
import Link from "next/link";
import Button from "root/components/ui/Button";

const HomePage = () => {
  return (
    <>
      <div className="container mt-20 relative">
        <div className="size-9 rounded-lg bg-primary/10 ring-8 ring-primary/5 absolute top-0 right-0"></div>
        <div className="size-16 rounded-lg bg-primary/10 ring-8 ring-primary/5 absolute top-18 -right-18"></div>
        <div className="size-9 rounded-lg bg-primary/10 ring-8 ring-primary/5 absolute top-36 right-6"></div>
        <div className="size-12 rounded-lg bg-primary/10 ring-8 ring-primary/5 absolute top-54 -right-16"></div>

        <div className="size-9 rounded-lg bg-primary/10 ring-8 ring-primary/5 absolute top-0 left-0"></div>
        <div className="size-16 rounded-lg bg-primary/10 ring-8 ring-primary/5 absolute top-18 -left-18"></div>
        <div className="size-9 rounded-lg bg-primary/10 ring-8 ring-primary/5 absolute top-36 left-6"></div>
        <div className="size-12 rounded-lg bg-primary/10 ring-8 ring-primary/5 absolute top-54 -left-16"></div>

        <h1 className="text-4xl font-kalameh-black text-center leading-relaxed">
          مکانی برای برنامه نویسی وب <br /> برای خدمات و آموزش با ما همراه باشید
        </h1>
        <p className="mt-6 w-3/4 text-center mx-auto">
          لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده 🔥
          شناخت فراوان جامعه و متخصصان ✌️ را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای
          طراحان رایانه ای...
        </p>
        <InputWrapper className="w-1/2 mx-auto mt-6">
          <Input placeholder="جستجوی هرچی میخوای..." />
          <IconSearch className="size-5" />
        </InputWrapper>

        <Flex className="mt-6 w-3/4 mx-auto" justify="center" wrap="wrap">
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>بررسی آپدیت های جدید</span>
          </Badge>
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>یادگیری موارد جدید</span>
          </Badge>
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>ارائه خدمات وب</span>
          </Badge>
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>مشاوره خدمات</span>
          </Badge>
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>تیکت پشتیبانی</span>
          </Badge>
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>چیت شیت های فارسی</span>
          </Badge>
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>محصولات استارتاپی</span>
          </Badge>
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>مشاوره مسیر برنامه نویسی</span>
          </Badge>
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>پروژه های اوپن سورس</span>
          </Badge>
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>ایونت های جامعه</span>
          </Badge>
          <Badge rounded="full" color="foreground">
            <IconHash className="h-1/2 aspect-square" />
            <span>رزومه قابل اطمینان</span>
          </Badge>
        </Flex>
      </div>

      <Flex className="container mt-20" space="lg">
        <Flex justify="center" direction="column" className="w-1/4">
          <div className="w-2/3 aspect-square rounded-full bg-foreground/10"></div>
          <h2 className="font-vazir-bold text-xl mt-3">رزومه فعالیتی</h2>
          <p className="text-center text-sm leading-relaxed">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button>مشاهده</Button>
          </Link>
        </Flex>
        <Flex justify="center" direction="column" className="w-1/4">
          <div className="w-2/3 aspect-square rounded-full bg-foreground/10"></div>
          <h2 className="font-vazir-bold text-xl mt-3">ابزار ها</h2>
          <p className="text-center text-sm leading-relaxed">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button>مشاهده</Button>
          </Link>
        </Flex>
        <Flex justify="center" direction="column" className="w-1/4">
          <div className="w-2/3 aspect-square rounded-full bg-foreground/10"></div>
          <h2 className="font-vazir-bold text-xl mt-3">خدمات</h2>
          <p className="text-center text-sm leading-relaxed">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button>مشاهده</Button>
          </Link>
        </Flex>
        <Flex justify="center" direction="column" className="w-1/4">
          <div className="w-2/3 aspect-square rounded-full bg-foreground/10"></div>
          <h2 className="font-vazir-bold text-xl mt-3">محصولات ما</h2>
          <p className="text-center text-sm leading-relaxed">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button>مشاهده</Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
