export type BackendUserType = {
  id: number;
  name: string;
  email: string;
};

export type UserType =
  | (BackendUserType & { status: 'loaded' })
  | { status: 'loading' }
  | { status: 'empty' };
