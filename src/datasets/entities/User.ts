import {
  EmailProp,
  PhoneProp,
  PasswordProp,
  StringProp,
  Properties,
} from '~/configs/Props.ts';

export const UserEntityProps = {
  Email: new EmailProp('', 'Email'),
  Password: new PasswordProp('', 'Password'),
  Username: new StringProp('', 'Username'),
  Phone: new PhoneProp('', 'Phone'),
  Address: new StringProp('', 'Address'),
};
export type UserEntityType = {
  [P in keyof typeof UserEntityProps]?: (typeof UserEntityProps)[P]['defaultValue'];
};
export class UserEntity implements UserEntityType {
  constructor(props: UserEntityType | null) {
    const _this = this;
    Object.keys(UserEntityProps).forEach((key) => {
      _this[key] = props && props[key] || UserEntityProps[key].defaultValue;
    });
  }
}
