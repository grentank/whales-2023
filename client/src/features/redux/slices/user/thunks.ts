import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { BackendUser } from '../../../../types/user/user';
import type { LoginForm } from '../../../../types/user/forms';

export const loginUserThunk = createAsyncThunk<BackendUser, LoginForm>(
  'user/loginUserThunk',
  async (formData) => {
    const response = await axios.post<BackendUser>('/auth/login', formData);
    return response.data;
  },
);

export const checkUserThunk = createAsyncThunk<BackendUser>('user/checkUserThunk', async () =>
  axios<BackendUser>('/auth/check').then((res) => res.data),
);

export const logoutUserThunk = createAsyncThunk('user/logoutUserThunk', async () =>
  axios<BackendUser>('/auth/logout').then(() => undefined),
);
