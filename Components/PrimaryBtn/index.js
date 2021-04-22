import styles from "./Whoami.module.scss";
import Link from "next/link";

export default function PrimaryBtn({ text, path }) {
  return (
    <>
      <Link href={path}>
        <button className={styles.Whoami}>{text}</button>
      </Link>
    </>
  );
}
