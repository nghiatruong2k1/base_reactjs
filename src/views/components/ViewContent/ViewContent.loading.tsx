import { Fragment, ReactNode, memo } from 'react';
//---------//
import styles from './ViewContent.module.css';

export interface Props {}

function ViewContentLoadingComponent({}: Props) {
  return <Fragment>Loading...</Fragment>;
}
export default memo(ViewContentLoadingComponent);
