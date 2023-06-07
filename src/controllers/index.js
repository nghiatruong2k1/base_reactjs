import { RouteConfig } from '~/configs/Route.ts';
import { NewObject } from '~/configs/NewObject.ts';

export const Controller = new NewObject({
  Home: new RouteConfig('', 'Home'),
  auth: new RouteConfig('auth', null, null, {
    children: {
      Signin: new RouteConfig('singin', 'Signin'),
      Signup: new RouteConfig('singsignupin', 'Signup'),
      ForgetPassword: new RouteConfig('forget-password', 'ForgetPassword'),
    },
  }),
  NotFound: new RouteConfig('*', 'NotFound', null),
});
export const UpdateController = new NewObject({
  Update: new RouteConfig('*', 'Update', null),
});
export const TestController = new NewObject({
  Test: new RouteConfig('*', 'Test', null),
});
