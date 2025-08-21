import Form from "next/form";
import Link from "next/link";
import { LinkLoader } from "@kadoui/next";
import { AccessNavigation, Accordion, Carousel } from "@kadoui/react";
import {
  Search,
  CheckIcon,
  LoaderIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChevronDownIcon,
  TextIcon,
} from "lucide-react";

import { ScrollAnimation } from "root/components/ScrollAnimation/ScrollAnimation";
import HeroSectionLogos from "root/components/static/HeroSectionLogos/HeroSectionLogos";
import HeroSectionProfile from "root/components/static/HeroSectionProfile/HeroSectionProfile";

const HomePage = () => {
  return (
    <>
      <div className="pt-20 overflow-hidden">
        <HeroSectionLogos />

        <div className="container">
          <HeroSectionProfile />

          <h1 className="heading mt-9">farzad vahdati</h1>

          <p className="container md:w-4/5 text-center mx-auto mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Expedita 🧑‍💻 atque consectetur
            excepturi possimus porro culpa 🔥 quam omnis iusto ✅ ipsum saepe mollitia nesciunt hic
            velit commodi aliquid deleniti? Architecto ✌️ dolorum praesentium
          </p>

          <Form className="join-no-inner-border container md:w-1/2 mx-auto mt-6" action={"/search"}>
            <label className="input input-soft flex-1">
              <input
                type="text"
                name="query"
                className="input-field"
                placeholder="Search your requests..."
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

              <span>Our services</span>
            </Link>

            <Link className="btn btn-fill" href={"/contact-us"}>
              <span>Get start</span>

              <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <ArrowRightIcon className="btn-icon-size" />
              </LinkLoader>
            </Link>
          </div>
        </div>
      </div>

      <Carousel className="carousel container mt-20">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {Array.from({ length: 7 }).map(() => (
            <div className="slidable card space-y-3" key={Math.random()}>
              <div className="w-full aspect-video bg-background rounded-lg" />
              <h6 className="title text-center">Our IT solutions</h6>
              <Link className="btn btn-outline btn-full" href={"/articles/1"}>
                <span>Read more</span>

                <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                  <ArrowRightIcon className="btn-icon-size" />
                </LinkLoader>
              </Link>
            </div>
          ))}
        </Carousel.Container>
      </Carousel>

      <h3 className="heading mt-20">your first look at us</h3>
      <div className="grid mt-6 grid-cols-1 md:grid-cols-2 gap-3 container">
        <div className="f-align card max-md:card-sm card-thick gap-3">
          <div className="size-16 min-w-16 bg-background rounded-lg" />
          <div>
            <span className="font-bold">We love Javascript!</span>
            <p className="text-xs md:mt-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel, accusamus.
            </p>
          </div>
        </div>

        <div className="f-align card max-md:card-sm card-thick gap-3">
          <div className="text-right">
            <span className="font-bold">We love Javascript!</span>
            <p className="text-xs md:mt-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel, accusamus.
            </p>
          </div>
          <div className="size-16 min-w-16 bg-background rounded-lg" />
        </div>

        <div className="f-align card max-md:card-sm card-thick gap-3">
          <div className="size-16 min-w-16 bg-background rounded-lg" />
          <div>
            <span className="font-bold">We love Javascript!</span>
            <p className="text-xs md:mt-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel, accusamus.
            </p>
          </div>
        </div>

        <div className="f-align card max-md:card-sm card-thick gap-3">
          <div className="text-right">
            <span className="font-bold">We love Javascript!</span>
            <p className="text-xs md:mt-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel, accusamus.
            </p>
          </div>
          <div className="size-16 min-w-16 bg-background rounded-lg" />
        </div>
      </div>
      <AccessNavigation className="container mt-6">
        {Array.from({ length: 3 }).map(() => (
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

        <Link className="btn btn-ghost w-fit mx-auto mt-3" href={"/about-us#faqs"}>
          <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
            <TextIcon className="btn-icon-size" />
          </LinkLoader>

          <span>All questions</span>
        </Link>
      </AccessNavigation>

      <h4 className="heading mt-20">customer comments</h4>
      <Carousel className="carousel container mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {Array.from({ length: 12 }).map(() => (
            <div key={Math.random()} className="slidable">
              <p className="font-bold">John Doe</p>
              <p className="text-xs opacity-75">IT engineer at apple</p>
              <p className="card card-thick mt-3">
                {Array.from({ length: Math.ceil(Math.random() * 10) }).map(
                  () => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, inventore"
                )}

                {"..."}
              </p>
            </div>
          ))}
        </Carousel.Container>
      </Carousel>

      <div className="container">
        <ScrollAnimation className="card card-lg card-thick space-y-3 mt-20">
          <h5 className="title">do you want consultation?</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi culpa fugit eum
            nostrum voluptates eveniet id libero incidunt enim vitae nam corporis voluptate neque
            sit sed maiores, saepe cumque quo.
          </p>
          <div className="f-align flex-wrap gap-3">
            <div className="badge badge-soft">
              <CheckIcon className="badge-icon-size" />
              <span>Problem solving</span>
            </div>
            <div className="badge badge-soft">
              <CheckIcon className="badge-icon-size" />
              <span>Problem solving</span>
            </div>
            <div className="badge badge-soft">
              <CheckIcon className="badge-icon-size" />
              <span>Problem solving</span>
            </div>
            <div className="badge badge-soft">
              <CheckIcon className="badge-icon-size" />
              <span>Problem</span>
            </div>
          </div>

          <Link className="btn btn-fill w-fit" href={"/contact-us#form"}>
            <span>Send a request</span>

            <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
              <ArrowRightIcon className="btn-icon-size" />
            </LinkLoader>
          </Link>
        </ScrollAnimation>
      </div>

      <h6 className="heading mt-20">Latest articles</h6>
      <Carousel className="carousel container mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {Array.from({ length: 7 }).map(() => (
            <div className="slidable card card-thick space-y-3" key={Math.random()}>
              <div className="w-full aspect-video bg-background rounded-lg" />
              <h6 className="title">Our IT solutions</h6>
              <div className="badge badge-soft badge-sm mt-3">Business</div>
              <p className="mt-3 line-clamp-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nihil omnis, dolores
                pariatur sed distinctio praesentium quam? Dignissimos officia, assumenda alias sit
                odio nisi ad magni numquam eum animi repudiandae.
              </p>

              <Link className="btn btn-outline btn-full" href={"/articles/1"}>
                <span>Lorem</span>

                <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                  <ArrowRightIcon className="btn-icon-size" />
                </LinkLoader>
              </Link>
            </div>
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
