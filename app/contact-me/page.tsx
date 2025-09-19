import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon, UserPenIcon } from "lucide-react";

import contactMeImg from "root/public/contact-me.png";
import PageHero from "root/components/PageHero/PageHero";
import { EVENTS, LINKS, TELEGRAM_USERNAME } from "root/constants/contact-me";
import { ScrollAnimation } from "root/components/ScrollAnimation/ScrollAnimation";

const ConnectPage = () => {
  return (
    <>
      <PageHero
        darkInvert
        src={contactMeImg}
        title="Stay in touch with me"
        description="Follow me on the social networks below. If you have a message, write in the form and I will also be happy to have you participate in community events"
      />

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        {LINKS.map((item) => (
          <div className="f-align max-md:flex-col gap-3" key={item.id}>
            <Image
              width={64}
              height={64}
              src={item.logo}
              alt={item.name}
              className={item.invert ? "dark:invert-100" : undefined}
            />
            <div className="max-md:f-center max-md:flex-col">
              <span className="title">{item.name}</span>
              <p className="text-xs mt-0.5 max-md:w-3/4 max-md:text-center">{item.description}</p>

              <Link target="_blank" href={item.link} className="btn btn-outline btn-sm mt-3">
                <span>Visit</span>
                <ArrowUpRightIcon className="btn-icon-size" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h2 className="heading mt-40">community events</h2>
      <div className="container mt-6 grid-cols-1 grid md:grid-cols-2 gap-3">
        {EVENTS.map((item) => (
          <div className="card flex flex-col gap-3" key={item.id}>
            <Image
              width={705}
              height={397}
              alt={item.title}
              src={item.thumbnail}
              className="w-full aspect-video rounded-lg"
            />

            <h2 className="title">{item.title}</h2>

            <p>{item.description}</p>

            <Link
              className="btn btn-outline btn-full mt-auto"
              href={TELEGRAM_USERNAME}
              target="_blank"
            >
              <span>Join us</span>
              <UserPenIcon className="btn-icon-size" />
            </Link>
          </div>
        ))}
      </div>

      <div id="cta" className="container pt-40">
        <ScrollAnimation className="card card-lg">
          <h4 className="heading">send your message</h4>

          <p className="text-center mx-auto mt-6">
            Have an idea or a project in mind? Let{"'s"} bring it to life together. As a full-stack
            developer and project lead, I focus on building modern, scalable, and user-friendly
            solutions. Whether you{"'re"} looking for a technical partner to develop your idea,
            someone to guide your team, or just need simple and clear consulting to move forward, I
            {"'m"} here to help. Share your project with me, and let{"'s"} discuss how we can turn
            your vision into reality
          </p>

          <Link className="btn btn-fill mt-6 mx-auto" href={TELEGRAM_USERNAME} target="_blank">
            <span>Go to Telegram</span>
            <ArrowUpRightIcon className="btn-icon-size" />
          </Link>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default ConnectPage;
