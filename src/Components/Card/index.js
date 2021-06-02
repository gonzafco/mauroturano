import styles from "./Card.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function index({ title, text, clampLines, path }) {
  const [classClamp, setClassClamp] = useState({});
  useEffect(() => {
    defineClam(clampLines);
  }, []);

  function defineClam(clampLines) {
    const clamp = {
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: `${clampLines}`,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    };
    setClassClamp(clamp);
  }

  return (
    <Link href={path}>
      <div className={styles.Card}>
        <span className={styles.CardTitle}>{title}</span>
        {text && (
          <p className={styles.CardText} style={classClamp}>
            {text}
          </p>
        )}
        <div className={styles.BorderColor}></div>
      </div>
    </Link>
  );
}
