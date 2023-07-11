import { NewObject } from './NewObject.ts';
import { generatePath } from 'react-router-dom';
interface OptionFace {
  children: Array<RouteConfig> | [];
  params: Object | {};
}

export class RouteConfig extends NewObject {
  path: string = '';
  page: string | null = null;
  layout: string | null = null;
  parent: RouteConfig | null = null;
  params: Object = {};
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
    const parent = null;
    function getFullPath() {
      if (_this.parent) {
        let parent_path = _this.parent.path;
        return `${parent_path}/${path}` || '';
      } else {
        return path || '';
      }
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
    });
    if (children) {
      Object.keys(children).forEach((key) => {
        this[key] = children[key];
        this[key].parent = this;
      });
    }
  }
}
export function GetAction(action: RouteConfig, params: Object = {}) {
  if (action && typeof action.path === 'string' && action.path !== '*') {
    let str = `/${action.getFullPath()}`;
    return generatePath(str, { ...action.params, ...params });
  }
  return '/404';
}
