export class Property<T> {
  defaultValue?: T;
  displayName?: string | null;
  validate?: any;
  getter?: Function;
  setter?: Function;
  readonly config = function (callback: Function) {
    callback(this);
    return this;
  };
  constructor(
    _defaultValue?: T,
    _displayName?: string | null,
    _validate?: any,
    _getter?: Function,
    _setter?: Function,
  ) {
    const _this = this;
    _this.defaultValue = _defaultValue;
    _this.displayName = _displayName;
    _this.validate = _validate;
    _this.setter =
      _setter ||
      function (_value: T) {
        return _value;
      };
    _this.getter =
      _getter ||
      function (_value) {
        return _value;
      };
  }
}
type email = string & { __brand: 'email' };
export class EmailProp extends Property<email | null> {
  constructor(
    _defaultValue?: email | null,
    _displayName?: string | null,
    _validate?: any,
    _getter?: Function,
    _setter?: Function,
  ) {
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function isEmail(_email: string): _email is email {
      return EmailRegex.test(_email);
    }
    super(_defaultValue, _displayName, _validate, _getter, _setter);
  }
}
type phone = string & { __brand: 'phone' };
export class PhoneProp extends Property<phone | null> {
  constructor(
    _defaultValue?: phone | null,
    _displayName?: string | null,
    _validate?: any,
    _getter?: Function,
    _setter?: Function,
  ) {
    const PhoneRegex = /^[0-9]{10}$/;
    function isPhone(_phone: string): _phone is phone {
      return PhoneRegex.test(_phone);
    }
    super(_defaultValue, _displayName, _validate, _getter, _setter);
  }
}
export class PasswordProp extends Property<string | null> {
  constructor(
    _defaultValue?: string | null,
    _displayName?: string | null,
    _validate?: any,
    _getter?: Function,
    _setter?: Function,
  ) {
    super(_defaultValue, _displayName, _validate, _getter, _setter);
  }
}
export class StringProp extends Property<string | null> {
  constructor(
    _defaultValue?: string | null,
    _displayName?: string | null,
    _validate?: any,
    _getter?: Function,
    _setter?: Function,
  ) {
    super(_defaultValue, _displayName, _validate, _getter, _setter);
  }
}
export class NumberProp extends Property<number | null> {
  constructor(
    _defaultValue?: number | null,
    _displayName?: string | null,
    _validate?: any,
    _getter?: Function,
    _setter?: Function,
  ) {
    super(_defaultValue, _displayName, _validate, _getter, _setter);
  }
}
export class BooleanProp extends Property<boolean> {
  constructor(
    _defaultValue?: boolean,
    _displayName?: string | null,
    _validate?: any,
    _getter?: Function,
    _setter?: Function,
  ) {
    super(_defaultValue, _displayName, _validate, _getter, _setter);
  }
}
export class DatetimeProp extends Property<Date | null> {
  constructor(
    _defaultValue?: Date,
    _displayName?: string | null,
    _validate?: any,
    _getter?: Function,
    _setter?: Function,
  ) {
    super(_defaultValue, _displayName, _validate, _getter, _setter);
  }
}
export class ObjectProp extends Property<Object | null> {
  constructor(
    _defaultValue?: Object | null,
    _displayName?: string | null,
    _validate?: any,
    _getter?: Function,
    _setter?: Function,
  ) {
    super(_defaultValue, _displayName, _validate, _getter, _setter);
  }
}
export class ArrayProp<T> extends Property<T[] | null> {
  constructor(
    _defaultValue?: T[] | null,
    _displayName?: string | null,
    _validate?: any,
    _getter?: Function,
    _setter?: Function,
  ) {
    super(_defaultValue, _displayName, _validate, _getter, _setter);
  }
}
