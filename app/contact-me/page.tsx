import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  CheckIcon,
  FilesIcon,
  PhoneIcon,
  UserIcon,
  UserPenIcon,
} from "lucide-react";

import { EVENTS, LINKS } from "root/constants/contact-me";
import contactMeImg from "root/public/contact-me.png";
import PageHero from "root/components/PageHero/PageHero";
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

            <button className="btn btn-outline btn-full mt-auto">
              <span>Join us</span>
              <UserPenIcon className="btn-icon-size" />
            </button>
          </div>
        ))}
      </div>

      <div id="form" className="pt-40">
        <ScrollAnimation className="container">
          <h4 className="heading">send yuor message</h4>
          <ScrollAnimation className=" mt-6">
            <ScrollAnimation className="card card-lg">
              <div className="f-align max-md:flex-col gap-3">
                <label className="input input-outline max-md:w-full md:flex-1">
                  <UserIcon className="input-icon-size" />
                  <input className="input-field" placeholder="Organization/Customer name" />
                </label>
                <label className="input input-outline max-md:w-full md:flex-1">
                  <PhoneIcon className="input-icon-size" />
                  <input className="input-field" placeholder="---- --- ----" />
                </label>
              </div>
              <label className="input input-outline mt-3">
                <textarea className="input-field" placeholder="Request description..." />
              </label>
              <label className="input input-soft mt-3 w-full md:w-max md:max-w-full">
                <FilesIcon className="input-icon-size" />
                <input className="input-field" type="file" name="1212" />
              </label>

              <button className="btn mt-6 btn-fill">
                <span>Submit</span>
                <CheckIcon className="btn-icon-size" />
              </button>
            </ScrollAnimation>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default ConnectPage;
