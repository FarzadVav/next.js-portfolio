import Link from "next/link";
import { Carousel } from "@kadoui/react";
import { ArrowUpRightIcon } from "lucide-react";

import labImg from "root/public/lab.png";
import { LAB } from "root/constants/lab";
import PageHero from "root/components/PageHero/PageHero";

const ServicesPage = () => {
  return (
    <>
      <PageHero
        darkInvert
        src={labImg}
        title="My open-source laboratory"
        description="A showcase of my open-source projects and experiments, featuring various web technologies and frameworks. Come explore my coding playground where I test new ideas and push the boundaries of web development."
      />

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-3">
        {LAB.map((item) => (
          <div className="card flex flex-col gap-3" key={item.id}>
            <div className="f-align gap-3">
              <div className="size-12 rounded-full bg-background p-3">{item.icon}</div>
              <h2 className="title">{item.title}</h2>
            </div>

            <Carousel className="carousel">
              <Carousel.Container className="carousel-container no-scrollbar gap-3">
                <Carousel.LeftFade className="carousel-left-fade from-background-thick" />
                <Carousel.RightFade className="carousel-right-fade from-background-thick" />

                {item.techStack.map((tech) => (
                  <div className="badge badge-sm min-w-max" key={tech}>
                    {tech}
                  </div>
                ))}
              </Carousel.Container>
            </Carousel>

            <p className="mt-auto">{item.description}</p>

            <div className="pt-3 mt-auto">
              <Link target="_blank" href={item.link} className="btn btn-outline btn-full">
                <span>Read more</span>
                <ArrowUpRightIcon className="btn-icon-size" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
