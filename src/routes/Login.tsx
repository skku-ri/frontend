import { useNavigate } from 'react-router-dom';

import '../App.css';
import { useAppDispatch } from '../app/hooks';
import {
  Button,
  Card,
  Column,
  Grid,
  Padding,
  Row,
  SizedBox,
  TextInput,
} from '../components';
import { login } from '../models/user/userSlice';

export function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Column align='center'>
      <SizedBox height={80} />
      <Card>
        <Grid columns={['14em', 'auto']} className='App-login-grid'>
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
          <Button
            style='secondary'
            onClick={() => {
              dispatch(login());
              navigate('/');
            }}
          >
            로그인
          </Button>
        </Padding>
      </Row>
    </Column>
  );
}
