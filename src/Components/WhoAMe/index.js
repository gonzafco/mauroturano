import styles from "./WhoAMe.module.scss";
import sanityClient from "../../client";
import { useState, useEffect } from "react";

export default function index() {
  const [quienSoy, setQuienSoy] = useState();
  useEffect(() => {
    fetchDataWhoAMe();
  }, []);

  function fetchDataWhoAMe() {
    sanityClient
      .fetch('*[_type=="whoAMe"][0]{name,text,title}')
      .then((data) => setQuienSoy(data))
      .catch(console.error);
  }
  return (
    <section id="quiensoy" className={styles.WhoAMe}>
      <div className={styles.TextContainer}>
        <span className={styles.Presentation}>{quienSoy?.title}</span>
        <span className={styles.FullName}>{quienSoy?.name}</span>

        <p className={styles.Paragraph}>{quienSoy?.text}</p> 
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
