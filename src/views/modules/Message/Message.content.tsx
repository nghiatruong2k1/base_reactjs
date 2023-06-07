import { forwardRef, useCallback } from 'react';
import styles from './Message.module.css';
import {
  CustomContentProps,
  SnackbarContent,
  SnackbarKey,
  SnackbarMessage,
  useSnackbar,
} from 'notistack';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AccorCardComponent } from '~/views/components/AccorCard';
import { IconButton } from '@mui/material';
import { TypeFace, useType } from '~/assets/types';
export interface CustomMessageProps extends CustomContentProps {
  id: SnackbarKey | -1;
  variant: TypeFace;
  message: SnackbarMessage | '';
}

function CustomMessageContent(
  { id, message, variant, style, iconVariant, persist }: CustomMessageProps,
  ref,
) {
  const { closeSnackbar } = useSnackbar();
  const handleClose = useCallback(() => {
    closeSnackbar(id);
  }, [id]);
  const [icon, title] = useType(variant);
  return (
    <SnackbarContent ref={ref}>
      <AccorCardComponent
        classes={{ root: clsx(styles.root, variant) }}
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

export default forwardRef(CustomMessageContent);
