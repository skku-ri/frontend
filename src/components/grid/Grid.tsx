import styles from './Grid.module.css';

export function Grid(props: {
  children?: React.ReactNode;
  columns?: string[];
  rows?: string[];
  className?: string;
}) {
  return (
    <div
      className={styles.grid + ' ' + (props.className ?? '')}
      style={{
        gridTemplateColumns: props.columns?.join(' ') ?? 'auto',
        gridTemplateRows: props.rows?.join(' ') ?? 'auto',
      }}
    >
      {props.children}
    </div>
  );
}
