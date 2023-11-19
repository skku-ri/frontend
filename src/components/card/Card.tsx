import styles from './Card.module.css';

export function Card(props: {
  children?: React.ReactNode;
  className?: string;
  padding?: number | [number, number] | [number, number, number, number];
  width?: number;
  height?: number;
  hidden?: boolean;
  backgroundColor?: string;
}) {
  const padding = (() => {
    if (typeof props.padding === 'number') {
      return `${props.padding}px`;
    } else if (Array.isArray(props.padding)) {
      return props.padding.map((v) => `${v}px`).join(' ');
    }
  })();
  return (
    <div
      className={styles.card + ' ' + (props.className ?? '')}
      style={{
        padding: padding ?? 30,
        width: props.width ?? 'auto',
        height: props.height ?? 'auto',
        display: props.hidden ? 'none' : 'inherit',
        backgroundColor: props.backgroundColor ?? 'white',
      }}
    >
      {props.children}
    </div>
  );
}
