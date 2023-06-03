import { NewObject } from './NewObject';

export class RouteConfig extends NewObject {
  /**
   * title:String,
   * path: String,
   * params:Object
   * }*/
  constructor(title, path, page, options = {}) {
    super();
    const { layout, params, children } = options;
    const regex = /:[a-zA-Z]{1,}/g;
    const _this = this;

    Object.defineProperty(_this, 'path', {
      enumerable: true,
      writable: false,
      value: path || '',
    });
    Object.defineProperty(_this, 'children', {
      enumerable: true,
      writable: false,
      value: new NewObject(),
    });

    Object.defineProperty(_this, 'title', {
      enumerable: true,
      writable: false,
      value: title,
    });
    Object.defineProperty(_this, 'params', {
      enumerable: false,
      writable: false,
      value: params,
    });
    Object.defineProperty(_this, 'page', {
      enumerable: true,
      writable: false,
      value: page || null,
    });
    Object.defineProperty(_this, 'layout', {
      enumerable: true,
      writable: false,
      value: layout || 'Default',
    });
    Object.defineProperty(_this, 'parent', {
      enumerable: false,
      writable: true,
      value: null,
    });
    Object.defineProperty(_this, 'getFullPath', {
      enumerable: false,
      writable: true,
      value: function () {
        if (_this.parent) {
          let parent_path = _this.parent.path;
          return `${parent_path}/${path}` || '';
        } else {
          return path || '';
        }
      },
    });
    Object.defineProperty(_this, 'getAction', {
      enumerable: false,
      writable: false,
      value: function (values) {
        if (typeof path === 'string' && path !== '*') {
          let str = `/${_this.getFullPath()}`;
          const args = str.match(regex);
          if (args && Array.isArray(args)) {
            args.forEach((arg) => {
              const key = arg.replace(':', '');
              str = str.replaceAll(
                arg,
                (values && values[key]) || params?.[key] || '',
              );
            });
          }
          return str;
        }
        return '/404';
      },
    });
    if (children) {
      Object.keys(children).forEach((key) => {
        this.children[key] = children[key];
        this.children[key].parent = this;
      });
    }
  }
}
