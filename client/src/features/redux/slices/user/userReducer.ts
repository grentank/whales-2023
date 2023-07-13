import type { UserActionsType } from '../../../../types/user/actions';
import type { UserType } from '../../../../types/user/user';

const initState: UserType = { status: 'fetching' };

export default function userReducer(
  state: UserType = initState,
  action: UserActionsType,
): UserType {
  const { type } = action;
  switch (type) {
    case 'SET_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return { status: 'empty' };
    case 'CHANGE_USER_NAME':
      return state.status === 'logged' ? { ...state, name: action.payload } : state;
    default:
      return state;
  }
}
