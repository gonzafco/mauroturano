import Head from "next/head";
import styles from "./Home.module.scss";
import Header from "../src/Components/Header";
import Hero from "../src/Components/Hero";
import WhoAMe from "../src/Components/WhoAMe";
import Footer from "../src/Components/Footer";
import sanityClient from "../src/client";

export default function Home({ cardsContent }) {
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
      <WhoAMe />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const query = `*[_type=="home"]{text,title,path}`;
  const cardsContent = await sanityClient.fetch(query);
  return { props: { cardsContent } };
}
