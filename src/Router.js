import { Outlet, Route, Routes } from 'react-router-dom';
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
function RenderRoute({ children, title, page, layout, ...props }, key) {
  return (
    <Route
      key={key}
      element={<Element title={title} page={page} layout={layout} />}
      {...props}
    >
      {children.map((route, index) => RenderRoute(route, index))}
    </Route>
  );
}
export default function RouterComponent() {
  const routers = useMemo(() => {
    const rs = Controller.map((route, index) => RenderRoute(route, index));
    console.log('routers:',rs);
    return rs;
  }, []);
  return <Routes>{routers}</Routes>;
}
//createBrowserRouter(createRoutesFromElements())
