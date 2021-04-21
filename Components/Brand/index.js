import styles from  "./Brand.module.scss";
export default function Brand({brand}) {
  return <span className={styles.Brand}>{brand}</span>;
}
