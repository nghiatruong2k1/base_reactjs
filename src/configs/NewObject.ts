export class NewObject extends Object {
  readonly addPrivate: Function;
  readonly addPrivates: Function;
  readonly map: Function;
  readonly forEach: Function;
  readonly reduce: Function;
  readonly first: Function;
  readonly firstKey: Function;
  readonly last: Function;
  readonly lastKey: Function;
  constructor(
    _public: { [key: string]: any } = {},
    _private: { [key: string]: any } = {},
  ) {
    super();
    const _this = this;
    Object.defineProperty(_this, 'firstKey', {
      enumerable: false,
      value: function () {
        return Object.keys(this)[0];
      },
    });
    Object.defineProperty(_this, 'first', {
      enumerable: false,
      value: function () {
        const key = this.firstKey();
        return this[key];
      },
    });
    Object.defineProperty(_this, 'lastKey', {
      enumerable: false,
      value: function () {
        const keys = Object.keys(this);
        return keys[keys.length - 1];
      },
    });
    Object.defineProperty(_this, 'last', {
      enumerable: false,
      value: function () {
        const key = this.lastKey();
        return this[key];
      },
    });
    Object.defineProperty(_this, 'map', {
      enumerable: false,
      value: function (callback: Function) {
        const __this = this;
        return Object.keys(__this).map((key) => {
          /** value:any,
           * key:string,
           * this:object
           * */
          return callback(__this[key], key, __this);
        });
      },
    });
    Object.defineProperty(_this, 'forEach', {
      enumerable: false,
      value: function (callback: Function) {
        const __this = this;
        return Object.keys(__this).forEach((key) => {
          /** value:any,
           * key:string,
           * this:object
           * */
          callback(__this[key], key, __this);
        });
      },
    });
    Object.defineProperty(_this, 'reduce', {
      enumerable: false,
      value: function (callback: Function, result) {
        const __this = this;
        return Object.keys(__this).reduce((rs, key) => {
          /** value:any,
           * key:string,
           * this:object
           * */
          return callback(rs, __this[key], key, __this);
        }, result);
      },
    });
    Object.keys(_public).forEach((key) => {
      _this[key] = _public[key];
    });
    Object.defineProperty(_this, 'addPrivate', {
      enumerable: false,
      value: function (key, value, writable = true) {
        Object.defineProperty(this, key, {
          enumerable: false,
          writable,
          value: value,
        });
      },
    });
    Object.defineProperty(_this, 'addPrivates', {
      enumerable: false,
      value: function (_props) {
        Object.keys(_props).forEach((key) => {
          _this.addPrivate(key, _props[key]);
        });
      },
    });
    _this.addPrivates(_private);
  }
}
