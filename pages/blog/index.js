import styles from "./blog.module.scss";
import Head from "next/head";
import Header from "../../src/Components/Header";
import WorkshopHero from "../../src/Components/WorkshopHero";
import MorePost from "../../src/Components/MorePost";
import Footer from "../../src/Components/Footer";
import {
  title,
  text,
  cards,
  posts,
} from "../../public/assets/json/BlogInformation.json";

export default function index() {
  return (
    <>
      <Head>
        <title>Mauro Turano - Blog</title>
      </Head>
      <Header />
      <section className={styles.Blog}>
        <WorkshopHero title={title} text={text} cards={cards} />
        <MorePost posts={posts} />
      </section>
      <Footer />
    </>
  );
}
