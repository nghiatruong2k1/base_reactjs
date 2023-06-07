import { Fragment, ReactNode, memo } from 'react';
//---------//
import styles from './ViewContent.module.css';
import ViewContentLoading from './ViewContent.loading.tsx';
import ViewContentEmpty from './ViewContent.empty.tsx';

export interface Props {
  children: ReactNode;
  loading: boolean;
  loadview: ReactNode;
  empty: boolean;
  emptyview: ReactNode;
}

function ViewContentComponent({
  children,
  loading,
  loadview,
  empty,
  emptyview,
}: Props) {
  return (
    <Fragment>
      {(loading && (loadview || <ViewContentLoading />)) ||
        (empty && (emptyview || <ViewContentEmpty />)) ||
        children}
    </Fragment>
  );
}
export default memo(ViewContentComponent);
