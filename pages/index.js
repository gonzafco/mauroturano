import Head from "next/head";
import styles from "./Home.module.scss";
import Header from "../src/Components/Header";
import Hero from "../src/Components/Hero";
import WhoAMe from "../src/Components/WhoAMe";
import Footer from "../src/Components/Footer";
import { useState, useEffect } from "react";
import sanityClient from "../src/client";

export default function Home() {
  const [cardsContent, setCardsContent] = useState([]);
  const [whoAMe, setWhoAMe] = useState();
  useEffect(() => {
    fetchDataHome();
    fetchDataWhoAMe();
  }, []);

  function fetchDataHome() {
    sanityClient
      .fetch('*[_type=="home"]{text,title,path}')
      .then((data) => setCardsContent(data))
      .catch(console.error);
  }

  function fetchDataWhoAMe() {
    sanityClient
      .fetch('*[_type=="whoAMe"][0]{name,text,title}')
      .then((data) => setWhoAMe(data))
      .catch(console.error);
  }

  return (
    <>
      <Head>
        <title>Mauro Turano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.Home}>
        <Hero cards={cardsContent} />
      </div>
      <WhoAMe whoAMe={whoAMe} />

      <Footer />
    </>
  );
}
