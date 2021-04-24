import Brand from "../Brand";
import Navbar from "../Navbar";
import PrimaryBtn from "../PrimaryBtn";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <Brand brand={"Mauro Turano"} path={"/"} />
      {/* <Navbar /> */}
      <PrimaryBtn path="/#quiensoy" text={"¿Quien soy?"} />
    </header>
  );
}
