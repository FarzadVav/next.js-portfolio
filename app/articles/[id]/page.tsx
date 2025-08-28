import Link from "next/link";
import { shuffle } from "lodash";
import { Carousel } from "@kadoui/react";
import { LinkLoader } from "@kadoui/next";
import { notFound } from "next/navigation";
import { ArrowRightIcon, DownloadIcon, ExpandIcon, LoaderIcon, Share2Icon } from "lucide-react";

import { PageProps } from "root/types";
import { ARTICLES } from "root/constants/articles";
import PageHero from "root/components/PageHero/PageHero";

async function ArticlesDetailPage({ params }: PageProps) {
  const paramId = parseInt((await params).id);
  const article = ARTICLES.find((item) => item.id === paramId);

  if (!article) {
    return notFound();
  }

  return (
    <>
      <PageHero
        title={article.title}
        src={article.thumbnail}
        description={article.description}
      />

      <div className="container mt-40">
        <div className="card md:card-lg">
          <div className="f-align gap-3">
            <button className="btn btn-outline">
              <span>Full screen</span>
              <ExpandIcon className="btn-icon-size" />
            </button>
            <button className="btn btn-outline btn-square">
              <DownloadIcon className="btn-icon-size" />
            </button>
            <button className="btn btn-outline btn-square">
              <Share2Icon className="btn-icon-size" />
            </button>
          </div>

          <div className="mt-6">{article.body}</div>

          <p className="badge badge-soft mt-6">{article.createdAt.toLocaleDateString()}</p>
        </div>
      </div>

      <h3 className="heading mt-40">related articles</h3>
      <Carousel className="carousel container mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {shuffle(ARTICLES)
            .slice(0, 6)
            .map((item) => (
              <article className="card slidable space-y-3" key={item.id}>
                <div className="w-full aspect-video bg-background rounded-lg" />

                <h6 className="text-xl font-bold">{item.title}</h6>

                <div className="badge badge-soft badge-sm mt-3">
                  {item.createdAt.toLocaleDateString()}
                </div>

                <p className="mt-3">{item.description}</p>

                <Link className="btn btn-outline btn-full" href={`/articles/${item.id}`}>
                  <span>Read more</span>

                  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                    <ArrowRightIcon className="btn-icon-size" />
                  </LinkLoader>
                </Link>
              </article>
            ))}
        </Carousel.Container>
      </Carousel>
    </>
  );
}

export default ArticlesDetailPage;
