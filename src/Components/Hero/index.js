import styles from "./Hero.module.scss";
import Card from "../Card";
import Link from "next/link"

export default function index({ cards }) {
  return (
    <div className={styles.Hero}>
      {cards.map((card, key) => {
        return (
          <Link href={card.path}>
            <a>
              <Card
                title={card.title}
                text={card.text}
                key={key}
                clampLines={4}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
}
