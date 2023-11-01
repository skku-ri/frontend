import styles from './Logo.module.css';

export function Logo() {
  return (
    <h1>
      <span className={styles.logo}>
        <span className={styles.skku}>SKKU</span>
        <span className={styles.bar}>-</span>
        <span className={styles.r}>R</span>
        <span className={styles.i}>I</span>
      </span>
    </h1>
  );
}
