export function Column(props: {
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: props.align ?? 'stretch',
        justifyContent: 'center',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}
