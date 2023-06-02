export class NewArray extends Array {
  constructor(_props, _private) {
    super();
    const _this = this;
    Array.isArray(_props) &&
      _props.forEach((value, key) => {
        _this[key] = value;
      });
    Object.defineProperty(_this, 'addPrivate', {
      enumerable: false,
      value: function (key, value,props) {
        Object.defineProperty(this, key, {
          enumerable: false,
          value: value,
          ...props
        });
      },
    });
    Object.defineProperty(_this, 'addPrivates', {
      enumerable: false,
      value: function (_props) {
        if (typeof _props === 'object') {
          Object.keys(_props).forEach((key) => {
            this.addPrivate(key, _props[key]);
          });
        }
      },
    });
    _this.addPrivates(_private);
  }
}
