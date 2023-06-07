import { NewObject } from './NewObject.ts';

interface OptionFace {
  children: Array<RouteConfig> | [];
  params: Object | {};
}

export class RouteConfig extends NewObject {
  path: string | '' = '';
  page: string | null = null;
  layout: string | null = null;
  parent: RouteConfig | null = null;
  getFullPath: Function;

  constructor(
    path: string | '',
    page: string | null,
    layout: string | null,
    option: OptionFace = {
      children: [],
      params: {},
    },
  ) {
    const { children, params } = option;
    const regex = /:[a-zA-Z]{1,}/g;
    const parent = null;
    function getFullPath() {
      if (_this.parent) {
        let parent_path = _this.parent.path;
        return `${parent_path}/${path}` || '';
      } else {
        return path || '';
      }
    }
    function getAction(values) {
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
    }
    super({}, {});
    const _this = this;
    _this.addPrivates({
      path,
      params,
      page,
      layout,
      parent,
      getFullPath,
      getAction,
    });
    if (children) {
      Object.keys(children).forEach((key) => {
        this[key] = children[key];
        this[key].parent = this;
      });
    }
  }
}
