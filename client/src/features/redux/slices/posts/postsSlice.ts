import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PostType, PostsSliceState } from '../../../../types/post/post';
import { addNewPostThunk, editPostThunk, loadAllPostsThunk } from './thunks';

// Define the initial state using that type
const initialState: PostsSliceState = {
  allPosts: [],
  currentPost: null,
  modalIsOpened: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {
      state.allPosts.unshift(action.payload);
    },
    setAllPosts: (state, action: PayloadAction<PostType[]>) => {
      state.allPosts = action.payload;
    },
    openModal: (state) => {
      state.modalIsOpened = true;
    },
    closeModal: (state) => {
      state.modalIsOpened = false;
      state.currentPost = null;
    },
    setCurrentPost: (state, action: PayloadAction<PostType>) => {
      state.currentPost = action.payload;
      state.modalIsOpened = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadAllPostsThunk.fulfilled, (state, action) => {
      state.allPosts = action.payload;
    });
    builder.addCase(addNewPostThunk.fulfilled, (state, action) => {
      state.allPosts.unshift(action.payload);
      state.modalIsOpened = false;
    });
    builder.addCase(editPostThunk.fulfilled, (state, action) => {
      const targetIndex = state.allPosts.findIndex((post) => post.id === action.payload.id);
      if (targetIndex >= 0) state.allPosts[targetIndex] = action.payload;
      state.modalIsOpened = false;
      state.currentPost = null;
    });
  },
});

export const { addPost, setAllPosts, openModal, closeModal, setCurrentPost } = postsSlice.actions;

export default postsSlice.reducer;
