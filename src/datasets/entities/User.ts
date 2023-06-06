import {
  EmailProp,
  PhoneProp,
  PasswordProp,
  StringProp,
} from '~/configs/Props';
export const UserEntityProps = {
  Email: new EmailProp('', 'Email'),
  Password: new PasswordProp('', 'Password'),
  Username: new StringProp('', 'Username'),
  Phone: new PhoneProp('', 'Phone'),
  Address: new StringProp('', 'Address'),
};
