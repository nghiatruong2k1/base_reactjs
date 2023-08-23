import { Fragment, ElementType, memo } from 'react';
//---------//
import styles from './ViewContent.module.css';
import { Box, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface Props {
  component?: ElementType<any> | undefined;
}

function ViewContentEmptyComponent({ component = 'div', ...props }: Props) {
  return (
    <Box component={component} {...props}>
      <Stack
        className={styles.root}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Typography>
          <FontAwesomeIcon
            rotate={180}
            className={styles.icon}
            icon={['fas', 'rotate']}
          />
        </Typography>
        <Typography className={styles.title}>No results found</Typography>
        <Typography className={styles.des}>
          Try adjusting your search or filters to find what you're looking for
        </Typography>
      </Stack>
    </Box>
  );
}
export default memo(ViewContentEmptyComponent);
