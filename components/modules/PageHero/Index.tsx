type PageHeroProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "title"> & {
  src: string;
  title: string;
  description: string;
};

const PageHero: React.FC<PageHeroProps> = ({ src, title, description, ...props }) => {
  return (
    <div className="container f-align mt-6 gap-6" {...props}>
      <div className="size-44 min-w-44 rounded-full bg-foreground/10" title={src} />

      <div>
        <h1 className="text-2xl font-kalameh-bold">{title}</h1>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};

export default PageHero;
