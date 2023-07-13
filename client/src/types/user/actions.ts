import type { UserType } from './user';

export type UserActionsType =
  | { type: 'SET_USER'; payload: UserType }
  | { type: 'LOGOUT_USER' }
  | { type: 'CHANGE_USER_NAME'; payload: string };
