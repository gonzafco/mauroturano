import styles from "./blog.module.scss";
import Head from "next/head";
import Header from "../../src/Components/Header";
import WorkshopHero from "../../src/Components/WorkshopHero";
import MorePost from "../../src/Components/MorePost";
import Footer from "../../src/Components/Footer";
import sanityClient from "../../src/client";

export default function index({
  sectionInformation,
  firstPost,
  morePostsBlogs,
}) {
  return (
    <>
      <Head>
        <title>Mauro Turano - Blog</title>
      </Head>
      <Header />
      <section className={styles.Blog}>
        <WorkshopHero
          title={sectionInformation.title}
          text={sectionInformation.text}
          cards={firstPost}
        />
        <MorePost posts={morePostsBlogs} />
      </section>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const firstquery = `*[_type=="sections" && section == "blog"][0]{title,text}`;
  const sectionInformation = await sanityClient.fetch(firstquery);

  const secondQuery = `*[_type=="posts"][0..2]{title,subtitle,slug}`;
  const firstPost = await sanityClient.fetch(secondQuery);

  const postsQuery = `*[_type=="posts"]{slug,title,subtitle}`;
  const morePostsBlogs = await sanityClient.fetch(postsQuery);

  return {
    props: {
      sectionInformation,
      firstPost,
      morePostsBlogs,
    },
  };
}
