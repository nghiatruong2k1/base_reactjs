import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from 'react-router-dom';
import { Fragment, memo, useEffect, useMemo } from 'react';
import * as pages from '~/views/pages';
import * as layouts from '~/views/layouts';
import { Controller, TestController, UpdateController } from './controllers';

const Element = memo(({ page, layout }) => {
  let Page = Outlet;
  let State = Fragment;
  let Layout = Fragment;
  if (page !== null) {
    Page = pages[`${page}Page`] ?? Fragment;
    State = pages[`${page}State`] ?? Fragment;
    if (layout !== null) {
      Layout = layouts[`${layout}Layout`] ?? Fragment;
    }
  }
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname, {
      layout: [layout, Layout],
      page: [page, Layout],
      state:[State]
    });
  }, [Layout, State, layout, location, page]);
  return (
    <Fragment>
      <Layout>
        <State>
          <Page />
        </State>
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
  console.log(controller, process.env);
  return controller.map((route, index) => RenderRoute(route, index));
}

function RouterComponent() {
  const routers = useMemo(() => {
    let initRouters = [];
    if (process.env.NODE_ENV === 'Test') {
      initRouters = createRouters(TestController);
    } else if (process.env.NODE_ENV === 'Update') {
      initRouters = createRouters(UpdateController);
    } else {
      initRouters = createRouters(Controller);
    }
    if (initRouters.length > 0) {
      return createBrowserRouter(createRoutesFromElements(initRouters));
    }
  }, []);
  return routers && <RouterProvider router={routers} />;
}

export default memo(RouterComponent);
