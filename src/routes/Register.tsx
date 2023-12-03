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
import { RegisterRequest } from '../models/user/userAPI';
import { registerAsync } from '../models/user/userSlice';

export function Register() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const request: RegisterRequest = {
    email: '',
    password: '',
    name: '',
    department: '',
    studentId: '',
    phoneNumber: '',
  };

  return (
    <Column align='center'>
      <SizedBox height={80} />
      <Card>
        <Grid columns={['14em', 'auto']} className='App-login-grid'>
          <h3>EMAIL</h3>
          <TextInput
            onChange={(text) => {
              request.email = text;
            }}
          />
          <h3>PASSWORD</h3>
          <TextInput
            type='password'
            onChange={(text) => {
              request.password = text;
            }}
          />
          <h3>NICKNAME</h3>
          <TextInput
            onChange={(text) => {
              request.name = text;
            }}
          />
          <h3>DEPARTMENT</h3>
          <TextInput
            onChange={(text) => {
              request.department = text;
            }}
          />
          <h3>STUDENT NUMBER</h3>
          <TextInput
            onChange={(text) => {
              request.studentId = text;
            }}
          />
        </Grid>
      </Card>
      <SizedBox height={32} />
      <Row>
        <Padding>
          <Button
            style='secondary'
            onClick={() => {
              dispatch(registerAsync(request)).then((result) => {
                if (result.payload) {
                  navigate('/');
                }
              });
            }}
          >
            회원가입
          </Button>
        </Padding>
      </Row>
    </Column>
  );
}
