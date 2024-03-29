export function SizedBox({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return <div style={{ width, height }} />;
}
