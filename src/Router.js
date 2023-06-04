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
import { Controller } from './controllers';

const Element = memo(({ title, page, layout }) => {
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

function RouterComponent() {
  const routers = useMemo(() => {
    console.log(Controller);
    return createBrowserRouter(
      createRoutesFromElements(
        Controller.map((route, index) => RenderRoute(route, index)),
      ),
    );
  }, []);
  return <RouterProvider router={routers} />;
}
export default memo(RouterComponent);
//createBrowserRouter(createRoutesFromElements())
