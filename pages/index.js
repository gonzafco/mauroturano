import Head from "next/head";
import styles from "./Home.module.scss";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

import Cards from "../public/assets/json/HomeCards.json";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Mauro Turano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero cards={Cards} />
    </div>
  );
}
