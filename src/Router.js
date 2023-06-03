import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Fragment, memo, useEffect, useMemo } from 'react';
import * as pages from '~/views/pages';
import * as layouts from '~/views/layouts';
import { Controller } from './controllers';

const Element = memo(({ title, page, layout }) => {
  const Layout =
    layout === null ? Fragment : layouts[`${layout}Layout`] ?? Fragment;
  const Page = pages[`${page}Page`] ?? Outlet;
  useEffect(() => {
    console.log({ Layout, Page });
  }, []);
  return (
    <Fragment>
      <Layout>
        <Page title={title} />
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

function RouterComponent({ Root }) {
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
