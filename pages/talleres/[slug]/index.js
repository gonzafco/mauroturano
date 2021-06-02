import sanityClient from "../../../src/client";
import Head from "next/head";
import styles from "./Workshop.module.scss";
import Header from "../../../src/Components/Header";
import Card from "../../../src/Components/Card";
import Footer from "../../../src/Components/Footer";

export default function slug({ title, subtitle, modules, slug }) {
  return (
    <>
      <Head>
        <title>Talleres - {title}</title>
      </Head>
      <Header />
      <div className={styles.WorkshopBox}>
        <div className={styles.HeaderSectionBox}>
          <div className={styles.SectionName}>Talleres</div>
          <div className={styles.WorkshopTitle}>{title}</div>
        </div>
        <div className={styles.ModulesBox}>
          {modules.map((module, key) => (
            <Card
              title={module.module_title}
              text={module.description}
              clampLines={99}
              path={{}}
              key={key}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const pageSlug = context.query.slug;
  const query = `*[_type=="workshops" && slug.current == "${pageSlug}"][0]{title,subtitle,modules}`;
  const workshop = await sanityClient.fetch(query);

  return {
    props: {
      title: workshop.title,
      subtitle: workshop.subtitle,
      modules: workshop.modules,
    },
  };
}
