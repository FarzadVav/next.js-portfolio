import { notFound } from "next/navigation";
import { CheckIcon, PhoneIcon, SparklesIcon, UserIcon } from "lucide-react";

import { PageProps } from "root/types";
import { SERVICES } from "root/constants/services";
import PageHero from "root/components/PageHero/PageHero";
import { ScrollAnimation } from "root/components/ScrollAnimation/ScrollAnimation";

async function ServicesDetailPage({ params }: PageProps) {
  const paramId = parseInt((await params).id);
  const service = SERVICES.find((item) => item.id === paramId);

  if (!service) {
    return notFound();
  }

  return (
    <>
      <PageHero title={service.title} src={service.thumbnail} description={service.description} />

      <div className="container grid grid-cols-2 md:grid-cols-3 gap-3">
        {service.features.map((item) => (
          <div className="card flex flex-col" key={item.name}>
            <div className="size-12 bg-background p-3 rounded-full f-center">
              <SparklesIcon className="size-full" />
            </div>
            <h2 className="title mt-auto pt-3">{item.name}</h2>
            <p className="text-sm pt-1.5">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="container mt-20">
        {service.questions.map((item) => (
          <div className="not-first:mt-6" key={item.title}>
            <h3 className="title">{item.title}</h3>
            <p className="mt-3">{item.description}</p>
          </div>
        ))}
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
