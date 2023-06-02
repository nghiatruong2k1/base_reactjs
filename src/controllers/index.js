import { RouteConfig } from '~/configs/Route';
import { NewObject } from '~/configs/NewObject';

export const Controller = new NewObject({
  home: new RouteConfig('Home', '', 'Home'),
  product: new RouteConfig('Product', 'product', null, {
    children: {
      detail: new RouteConfig('', ':alias', 'ProductDetail'),
    },
  }),
  notfound: new RouteConfig('404', '*', 'NotFound'),
});
