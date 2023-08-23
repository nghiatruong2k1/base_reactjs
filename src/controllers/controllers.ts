import { RouteConfig } from '~/configs/Route.ts';
import { NewObject } from '~/configs/NewObject.ts';

export const Controller = new NewObject({
  Home: new RouteConfig('', 'Home', 'Default'),
  Images: new RouteConfig('Images', 'Images', 'Default'),
  Posts: new RouteConfig('Posts', 'Posts', 'Default'),
  Articles: new RouteConfig('Articles', 'Articles', 'Default'),
  Tag: new RouteConfig('Tag/:tag', 'Tag', 'Default'),
  Models: new RouteConfig('Models/:page', 'Models', 'Default', {
    params: { page: 1 },
  }),
  Model: new RouteConfig('Model/:id/:version?', 'Model', 'Detail'),
  User: new RouteConfig('User/:username', 'UserCheck', 'User', {
    children: {
      index: new RouteConfig('', 'User'),
      Models: new RouteConfig('Models/:page', 'UserModels', 'User', {
        params: { page: 1 },
      }),
    },
  }),
  Auth: new RouteConfig('Auth', null, null, {
    children: {
      Signin: new RouteConfig('Singin', 'Signin'),
      Signup: new RouteConfig('Signup', 'Signup'),
      ForgetPassword: new RouteConfig('Forget-password', 'ForgetPassword'),
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

