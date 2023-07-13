import type { BackendUser } from '../user/user';

export type PostType = {
  id: number;
  title: string;
  body: string;
  authorId: number;
  User: BackendUser;
  createdAt: Date;
};

export type PostsSliceState = {
  allPosts: PostType[];
  favorites: PostType[];
  currentPost: PostType | null;
};

export type PostFormType = {
    title: string;
    body: string;
}