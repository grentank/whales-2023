export type BackendUser = {
  id: number;
  email: string;
  name: string;
};

export type UserType =
  | (BackendUser & { status: 'logged' })
  | { status: 'empty' }
  | { status: 'fetching' };

export type UserSigninForm = {
  email: string;
  password: string;
  name?: string;
};
