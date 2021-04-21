import styles from "./talleres.module.scss";
import Head from "next/head";
import Header from "../../Components/Header";
import WorkshopHero from "../../Components/WorkshopHero";
import WorkshopDetail from "../../Components/WorkshopDetail";
import Footer from "../../Components/Footer";
import {
  title,
  text,
  cards,
  workshops,
} from "../../public/assets/json/TalleresInformation.json";

export default function index() {
  return (
    <>
      <Header />
      <section className={styles.Talleres}>
        <Head>
          <title>Mauro Turano - {title}</title>
        </Head>

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
