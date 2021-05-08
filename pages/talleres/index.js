import styles from "./talleres.module.scss";
import Head from "next/head";
import Header from "../../src/Components/Header";
import WorkshopHero from "../../src/Components/WorkshopHero";
import WorkshopDetail from "../../src/Components/WorkshopDetail";
import Footer from "../../src/Components/Footer";
import {
  title,
  text,
  cards,
  workshops,
} from "../../public/assets/json/TalleresInformation.json";

export default function index() {
  return (
    <>
      <Head>
        <title>Mauro Turano - {title}</title>
      </Head>
      <Header />
      <section className={styles.Talleres}>
        <WorkshopHero title={title} text={text} cards={cards} />

        {workshops.map((workshop, key) => {
          return (
            <WorkshopDetail
              title={workshop.title}
              video={workshop.video}
              modules={workshop.modules}
              key={key}
            />
          );
        })}
      </section>
      <Footer />
    </>
  );
}
