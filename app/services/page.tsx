import Link from "next/link";
import { CheckIcon, LoaderIcon } from "lucide-react";
import { AccessNavigation, Carousel, LoaderLink, Modal } from "@kadoui/react";

import PageHero from "root/components/PageHero/PageHero";

const ServicesPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="Let's do some perfect projects"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos, eligendi laborum molestiae eius odio nisi earum culpa optio omnis reiciendis mollitia recusandae error eum porro exercitationem temporibus vitae dolore!"
      />

      <AccessNavigation direction="x" className="join-border w-fit mx-auto">
        <button className="btn-fill font-bold">Front-End</button>
        <button className="btn-soft">Back-End</button>
        <button className="btn-soft">Mobile</button>
        <button className="btn-soft">Desktop</button>
        <button className="btn-soft">Cloud</button>
      </AccessNavigation>

      <div className="container mt-6 grid grid-cols-2 gap-3">
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

            <div className="mt-6 f-align gap-3">
              <Modal>
                <Modal.Toggle className="btn-fill flex-1">
                  <span>Fast request</span>
                  <CheckIcon className="btn-icon-size" />
                </Modal.Toggle>

                <Modal.Portal className="modal-portal">
                  <Modal.Body className="modal-body">
                    <Modal.Header className="modal-header justify-center">
                      <p className="text-xl font-bold">Request your project</p>
                    </Modal.Header>

                    <Modal.Content className="modal-content">
                      <p className="max-w-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi
                        exercitationem, assumenda cumque quo quibusdam necessitatibus molestiae
                        nostrum nemo, culpa dolore possimus corrupti blanditiis corporis illo fugit
                        autem voluptates sed?
                      </p>
                    </Modal.Content>
                  </Modal.Body>
                </Modal.Portal>
              </Modal>

              <Link className="btn-outline flex-1" href={"/services/1"}>
                <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                  <span>Read more</span>
                </LoaderLink>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-20 space-y-10">
        <div className="f-align gap-6" dir="rtl">
          <div className="size-16 min-w-16 rounded-full bg-background-thick" />
          <div>
            <h3 className="text-xl font-bold">Submit a request</h3>
            <p className="mt-1.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, dolores!
            </p>
          </div>
        </div>

        <div className="f-align gap-6">
          <div className="size-16 min-w-16 rounded-full bg-background-thick" />
          <div>
            <h3 className="text-xl font-bold">Submit a request</h3>
            <p className="mt-1.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, dolores!
            </p>
          </div>
        </div>

        <div className="f-align gap-6" dir="rtl">
          <div className="size-16 min-w-16 rounded-full bg-background-thick" />
          <div>
            <h3 className="text-xl font-bold">Submit a request</h3>
            <p className="mt-1.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, dolores!
            </p>
          </div>
        </div>

        <div className="f-align gap-6">
          <div className="size-16 min-w-16 rounded-full bg-background-thick" />
          <div>
            <h3 className="text-xl font-bold">Submit a request</h3>
            <p className="mt-1.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, dolores!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;