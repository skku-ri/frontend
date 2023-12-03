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
import { loginAsync } from '../models/user/userSlice';

export function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
              dispatch(loginAsync({ email, password })).then((result) => {
                if (result.payload) {
                  navigate('/');
                }
              });
            }}
          >
            로그인
          </Button>
        </Padding>
      </Row>
    </Column>
  );
}
