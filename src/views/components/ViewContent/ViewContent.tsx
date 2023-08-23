import { Fragment, ElementType, ReactNode, memo } from 'react';
//---------//
import styles from './ViewContent.module.css';
import ViewContentLoading from './ViewContent.loading.tsx';
import ViewContentEmpty from './ViewContent.empty.tsx';

interface Props {
  component?: ElementType<any> | undefined;
  children?: ReactNode;
  loading?: boolean;
  loadView?: boolean;
  empty?: boolean;
  emptyView?: ReactNode;
}

function ViewContentComponent({
  component = Fragment,
  children,
  loading,
  loadView = true,
  empty,
  emptyView,
  ...props
}: Props) {
  if (!loading && empty) {
    return emptyView || <ViewContentEmpty component={component} {...props} />;
  }
  if (loading && loadView === true) {
    return <ViewContentLoading />;
  }
  return <Fragment>{children}</Fragment>;
}
export default memo(ViewContentComponent);
