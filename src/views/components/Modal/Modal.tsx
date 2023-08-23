import { Fragment, ReactNode, memo } from 'react';
//---------//
import styles from './Modal.module.css';
import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Paper,
  Typography,
} from '@mui/material';
import { ButtonComponent } from '~/views/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

interface Classes {
  root?: string;
  header?: string;
  title?: string;
  footer?: string;
  body?: string;
}
export type ModalComponentProps = {
  children: ReactNode;
  classes?: Classes;
} & DialogProps;

function ModalComponent({
  children,
  className = '',
  classes = {},
  onClose,
  ...props
}: ModalComponentProps) {
  return (
    <Dialog
      {...props}
      onClose={onClose}
      className={className}
      classes={{
        ...classes,
        root: clsx(styles.root, classes.root),
        paperScrollPaper: clsx(
          styles.paperScrollPaper,
          classes.paperScrollPaper,
        ),
      }}
    >
      <DialogTitle component={'h4'} className={clsx(styles.header)}>
        <div className={clsx(styles.title)}>Metadata</div>
        <ButtonComponent icon onClick={onClose}>
          <FontAwesomeIcon icon={['fas', 'times']} />
        </ButtonComponent>
      </DialogTitle>
      <Paper
        component={DialogContent}
        variant="outlined"
        className={clsx(styles.body)}
      >
        <>{children}</>
      </Paper>
    </Dialog>
  );
}
export default memo(ModalComponent);
