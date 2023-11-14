import styles from './Row.module.css';

export function Row(props: { children?: React.ReactNode }) {
  return <div className={styles.row}>{props.children}</div>;
}
