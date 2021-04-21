import Brand from "../Brand";
import Navbar from "../Navbar";
import PrimaryBtn from "../PrimaryBtn";
import styles from "./Footer.module.scss";
export default function index() {
  const brand = "Mauro Turano";
  const text = "Quien soy?";
  return (
    <footer className={styles.Footer}>
      <div className={styles.Navbar}>
        <Navbar/>
      </div>
      <div className={styles.BrandAndButton}>
        <Brand brand={brand} />
        <PrimaryBtn text={text} />
      </div>
    </footer>
  );
}
