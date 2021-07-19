import styles from "./Brand.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Brand({ brand, path }) {
  
  const [textBrand, setTextBrand] = useState(brand);
  const { asPath } = useRouter();
  function setGoHome() {
    asPath === "/"
      ? setTextBrand("Lic. Mauro Turano")
      : setTextBrand("Volver al inicio");
  }

  return (
    <Link href={path}>
      <span
        onMouseLeave={() => setGoHome()}
        onMouseEnter={() => setGoHome()}
        className={styles.Brand}
      >
        {textBrand}
      </span>
    </Link>
  );
}
