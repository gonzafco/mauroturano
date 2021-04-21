import styles from "./Card.module.scss";
export default function index({ title, text }) {
  return (
    <div className={styles.Card}>
      <span className={styles.CardTitle}>{title}</span>
      {text && <p className={styles.CardText}>{text}</p>}
      <div className={styles.BorderColor}></div>
    </div>
  );
}
