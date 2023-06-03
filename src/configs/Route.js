import { NewObject } from './NewObject';

export class RouteConfig extends NewObject {
  constructor(path = '', page = null, layout = 'Default', option = {}) {
    const {children, params } = option;
    const regex = /:[a-zA-Z]{1,}/g;
    super({}, { path, params, page, layout });
    const _this = this;
    _this.addPrivate('parent', null);
    _this.addPrivate(
      'getFullPath',
      function () {
        if (_this.parent) {
          let parent_path = _this.parent.path;
          return `${parent_path}/${path}` || '';
        } else {
          return path || '';
        }
      },
      false,
    );
    _this.addPrivate(
      'getAction',
      function (values) {
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
      false,
    );
    if (children) {
      Object.keys(children).forEach((key) => {
        this[key] = children[key];
        this[key].parent = this;
      });
    }
  }
}
