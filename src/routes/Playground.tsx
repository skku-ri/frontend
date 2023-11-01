import { Button, Card, Logo } from '../components';

export function Playground() {
  return (
    <div>
      <Logo />
      <h1>Playground</h1>
      <h2>Button</h2>
      <Button style='primary' onClick={() => console.log('clicked')}>
        Click me
      </Button>
      <Button style='secondary' onClick={() => console.log('clicked')}>
        Click me
      </Button>
      <h2>Header</h2>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <h2>Card</h2>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iure
        perferendis consequuntur esse enim doloribus autem in similique cumque
        sed modi, iusto aut quisquam ipsum itaque nulla quia debitis dolorum!
      </Card>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iure
        perferendis consequuntur esse enim doloribus autem in similique cumque
        sed modi, iusto aut quisquam ipsum itaque nulla quia debitis dolorum!
      </Card>
    </div>
  );
}
