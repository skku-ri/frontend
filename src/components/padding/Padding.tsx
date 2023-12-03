import styles from './Padding.module.css';

export function Padding({ children }: { children: React.ReactNode }) {
  return <div className={styles.padding}>{children}</div>;
}
