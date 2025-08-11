import Link from "next/link";
import { ArrowRightIcon, LoaderIcon } from "lucide-react";
import { AccessNavigation, LoaderLink } from "@kadoui/react";

import PageHero from "root/components/PageHero/Index";

const ArticlesPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="Let's do some perfect projects"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos, eligendi laborum molestiae eius odio nisi earum culpa optio omnis reiciendis mollitia recusandae error eum porro exercitationem temporibus vitae dolore!"
      />

      <AccessNavigation direction="x" className="join-border mt-16 w-fit mx-auto">
        <button className="btn-fill font-bold">Front-End</button>
        <button className="btn-soft">Back-End</button>
        <button className="btn-soft">Mobile</button>
        <button className="btn-soft">Desktop</button>
        <button className="btn-soft">Cloud</button>
      </AccessNavigation>

      <div className="container mt-12 grid grid-cols-2 gap-3">
        {Array.from({ length: 7 }).map(() => (
          <div className="card card-thick space-y-3" key={Math.random()}>
            <div className="w-full aspect-video bg-background rounded-child" />
            <h6 className="text-xl font-bold">Our IT solutions</h6>
            <div className="badge-soft mt-3">Business</div>
            <p className="mt-3 line-clamp-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nihil omnis, dolores
              pariatur sed distinctio praesentium quam? Dignissimos officia, assumenda alias sit
              odio nisi ad magni numquam eum animi repudiandae.
            </p>

            <Link className="btn-outline" href={"/articles/1"}>
              <span>Read more</span>

              <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <ArrowRightIcon className="btn-icon-size" />
              </LoaderLink>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
