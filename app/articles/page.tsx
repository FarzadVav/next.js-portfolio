import Link from "next/link";
import { LinkLoader } from "@kadoui/next";
import { ArrowRightIcon, LoaderIcon } from "lucide-react";

import Image from "next/image";
import articlesImg from "root/public/articles.png";
import PageHero from "root/components/PageHero/PageHero";
import { ARTICLES } from "root/constants/articles";

const ArticlesPage = () => {
  return (
    <>
      <PageHero
        darkInvert
        src={articlesImg}
        title="Let's do some perfect projects"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos, eligendi laborum molestiae eius odio nisi earum culpa optio omnis reiciendis mollitia recusandae error eum porro exercitationem temporibus vitae dolore!"
      />

      <div className="container mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        {ARTICLES.map((article) => (
          <article className="card space-y-3" key={article.id}>
            <Image
              width={470}
              height={265}
              alt={article.title}
              src={article.thumbnail}
              className="w-full aspect-video rounded-lg"
            />

            <h6 className="text-xl font-bold">{article.title}</h6>

            <div className="badge badge-soft badge-sm mt-3">
              {article.createdAt.toLocaleDateString()}
            </div>

            <p className="mt-3">{article.description}</p>

            <Link className="btn btn-outline btn-full" href={`/articles/${article.id}`}>
              <span>Read more</span>

              <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <ArrowRightIcon className="btn-icon-size" />
              </LinkLoader>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
