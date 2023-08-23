import { forwardRef, useCallback, memo } from 'react';

import {
  CustomContentProps,
  SnackbarContent,
  SnackbarKey,
  SnackbarMessage,
  useSnackbar,
} from 'notistack';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@mui/material';
import { AccorCardComponent } from '~/views/components';
import { TypeFace, useType } from '~/assets/types';
import styles from './Message.module.css';
export type CustomMessageProps = {
  id: SnackbarKey | -1;
  variant: TypeFace;
  message: SnackbarMessage | '';
} & CustomContentProps;

function CustomMessageContent(
  { id, message, variant }: CustomMessageProps,
  ref,
) {
  const { closeSnackbar } = useSnackbar();
  const handleClose = useCallback(() => {
    closeSnackbar(id);
  }, [id]);
  const [icon, title] = useType(variant || 'inherit');
  return (
    <SnackbarContent ref={ref}>
      <AccorCardComponent
        classes={{ root: clsx(styles.root), paper: clsx(styles.paper) }}
        color={variant}
        icon={icon}
        title={title}
        option={
          <>
            <IconButton className={styles.close} onClick={handleClose}>
              <FontAwesomeIcon icon={['fas', 'times']} />
            </IconButton>
          </>
        }
      >
        {message}
      </AccorCardComponent>
    </SnackbarContent>
  );
}

export default memo(forwardRef(CustomMessageContent));
