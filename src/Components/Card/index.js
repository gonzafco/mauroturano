import styles from "./Card.module.scss";
import Link from "next/link";
export default function index({ title, text, path }) {
  return (
    <Link href={path}>
      <div className={styles.Card}>
        <span className={styles.CardTitle}>{title}</span>
        {text && <p className={styles.CardText}>{text}</p>}
        <div className={styles.BorderColor}></div>
      </div>
    </Link>
  );
}
