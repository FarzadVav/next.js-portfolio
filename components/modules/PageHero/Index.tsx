import Flex from "root/components/ui/Flex/Index";
import Heading from "root/components/ui/Heading/Index";
import Paragraph from "root/components/ui/Paragraph/Index";
import Space from "root/components/ui/Space/Index";

type PageHeroProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "title"> & {
  src: string;
  title: string;
  description: string;
};

const PageHero: React.FC<PageHeroProps> = ({ src, title, description, ...props }) => {
  return (
    <Flex className="container" space="lg" {...props}>
      <div className="size-44 min-w-44 rounded-full bg-foreground/10" title={src} />

      <div>
        <Heading size="lg">
          <h1>{title}</h1>
        </Heading>
        <Space size="sm" />
        <Paragraph>{description}</Paragraph>
      </div>
    </Flex>
  );
};

export default PageHero;
