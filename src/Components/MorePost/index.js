import styles from "./MorePost.module.scss";
import Search from "../Search";
import BlogCard from "../CardBlog";
import Link from "next/link";
export default function index({ posts }) {
  return (
    <div className={styles.MorePost}>
      <div className={styles.MorePostHeader}>
        <span className={styles.titleBox}>Más publicaciones</span>
        <div className={styles.SearchBox}>
          <Search />
        </div>
      </div>
      <div className={styles.PostsContainer}>
        {posts.map((post, key) => {
          return (
            <Link href={`blog/${post.slug.current}`}>
              <a>
                <BlogCard
                  title={post.title}
                  subtitle={post.subtitle}
                  key={key}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
