import styles from "./consultorio.module.scss";
import Header from "../../src/Components/Header";
import ConsultorioHero from "../../src/Components/ConsultorioHero";
import Footer from "../../src/Components/Footer";

import sanityClient from "../../src/client";
import { useState, useEffect } from "react";
import {
  title,
  text,
} from "../../public/assets/json/ConsultorioInformation.json";

export default function index() {
  const [consultorio, setConsultorio] = useState();
  useEffect(() => {
    fetchDataConsultorio();
  }, []);

  function fetchDataConsultorio() {
    sanityClient
      .fetch('*[_type=="sections" && section == "consultorio"][0]{title,text}')
      .then((data) => setConsultorio(data))
      .catch(console.error);
  }
  return (
    <>
      <Header />
      <ConsultorioHero title={consultorio?.title} text={consultorio?.text} />
      <Footer />
    </>
  );
}
