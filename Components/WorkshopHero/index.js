import styles from "./WorkshopHero.module.scss";
import Card from "../Card";

export default function index({ title, text, cards, video }) {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.BoxText}>
        <span className={styles.Title}>{title}</span>
        <p className={styles.Text}>{text}</p>
      </div>
      <div className={styles.BoxCards}>
        {cards.map((card, key) => {
          return <Card title={card.title} text={card.text} key={key} />;
        })}
      </div>
    </div>
  );
}
