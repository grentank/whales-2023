import type { UserType } from '../user';

export type UserContextType = UserType;

export type UserActionsType =
  | { type: 'SET_USER'; payload: UserType }
  | { type: 'LOGOUT_USER' }
  | { type: 'CHANGE_USER_NAME'; payload: string };

export type LoginUserHandlerType = (inputs: { email: string; password: string }) => Promise<void>;

export type SignupUserHandlerType = React.FormEventHandler<HTMLFormElement>;

export type LogoutUserHandlerType = () => void;

export type UserHandlersContextType = {
  logoutHandler: LogoutUserHandlerType;
  loginHandler: LoginUserHandlerType;
  signupHandler: SignupUserHandlerType;
};
