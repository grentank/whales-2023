import type { PostActionType } from '../../../../types/post/actions';
import type { PostsSliceState } from '../../../../types/post/post';

const initialState: PostsSliceState = {
  allPosts: [],
  favorites: [],
  currentPost: null,
};

export default function postsReducer(
  state: PostsSliceState = initialState,
  action: PostActionType,
): PostsSliceState {
  const { type } = action;
  switch (type) {
    case 'SET_POSTS':
      return { ...state, allPosts: action.payload };
    case 'ADD_POST':
      return { ...state, allPosts: [action.payload, ...state.allPosts] };
    case 'DELETE_POST':
      return { ...state, allPosts: state.allPosts.filter((post) => post.id !== action.payload) };
    case 'EDIT_POST':
      return {
        ...state,
        allPosts: state.allPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post,
        ),
      };
    default:
      return state;
  }
}
