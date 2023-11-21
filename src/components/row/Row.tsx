export function Row(props: {
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: props.align ?? 'stretch',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </div>
  );
}
