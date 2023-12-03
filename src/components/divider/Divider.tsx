export function Divider(props: {
  color?: string;
  thickness?: number;
  length?: number;
  margin?: number;
  style?: React.CSSProperties;
  vertical?: boolean;
}) {
  const color = props.color ?? 'black';
  const thickness = props.thickness ?? 1;
  const divLength = props.length ?? 100;
  const margin = props.margin ?? 0;
  const style = props.style ?? {};

  const horizontalStyle: React.CSSProperties = {
    width: divLength,
    height: thickness,
    margin,
    backgroundColor: color,
    ...style,
  };
  const verticalStyle: React.CSSProperties = {
    width: thickness,
    height: divLength,
    margin,
    backgroundColor: color,
    ...style,
  };

  return <div style={props.vertical ? verticalStyle : horizontalStyle} />;
}
