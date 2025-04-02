import { IconHash, IconSearch } from "@tabler/icons-react";

import Flex from "root/components/ui/Flex";
import Badge from "root/components/ui/Badge";
import Input from "root/components/ui/Input";
import InputWrapper from "root/components/ui/InputWrapper";

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

      <div className="w-full mt-25 relative">
        <div className="w-[calc(100%-2.5rem)] h-[100vh] absolute rounded-[100%] -top-5 left-1/2 -translate-x-1/2 border-t-4 border-foreground/5"></div>
        <div className="w-[calc(100%-1.25rem)] h-[100vh] absolute rounded-[100%] -top-10 left-1/2 -translate-x-1/2 border-t-2 border-foreground/5"></div>
        <div className="w-full h-[100vh] absolute rounded-[100%] -top-15 left-1/2 -translate-x-1/2 border-t border-foreground/5"></div>
        <div className="h-screen">lorem</div>
      </div>
    </>
  );
};

export default HomePage;
