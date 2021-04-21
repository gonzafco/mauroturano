import styles from "./Whoami.module.scss";

export default function PrimaryBtn({ text }) {
  return <button className={styles.Whoami}>{text}</button>;
}
