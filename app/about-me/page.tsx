import Link from "next/link";
import { LinkLoader } from "@kadoui/next";
import { AccessNavigation, Accordion, Carousel } from "@kadoui/react";
import { ArrowUpRightIcon, ChevronDownIcon, DownloadIcon, LoaderIcon } from "lucide-react";

import PageHero from "root/components/PageHero/PageHero";

const AboutPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="Let's do some perfect projects"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos, eligendi laborum molestiae eius odio nisi earum culpa optio omnis reiciendis mollitia recusandae error eum porro exercitationem temporibus vitae dolore!"
      />

      <div className="container">
        <div className="card card-thick">
          <video className="w-full bg-background aspect-video rounded-lg" />
        </div>
      </div>

      <h2 className="heading mt-20">our features / skills</h2>
      <Carousel className="carousel container mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {Array.from({ length: 7 }).map(() => (
            <div className="slidable card card-thick space-y-3" key={Math.random()}>
              <div className="w-full aspect-video rounded-lg bg-background" />
              <p className="text-xl text-center font-bold">Attract 3,637,000 users</p>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, pariatur!
              </p>
            </div>
          ))}
        </Carousel.Container>
      </Carousel>

      <h4 className="heading mt-20">our projects</h4>
      <div className="container mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        {Array.from({ length: 7 }).map(() => (
          <div className="card card-thick space-y-3" key={Math.random()}>
            <div className="w-full aspect-video bg-background rounded-lg" />
            <h6 className="title">Our IT solutions</h6>
            <p className="mt-3 line-clamp-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nihil omnis, dolores
              pariatur sed distinctio praesentium quam? Dignissimos officia, assumenda alias sit
              odio nisi ad magni numquam eum animi repudiandae.
            </p>

            <Link className="btn btn-outline btn-full" href={"/articles/1"}>
              <span>Lorem</span>

              <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <ArrowUpRightIcon className="btn-icon-size" />
              </LinkLoader>
            </Link>
          </div>
        ))}
      </div>

      <h5 id="faqs" className="heading pt-20">
        faqs
      </h5>
      <AccessNavigation className="container mt-6">
        {Array.from({ length: 8 }).map(() => (
          <Accordion key={Math.random()}>
            <Accordion.Toggle className="btn btn-ghost md:btn-lg btn-full justify-between group not-first:mt-3">
              <h6 className="font-bold">How can we work with you?</h6>
              <ChevronDownIcon className="btn-icon-size transition-transform group-[.accordion-active]:-scale-y-100" />
            </Accordion.Toggle>
            <Accordion.Body>
              <p className="p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, inventore? Corrupti
                quasi nam, iste sint quibusdam ipsa numquam est minima libero repudiandae harum nisi
                nihil doloremque voluptas sed optio eum!
              </p>
            </Accordion.Body>
          </Accordion>
        ))}
      </AccessNavigation>

      <h5 className="heading mt-20">download our cv</h5>
      <p className="container text-center mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error lgprovident nobis quis
        suscipit laboriosam quibusdam ad velit, amet omnis iusto! Debitis corrupti facere
        perspiciatis suscipit. Harum ea explicabo sapiente quidem.
      </p>
      <button className="btn btn-fill md:btn-lg mt-6 mx-auto">
        <span>ArrowUp-CV.pdf</span>
        <DownloadIcon className="btn-icon-size" />
      </button>
    </>
  );
};

export default AboutPage;
