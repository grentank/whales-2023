import React, { useEffect, useMemo, useReducer } from 'react';
import axios from 'axios';
import userReducer from './userReducer';
import type { LoginUserHandlerType, LogoutUserHandlerType, SignupUserHandlerType } from '../../types/contexts/userContext';
import type { BackendUserType } from '../../types/user';
import { UserContext, UserHandlersContext } from './userContext';

type UserContextProviderProps = {
  children: JSX.Element;
};

export default function UserContextProvider({ children }: UserContextProviderProps): JSX.Element {
  const [user, dispatch] = useReducer(userReducer, { status: 'loading' });

  useEffect(() => {
    axios<BackendUserType>('/auth/check')
      .then((res) => dispatch({ type: 'SET_USER', payload: { ...res.data, status: 'loaded' } }))
      .catch(() => dispatch({ type: 'LOGOUT_USER' }));
  }, []);

  const signupHandler: SignupUserHandlerType = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget));
    axios
      .post<BackendUserType>('/auth/signup', formData)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: 'SET_USER', payload: { ...res.data, status: 'loaded' } });
        }
      })
      .catch(console.log);
  };

  const logoutHandler: LogoutUserHandlerType = () => {
    axios('/auth/logout')
      .then(() => dispatch({ type: 'LOGOUT_USER' }))
      .catch(console.log);
  };

  const loginHandler: LoginUserHandlerType = async (input) => {
    try {
      const res = await axios.post<BackendUserType>('/auth/login', input);
      if (res.status === 200)
        dispatch({ type: 'SET_USER', payload: { ...res.data, status: 'loaded' } });
    } catch (error) {
      console.log(error);
    }
  };

  const handlersStore = useMemo(
    () => ({
      signupHandler,
      logoutHandler,
      loginHandler,
    }),
    [],
  );

  return (
    <UserContext.Provider value={user}>
      <UserHandlersContext.Provider value={handlersStore}>{children}</UserHandlersContext.Provider>
    </UserContext.Provider>
  );
}
