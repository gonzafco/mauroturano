import styles from "./WorkshopDetail.module.scss";
import Link from "next/link";
import Card from "../Card";

export default function index({ title, text, modules, video, path }) {
  return (
    <div className={styles.WorkShopContainer}>
      <div className={styles.BoxDescription}>
        <span className={styles.Title}>{title}</span>
        <img src={video} height="300"></img>
      </div>
      <div className={styles.BoxCards}>
        {modules.map((module, key) => {
          return (
            <Link href={path}>
              <a>
                <Card
                  title={module.module_title}
                  text={module.description}
                  key={key}
                  clampLines={3}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
