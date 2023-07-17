export type BackendUser = {
  id: number;
  email: string;
  name: string;
};

export type LoggedUser = BackendUser & {
  status: 'logged';
};

export type UserType = LoggedUser | { status: 'guest' } | { status: 'fetching' };
