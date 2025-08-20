type PageHeroProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "title"> & {
  src: string;
  title: string;
  description: string;
};

const PageHero: React.FC<PageHeroProps> = ({ src, title, description, ...props }) => {
  return (
    <div className="container f-align my-20 gap-6 max-md:flex-col max-md:justify-center" {...props}>
      <div className="size-44 min-w-44 rounded-full bg-background-thick" title={src} />

      <div className="max-md:text-center">
        <h1 className="title">{title}</h1>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};

export default PageHero;
