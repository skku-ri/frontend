import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary';

export function Button(props: {
  children: React.ReactNode;
  style?: ButtonVariant;
  onClick?: () => void;
}) {
  const { children, style, onClick } = props;
  return (
    <button
      className={`${styles.button} ${styles[style ?? 'secondary']}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
