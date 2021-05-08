import styles from "./MorePost.module.scss";
import Search from "../Search";
import BlogCard from "../CardBlog";
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
        {posts.map((post, key) => (
          <BlogCard
            title={post.title}
            text={post.content}
            date={post.date}
            key={key}
            path={""}
          />
        ))}
      </div>
    </div>
  );
}
