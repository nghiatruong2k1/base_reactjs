import { RouteConfig } from '~/configs/Route.ts';
import { NewObject } from '~/configs/NewObject.ts';

export const Controller = new NewObject({
  home: new RouteConfig('', 'Home'),
  product: new RouteConfig('product', null, null, {
    children: {
      detail: new RouteConfig(':alias', {
        title: 'Product Detail',
        page: 'ProductDetail',
      }),
    },
  }),
  notfound: new RouteConfig('*', 'NotFound', null),
});
