import { CheckIcon, PhoneIcon, SparklesIcon, UserIcon } from "lucide-react";

import { PageProps } from "root/types";
import { SERVICES } from "root/constants/services";
import servicesImg from "root/public/services.png";
import PageHero from "root/components/PageHero/PageHero";
import { ScrollAnimation } from "root/components/ScrollAnimation/ScrollAnimation";

async function ServicesDetailPage({ params }: PageProps) {
  const paramId = parseInt((await params).id);
  const pageHeroSrc = SERVICES.find((item) => item.id === paramId)?.thumbnail;

  return (
    <>
      <PageHero
        darkInvert={!pageHeroSrc}
        src={pageHeroSrc || servicesImg}
        title="Let's do some perfect projects"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos, eligendi laborum molestiae eius odio nisi earum culpa optio omnis reiciendis mollitia recusandae error eum porro exercitationem temporibus vitae dolore!"
      />

      <div className="container grid grid-cols-2 md:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map(() => (
          <div className="card" key={Math.random()}>
            <div className="size-12 bg-background p-3 rounded-full f-center">
              <SparklesIcon className="size-full" />
            </div>
            <h2 className="title mt-3">Fast bulding</h2>
            <p className="mt-1.5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in?
            </p>
          </div>
        ))}
      </div>

      <div className="container mt-20">
        <h3 className="text-xl font-bold">Think to bigger things!</h3>
        <p className="mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eaque nostrum impedit ab
          tempora labore aliquam temporibus amet, velit deserunt mollitia? Esse error distinctio
          rem. Cumque repudiandae magnam, earum esse corrupti laudantium, eos quaerat quod ab optio
          dolore molestias tenetur. Enim obcaecati aperiam, nemo quod in odio id ducimus maiores.
        </p>

        <h3 className="text-xl mt-6 font-bold">Think to bigger things!</h3>
        <p className="mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eaque nostrum impedit ab
          tempora labore aliquam temporibus amet, velit deserunt mollitia? Esse error distinctio
          rem. Cumque repudiandae magnam, earum esse corrupti laudantium, eos quaerat quod ab optio
          dolore molestias tenetur. Enim obcaecati aperiam, nemo quod in odio id ducimus maiores.
        </p>

        <h3 className="text-xl mt-6 font-bold">Think to bigger things!</h3>
        <p className="mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eaque nostrum impedit ab
          tempora labore aliquam temporibus amet, velit deserunt mollitia? Esse error distinctio
          rem. Cumque repudiandae magnam, earum esse corrupti laudantium, eos quaerat quod ab optio
          dolore molestias tenetur. Enim obcaecati aperiam, nemo quod in odio id ducimus maiores.
        </p>
      </div>

      <ScrollAnimation className="container mt-20">
        <h4 className="heading">request your project</h4>
        <ScrollAnimation className="card card-lg mt-6">
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
          <button className="btn mt-6 btn-fill">
            <span>Submit</span>
            <CheckIcon className="btn-icon-size" />
          </button>
        </ScrollAnimation>
      </ScrollAnimation>
    </>
  );
}

export default ServicesDetailPage;
