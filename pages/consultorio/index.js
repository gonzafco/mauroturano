import styles from "./consultorio.module.scss";
import Header from "../../src/Components/Header";
import ConsultorioHero from "../../src/Components/ConsultorioHero";
import Footer from "../../src/Components/Footer";
import {
  title,
  text,
} from "../../public/assets/json/ConsultorioInformation.json";

export default function index() {
  return (
    <>
      <Header />
      <ConsultorioHero title={title} text={text} />
      <Footer />
    </>
  );
}
