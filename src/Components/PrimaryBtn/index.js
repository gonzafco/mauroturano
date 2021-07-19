import styles from "./Whoami.module.scss";
import Link from "next/link";

export default function PrimaryBtn({ text }) {
  const message =
    "Hola! Vengo de mauroturano.com.ar. Quiero comunicarme con vos. Mi nombre es: ";
  const phone = "5491135603763";

  const messageUrl = "https://api.whatsapp.com/send";

  return (
    <Link
      href={{
        pathname: messageUrl,
        query: { phone: phone, text: message },
      }}
    >
      <a target="_blank">
        <button className={styles.Whoami}>
          {text}
        </button>
      </a>
    </Link>
  );
}
