import styles from "./Hero.module.scss";
import Card from "../Card";

export default function index({ cards }) {
  return (
    <div className={styles.Hero}>
      {cards.map((value, key) => {
        return <Card title={value.title} text={value.text} key={key} />;
      })}
    </div>
  );
}
