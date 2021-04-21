import styles from "./blog.module.scss";
import Header from "../../Components/Header";
import HeroContainer from "../../Components/HeroContainer";
import {
  title,
  text,
  cards,
} from "../../public/assets/json/BlogInformation.json";

export default function index() {
  return (
    <section className={styles.Blog}>
      <Header />
      <HeroContainer title={title} text={text} cards={cards} />
    </section>
  );
}