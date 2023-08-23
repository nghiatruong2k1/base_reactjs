import { ReactNode, memo } from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionProps,
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
interface Classes {
  root?: string | '';
  summary?: string | '';
  title?: string | '';
  details?: string | '';
  paper?: string | '';
  toggle?: string | '';
}
export type AccorCardComponentProps = AccordionProps & {
  children?: ReactNode | undefined;
  option?: ReactNode | undefined;
  title?: string | ReactNode | undefined;
  classes?: Classes | undefined;
  icon?: ReactNode | undefined;
  opened?: boolean | true;
  color?: string | TypeFace;
};

function AccorCardComponent({
  opened = true,
  title,
  icon,
  classes = {},
  children,
  option,
  color = 'default',
  variant = 'elevation',
  elevation = 1,
}: AccorCardComponentProps) {
  const [isOpen, { toggle }] = useDisclosure(opened);
  return (
    <Accordion
      expanded={isOpen}
      variant={variant}
      elevation={elevation}
      className={clsx(
        styles.root,
        classes.root,
        styles[color],
        styles[variant],
      )}
    >
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
        <Paper
          sx={{ p: 0.5 }}
          variant="outlined"
          className={clsx(styles.paper, classes.paper)}
        >
          {children}
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
}
export default memo(AccorCardComponent);
