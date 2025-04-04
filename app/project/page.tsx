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
    </>
  );
};

export default ProjectPage;
