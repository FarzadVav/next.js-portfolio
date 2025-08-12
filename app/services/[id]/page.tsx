import { CheckIcon, PhoneIcon, SparklesIcon, UserIcon } from "lucide-react";

import PageHero from "root/components/PageHero/Index";
import { ScrollAnimation } from "root/components/ScrollAnimation/ScrollAnimation";

const ServicesDetailPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="Let's do some perfect projects"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos, eligendi laborum molestiae eius odio nisi earum culpa optio omnis reiciendis mollitia recusandae error eum porro exercitationem temporibus vitae dolore!"
      />

      <div className="container grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map(() => (
          <div className="card card-thick" key={Math.random()}>
            <div className="size-12 bg-background p-3 rounded-full f-center">
              <SparklesIcon className="size-full" />
            </div>
            <h2 className="font-bold mt-3">Fast bulding</h2>
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

      <h4 className="heading mt-20">request your project</h4>
      <ScrollAnimation className="card card-lg card-thick container mt-6">
        <div className="f-align gap-3">
          <label className="input-outline flex-1">
            <input className="input-field" placeholder="Organization/Customer name" />
            <UserIcon className="icon-icon-size" />
          </label>
          <label className="input-outline flex-1">
            <input className="input-field" placeholder="---- --- ----" />
            <PhoneIcon className="icon-icon-size" />
          </label>
        </div>
        <label className="input-outline mt-3">
          <textarea className="input-field" placeholder="Request description..." />
        </label>
        <button className="mt-6 btn-fill">
          <span>Submit</span>
          <CheckIcon className="btn-icon-size" />
        </button>
      </ScrollAnimation>
    </>
  );
};

export default ServicesDetailPage;
