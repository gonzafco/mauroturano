import sanityClient from "../../../src/client";
import Head from "next/head";
import styles from "./OneBlog.module.scss";
import Header from "../../../src/Components/Header";
import Footer from "../../../src/Components/Footer";
import BlockContent from "@sanity/block-content-to-react";
export default function slug({ title, subtitle, text }) {
  return (
    <>
      <Head>
        <title>Blog - {title}</title>
      </Head>
      <Header />
      <article className={styles.OneBlogBox}>
        <h1 className={styles.Title}>{title}</h1>
        <h2 className={styles.Subtitle}>{subtitle}</h2>
        <BlockContent blocks={text} />
      </article>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const pageSlug = context.query.slug;
  const query = `*[_type=="posts" && slug.current == "${pageSlug}"][0]{title,subtitle,text}`;
  const post = await sanityClient.fetch(query);
  return {
    props: {
      title: post.title,
      subtitle: post.subtitle,
      text: post.text,
    },
  };
}
