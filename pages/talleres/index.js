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
} from "../../public/assets/json/TalleresInformation.json";

import sanityClient from "../../src/client";
import { useState, useEffect } from "react";

export default function index() {
  const [talleres, setTalleres] = useState();
  const [workshops, setWorkshops] = useState();
  useEffect(() => {
    fetchDataTalleres();
    fetchDataWorkshops();
  }, []);

  function fetchDataTalleres() {
    sanityClient
      .fetch('*[_type=="sections" && section == "talleres"][0]{title,text}')
      .then((data) => setTalleres(data))
      .catch(console.error);
  }

  function fetchDataWorkshops() {
    sanityClient
      .fetch('*[_type=="workshops"]{title,subtitle,modules}')
      .then((data) => setWorkshops(data))
      .catch(console.error);
  }
  return (
    <>
      <Head>
        <title>Mauro Turano - {title}</title>
      </Head>
      <Header />
      <section className={styles.Talleres}>
        <WorkshopHero
          title={talleres?.title}
          text={talleres?.text}
          cards={cards}
        />

        {workshops?.map((workshop, key) => {
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
