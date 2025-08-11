"use client";

import Link from "next/link";
import { ArrowRightIcon, CheckIcon, LoaderIcon } from "lucide-react";
import { AccessNavigation, Carousel, LoaderLink } from "@kadoui/react";

import PageHero from "root/components/PageHero/Index";

const ServicesPage = () => {
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
          <div className="card card-thick" key={Math.random()}>
            <div className="f-align gap-3">
              <div className="size-9 rounded-full bg-background" />
              <h2 className="text-xl font-bold">Nest.js web app</h2>
            </div>

            <Carousel className="carousel mt-3">
              <Carousel.Container className="carousel-container no-scrollbar gap-3">
                <Carousel.LeftFade className="carousel-left-fade from-background-thick" />
                <Carousel.RightFade className="carousel-right-fade from-background-thick" />

                <div className="badge-ghost">Javascript</div>
                <div className="badge-ghost">React</div>
                <div className="badge-ghost">Next</div>
                <div className="badge-ghost">Tailwind</div>
                <div className="badge-ghost">Chart</div>
                <div className="badge-ghost">Astro</div>
                <div className="badge-ghost">Vitest</div>
                <div className="badge-ghost">Remix</div>
                <div className="badge-ghost">Sass</div>
                <div className="badge-ghost">Framer</div>
                <div className="badge-ghost">PWA</div>
              </Carousel.Container>
            </Carousel>

            <p className="mt-3 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod tempore labore
              ipsum voluptatem odit saepe magni animi rem nesciunt voluptatibus repellendus quisquam
              enim suscipit, molestias harum reiciendis commodi a?
            </p>

            <ul className="mt-3 space-y-1.5 opacity-75">
              <li className="f-align gap-1.5">
                <CheckIcon className="icon-size-3" />
                <span>Six month free support</span>
              </li>
              <li className="f-align gap-1.5">
                <CheckIcon className="icon-size-3" />
                <span>Six month free support</span>
              </li>
              <li className="f-align gap-1.5">
                <CheckIcon className="icon-size-3" />
                <span>Six month free support</span>
              </li>
            </ul>

            <Link className="btn-outline mt-6" href={"/services/1"}>
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

export default ServicesPage;
