import '../App.css';
import {
  Button,
  Card,
  Grid,
  Logo,
  Padding,
  Row,
  SizedBox,
  TextInput,
} from '../components';

export function Login() {
  return (
    <>
      <Logo />
      <SizedBox height={40} />
      <Card>
        <Grid columns={['14em', 'auto']} className='App-login-grid'>
          <h3>FULL NAME</h3>
          <TextInput />
          <h3>ID</h3>
          <TextInput />
          <h3>PASSWORD</h3>
          <TextInput type='password' />
        </Grid>
      </Card>
      <SizedBox height={32} />
      <Row>
        <Padding>
          <Button style='primary' onClick={() => console.log('clicked')}>
            회원가입
          </Button>
        </Padding>
        <Padding>
          <Button style='secondary' onClick={() => console.log('clicked')}>
            로그인
          </Button>
        </Padding>
      </Row>
    </>
  );
}
