import styles from "./CardBlog.module.scss";
import Link from "next/link";
export default function index({ title, text, date, path }) {
  return (
    <div className={styles.Card}>
      <span className={styles.CardTitle}>{title}</span>
      {text && <p className={styles.CardText}>{text}</p>}
      <div className={styles.BorderColor}></div>
      <div className={styles.FooterCard}>
        <span className={styles.DatePost}>{date}</span>
        <button className={styles.BtnViewPost}>Ver mas</button>
      </div>
    </div>
  );
}
