import { createAsyncThunk } from '@reduxjs/toolkit';

import { createAppSlice } from '../../app/hooks';
import { AppStatus, RootState } from '../../app/store';

import { User } from './user';
import userAPI, { RegisterRequest } from './userAPI';

export interface UserState {
  user: User | null;
  accessToken: string | null;
  status: AppStatus;
}

const initialState: UserState = {
  user: null,
  accessToken: null,
  status: 'idle',
};

export const registerAsync = createAsyncThunk(
  'user/register',
  async (request: RegisterRequest) => await userAPI.register(request),
);

export const loginAsync = createAsyncThunk(
  'user/login',
  async (request: { email: string; password: string }) => {
    const accessToken = await userAPI.login(request.email, request.password);
    console.log(accessToken);
    const user = await userAPI.getUserInfo(accessToken);
    console.log(user);
    return [accessToken, user] as const;
  },
);

export const userSlice = createAppSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  asyncThunkReducers: (builder) => {
    builder
      .addCase(loginAsync, {
        idle: (state, action) => {
          const [accessToken, user] = action.payload;
          state.accessToken = accessToken;
          state.user = user;
        },
      })
      .addCase(registerAsync);
  },
});

export const { logout } = userSlice.actions;

export const selectIsLogined = (state: RootState) => state.user.user !== null;

export const selectUserActionStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
