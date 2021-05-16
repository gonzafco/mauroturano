import styles from "./MorePost.module.scss";
import Search from "../Search";
import BlogCard from "../CardBlog";
import sanityClient from "../../client";
import { useState, useEffect } from "react";
export default function index() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetchDataPosts();
  }, []);
  function fetchDataPosts() {
    sanityClient
      .fetch('*[_type=="posts"]{"date":_createdAt,_id,title,subtitle,text}')
      .then((data) => setPosts(data))
      .catch(console.error);
  }
  return (
    <div className={styles.MorePost}>
      <div className={styles.MorePostHeader}>
        <span className={styles.titleBox}>Más publicaciones</span>
        <div className={styles.SearchBox}>
          <Search />
        </div>
      </div>
      <div className={styles.PostsContainer}>
        {posts?.map((post, key) => (
          <BlogCard
            title={post.title}
            text={post.subtitle}
            date={post.date}
            key={key}
            id={post._id}
          />
        ))}
      </div>
    </div>
  );
}
