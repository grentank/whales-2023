import type { BackendUser } from '../user/user';

export type PostType = {
  id: number;
  title: string;
  body: string;
  authorId: number;
  author: BackendUser;
};

export type PostsSliceState = {
  allPosts: PostType[];
  currentPost: PostType | null;
  modalIsOpened: boolean;
};
