import styles from "./Hero.module.scss";
import Card from "../Card";

export default function index({ cards }) {
  return (
    <div className={styles.Hero}>
      {cards.map((card, key) => {
        return (
          <Card
            title={card.title}
            text={card.text}
            key={key}
            path={card.path}
          />
        );
      })}
    </div>
  );
}
