import styles from "./Card.module.scss";
import { useState, useEffect } from "react";
export default function index({ title, text, clampLines }) {
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
    <div className={styles.Card}>
      <span className={styles.CardTitle}>{title}</span>
      {text && (
        <p className={styles.CardText} style={classClamp}>
          {text}
        </p>
      )}
      <div className={styles.BorderColor}></div>
    </div>
  );
}
