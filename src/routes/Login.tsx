import { useNavigate } from 'react-router-dom';

import '../App.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
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
import { loginAsync, selectUserActionStatus } from '../models/user/userSlice';

export function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginStatus = useAppSelector(selectUserActionStatus);

  let email = '';
  let password = '';

  return (
    <Column align='center'>
      <SizedBox height={80} />
      <Card>
        <Grid columns={['14em', 'auto']} className='App-login-grid'>
          <h3>EMAIL</h3>
          <TextInput
            onChange={(text) => {
              email = text;
            }}
          />
          <h3>PASSWORD</h3>
          <TextInput
            type='password'
            onChange={(text) => {
              password = text;
            }}
          />
        </Grid>
      </Card>
      <SizedBox height={32} />
      <Row>
        <Padding>
          <Button style='primary' onClick={() => navigate('/register')}>
            회원가입
          </Button>
        </Padding>
        <Padding>
          <Button
            style='secondary'
            onClick={() => {
              dispatch(loginAsync({ email, password }));
              if (loginStatus === 'idle') {
                navigate('/');
              }
            }}
          >
            로그인
          </Button>
        </Padding>
      </Row>
    </Column>
  );
}
