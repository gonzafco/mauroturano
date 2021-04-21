import styles from "./Navbar.module.scss";
import Card from "../../Components/Card";
export default function Navbar() {
  const navElements = [
    "Consultorio",
    "Talleres",
    "Blog",
    "Cuentos y libros",
    "Reseñas",
    "Redes sociales",
  ];
  return (
    <>
      {navElements.map((navElement, key) => (
        <Card title={navElement} />
      ))}
    </>
  );
}
