export interface UserProps {
  user: {
    id?: string;
    username?: string | undefined;
    email?: string;
    password?: string;
    photo?: string;
  };
  token?: string;
}
