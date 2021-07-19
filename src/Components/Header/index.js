import Brand from "../Brand";
import PrimaryBtn from "../PrimaryBtn";
import styles from "./Header.module.scss";
export default function Header() {
  return (
    <header className={styles.Header}>
      <Brand brand={"Lic. Mauro Turano"} path={"/"} />
      <div className={styles.ContactMe}>
        <PrimaryBtn text={"Contactarme"} />
      </div>
    </header>
  );
}
