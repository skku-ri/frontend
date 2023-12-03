export type ButtonVariant = 'primary' | 'secondary';

export function Button(props: {
  children: React.ReactNode;
  style?: ButtonVariant;
  fontSize?: number | string;
  width?: number | string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={props.onClick}
      style={{
        fontFamily: 'Jalnan',
        fontSize: props.fontSize ?? 38,
        textAlign: 'center',
        letterSpacing: 1.5,
        border: '1px solid var(--main-gray)',
        borderRadius: 'calc(1em + 10px)',
        padding: '10px 20px',
        width: props.width ?? '100%',
        cursor: 'pointer',
        color: props.style === 'primary' ? 'white' : 'var(--main-gray)',
        backgroundColor:
          props.style === 'primary' ? 'var(--main-orange)' : 'white',
      }}
    >
      {props.children}
    </button>
  );
}
