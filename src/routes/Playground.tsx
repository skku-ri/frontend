import { Button } from '../components';

export function Playground() {
  return (
    <div>
      <h1>Playground</h1>
      <h2>Button</h2>
      <Button style='primary' onClick={() => console.log('clicked')}>
        Click me
      </Button>
      <Button onClick={() => console.log('clicked')}>Click me</Button>
    </div>
  );
}
