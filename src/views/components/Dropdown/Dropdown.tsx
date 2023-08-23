import {
  JSXElementConstructor,
  ReactNode,
  memo,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { Menu } from '@mui/material';
import { useDisclosure } from '@mantine/hooks';
import clsx from 'clsx';
//---------//
import styles from './Dropdown.module.css';
import {
  ButtonComponent,
  ButtonComponentProps,
} from '~/views/components/Button';
interface Classes {
  root?: string | '';
  button?: string | '';
  paper?: string | '';
  list?: string | '';
}
export type DropdownProps = ButtonComponentProps<{
  id: string;
  children?: ReactNode | ReactNode[] | undefined;
  opened?: boolean;
  button: ReactNode;
  classes?: ButtonComponentProps['classes'] & Classes;
}>;

function DropdownComponent({
  id,
  children,
  opened = false,
  classes = {},
  button = 'On Click',
  className = "",
  color = 'inherit',
  ...props
}: DropdownProps) {
  const [isOpen, { toggle, open, close }] = useDisclosure();
  const buttonRef = useRef<HTMLButtonElement>();
  const handleClose = useCallback(
    (e) => {
      if (e.target?.dataset?.close === `#${id}`) {
        close();
      }
    },
    [id],
  );
  useEffect(() => {
    if (opened) {
      open();
    } else {
      close();
    }
  }, [opened]);
  return (
    <>
      <ButtonComponent
        {...props}
        color={color}
        data-target={`#${id}`}
        ref={buttonRef}
        onClick={toggle}
        className={clsx(styles.button, classes.button, className)}
      >
        {button}
      </ButtonComponent>
      <Menu
        id={id}
        open={(buttonRef.current && isOpen) || false}
        anchorEl={buttonRef.current}
        disablePortal={true}
        disableScrollLock={true}
        onClose={close}
        onClick={handleClose}
        classes={{
          root: clsx(styles.root, classes.root),
          paper: clsx(styles.paper, classes.paper, styles[color]),
          list: clsx(styles.list, classes.list),
        }}
      >
        {children}
      </Menu>
    </>
  );
}
export default memo(DropdownComponent);
