import Head from "next/head";
import styles from "./Home.module.scss";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import WhoAMe from "../Components/WhoAMe";
import Footer from "../Components/Footer";
import Cards from "../public/assets/json/HomeCards.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauro Turano</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.Home}>
        <Hero cards={Cards} />
      </div>
      <WhoAMe fullName={"Mauro Turano"} />
      <Footer />
    </>
  );
}
