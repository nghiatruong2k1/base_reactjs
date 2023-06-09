import { ElementType, ReactNode, memo } from 'react';
//---------//
import styles from './ScrollArea.module.css';
import { Box } from '@mui/material';

export interface Props {
  children: ReactNode;
  component?: ElementType<any> | undefined;
}

function ScrollArea({ component, children }: Props) {
  return (
    <Box component={component ?? 'div'} className={styles.root}>
      <Box className={styles.content}>{children}</Box>
    </Box>
  );
}
export default memo(ScrollArea);
