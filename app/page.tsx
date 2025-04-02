import { IconSearch } from "@tabler/icons-react";
import Flex from "root/components/ui/Flex";
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
          لورم از صنعت چاپ 🧑‍💻 و با استفاده لازم است 🌐 و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود باشد، کتابهای ✌️ زیادی در شصت و سه درصد گذشته حال و آینده 🔥
          شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها ✅ شناخت بیشتری را برای طراحان
          رایانه ای...
        </p>
        <InputWrapper className="w-1/2 mx-auto mt-6">
          <Input placeholder="جستجوی هرچی میخوای..." />
          <IconSearch className="size-5" />
        </InputWrapper>

        <Flex className="mt-6 w-3/4 mx-auto" justify="center" wrap="wrap">
          <div className="h-5 w-32 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-40 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-32 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-40 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-9 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-32 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-52 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
        </Flex>
      </div>
    </>
  );
};

export default HomePage;
