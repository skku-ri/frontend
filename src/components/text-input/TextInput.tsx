import styles from './TextInput.module.css';

export function TextInput(props: {
  type?: 'plain' | 'password';
  onChange?: (value: string) => void;
}) {
  return (
    <div className={styles.textInputContainer}>
      <input
        className={styles.textInput}
        type={props.type ?? 'plain'}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </div>
  );
}
