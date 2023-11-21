interface TextInputProps {
  type?: 'plain' | 'password';
  label?: string;
  width?: number | string;
  onChange?: (value: string) => void;
  onEnterKeyDown?: (key: string) => void;
}

export function TextInput(props: TextInputProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <input
        type={props.type}
        placeholder={props.label}
        style={{
          border: 'none',
          borderBottom: '1px solid black',
          backgroundColor: 'white',
          padding: 0,
          margin: 0,
          width: props.width ?? '15em',
          height: '1.4em',
          fontSize: '1.2em',
          fontFamily: 'Jalnan, sans-serif',
        }}
        onChange={(e) => props.onChange?.(e.currentTarget.value)}
        onKeyDown={(e) => {
          console.log('keydown', e.key, e.currentTarget.value);
          if (e.key === 'Enter') {
            props.onEnterKeyDown?.(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
      />
    </div>
  );
}
