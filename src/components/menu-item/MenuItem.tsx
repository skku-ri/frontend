import styles from './MenuItem.module.css';

export function MenuItem(props: { label: string; onClick?: () => void }) {
  return (
    <div className={styles.menuItem}>
      <div onClick={props.onClick}>
        <h3>{props.label}</h3>
        <div></div>
      </div>
    </div>
  );
}
