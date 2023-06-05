import { ReactNode, memo } from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useDisclosure } from '@mantine/hooks';
import styles from './AccorCard.module.css';
import { TypeFace } from '~/assets/types';
export interface Classes {
  root?: string | '';
  summary?: string | '';
  title?: string | '';
  details?: string | '';
  toggle?: string | '';
}
export interface Props {
  children?: ReactNode | undefined;
  option?: ReactNode | undefined;
  title?: string | ReactNode | undefined;
  classes?: Classes;
  icon?: ReactNode | undefined;
  opened?: boolean | true;
  variant?: TypeFace;
}

function AccorCardComponent({
  opened = true,
  title,
  icon,
  classes,
  children,
  option,
  variant
}: Props) {
  const [isOpen, { toggle }] = useDisclosure(opened);
  return (
    <Accordion expanded={isOpen} className={clsx(styles.root, classes.root, variant)}>
      <AccordionSummary
        classes={{ content: clsx(styles.summary, classes.summary) }}
      >
        <div>{icon}</div>
        <Typography className={clsx(styles.title, classes.title)}>
          {title}
        </Typography>
        <div>
          <IconButton
            size="small"
            className={clsx(styles.toggle, classes.toggle)}
            onClick={toggle}
          >
            <FontAwesomeIcon icon={['fas', (isOpen && 'minus') || 'plus']} />
          </IconButton>
          {option}
        </div>
      </AccordionSummary>
      <AccordionDetails
        className={clsx(styles.details, classes.details)}
        sx={{ p: 0.5 }}
      >
        <Paper sx={{ p: 0.5 }} variant="outlined">
          {children}
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}
export default memo(AccorCardComponent);
