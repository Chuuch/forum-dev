export interface UserProps {
  user: {
    id?: string;
    username?: string | undefined;
    email?: string;
    password?: string;
    photo?: string;
    role?: string;
    city?: string;
    profession?: string;
    lastActive?: Date;
  };
  token?: string;
}
