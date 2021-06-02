import styles from "./WorkshopDetail.module.scss";
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
            <Card
              title={module.module_title}
              text={module.description}
              key={key}
              path={path}
              clampLines={3}
            />
          );
        })}
      </div>
    </div>
  );
}
