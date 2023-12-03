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
      nickname: request.name,
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
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=password&username=${email}&password=${password}`,
  });
  return response.access_token;
}

async function getUserInfo(accessToken: string): Promise<User> {
  const response = await API.fetch<{
    email: string;
    nickname: string;
    department: string;
    student_number: string;
    phone_num: string;
  }>('/user/profile', {
    method: 'GET',
    accessToken,
  });
  return {
    email: response.email,
    name: response.nickname,
    department: response.department,
    studentId: response.student_number,
    phoneNumber: response.phone_num,
  };
}

export default { register, login, getUserInfo };
