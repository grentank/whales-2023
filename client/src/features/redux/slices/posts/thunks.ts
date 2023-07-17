import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { PostType } from '../../../../types/post/post';
import type { PostForm } from '../../../../types/post/forms';

export const loadAllPostsThunk = createAsyncThunk<PostType[]>(
  'posts/loadAllPostsThunk',
  async () => {
    const response = await axios<PostType[]>('/posts/');
    return response.data;
  },
);

export const addNewPostThunk = createAsyncThunk<PostType, PostForm>(
  'posts/addNewPostThunk',
  (formData) => axios.post<PostType>('/posts/', formData).then((res) => res.data),
);

export const editPostThunk = createAsyncThunk<PostType, { id: PostType['id']; formData: PostForm }>(
  'posts/editPostThunk',
  ({ id, formData }) => axios.put<PostType>(`/posts/${id}`, formData).then((res) => res.data),
);
