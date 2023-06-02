import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Fragment, memo } from "react";
import * as pages from '~/views/pages';
import * as layouts from '~/views/layouts';

const Element = memo(({ title, page, layout }) => {
    const Layout =
      layout === null ? Fragment : layouts[`${layout}Layout`] ?? Fragment;
    const Page = pages[`${page}Page`] ?? 'div';
    return (
      <Fragment>
        <Layout>
          <Page title={title} />
        </Layout>
      </Fragment>
    );
  });
export const routers = createBrowserRouter(createRoutesFromElements(

))