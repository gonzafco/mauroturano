import styles from "./Brand.module.scss";
import Link from "next/link";
export default function Brand({ brand, path }) {
  return (
    <Link href={path}>
      <span className={styles.Brand}>{brand}</span>
    </Link>
  );
}
