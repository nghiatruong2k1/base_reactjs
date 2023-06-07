import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Fragment, memo, useEffect, useMemo } from 'react';
import * as pages from '~/views/pages';
import * as layouts from '~/views/layouts';
import { Controller, TestController, UpdateController } from './controllers';

const Element = memo(({ page, layout }) => {
  let Page = Outlet;
  let Layout = Fragment;
  if (page !== null) {
    Page = pages[`${page}Page`] ?? 'div';
    if (layout !== null) {
      Layout =
        layouts[`${layout}Layout`] ?? layouts['DefaultLayout'] ?? Fragment;
    }
  }
  useEffect(() => {
    console.log({ Layout, Page });
  }, []);
  return (
    <Fragment>
      <Layout>
        <Page />
      </Layout>
    </Fragment>
  );
});
function RenderRoute(props, key) {
  return (
    <Route
      key={key}
      path={props.path}
      loader={pages[`${props.page}Loader`]}
      element={<Element page={props.page} layout={props.layout} />}
    >
      {props.map((route, index) => RenderRoute(route, index))}
    </Route>
  );
}
function createRouters(controller) {
  return controller.map((route, index) => RenderRoute(route, index));
}
function RouterComponent() {
  const routers = useMemo(() => {
    console.log(Controller, process.env);
    if (process.env.REACT_APP_MODE === 'Test') {
      return createBrowserRouter(
        createRoutesFromElements(createRouters(TestController)),
      );
    } else if (process.env.REACT_APP_MODE === 'Update') {
      return createBrowserRouter(
        createRoutesFromElements(createRouters(UpdateController)),
      );
    } else {
      return createBrowserRouter(
        createRoutesFromElements(createRouters(Controller)),
      );
    }
  }, []);
  return <RouterProvider router={routers} />;
}
export default memo(RouterComponent);
//createBrowserRouter(createRoutesFromElements())
