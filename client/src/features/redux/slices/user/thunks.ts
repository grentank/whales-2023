import axios from 'axios';
import type { BackendUser, UserSigninForm } from '../../../../types/user/user';
import type { AppThunk } from '../../store';

export const checkUserThunk: AppThunk = () => (dispatch) => {
  axios<BackendUser>('/auth/check')
    .then((res) => dispatch({ type: 'SET_USER', payload: { ...res.data, status: 'logged' } }))
    .catch(() => dispatch({ type: 'LOGOUT_USER' }));
};

export const logoutUserThunk: AppThunk = () => (dispatch) => {
  axios('/auth/logout')
    .then(() => dispatch({ type: 'LOGOUT_USER' }))
    .catch(console.log);
};

export const loginUserThunk: AppThunk<UserSigninForm> = (formData) => (dispatch) => {
  axios
    .post<BackendUser>('/auth/login', formData)
    .then((res) => dispatch({ type: 'SET_USER', payload: { ...res.data, status: 'logged' } }))
    .catch(console.log);
};

export const signUpUserThunk: AppThunk<UserSigninForm> = (formData) => (dispatch) => {
  axios
    .post<BackendUser>('/auth/signup', formData)
    .then((res) => dispatch({ type: 'SET_USER', payload: { ...res.data, status: 'logged' } }))
    .catch(console.log);
};
