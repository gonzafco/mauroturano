import styles from "./WhoAMe.module.scss";

export default function index({ whoAMe } = props) {
  return (
    <section id="quiensoy" className={styles.WhoAMe}>
      <div className={styles.TextContainer}>
        <span className={styles.Presentation}>{whoAMe.title}</span>
        <span className={styles.FullName}>{whoAMe.name}</span>

        <p className={styles.Paragraph}>{whoAMe.text}</p>
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
