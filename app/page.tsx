import Link from "next/link";
import { AccessNavigation, Accordion, Carousel, LoaderLink } from "@kadoui/react";
import {
  Search,
  CheckIcon,
  LoaderIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChevronDownIcon,
  TextIcon,
} from "lucide-react";

import HeroSectionLogos from "root/components/static/HeroSectionLogos/Index";
import { ScrollAnimation } from "root/components/ScrollAnimation/ScrollAnimation";

const HomePage = () => {
  return (
    <>
      <div className="mt-12 overflow-hidden">
        <HeroSectionLogos />

        <div className="container">
          <h1 className="text-7xl text-center font-black">ArrowUp</h1>

          <p className="w-3/4 text-center mx-auto mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita 🧑‍💻 atque consectetur
            excepturi possimus porro culpa 🔥 quam omnis iusto ✅ ipsum saepe mollitia nesciunt hic
            velit commodi aliquid deleniti? Architecto ✌️ dolorum praesentium
          </p>

          <div className="join-no-inner-border w-1/2 mx-auto mt-6">
            <label className="input-soft flex-1">
              <input className="input-field" type="text" placeholder="Search your requests..." />
            </label>
            <button className="btn-soft">
              <Search className="btn-icon-size" />
            </button>
          </div>

          <div className="f-center gap-3 mt-6">
            <Link className="btn-outline" href={"/services"}>
              <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <SparklesIcon className="btn-icon-size" />
              </LoaderLink>

              <span>Our services</span>
            </Link>

            <Link className="btn-fill" href={"/connect"}>
              <span>Get start</span>

              <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <ArrowRightIcon className="btn-icon-size" />
              </LoaderLink>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-background-thin bg-background to-transparent rounded-t-[5%] pt-12 mt-12">
        <div className="container mt-6 f-align gap-3">
          <div className="card flex-1 space-y-3">
            <p className="text-xl font-bold text-center">Front-End</p>
            <div className="w-full aspect-square rounded-child bg-background-thin"></div>
            <Link className="btn-outline" href={"/services"}>
              <span>Visit</span>

              <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <ArrowRightIcon className="btn-icon-size" />
              </LoaderLink>
            </Link>
          </div>

          <div className="card flex-1 space-y-3">
            <p className="text-xl font-bold text-center">Back-End</p>
            <div className="w-full aspect-square rounded-child bg-background-thin"></div>
            <Link className="btn-outline" href={"/services"}>
              <span>Visit</span>

              <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <ArrowRightIcon className="btn-icon-size" />
              </LoaderLink>
            </Link>
          </div>

          <div className="card flex-1 space-y-3">
            <p className="text-xl font-bold text-center">Cloud</p>
            <div className="w-full aspect-square rounded-child bg-background-thin"></div>
            <Link className="btn-outline" href={"/services"}>
              <span>Visit</span>

              <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                <ArrowRightIcon className="btn-icon-size" />
              </LoaderLink>
            </Link>
          </div>
        </div>
      </div>

      <h3 className="text-center font-black text-5xl mt-16">Your first look at us</h3>
      <div className="grid mt-6 grid-cols-2 gap-3 container">
        <div className="f-align card card-thick gap-3">
          <div className="size-16 min-w-16 bg-background rounded-child" />
          <div>
            <span className="font-bold">We love Javascript!</span>
            <p className="text-xs mt-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel, accusamus temporibus
              nam odio molestiae.
            </p>
          </div>
        </div>

        <div className="f-align card card-thick gap-3">
          <div className="text-right">
            <span className="font-bold">We love Javascript!</span>
            <p className="text-xs mt-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel, accusamus temporibus
              nam odio molestiae.
            </p>
          </div>
          <div className="size-16 min-w-16 bg-background rounded-child" />
        </div>

        <div className="f-align card card-thick gap-3">
          <div className="size-16 min-w-16 bg-background rounded-child" />
          <div>
            <span className="font-bold">We love Javascript!</span>
            <p className="text-xs mt-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel, accusamus temporibus
              nam odio molestiae.
            </p>
          </div>
        </div>

        <div className="f-align card card-thick gap-3">
          <div className="text-right">
            <span className="font-bold">We love Javascript!</span>
            <p className="text-xs mt-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel, accusamus temporibus
              nam odio molestiae.
            </p>
          </div>
          <div className="size-16 min-w-16 bg-background rounded-child" />
        </div>
      </div>
      <AccessNavigation className="container mt-12">
        {Array.from({ length: 3 }).map(() => (
          <Accordion key={Math.random()}>
            <Accordion.Toggle className="btn-ghost w-full justify-between group not-first:mt-3">
              <h6 className="font-bold">How can we work with you?</h6>
              <ChevronDownIcon className="btn-icon-size transition-transform group-[.accordion-active]:-scale-y-100" />
            </Accordion.Toggle>
            <Accordion.Body>
              <p className="card">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, inventore? Corrupti
                quasi nam, iste sint quibusdam ipsa numquam est minima libero repudiandae harum nisi
                nihil doloremque voluptas sed optio eum!
              </p>
            </Accordion.Body>
          </Accordion>
        ))}

        <Link className="btn-ghost w-fit mx-auto mt-6" href={"/about"}>
          <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
            <TextIcon className="btn-icon-size" />
          </LoaderLink>

          <span>All questions</span>
        </Link>
      </AccessNavigation>

      <h4 className="text-center font-black text-5xl mt-16">Customer comments</h4>
      <Carousel className="carousel container mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {Array.from({ length: 12 }).map(() => (
            <div key={Math.random()} className="w-[90%] min-w-[90%] sm:w-2/5 sm:min-w-2/5">
              <span className="text-xl font-bold">John Doe</span>
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

      <ScrollAnimation className="container card card-lg card-thick space-y-3 mt-16">
        <h5 className="text-3xl font-black">Do you want consultation?</h5>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi culpa fugit eum nostrum
          voluptates eveniet id libero incidunt enim vitae nam corporis voluptate neque sit sed
          maiores, saepe cumque quo.
        </p>
        <div className="f-align gap-3">
          <div className="badge-soft">
            <CheckIcon className="badge-icon-size" />
            <span>Problem solving</span>
          </div>
          <div className="badge-soft">
            <CheckIcon className="badge-icon-size" />
            <span>Problem solving</span>
          </div>
          <div className="badge-soft">
            <CheckIcon className="badge-icon-size" />
            <span>Problem solving</span>
          </div>
          <div className="badge-soft">
            <CheckIcon className="badge-icon-size" />
            <span>Problem solving</span>
          </div>
        </div>

        <Link className="btn-fill w-fit" href={"/connect"}>
          <span>Send a request</span>

          <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
            <CheckIcon className="btn-icon-size" />
          </LoaderLink>
        </Link>
      </ScrollAnimation>

      <h6 className="text-center font-black text-5xl mt-16">Latest articles</h6>
      <Carousel className="carousel container mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {Array.from({ length: 7 }).map(() => (
            <div className="w-2/5 card card-thick min-w-2/5 space-y-3" key={Math.random()}>
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
        </Carousel.Container>
      </Carousel>
      <Link className="btn-ghost w-fit mx-auto mt-6" href={"/articles"}>
        <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
          <TextIcon className="btn-icon-size" />
        </LoaderLink>

        <span>All articles</span>
      </Link>
    </>
  );
};

export default HomePage;
