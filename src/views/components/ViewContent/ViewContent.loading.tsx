import { Fragment, ElementType, memo } from 'react';
//---------//
import styles from './ViewContent.module.css';
import { Box, Skeleton } from '@mui/material';

interface Props {}

function ViewContentLoadingComponent({}: Props) {
  return <Skeleton className="fullview"></Skeleton>;
}
export default memo(ViewContentLoadingComponent);
