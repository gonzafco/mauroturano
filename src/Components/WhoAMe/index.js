import styles from "./WhoAMe.module.scss";
import BlockContent from "@sanity/block-content-to-react";

export default function index({ quienSoy }) {
  return (
    <section id="quiensoy" className={styles.WhoAMe}>
      <div className={styles.TextContainer}>
        <span className={styles.Presentation}>{quienSoy.title}</span>
        <span className={styles.FullName}>{quienSoy.name}</span>

        <BlockContent blocks={quienSoy.text} />
      </div>
      <div className={styles.BlobDecoration}>
        <img
          className={styles.ImgDecoration}
          src="/assets/img/clip-education.png"
          alt="Clip-Educatiion"
        />
      </div>
    </section>
  );
}
