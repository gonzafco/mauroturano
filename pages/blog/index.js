import styles from "./blog.module.scss";
import Head from "next/head";
import Header from "../../src/Components/Header";
import WorkshopHero from "../../src/Components/WorkshopHero";
import MorePost from "../../src/Components/MorePost";
import Footer from "../../src/Components/Footer";
import sanityClient from "../../src/client";
import { useState, useEffect } from "react";
import { cards } from "../../public/assets/json/BlogInformation.json";

export default function index() {
  const [blog, setBlog] = useState();

  useEffect(() => {
    fetchDataBlog();
  }, []);

  function fetchDataBlog() {
    sanityClient
      .fetch('*[_type=="sections" && section == "blog"][0]{title,text}')
      .then((data) => setBlog(data))
      .catch(console.error);
  }

  
  return (
    <>
      <Head>
        <title>Mauro Turano - Blog</title>
      </Head>
      <Header />
      <section className={styles.Blog}>
        <WorkshopHero title={blog?.title} text={blog?.text} cards={cards} />
        <MorePost/>
      </section>
      <Footer />
    </>
  );
}
