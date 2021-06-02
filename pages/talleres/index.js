import styles from "./talleres.module.scss";
import Head from "next/head";
import Header from "../../src/Components/Header";
import WorkshopHero from "../../src/Components/WorkshopHero";
import WorkshopDetail from "../../src/Components/WorkshopDetail";
import Footer from "../../src/Components/Footer";
import { cards } from "../../public/assets/json/TalleresInformation.json";
import sanityClient from "../../src/client";

export default function index({ title, text, workshops, basePath }) {
  return (
    <>
      <Head>
        <title>Mauro Turano - {title}</title>
      </Head>
      <Header />
      <section className={styles.Talleres}>
        <WorkshopHero title={title} text={text} cards={cards} />

        {workshops?.map((workshop, key) => {
          return (
            <WorkshopDetail
              title={workshop.title}
              video={workshop.video}
              modules={workshop.modules}
              path={`${basePath}/${workshop.slug.current}`}
              key={key}
            />
          );
        })}
      </section>
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  const queryTalleres =
    '*[_type=="sections" && section == "talleres"][0]{title,text}';
  const talleres = await sanityClient.fetch(queryTalleres);

  const queryWorkshops = '*[_type=="workshops"]{title,subtitle,modules,slug}';
  const workshops = await sanityClient.fetch(queryWorkshops);

  return {
    props: {
      basePath: context.resolvedUrl,
      title: talleres.title,
      text: talleres.text,
      workshops,
    },
  };
}
