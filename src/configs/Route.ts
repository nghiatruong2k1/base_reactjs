import { NewObject } from './NewObject.ts';
interface OptionFace {
  children?: { [key: string]: RouteConfigFace };
  params?: { [key: string]: any } | {};
}
interface RouteConfigFace {
  path: string;
  page: string | null;
  layout: string | 'Default' | 'Inherit' | null;
  parent: RouteConfig | null;
  params: OptionFace['params'];
  getFullPath: Function;
  getLayout: Function;
  getPattern: Function;
}
export class RouteConfig extends NewObject implements RouteConfigFace {
  path = '';
  page = '';
  layout = '';
  parent = null;
  params = {};
  getFullPath = () => '';
  getLayout = () => '';
  getPattern = () => '';
  constructor(
    path: string = '',
    page: string | null = '',
    layout: string | 'Default' | 'Inherit' | null = 'Inherit',
    option: OptionFace = {
      children: {},
      params: {},
    },
  ) {
    const { children, params } = option;
    const parent = null;
    function getFullPath(): string {
      if (this.parent) {
        const parent_path = this.parent.getFullPath();
        if (parent_path) {
          if (this.path) {
            return `${parent_path}/${this.path}`;
          }
          return parent_path;
        }
      }
      return this.path || '';
    }
    function getPattern(): string[] {
      return this.reduce(
        (rs, child) => {
          return [...rs, ...child.getPattern()];
        },
        [this.getFullPath()],
      );
    }
    function getLayout(): string {
      if (this.layout === 'Inherit') {
        if (this.parent) {
          return this.parent.getLayout();
        }
        return null;
      }
      return this.layout;
    }
    super({}, {});
    const _this = this;
    _this.addPrivates({
      path,
      params,
      page,
      layout,
      parent,
      getPattern,
      getLayout,
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
