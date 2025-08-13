import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { AccessNavigation, Carousel } from "@kadoui/react";

import PageHero from "root/components/PageHero/PageHero";

const ServicesPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="Let's do some perfect projects"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos, eligendi laborum molestiae eius odio nisi earum culpa optio omnis reiciendis mollitia recusandae error eum porro exercitationem temporibus vitae dolore!"
      />

      <AccessNavigation direction="x" className="f-align-scroll container">
        <div className="join-border min-w-max mx-auto">
          <button className="btn-fill font-bold">Front-End</button>
          <button className="btn-soft">Back-End</button>
          <button className="btn-soft">Mobile</button>
          <button className="btn-soft">Desktop</button>
          <button className="btn-soft">Cloud</button>
        </div>
      </AccessNavigation>

      <div className="container mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        {Array.from({ length: 7 }).map(() => (
          <div className="card card-thick" key={Math.random()}>
            <div className="f-align gap-3">
              <div className="size-9 rounded-full bg-background" />
              <h2 className="title">Nest.js web app</h2>
            </div>

            <Carousel className="carousel mt-3">
              <Carousel.Container className="carousel-container no-scrollbar gap-3">
                <Carousel.LeftFade className="carousel-left-fade from-background-thick" />
                <Carousel.RightFade className="carousel-right-fade from-background-thick" />

                <div className="badge max-md:badge-sm">Javascript</div>
                <div className="badge max-md:badge-sm">React</div>
                <div className="badge max-md:badge-sm">Next</div>
                <div className="badge max-md:badge-sm">Tailwind</div>
                <div className="badge max-md:badge-sm">Chart</div>
                <div className="badge max-md:badge-sm">Astro</div>
                <div className="badge max-md:badge-sm">Vitest</div>
                <div className="badge max-md:badge-sm">Remix</div>
                <div className="badge max-md:badge-sm">Sass</div>
                <div className="badge max-md:badge-sm">Framer</div>
                <div className="badge max-md:badge-sm">PWA</div>
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

            <Link
              target="_blank"
              className="btn-outline mt-6"
              href={"https://github.com/ArrowUpTeam"}
            >
              <span>Read more</span>
              <ArrowRightIcon className="btn-icon-size" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
