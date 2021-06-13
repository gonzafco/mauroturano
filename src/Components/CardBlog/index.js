import styles from "./CardBlog.module.scss";
import Link from "next/link";
export default function index({ title, subtitle}) {
  return (
    <div className={styles.Card}>
      <span className={styles.CardTitle}>{title}</span>
      <p className={styles.CardText}>{subtitle}</p>
      <div className={styles.BorderColor}></div>
      <div className={styles.FooterCard}>
        <button className={styles.BtnViewPost}>Ver mas</button>
      </div>
    </div>
  );
}
