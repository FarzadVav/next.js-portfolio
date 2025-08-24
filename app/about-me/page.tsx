import Link from "next/link";
import { AccessNavigation, Accordion } from "@kadoui/react";
import {
  ArrowUpRightIcon,
  CakeIcon,
  ChevronDownIcon,
  DownloadIcon,
  HourglassIcon,
  LanguagesIcon,
  LaptopIcon,
  MapPinIcon,
} from "lucide-react";

import aboutMeImg from "root/public/about-me.png";
import PageHero from "root/components/PageHero/PageHero";
import { DETAIL, FAQS, PROJECTS, SKILLS } from "root/constants/about-me";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <PageHero
        darkInvert
        src={aboutMeImg}
        title="Let's do some perfect projects"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos, eligendi laborum molestiae eius odio nisi earum culpa optio omnis reiciendis mollitia recusandae error eum porro exercitationem temporibus vitae dolore!"
      />

      <div className="container">
        <div className="card relative">
          <video className="w-full bg-background aspect-video rounded-lg" />
          <p className="absolute inset-center animate-pulse">Comming soon</p>
        </div>
      </div>

      <div className="container mt-40 grid grid-cols-2 md:grid-cols-6 gap-y-20">
        <div className="md:col-span-2 f-center flex-col">
          <div className="f-center gap-3">
            <CakeIcon className="size-6" />
            <h2 className="title">Birthday</h2>
          </div>
          <p className="mt-1.5">{DETAIL.birthday}</p>
        </div>

        <div className="md:col-span-2 f-center flex-col">
          <div className="f-center gap-3">
            <MapPinIcon className="size-6" />
            <h2 className="title">Location</h2>
          </div>
          <p className="mt-1.5">{DETAIL.location}</p>
        </div>

        <div className="md:col-span-2 f-center flex-col">
          <div className="f-center gap-3">
            <LanguagesIcon className="size-6" />
            <h2 className="title">English lvl</h2>
          </div>
          <p className="mt-1.5">{DETAIL.english}</p>
        </div>

        <div className="md:col-span-3 f-center flex-col">
          <div className="f-center gap-3">
            <LaptopIcon className="size-6" />
            <h2 className="title">Scope</h2>
          </div>
          <p className="mt-1.5">{DETAIL.scope}</p>
        </div>

        <div className="md:col-span-3 max-md:col-span-2 f-center flex-col">
          <div className="f-center gap-3">
            <HourglassIcon className="size-6" />
            <h2 className="title">Experience</h2>
          </div>
          <p className="mt-1.5">+{DETAIL.experience} Years</p>
        </div>
      </div>

      <h3 className="heading mt-40">my skills</h3>
      <div className="container mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-max f-center gap-3 flex-wrap">
          {SKILLS.professional.map((item) => (
            <p className="badge badge-soft min-w-max" key={item}>
              {item}
            </p>
          ))}
        </div>

        <div className="h-max f-center gap-3 flex-wrap">
          {SKILLS.technical.map((item) => (
            <p
              style={{ backgroundColor: item.color.bg, color: item.color.fr }}
              className="badge min-w-max"
              key={item.id}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <h4 className="heading mt-20">my projects</h4>
      <div className="container mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        {PROJECTS.map((item) => (
          <div className="card flex flex-col gap-3" key={item.id}>
            <Image
              width={705}
              height={397}
              alt={item.title}
              src={item.thumbnail}
              className="w-full aspect-video rounded-lg"
            />

            <h6 className="title">{item.title}</h6>

            <p>{item.description}</p>

            <Link className="btn btn-outline btn-full mt-auto" href={item.link} target="_blank">
              <span>Visitm</span>
              <ArrowUpRightIcon className="btn-icon-size" />
            </Link>
          </div>
        ))}
      </div>

      <h5 id="faqs" className="heading pt-20">
        faqs
      </h5>
      <AccessNavigation className="container mt-6">
        {FAQS.map((item) => (
          <Accordion key={item.id}>
            <Accordion.Toggle className="btn btn-ghost md:btn-lg btn-full justify-between group not-first:mt-3">
              <h6 className="font-bold line-clamp-1">{item.question}</h6>
              <ChevronDownIcon className="btn-icon-size shrink-0 transition-transform group-[.accordion-active]:-scale-y-100" />
            </Accordion.Toggle>
            <Accordion.Body>
              <p className="p-3">
                {item.question} {item.answer}
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
