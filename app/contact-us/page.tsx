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

import githubImg from "root/public/logos/github.svg";
import PageHero from "root/components/PageHero/PageHero";
import telegramImg from "root/public/logos/telegram.svg";
import linkedinImg from "root/public/logos/linkedin.svg";
import { ScrollAnimation } from "root/components/ScrollAnimation/ScrollAnimation";

const ConnectPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="Let's do some perfect projects"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos, eligendi laborum molestiae eius odio nisi earum culpa optio omnis reiciendis mollitia recusandae error eum porro exercitationem temporibus vitae dolore!"
      />

      <div className="container grid grid-cols-3 gap-6">
        <div className="f-align gap-3">
          <Image src={telegramImg} alt="ArrowUp Telegram channel" width={64} height={64} />
          <div>
            <span className="text-lg font-bold">Telegram</span>
            <p className="text-xs mt-0.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, in
            </p>

            <Link
              target="_blank"
              href={"https://t.me/arrowupteam"}
              className="btn-outline btn-sm w-max max-w-full mt-3"
            >
              <span>Visit</span>
              <ArrowUpRightIcon className="btn-icon-size" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-3">
          <Image src={linkedinImg} alt="ArrowUp LinkedIn page" width={64} height={64} />
          <div>
            <span className="text-lg font-bold">LinkedIn</span>
            <p className="text-xs mt-0.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, in
            </p>

            <Link
              target="_blank"
              className="btn-outline btn-sm w-max max-w-full mt-3"
              href={"https://www.linkedin.com/company/arrow-up-team"}
            >
              <span>Visit</span>
              <ArrowUpRightIcon className="btn-icon-size" />
            </Link>
          </div>
        </div>

        <div className="f-align gap-3">
          <Image
            width={64}
            height={64}
            src={githubImg}
            className="dark:invert-100"
            alt="ArrowUp GitHub organization"
          />
          <div>
            <span className="text-lg font-bold">GitHub</span>
            <p className="text-xs mt-0.5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, in
            </p>

            <Link
              target="_blank"
              href={"https://github.com/ArrowUpTeam"}
              className="btn-outline btn-sm w-max max-w-full mt-3"
            >
              <span>Visit</span>
              <ArrowUpRightIcon className="btn-icon-size" />
            </Link>
          </div>
        </div>
      </div>

      <h2 className="heading mt-20">community events</h2>
      <div className="container mt-6 grid grid-cols-2 gap-3">
        {Array.from({ length: 4 }).map(() => (
          <div className="card card-thick space-y-3" key={Math.random()}>
            <div className="w-full aspect-video bg-background rounded-child" />

            <h2 className="mt-3 text-xl font-bold">Talking about Mashhad startups</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, explicabo obcaecati
              neque nemo non ipsam quod? Eos alias ipsam laborum facilis! Cum, ipsum eius quia
              perspiciatis consequatur aperiam nulla itaque!
            </p>

            <button className="btn-outline w-full">
              <span>Join</span>
              <UserPenIcon className="btn-icon-size" />
            </button>
          </div>
        ))}
      </div>

      <h4 id="form" className="heading pt-20">
        send yuor message to us
      </h4>
      <ScrollAnimation className="card card-lg card-thick container mt-6">
        <div className="f-align gap-3">
          <label className="input-outline flex-1">
            <UserIcon className="input-icon-size" />
            <input className="input-field" placeholder="Organization/Customer name" />
          </label>
          <label className="input-outline flex-1">
            <PhoneIcon className="input-icon-size" />
            <input className="input-field" placeholder="---- --- ----" />
          </label>
        </div>
        <label className="input-outline mt-3">
          <textarea className="input-field" placeholder="Request description..." />
        </label>
        <label className="input-soft mt-3 w-max max-w-full">
          <FilesIcon className="input-icon-size" />
          <input className="input-field" type="file" name="1212" />
        </label>

        <button className="mt-6 btn-fill">
          <span className="font-bold">SUBMIT</span>
          <CheckIcon className="btn-icon-size" />
        </button>
      </ScrollAnimation>
    </>
  );
};

export default ConnectPage;
