import styles from "./Search.module.scss";

export default function index() {
  return (
    <div className={styles.InputContainer}>
      <input className={styles.Input} placeholder="Buscar" />
      <div className={styles.Icon}></div>
    </div>
  );
}
