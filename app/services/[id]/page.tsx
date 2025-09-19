import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon, SparklesIcon } from "lucide-react";

import { PageProps } from "root/types/app.type";
import PageHero from "root/components/PageHero/PageHero";
import { TELEGRAM_USERNAME } from "root/constants/contactMe.constant";
import { SERVICES, SERVICES_CTA_TEXT } from "root/constants/services.constant";
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

      <div className="container mt-40">
        {service.questions.map((item) => (
          <div className="not-first:mt-16" key={item.title}>
            <h3 className="title">{item.title}</h3>
            <p className="mt-3">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="container mt-40">
        <ScrollAnimation className="card card-lg">
          <h4 className="heading">request your project</h4>

          <p className="max-w-lg text-center mx-auto mt-6">{SERVICES_CTA_TEXT}</p>

          <Link className="btn btn-fill mt-6 mx-auto" href={TELEGRAM_USERNAME} target="_blank">
            <span>Go to Telegram</span>
            <ArrowUpRightIcon className="btn-icon-size" />
          </Link>
        </ScrollAnimation>
      </div>
    </>
  );
}

export default ServicesDetailPage;
