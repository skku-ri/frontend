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
  async (request: RegisterRequest) => {
    try {
      await userAPI.register(request);
      const accessToken = await userAPI.login(request.email, request.password);
      const user = await userAPI.getUserInfo(accessToken);
      return user;
    } catch (e) {
      return null;
    }
  },
);

export const loginAsync = createAsyncThunk(
  'user/login',
  async (request: { email: string; password: string }) => {
    try {
      const accessToken = await userAPI.login(request.email, request.password);
      const user = await userAPI.getUserInfo(accessToken);
      return [accessToken, user] as const;
    } catch (e) {
      return null;
    }
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
          if (action.payload) {
            const [accessToken, user] = action.payload;
            state.accessToken = accessToken;
            state.user = user;
          }
        },
      })
      .addCase(registerAsync, {
        idle: (state, action) => {
          if (action.payload) {
            state.user = action.payload;
          }
        },
      });
  },
});

export const { logout } = userSlice.actions;

export const selectIsLogined = (state: RootState) => state.user.user !== null;

export const selectUserActionStatus = (state: RootState) => state.user.status;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
