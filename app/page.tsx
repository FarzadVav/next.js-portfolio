import Form from "next/form";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@kadoui/react";
import { LinkLoader } from "@kadoui/next";
import {
  Search,
  CheckIcon,
  LoaderIcon,
  ArrowRightIcon,
  SparklesIcon,
  TextIcon,
  ArrowUpRightIcon,
  SparkleIcon,
  LightbulbIcon,
} from "lucide-react";

import { LAB } from "root/constants/lab";
import { ARTICLES } from "root/constants/articles";
import { SERVICES } from "root/constants/services";
import { ABOUT_ME, COMMENTS, NAME } from "root/constants/about-me";
import { ScrollAnimation } from "root/components/ScrollAnimation/ScrollAnimation";
import HeroSectionLogos from "root/components/static/HeroSectionLogos/HeroSectionLogos";
import HeroSectionProfile from "root/components/static/HeroSectionProfile/HeroSectionProfile";

const HomePage = () => {
  return (
    <>
      <div className="pt-30 pb-40 overflow-hidden">
        <HeroSectionLogos />

        <div className="container">
          <HeroSectionProfile />

          <h1 className="heading mt-9">{NAME}</h1>

          <p className="container md:w-4/5 text-center mx-auto mt-3">{ABOUT_ME}</p>

          <Form className="join-no-inner-border container md:w-1/2 mx-auto mt-6" action={"/search"}>
            <label className="input input-soft flex-1">
              <input
                type="text"
                name="query"
                className="input-field"
                placeholder="Search your request..."
              />
            </label>
            <button className="btn btn-soft">
              <Search className="btn-icon-size" />
            </button>
          </Form>

          <div className="f-center gap-3 mt-6">
            <Link className="btn btn-outline" href={"/services"}>
              <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <SparklesIcon className="btn-icon-size" />
              </LinkLoader>

              <span>My services</span>
            </Link>

            <Link className="btn btn-fill" href={"/contact-me"}>
              <span>Contact me</span>

              <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <ArrowRightIcon className="btn-icon-size" />
              </LinkLoader>
            </Link>
          </div>
        </div>
      </div>

      <Carousel className="carousel container">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {SERVICES.map((item) => (
            <div className="slidable card card-lg space-y-6" key={item.id}>
              <Image
                width={48}
                height={48}
                alt={item.title}
                className="size-12 mx-auto"
                src={item.thumbnail}
              />

              <p className="title text-center">{item.title}</p>

              <Link className="btn btn-outline btn-full" href={`/services/${item.id}`}>
                <span>Read more</span>

                <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                  <ArrowRightIcon className="btn-icon-size" />
                </LinkLoader>
              </Link>
            </div>
          ))}
        </Carousel.Container>
      </Carousel>

      <h3 className="heading mt-40">my open-source lab</h3>
      <Carousel className="carousel container mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {LAB.map((item) => (
            <div className="slidable card card-lg space-y-6" key={item.id}>
              <div className="size-12 rounded-full bg-background p-3 mx-auto">{item.icon}</div>

              <p className="title text-center">{item.title}</p>

              <Link target="_blank" href={item.link} className="btn btn-outline btn-full">
                <span>Read more</span>
                <ArrowUpRightIcon className="btn-icon-size" />
              </Link>
            </div>
          ))}
        </Carousel.Container>
      </Carousel>

      <h4 className="heading mt-40">Read more about me</h4>
      <div className="md:w-3/5 f-center flex-wrap md:mx-auto mt-6">
        <p className="badge">
          <SparkleIcon className="badge-icon-size" />
          <span>Intro video</span>
        </p>
        <p className="badge">
          <SparkleIcon className="badge-icon-size" />
          <span>Birthday</span>
        </p>
        <p className="badge">
          <SparkleIcon className="badge-icon-size" />
          <span>Location</span>
        </p>
        <p className="badge">
          <SparkleIcon className="badge-icon-size" />
          <span>Language lvl</span>
        </p>
        <p className="badge">
          <SparkleIcon className="badge-icon-size" />
          <span>Scope</span>
        </p>
        <p className="badge">
          <SparkleIcon className="badge-icon-size" />
          <span>Experience</span>
        </p>
        <p className="badge">
          <SparkleIcon className="badge-icon-size" />
          <span>My skills</span>
        </p>
        <p className="badge">
          <SparkleIcon className="badge-icon-size" />
          <span>My projects</span>
        </p>
        <p className="badge">
          <SparkleIcon className="badge-icon-size" />
          <span>FAQs</span>
        </p>
        <p className="badge">
          <SparkleIcon className="badge-icon-size" />
          <span>Download my CV</span>
        </p>
      </div>
      <Link className="btn btn-fill mt-6 mx-auto" href={"/about-me"}>
        <span>About me</span>
        <ArrowRightIcon className="btn-icon-size" />
      </Link>

      <h4 className="heading mt-40">people comments</h4>
      <Carousel className="carousel container mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {COMMENTS.map((item) => (
            <div key={item.id} className="slidable">
              <Link
                target="_blank"
                href={item.link}
                className="font-bold transition-colors btn-link"
              >
                {item.fullname}
              </Link>

              <p className="text-xs opacity-75">{item.position}</p>

              <p className="card mt-3">{item.text}</p>
            </div>
          ))}
        </Carousel.Container>
      </Carousel>

      <ScrollAnimation className="container mt-40">
        <div className="card card-lg">
          <div className="size-12 bg-background rounded-full mx-auto p-3">
            <LightbulbIcon className="size-full" />
          </div>
          <h5 className="title text-center mt-3">do you want a consulting?</h5>

          <p className="text-center mt-6">
            The first step to creating a compelling story is to start a conversation. So let{"'"}s
            chat and see how I can help you.
          </p>

          <div className="md:w-3/5 f-center flex-wrap md:mx-auto mt-3">
            <p className="badge">
              <CheckIcon className="badge-icon-size" />
              <span>Problem solving</span>
            </p>
            <p className="badge">
              <CheckIcon className="badge-icon-size" />
              <span>Project design</span>
            </p>
            <p className="badge">
              <CheckIcon className="badge-icon-size" />
              <span>Learning roadmap</span>
            </p>
            <p className="badge">
              <CheckIcon className="badge-icon-size" />
              <span>Software issues</span>
            </p>
            <p className="badge">
              <CheckIcon className="badge-icon-size" />
              <span>Start of cooperation</span>
            </p>
          </div>

          <Link className="btn btn-fill mt-6 mx-auto" href={"/contact-me#form"}>
            <span>Contact me</span>

            <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
              <ArrowRightIcon className="btn-icon-size" />
            </LinkLoader>
          </Link>
        </div>
      </ScrollAnimation>

      <h6 className="heading mt-40">Latest articles</h6>
      <Carousel className="carousel container mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {ARTICLES.slice(0, 6).map((item) => (
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
      <Link className="btn btn-ghost w-fit mx-auto mt-3" href={"/articles"}>
        <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
          <TextIcon className="btn-icon-size" />
        </LinkLoader>

        <span>All articles</span>
      </Link>
    </>
  );
};

export default HomePage;
