import Head from "next/head";
import styles from "./Home.module.scss";
import Header from "../src/Components/Header";
import Hero from "../src/Components/Hero";
import WhoAMe from "../src/Components/WhoAMe";
import Footer from "../src/Components/Footer";
import sanityClient from "../src/client";

export default function Home({ cardsContent, whoAMeContent }) {
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
      <WhoAMe quienSoy={whoAMeContent} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(){
  const queryCards = `*[_type=="home"][0]{cards}`;
  const cardsContent = await sanityClient.fetch(queryCards);

  const queryWhoAMe = `*[_type=="whoAMe"][0]{name,text,title}`;
  const whoAMeContent = await sanityClient.fetch(queryWhoAMe);  
  return { props: { cardsContent: cardsContent.cards, whoAMeContent } };
}
