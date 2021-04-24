import styles from "./WhoAMe.module.scss";

export default function index({ fullName, paragraphs }) {
  return (
    <section id="quiensoy" className={styles.WhoAMe}>
      <div className={styles.TextContainer}>
        <span className={styles.Presentation}>Hola! Me presento, soy</span>
        <span className={styles.FullName}>{fullName}</span>
        <p className={styles.Paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
          lacus, ut nascetur accumsan nibh mauris. Odio nibh tellus ut et varius
          volutpat lorem rhoncus. Aenean commodo vel, facilisi in tincidunt duis
          lectus fames molestie. Auctor rhoncus, arcu semper mattis tristique.
          Porttitor lectus egestas volutpat arcu, est ultrices. Mattis
          condimentum mauris massa arcu, fermentum et.
        </p>
        <p className={styles.Paragraph}>
          {" "}
          Rutrum gravida fermentum vitae cum tempor at nulla ut. Venenatis mi
          habitant sit imperdiet diam scelerisque ultrices lacus, ultrices.
          Hendrerit quam cursus risus augue duis. Vitae, massa ultrices mauris
          aliquet venenatis diam est vel. Ac arcu ligula turpis duis posuere
          egestas. Euismod senectus etiam risus nisl, lobortis scelerisque
        </p>
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
