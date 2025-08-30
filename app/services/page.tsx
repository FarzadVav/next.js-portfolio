import Link from "next/link";
import Image from "next/image";
import { Modal } from "@kadoui/react";
import { LinkLoader } from "@kadoui/next";
import { CheckIcon, DotIcon, HashIcon, LoaderIcon } from "lucide-react";

import nextJsImg from "root/public/next-js.svg";
import servicesImg from "root/public/services.png";
import { SERVICES } from "root/constants/services";
import PageHero from "root/components/PageHero/PageHero";
import { ScrollAnimation } from "root/components/ScrollAnimation/ScrollAnimation";

const ServicesPage = () => {
  return (
    <>
      <PageHero
        darkInvert
        src={servicesImg}
        title="Let's do some perfect projects"
        description="Here you can view my software services and order one of them if you want"
      />

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-3">
        {SERVICES.map((service) => (
          <div className="card flex flex-col" key={service.id}>
            <div className="f-align gap-3">
              <Image
                width={48}
                height={48}
                className="size-12"
                alt={service.title}
                src={service.thumbnail}
              />
              <h2 className="title">{service.title}</h2>
            </div>

            <div className="f-align gap-1.5 flex-wrap mt-6">
              {service.techStack.map((item) => (
                <div className="badge badge-soft badge-sm" key={item}>
                  <HashIcon className="badge-icon-size" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="pt-6 mt-auto">Also you{"'"}l get these features:</p>

            <div className="f-align flex-wrap mt-1.5">
              {service.features.map((item) => (
                <div className="badge badge-sm" key={item.name}>
                  <DotIcon className="badge-icon-size" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

            <div className="f-align mt-auto pt-6 gap-3">
              <Modal>
                <Modal.Toggle className="btn btn-fill flex-1">
                  <span>Request</span>
                  <CheckIcon className="btn-icon-size" />
                </Modal.Toggle>

                <Modal.Portal className="modal-portal">
                  <Modal.Body className="modal-body">
                    <Modal.Header className="modal-header justify-center">
                      <p className="title">Request your project</p>
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

              <Link className="btn btn-outline flex-1" href={`/services/${service.id}`}>
                <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                  <span>More</span>
                </LinkLoader>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <ScrollAnimation className="container mt-40">
        <div className="card card-lg">
          <Image
            width={64}
            height={64}
            src={nextJsImg}
            className="avatar avatar-lg mx-auto"
            alt="Next.js application service"
          />
          <h3 className="title text-center mt-3">Do you want a Next.js application?</h3>
          <p className="text-center mt-3">
            My main specialty is Next.js developemtn and... Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Commodi impedit porro corrupti quisquam aperiam dicta adipisci.
            Debitis officia praesentium quasi ullam nulla ea corporis perferendis tempora modi nisi?
            Corrupti, nam?
          </p>
          <div className="f-center mt-6 gap-3">
            <Modal>
              <Modal.Toggle className="btn btn-fill">
                <span>Request</span>
                <CheckIcon className="btn-icon-size" />
              </Modal.Toggle>

              <Modal.Portal className="modal-portal">
                <Modal.Body className="modal-body">
                  <Modal.Header className="modal-header justify-center">
                    <p className="title">Request your project</p>
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

            <Link className="btn btn-outline" href={"/services/next-js"}>
              <span className="f-center">
                <LinkLoader
                  loader={
                    <>
                      <span className="opacity-0">More</span>
                      <LoaderIcon className="btn-icon-size absolute animate-spin" />
                    </>
                  }
                >
                  <span>More</span>
                </LinkLoader>
              </span>
            </Link>
          </div>
        </div>
      </ScrollAnimation>

      <div className="container mt-40 space-y-20">
        <div className="f-align gap-3 md:gap-6" dir="rtl">
          <div className="size-16 min-w-16 rounded-full bg-background-thick f-center font-bold">
            1
          </div>
          <div>
            <h3 className="title">Submit a request</h3>
            <p className="mt-0.5 md:mt-1.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, dolores!
            </p>
          </div>
        </div>

        <div className="f-align gap-3 md:gap-6">
          <div className="size-16 min-w-16 rounded-full bg-background-thick f-center font-bold">
            2
          </div>
          <div>
            <h3 className="title">Review and Call to you</h3>
            <p className="mt-0.5 md:mt-1.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, dolores!
            </p>
          </div>
        </div>

        <div className="f-align gap-3 md:gap-6" dir="rtl">
          <div className="size-16 min-w-16 rounded-full bg-background-thick f-center font-bold">
            3
          </div>
          <div>
            <h3 className="title">Consultation and Requirements engineering</h3>
            <p className="mt-0.5 md:mt-1.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, dolores!
            </p>
          </div>
        </div>

        <div className="f-align gap-3 md:gap-6">
          <div className="size-16 min-w-16 rounded-full bg-background-thick f-center font-bold">
            4
          </div>
          <div>
            <h3 className="title">Handshake & start</h3>
            <p className="mt-0.5 md:mt-1.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, dolores!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
