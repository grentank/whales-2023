import axios from 'axios';
import type { PostFormType, PostType } from '../../../../types/post/post';
import type { AppThunk } from '../../store';

export const loadPostsThunk: AppThunk = () => async (dispatch) => {
  try {
    const response = await axios<PostType[]>('/posts');
    if (response.status === 200) {
      dispatch({ type: 'SET_POSTS', payload: response.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deletePostThunk: AppThunk<PostType['id']> = (postId) => (dispatch) => {
  axios
    .delete(`/posts/${postId}`)
    .then(() => dispatch({ type: 'DELETE_POST', payload: postId }))
    .catch(() => dispatch({ type: 'DELETE_ERROR' }));
};

export const addPostThunk: AppThunk<PostFormType> = (formData) => (dispatch) => {
  axios
    .post<PostType>('/posts', formData)
    .then((res) => dispatch({ type: 'ADD_POST', payload: res.data }))
    .catch(() => dispatch({ type: 'ADD_ERROR' }));
};
