import Flex from "root/components/ui/Flex";

const HomePage = () => {
  return (
    <>
      <div className="container mt-20 relative">
        <div className="size-9 rounded-full bg-foreground/10 absolute top-0 right-0"></div>
        <div className="size-12 rounded-full bg-foreground/10 absolute -top-5 -right-20"></div>
        <div className="size-7 rounded-full bg-foreground/10 absolute top-12 -right-12"></div>

        <div className="size-9 rounded-full bg-foreground/10 absolute top-0 left-0"></div>
        <div className="size-12 rounded-full bg-foreground/10 absolute -top-5 -left-20"></div>
        <div className="size-7 rounded-full bg-foreground/10 absolute top-12 -left-12"></div>

        <h1 className="text-4xl font-kalameh-black text-center">مکانی برای برنامه نویسی وب</h1>
        <p className="mt-6 text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 🧑‍💻 و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 🌐 و برای شرایط
          فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
          ✌️ زیادی در شصت و سه درصد گذشته حال و آینده 🔥 شناخت فراوان جامعه و متخصصان را می طلبد، تا
          با نرم افزارها ✅ شناخت بیشتری را برای طراحان رایانه ای...
        </p>
        <div className="w-1/2 h-10 px-5 rounded-full border border-foreground/10 mx-auto mt-6"></div>

        <Flex className="mt-6 flex-wrap" justify="center">
          <div className="h-5 w-32 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-40 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-32 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-40 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-32 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-40 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-32 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-40 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-40 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-32 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-40 rounded-full bg-foreground/10"></div>
          <div className="h-5 w-24 rounded-full bg-foreground/10"></div>
        </Flex>
      </div>
    </>
  );
};

export default HomePage;
