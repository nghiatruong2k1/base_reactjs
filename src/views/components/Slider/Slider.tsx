import { ReactNode, memo, useCallback, useEffect, useRef } from 'react';
import { ButtonGroup, Stack } from '@mui/material';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonComponent } from '~/views/components';
import styles from './Slider.module.css';
interface Props {
  className?: string;
  automatic?: boolean;
  timeout?: number;
  direction?: 'row' | 'column';
  children?: ReactNode | ReactNode[] | undefined;
}
function SliderWidget({
  className = '',
  automatic = false,
  timeout = 5000,
  direction = 'row',
  children,
}: Props) {
  const thisRef = useRef<HTMLDivElement>(null);
  const handleLeftClick = useCallback(() => {
    if (thisRef.current) {
      thisRef.current.insertBefore(
        thisRef.current.lastChild,
        thisRef.current.firstChild,
      );
    }
  }, [thisRef]);
  const handleRightClick = useCallback(() => {
    if (thisRef.current) {
      thisRef.current.insertBefore(
        thisRef.current.firstChild,
        thisRef.current.lastChild.nextSibling,
      );
    }
  }, [thisRef]);
  useEffect(() => {
    if (automatic) {
      const interval = setInterval(handleRightClick, timeout);
      return () => {
        clearInterval(interval);
      };
    }
  }, [automatic, timeout]);
  return (
    <div className={clsx(styles.root, className)}>
      <Stack direction="row" className={styles.stack}>
        <div>
          <ButtonComponent
            icon={true}
            className={styles.chevron}
            onClick={handleLeftClick}
            color="inherit"
            variant="contained"
          >
            <FontAwesomeIcon icon={['fas', 'chevron-circle-left']} />
          </ButtonComponent>
        </div>
        <Stack ref={thisRef} direction={direction} className={styles.group}>
          {children}
        </Stack>
        <div>
          <ButtonComponent
            icon={true}
            className={styles.chevron}
            onClick={handleRightClick}
            color="inherit"
            variant="contained"
          >
            <FontAwesomeIcon icon={['fas', 'chevron-circle-right']} />
          </ButtonComponent>
        </div>
      </Stack>
    </div>
  );
}
export default memo(SliderWidget);
