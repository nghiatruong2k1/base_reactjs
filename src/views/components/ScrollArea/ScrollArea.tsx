import { ElementType, ReactNode, memo } from 'react';
//---------//
import styles from './ScrollArea.module.css';
import { Box, BoxProps } from '@mui/material';
import clsx from 'clsx';

interface Classes {
  root?: string;
  content?: string;
}
type ScrollAreaProps<P = {}, T extends ElementType<any> = 'div'> = BoxProps<
  T,
  P & {
    children: ReactNode;
    classes?: Classes;
    component?: ElementType<any> | undefined;
  }
>;
function ScrollArea({
  component = 'div',
  children,
  classes = {},
  className = '',
  ...props
}: ScrollAreaProps) {
  return (
    <Box
      component={component}
      className={clsx(styles.root, className, classes.root)}
      {...props}
    >
      <Box className={clsx(styles.content, classes.content)}>{children}</Box>
    </Box>
  );
}
export default memo(ScrollArea);
