import styles from "./WorkshopHero.module.scss";
import Link from "next/link";
import Card from "../Card";
import BlockContent from "@sanity/block-content-to-react";

export default function index({ title, text, cards, video, basePath }) {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.BoxText}>
        <span className={styles.Title}>{title}</span>
        {/* <p className={styles.Text}>{text}</p> */}
        <BlockContent blocks={text} />
      </div>
      <div className={styles.BoxCards}>
        {cards.map((card, key) => {
          return (
            <Link href={`${basePath}/${card.slug.current}`}>
              <a>
                <Card
                  title={card.title}
                  text={card.subtitle || card.text}
                  key={key}
                  path={card.slug.current}
                  clampLines={4}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
