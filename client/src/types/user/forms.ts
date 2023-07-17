export type LoginForm = {
  email: string;
  password: string;
};

export type SignUpForm = LoginForm & { name: string };
