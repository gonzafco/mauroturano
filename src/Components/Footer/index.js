import Brand from "../Brand";
import Navbar from "../Navbar";
import PrimaryBtn from "../PrimaryBtn";
import styles from "./Footer.module.scss";
export default function index() {
  const brand = "Lic. Mauro Turano";
  const text = "Contactarme";
  return (
    <footer className={styles.Footer}>
      <div className={styles.Navbar}>
        <Navbar />
      </div>
      <div className={styles.BrandAndButton}>
        <Brand brand={brand} path="/" />
        <PrimaryBtn text={text} path="/#quiensoy" />
      </div>
    </footer>
  );
}
