export class NewObject extends Object {
  readonly addPrivate: Function;
  readonly addPrivates: Function;
  constructor(_public, _private) {
    super(_public);
    const _this = this;
    Object.defineProperty(_this, 'map', {
      enumerable: false,
      value: function (callback) {
        return Object.keys(this).map((key) => {
          /** value:any,
           * key:string,
           * this:object
           * */
          return callback(this[key], key, this);
        });
      },
    });
    Object.defineProperty(_this, 'forEach', {
      enumerable: false,
      value: function (callback) {
        return Object.keys(this).forEach((key) => {
          /** value:any,
           * key:string,
           * this:object
           * */
          callback(this[key], key, this);
        });
      },
    });
    Object.defineProperty(_this, 'reduce', {
      enumerable: false,
      value: function (callback, result) {
        return Object.keys(this).reduce((rs, key) => {
          /** value:any,
           * key:string,
           * this:object
           * */
          return callback(rs, this[key], key, this);
        }, result);
      },
    });
    if (typeof _public === 'object') {
      Object.keys(_public).forEach((key) => {
        _this[key] = _public[key];
      });
    }
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
        if (typeof _props === 'object') {
          Object.keys(_props).forEach((key) => {
            _this.addPrivate(key, _props[key]);
          });
        }
      },
    });
    _this.addPrivates(_private);
  }
}
