export class Property<T> {
  defaultValue: T;
  displayName?: string;
  validate?: Function;
  setter?: Function;
  getter?: Function;
  readonly config: Function = function (callback: Function) {
    callback && callback(this);
    return this;
  };
  constructor(
    defaultValue: T,
    displayName?: string,
    validate?: Function,
    getter?: Function,
    setter?: Function,
  ) {
    const _this = this;
    _this.defaultValue = defaultValue;
    _this.displayName = displayName;
    _this.validate = validate;

    _this.setter =
      setter ||
      function (_value: T) {
        return _value;
      };
    _this.getter =
      getter ||
      function (_value) {
        return _value;
      };
  }
}

export class EmailProp extends Property<string> {
  constructor(defaultValue: string, displayName?: string, validate?: Function) {
    function _getter(value) {}
    function _setter(value) {}
    function _validate(value, values) {
      return validate && validate(value, values);
    }
    super(defaultValue, displayName, _validate, _getter, _setter);
  }
}
export class PhoneProp extends Property<string> {
  constructor(defaultValue: string, displayName?: string, validate?: Function) {
    function _getter(value) {}
    function _setter(value) {}
    function _validate(value, values) {
      return validate && validate(value, values);
    }
    super(defaultValue, displayName, _validate, _getter, _setter);
  }
}
export class PasswordProp extends Property<string> {
  constructor(defaultValue: string, displayName?: string, validate?: Function) {
    function _getter(value) {}
    function _setter(value) {}
    function _validate(value, values) {
      return validate && validate(value, values);
    }
    super(defaultValue, displayName, _validate, _getter, _setter);
  }
}
export class StringProp extends Property<string> {
  constructor(defaultValue: string, displayName?: string, validate?: Function) {
    function _getter(value) {}
    function _setter(value) {}
    function _validate(value, values) {
      return validate && validate(value, values);
    }
    super(defaultValue, displayName, _validate, _getter, _setter);
  }
}
export class NumberProp extends Property<number> {
  constructor(defaultValue: number, displayName?: string, validate?: Function) {
    function _getter(value) {}
    function _setter(value) {}
    function _validate(value, values) {
      return validate && validate(value, values);
    }
    super(defaultValue, displayName, _validate, _getter, _setter);
  }
}
export class BooleanProp extends Property<boolean> {
  constructor(
    defaultValue: boolean,
    displayName?: string,
    validate?: Function,
  ) {
    function _getter(value) {}
    function _setter(value) {}
    function _validate(value, values) {
      return validate && validate(value, values);
    }
    super(defaultValue, displayName, _validate, _getter, _setter);
  }
}
