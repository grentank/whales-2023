import type { UserActionsType, UserContextType } from '../../types/contexts/userContext';

export default function userReducer(
  state: UserContextType,
  action: UserActionsType,
): UserContextType {
  const { type } = action;
  switch (type) {
    case 'SET_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return { status: 'empty' };
    case 'CHANGE_USER_NAME':
      return state.status === 'loaded' ? { ...state, name: action.payload } : state;
    default:
      return state;
  }
}
