import styles from "./ConsultorioHero.module.scss";

export default function index({title, text}) {
  return (
    <div className={styles.ConsultorioContainer}>
      <div className={styles.BoxText}>
        <span className={styles.Title}>{title}</span>
        <p className={styles.Text}>{text}</p>
      </div>
      <div className={styles.ConsultorioBooking}></div>
    </div>
  );
}
