import type { PostType } from './post';

export type PostActionType =
  | { type: 'INIT' }
  | {
      type: 'SET_POSTS';
      payload: PostType[];
    }
  | { type: 'ADD_POST'; payload: PostType }
  | { type: 'DELETE_POST'; payload: PostType['id'] }
  | { type: 'EDIT_POST'; payload: PostType };
