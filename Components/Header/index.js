import Brand from "../Brand";
import Navbar from "../Navbar";
import Whoami from "../PrimaryBtn";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <Brand brand={"Mauro Turano"}/>
      {/* <Navbar /> */}
      <Whoami text={"¿Quien soy?"} />
    </header>
  );
}
