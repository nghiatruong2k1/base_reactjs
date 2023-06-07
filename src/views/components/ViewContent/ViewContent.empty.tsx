import { Fragment, ReactNode, memo } from 'react';
//---------//
import styles from './ViewContent.module.css';

export interface Props {}

function ViewContentEmptyComponent({}: Props) {
  return <Fragment>Empty...</Fragment>;
}
export default memo(ViewContentEmptyComponent);
