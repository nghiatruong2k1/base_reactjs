import { RouteConfig } from '~/configs/Route.ts';
import { NewObject } from '~/configs/NewObject.ts';

export const Controller = new NewObject({
  home: new RouteConfig('', 'Home'),
  auth: new RouteConfig('auth', null, null, {
    children: {
      signin: new RouteConfig('singin', 'Signin'),
      signup:new RouteConfig('singsignupin', 'Signup'),
      "forget-password": new RouteConfig('forget-password', 'ForgetPassword'),
    },
  }),
  notfound: new RouteConfig('*', 'NotFound', null),
});
export const UpdateController = new NewObject({
  update: new RouteConfig('*', 'Update', null),
});
export const TestController = new NewObject({
  component: new RouteConfig('*', 'Component', null),
});