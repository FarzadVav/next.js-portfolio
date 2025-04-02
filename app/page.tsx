import {
  IconArrowLeft,
  IconCheck,
  IconChevronLeft,
  IconHash,
  IconPencil,
  IconPlus,
  IconSearch,
  IconSend2,
  IconTicket,
  IconUsersGroup,
} from "@tabler/icons-react";

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
        <Flex
          justify="center"
          direction="column"
          className="w-1/4 ring-8 ring-transparent transition-shadow hover:ring-foreground/10 rounded-xl p-3"
        >
          <div className="w-3/4 aspect-square rounded-full bg-foreground/10"></div>
          <h2 className="font-vazir-bold text-xl mt-3">رزومه فعالیتی</h2>
          <p className="text-center text-sm leading-relaxed">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button color="foreground" shape="outline">
              مشاهده
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="center"
          direction="column"
          className="w-1/4 ring-8 ring-transparent transition-shadow hover:ring-foreground/10 rounded-xl p-3"
        >
          <div className="w-3/4 aspect-square rounded-full bg-foreground/10"></div>
          <h2 className="font-vazir-bold text-xl mt-3">ابزار ها</h2>
          <p className="text-center text-sm leading-relaxed">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button color="foreground" shape="outline">
              مشاهده
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="center"
          direction="column"
          className="w-1/4 ring-8 ring-transparent transition-shadow hover:ring-foreground/10 rounded-xl p-3"
        >
          <div className="w-3/4 aspect-square rounded-full bg-foreground/10"></div>
          <h2 className="font-vazir-bold text-xl mt-3">خدمات</h2>
          <p className="text-center text-sm leading-relaxed">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button color="foreground" shape="outline">
              مشاهده
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="center"
          direction="column"
          className="w-1/4 ring-8 ring-transparent transition-shadow hover:ring-foreground/10 rounded-xl p-3"
        >
          <div className="w-3/4 aspect-square rounded-full bg-foreground/10"></div>
          <h2 className="font-vazir-bold text-xl mt-3">محصولات ما</h2>
          <p className="text-center text-sm leading-relaxed">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button color="foreground" shape="outline">
              مشاهده
            </Button>
          </Link>
        </Flex>
      </Flex>

      <div className="container mt-20 rounded-xl p-6 ring-8 ring-transparent transition-shadow hover:ring-foreground/10">
        <h3 className="text-xl font-vazir-black">راهنمایی میخواهید؟ تیکت بزنید</h3>
        <p className="mt-3">
          معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا
          صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در
          آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از
          آنجایی که طراحان عموما نویسنده متن نیستند
        </p>
        <Flex className="mt-3">
          <Badge color="foreground">
            <IconCheck className="h-1/2 aspect-square" />
            <span>مشاوره</span>
          </Badge>
          <Badge color="foreground">
            <IconCheck className="h-1/2 aspect-square" />
            <span>مسیر یادگیری</span>
          </Badge>
          <Badge color="foreground">
            <IconCheck className="h-1/2 aspect-square" />
            <span>همکاری</span>
          </Badge>
        </Flex>
        <Link href={"/"} className="mt-3">
          <Button color="foreground">
            <span>تیکت بزنید</span>
            <IconSend2 className="h-1/2 aspect-square -scale-x-100" />
          </Button>
        </Link>

        <Flex className="mt-3" justify="end">
          <Link href={"/"}>
            <Button color="foreground" shape="ghost">
              <span>متنی برای راه های ارتباط با ما</span>
              <IconArrowLeft className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
      </div>

      <Flex className="container mt-20" justify="center">
        <Link href={"/"}>
          <Button color="foreground">اخبار</Button>
        </Link>
        <Link href={"/"}>
          <Button color="foreground" shape="outline">
            آموزش
          </Button>
        </Link>
        <Link href={"/"}>
          <Button color="foreground" shape="outline">
            چیت شیت
          </Button>
        </Link>
        <Link href={"/"}>
          <Button color="foreground" shape="outline">
            تحلیل و بررسی
          </Button>
        </Link>
        <Link href={"/"}>
          <Button color="foreground" shape="outline">
            آپدیت
          </Button>
        </Link>
      </Flex>
      <Flex className="container mt-5">
        <div className="w-1/4 h-96 bg-foreground/10 rounded-xl"></div>
        <div className="w-1/4 h-96 bg-foreground/10 rounded-xl"></div>
        <div className="w-1/4 h-96 bg-foreground/10 rounded-xl"></div>
        <div className="w-1/4 h-96 bg-foreground/10 rounded-xl"></div>
      </Flex>
      <Flex className="container mt-5" justify="center">
        <Link href={"/"}>
          <Button color="foreground" shape="ghost">
            <span>مشاهده همه مقالات</span>
            <IconArrowLeft className="h-1/2 aspect-square" />
          </Button>
        </Link>
      </Flex>

      <div className="container mt-20">
        <Flex
          justify="between"
          className="p-6 rounded-xl ring-8 ring-transparent transition-shadow hover:ring-foreground/10"
        >
          <h4 className="font-vazir-bold">
            چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
          </h4>
          <Link href={"/"}>
            <Button color="foreground" shape="outline">
              <span>بررسی</span>
              <IconChevronLeft className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="between"
          className="p-6 mt-6 rounded-xl ring-8 ring-transparent transition-shadow hover:ring-foreground/10"
        >
          <h4 className="font-vazir-bold">
            چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
          </h4>
          <Link href={"/"}>
            <Button color="foreground" shape="outline">
              <span>بررسی</span>
              <IconChevronLeft className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="between"
          className="p-6 mt-6 rounded-xl ring-8 ring-transparent transition-shadow hover:ring-foreground/10"
        >
          <h4 className="font-vazir-bold">
            چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
          </h4>
          <Link href={"/"}>
            <Button color="foreground" shape="outline">
              <span>بررسی</span>
              <IconChevronLeft className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="between"
          className="p-6 mt-6 rounded-xl ring-8 ring-transparent transition-shadow hover:ring-foreground/10"
        >
          <h4 className="font-vazir-bold">
            چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
          </h4>
          <Link href={"/"}>
            <Button color="foreground" shape="outline">
              <span>بررسی</span>
              <IconChevronLeft className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="between"
          className="p-6 mt-6 rounded-xl ring-8 ring-transparent transition-shadow hover:ring-foreground/10"
        >
          <h4 className="font-vazir-bold">
            چگونه میتوانم یک سیستم کشینگ با اکسپرس و ریکت پیاده کنم؟
          </h4>
          <Link href={"/"}>
            <Button color="foreground" shape="outline">
              <span>بررسی</span>
              <IconChevronLeft className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
      </div>
      <Flex className="container mt-6" justify="center">
        <Link href={"/"}>
          <Button color="foreground" shape="ghost">
            <span>مشاهده همه سوالات</span>
            <IconArrowLeft className="h-1/2 aspect-square" />
          </Button>
        </Link>
        <Link href={"/"}>
          <Button color="foreground" shape="ghost">
            <span>سوال خودتان را بپرسید</span>
            <IconPencil className="h-1/2 aspect-square" />
          </Button>
        </Link>
      </Flex>

      <Flex className="container mt-20" wrap="wrap" justify="center" space="lg">
        <Flex
          justify="center"
          direction="column"
          className="w-[calc(33%-1rem)] p-6 rounded-xl ring-8 ring-transparent transition-shadow hover:ring-foreground/10"
        >
          <Flex>
            <IconUsersGroup className="size-7" />
            <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
          </Flex>
          <p className="text-center">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button color="foreground" shape="outline">
              <span>شرکت کنید</span>
              <IconPlus className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="center"
          direction="column"
          className="w-[calc(33%-1rem)] p-6 rounded-xl ring-8 ring-transparent transition-shadow hover:ring-foreground/10"
        >
          <Flex>
            <IconUsersGroup className="size-7" />
            <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
          </Flex>
          <p className="text-center">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button color="foreground" shape="outline">
              <span>شرکت کنید</span>
              <IconPlus className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="center"
          direction="column"
          className="w-[calc(33%-1rem)] p-6 rounded-xl ring-8 ring-transparent transition-shadow hover:ring-foreground/10"
        >
          <Flex>
            <IconUsersGroup className="size-7" />
            <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
          </Flex>
          <p className="text-center">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button color="foreground" shape="outline">
              <span>شرکت کنید</span>
              <IconPlus className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="center"
          direction="column"
          className="w-[calc(33%-1rem)] p-6 rounded-xl ring-8 ring-transparent transition-shadow hover:ring-foreground/10"
        >
          <Flex>
            <IconUsersGroup className="size-7" />
            <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
          </Flex>
          <p className="text-center">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button color="foreground" shape="outline">
              <span>شرکت کنید</span>
              <IconPlus className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
        <Flex
          justify="center"
          direction="column"
          className="w-[calc(33%-1rem)] p-6 rounded-xl ring-8 ring-transparent transition-shadow hover:ring-foreground/10"
        >
          <Flex>
            <IconUsersGroup className="size-7" />
            <h5 className="text-xl font-vazir-bold">بررسی پروژه های شما</h5>
          </Flex>
          <p className="text-center">
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن و ارایه اولیه شکل برای
            بهبود ظاهری.
          </p>
          <Link className="mt-3" href={"/"}>
            <Button color="foreground" shape="outline">
              <span>شرکت کنید</span>
              <IconPlus className="h-1/2 aspect-square" />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
