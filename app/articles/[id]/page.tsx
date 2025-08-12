import Link from "next/link";
import { AccessNavigation, Carousel, LoaderLink } from "@kadoui/react";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  Calendar,
  DownloadIcon,
  ExpandIcon,
  LoaderIcon,
  Share2Icon,
} from "lucide-react";

import PageHero from "root/components/PageHero/PageHero";

const ArticlesDetailPage = () => {
  return (
    <>
      <PageHero
        src=""
        title="Let's do some perfect projects"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos, eligendi laborum molestiae eius odio nisi earum culpa optio omnis reiciendis mollitia recusandae error eum porro exercitationem temporibus vitae dolore!"
      />

      <div className="container grid grid-cols-4">
        <div className="f-align gap-3">
          <div className="size-16 f-center bg-background-thick rounded-full">
            <Calendar className="w-2/3" />
          </div>
          <div className="flex flex-col h-10">
            <span className="text-lg font-bold">Release date</span>
            <span className="text-sm">{new Date().toLocaleDateString("en")}</span>
          </div>
        </div>

        <div className="f-align gap-3">
          <div className="size-16 f-center bg-background-thick rounded-full">
            <Calendar className="w-2/3" />
          </div>
          <div className="flex flex-col h-10">
            <span className="text-lg font-bold">Release date</span>
            <span className="text-sm">{new Date().toLocaleDateString("en")}</span>
          </div>
        </div>

        <div className="f-align gap-3">
          <div className="size-16 f-center bg-background-thick rounded-full">
            <Calendar className="w-2/3" />
          </div>
          <div className="flex flex-col h-10">
            <span className="text-lg font-bold">Release date</span>
            <span className="text-sm">{new Date().toLocaleDateString("en")}</span>
          </div>
        </div>

        <div className="f-align gap-3">
          <div className="size-16 f-center bg-background-thick rounded-full">
            <Calendar className="w-2/3" />
          </div>
          <div className="flex flex-col h-10">
            <span className="text-lg font-bold">Release date</span>
            <span className="text-sm">{new Date().toLocaleDateString("en")}</span>
          </div>
        </div>
      </div>

      <AccessNavigation className="container mt-20 space-y-3">
        <Link href={"#"} className="btn-ghost btn-lg group">
          <h2 className="font-bold">Chapter one of book</h2>
          <div className="btn gap-3 ml-auto">
            <span className="not-group-focus-visible:not-group-hover:ignore">Reading</span>
            <ArrowDownIcon className="btn-icon-size" />
          </div>
        </Link>

        <Link href={"#"} className="btn-ghost btn-lg group">
          <h2 className="font-bold">Chapter two of book</h2>
          <div className="btn gap-3 ml-auto">
            <span className="not-group-focus-visible:not-group-hover:ignore">Reading</span>
            <ArrowDownIcon className="btn-icon-size" />
          </div>
        </Link>

        <Link href={"#"} className="btn-ghost btn-lg group">
          <h2 className="font-bold">Chapter three of book</h2>
          <div className="btn gap-3 ml-auto">
            <span className="not-group-focus-visible:not-group-hover:ignore">Reading</span>
            <ArrowDownIcon className="btn-icon-size" />
          </div>
        </Link>

        <Link href={"#"} className="btn-ghost btn-lg group">
          <h2 className="font-bold">Chapter four of book</h2>
          <div className="btn gap-3 ml-auto">
            <span className="not-group-focus-visible:not-group-hover:ignore">Reading</span>
            <ArrowDownIcon className="btn-icon-size" />
          </div>
        </Link>

        <Link href={"#"} className="btn-ghost btn-lg group">
          <h2 className="font-bold">Chapter five of book</h2>
          <div className="btn gap-3 ml-auto">
            <span className="not-group-focus-visible:not-group-hover:ignore">Reading</span>
            <ArrowDownIcon className="btn-icon-size" />
          </div>
        </Link>
      </AccessNavigation>

      <div className="container card card-thick card-lg mt-20">
        <div className="f-align gap-3">
          <button className="btn-outline">
            <span>Full screen</span>
            <ExpandIcon className="btn-icon-size" />
          </button>
          <button className="btn-outline btn-square">
            <DownloadIcon className="btn-icon-size" />
          </button>
          <button className="btn-outline btn-square">
            <Share2Icon className="btn-icon-size" />
          </button>
        </div>

        <p className="mt-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex enim perspiciatis esse quidem
          deserunt aperiam incidunt, voluptate, reprehenderit quam temporibus quas voluptates animi
          aspernatur in maiores illo tempore, distinctio ipsa. Quo voluptatibus nisi alias
          temporibus ex impedit aliquid enim dolorem explicabo consequuntur earum deleniti facere
          accusamus, molestias modi eligendi! Suscipit omnis porro quis sint, libero atque deserunt
          vitae reprehenderit, doloribus illum rem sequi dignissimos dolores quos, fugiat dolorem ad
          repudiandae ipsum aliquid fuga. Adipisci, perspiciatis? Aliquam quia ab maiores corrupti,
          voluptatem saepe qui fugiat vero quibusdam, tenetur nobis eveniet, quos ex repellendus
          corporis alias adipisci. Aperiam ducimus velit deleniti tempore error sed, repellendus hic
          qui cum nulla exercitationem aspernatur veniam quis beatae amet voluptatem similique
          libero doloribus, ipsam, cumque sunt! Accusantium adipisci earum mollitia aliquam at.
          Eligendi in unde alias eos nisi architecto facilis ab numquam vitae aliquid, nesciunt
          natus nobis consequuntur magni, dolorum non neque, illum possimus consequatur officia! Eum
          impedit labore rerum tempora error? Obcaecati iure hic eius impedit, perspiciatis,
          mollitia quaerat facilis ex magnam non dolor. Dolores similique, voluptatum, itaque
          repellendus laboriosam commodi tempore voluptatibus ad maiores fugiat inventore magnam.
          Laborum sunt veniam earum quam deleniti ratione optio sint, nulla harum dignissimos! Quia
          totam a porro excepturi autem accusamus sequi ratione voluptatem similique id ullam
          eveniet odio quas saepe ducimus atque eum aut, eos, culpa quasi. Quos tempore voluptate
          cupiditate possimus blanditiis unde necessitatibus odio in dicta. Atque, impedit vero? Ad
          odio ratione molestias. Aliquam, voluptas! Beatae earum tenetur quod quis sint inventore
          dicta voluptas eum facere natus minima obcaecati laborum quidem, assumenda ipsa architecto
          vitae similique voluptates impedit expedita molestias nam. Officiis, nobis iste. Expedita
          explicabo odit laborum assumenda beatae voluptate tempora, fugiat ducimus quis quibusdam
          fugit officiis accusamus, illo autem dolor est eaque cupiditate iste consectetur? Quam,
          saepe iste sapiente impedit magnam repudiandae maxime quos sit vel molestiae facilis,
          praesentium quisquam ullam omnis, ea at? Quaerat voluptate dolorum quam aliquam tenetur,
          sequi omnis nesciunt nihil maxime debitis quisquam, enim corporis voluptates, corrupti
          obcaecati. Doloremque et eos odit ullam aliquid, excepturi saepe voluptatem quia qui
          placeat mollitia provident quidem inventore repudiandae voluptas ab velit sed tempora!
          Maxime nobis modi, quisquam facere ut soluta incidunt perferendis culpa dolorum ipsum
          molestias eaque facilis reiciendis! Incidunt eveniet voluptate aperiam id ipsa eaque unde
          nam perferendis fuga. Debitis vitae impedit illo sed obcaecati dolor odit odio numquam in
          tempore accusamus repellat eveniet molestiae saepe quam asperiores, pariatur nisi laborum!
          Eius neque sequi iusto perspiciatis, quia ad recusandae libero vitae, magni optio aperiam
          itaque, necessitatibus animi nobis ex odio. Ipsa eos sint vero quo necessitatibus quisquam
          vitae! Illo corrupti, dolores est possimus tempore assumenda nostrum quod ipsam nam cum
          aperiam repudiandae temporibus! Rerum deserunt consequuntur porro, earum dolor vel!
          Ducimus amet suscipit quas modi error ex, animi aliquid, harum nemo laudantium deleniti
          eligendi cupiditate laborum omnis at. Impedit veniam, aperiam reiciendis minima
          praesentium fugiat perspiciatis repellat facilis quis, provident vitae facere. Sequi
          temporibus nam eveniet mollitia quis ullam corporis modi veniam sint, dignissimos
          laboriosam pariatur rem. Excepturi ad, reprehenderit reiciendis iste similique accusamus,
          magnam accusantium repellendus eius expedita corrupti eveniet. Eius voluptate consectetur,
          tenetur quidem atque nulla omnis maiores fuga modi temporibus illum distinctio ducimus
          nostrum vero ea rerum quo. Modi id voluptatem odio in ullam nemo odit ratione dolor! Vero
          mollitia eveniet explicabo velit dolor cumque veniam laborum recusandae molestias eos!
          Perferendis corrupti, facilis labore doloremque delectus exercitationem ipsum quas
          sapiente voluptates, ab nulla ducimus, aut ipsam illum cupiditate voluptatibus voluptas.
          Error possimus id autem, fuga qui ad consectetur nobis dolores, omnis itaque, soluta
          incidunt. Voluptatum repellendus iste nobis, id quibusdam qui voluptates aspernatur
          nostrum distinctio modi nihil dolore voluptatem illum aut quam ea commodi, quo dolorem?
          Vero esse optio sed debitis expedita natus accusantium! Consequatur suscipit officia
          facere ad. Soluta enim, sit odio corrupti voluptatum, voluptate quasi aperiam eos, ab
          tenetur voluptas nam magnam harum aliquid vero est illum amet ipsum! Molestias eius iure
          quisquam tenetur sapiente. Itaque velit voluptatibus assumenda excepturi dolorem iste
          natus, quis ut, sed ea ipsum? Saepe assumenda eius, enim, a pariatur illo neque, ut vitae
          debitis tenetur accusamus reiciendis dignissimos unde. Quos, eius. Sit consequatur, eum
          velit odio similique deleniti soluta blanditiis rerum aspernatur saepe! Iusto, cum nemo
          aut distinctio dignissimos, pariatur neque corporis dicta soluta quod numquam veniam
          magnam eveniet alias. Neque nobis omnis vero velit earum, quis labore totam laudantium
          laboriosam exercitationem et ab quia harum facere. Quasi, maiores ratione ducimus nesciunt
          soluta enim, error facilis asperiores, aliquam accusamus maxime? Culpa quos officia quae
          quaerat pariatur iste recusandae laudantium. Rem voluptatibus laborum fugit maiores
          exercitationem. Temporibus blanditiis aspernatur corrupti reprehenderit labore repellendus
          unde facere error. Iste libero exercitationem inventore doloremque, quos dolore eos
          quibusdam dignissimos accusantium commodi illum dolor? Vero, voluptatum, tempora
          voluptatem quaerat error temporibus fugiat ipsum officiis minus blanditiis perferendis
          voluptate eius eos quidem quisquam, impedit eaque consectetur. Temporibus nesciunt beatae
          error voluptate? Accusamus impedit eum hic commodi earum, natus eligendi? Repellat sint
          aperiam, dignissimos voluptates aliquam tenetur nostrum laudantium maiores expedita
          deleniti, temporibus reprehenderit veniam nobis nam perferendis eos porro sapiente numquam
          consectetur tempora quo ipsam! A incidunt illo ex minima quaerat dolorem quidem ullam,
          unde dolorum similique excepturi suscipit tenetur voluptatem quis soluta dolor alias
          adipisci ea error dicta officia. Dolorum perspiciatis facilis possimus qui, inventore sit
          aut magnam ducimus rerum veniam unde earum accusantium quia odit alias molestiae dolorem,
          praesentium nostrum asperiores maxime officia ea nam. Asperiores animi fuga incidunt
          quidem, ipsum officia labore error? Alias dolore soluta modi voluptatem a optio non
          recusandae, quibusdam quo, porro, ab delectus inventore quod. Ratione illum laboriosam
          ipsam enim tempore rerum ab unde perferendis quas, non harum deserunt aspernatur vero eos
          debitis et sapiente quasi molestiae culpa id ea magni saepe alias cupiditate! Molestias
          nostrum asperiores neque minus quae vitae nobis fugiat officia, esse expedita,
          perspiciatis autem aperiam, ratione est impedit commodi quibusdam laudantium in error
          optio quasi inventore repudiandae accusamus suscipit? Sint eveniet sapiente quod
          consectetur commodi autem est animi asperiores. Iste rerum officia reprehenderit
          voluptatum eaque soluta natus impedit voluptatem. Id delectus suscipit non doloremque iure
          minus! Quisquam?
        </p>
      </div>

      <h3 className="heading mt-20">related articles</h3>
      <Carousel className="carousel container mt-6">
        <Carousel.Container className="carousel-container gap-3">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          {Array.from({ length: 7 }).map(() => (
            <div className="w-2/5 card card-thick min-w-2/5 space-y-3" key={Math.random()}>
              <div className="w-full aspect-video bg-background rounded-child" />
              <h6 className="text-xl font-bold">Our IT solutions</h6>
              <div className="badge-soft mt-3">Business</div>
              <p className="mt-3 line-clamp-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet nihil omnis, dolores
                pariatur sed distinctio praesentium quam? Dignissimos officia, assumenda alias sit
                odio nisi ad magni numquam eum animi repudiandae.
              </p>

              <Link className="btn-outline" href={"/articles/1"}>
                <span>Read more</span>

                <LoaderLink loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
                  <ArrowRightIcon className="btn-icon-size" />
                </LoaderLink>
              </Link>
            </div>
          ))}
        </Carousel.Container>
      </Carousel>
    </>
  );
};

export default ArticlesDetailPage;
