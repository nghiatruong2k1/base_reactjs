import { UserEntityProps } from '../entities/User';

export const AuthSiginModelProps = {
  Email: UserEntityProps.Email,
  Password: UserEntityProps.Password,
};
export const AuthSigupModelProps = {
  Email: UserEntityProps.Email,
  Password: UserEntityProps.Password,
  Username: UserEntityProps.Username,
  Phone: UserEntityProps.Phone,
  Address: UserEntityProps.Address,
};
export const AuthForgetModelProps = {
  Password: UserEntityProps.Password,
};
