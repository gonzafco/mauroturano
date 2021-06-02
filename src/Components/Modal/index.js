import styles from "./Modal.module.scss";
import PrimaryBtn from "../PrimaryBtn";
import { useState } from "react";
export default function index() {
  function toggleModal() {
    setShowModal((prevstate) => !showModal);
  }
  const [showModal, setShowModal] = useState(true);

  const Modal = (
    <div className={styles.Modal}>
      <span className={styles.ModalTitle}>Contactate conmigo</span>
      <span className={styles.ModalText}>
        A continuacion, por favor haga click en continuar para que nos pongamos
        en contacto mediante Whatsapp
      </span>
      <PrimaryBtn onClick={toggleModal} text={"Continuar"} />
    </div>
  );

  return <div className={styles.ModalBox}> {Modal} </div>;
}
