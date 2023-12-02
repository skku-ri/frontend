import { API } from '../../app/api';

import { User } from './user';

export type RegisterRequest = {
  email: string;
  password: string;
  name: string;
  department: string;
  studentId: string;
  phoneNumber: string;
};

async function register(request: RegisterRequest): Promise<User> {
  await API.fetch<any>('/auth/create', {
    method: 'POST',
    data: {
      email: request.email,
      password: request.password,
      name: request.name,
      department: request.department,
      student_number: request.studentId,
      phone_num: request.phoneNumber,
    },
  });
  return {
    email: request.email,
    name: request.name,
    department: request.department,
    studentId: request.studentId,
    phoneNumber: request.phoneNumber,
  };
}

async function login(email: string, password: string): Promise<string> {
  const response = await API.fetch<{
    access_token: string;
    token_type: string;
  }>('/auth/token', {
    method: 'POST',
    data: {
      email,
      password,
    },
  });
  return response.access_token;
}

export default { register, login };
