import Link from "next/link";
import Image from "next/image";
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
import { ABOUT_ME, DETAIL, FAQS, PROJECTS, SKILLS } from "root/constants/about-me";

const AboutPage = () => {
  return (
    <>
      <PageHero darkInvert src={aboutMeImg} title="Come get to know me" description={ABOUT_ME} />

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

      <h4 className="heading mt-40">my projects</h4>
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

      <h5 id="faqs" className="heading pt-40">
        faqs
      </h5>
      <AccessNavigation className="container mt-6">
        {FAQS.map((item) => (
          <Accordion key={item.id}>
            <Accordion.Toggle className="btn btn-ghost md:btn-lg btn-full justify-between group not-first:mt-3">
              <h6 className="font-bold line-clamp-1 text-left">{item.question}</h6>
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

      <h5 className="heading mt-40">download our cv</h5>
      <p className="container text-center mt-3">
        To see a complete and comprehensive resume from me, please download and view the pdf file
        below
      </p>
      <Link
        download
        href={"/farzad-vahdati-cv.pdf" as "/"}
        className="btn btn-fill md:btn-lg mt-6 mx-auto"
      >
        <span>farzad-vahdati-cv.pdf</span>
        <DownloadIcon className="btn-icon-size" />
      </Link>
    </>
  );
};

export default AboutPage;
