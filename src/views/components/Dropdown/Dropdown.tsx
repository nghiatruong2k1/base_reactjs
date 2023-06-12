import { JSXElementConstructor, ReactNode, memo } from 'react';
//---------//
import styles from './Dropdown.module.css';
import { Button, ClickAwayListener, Menu, MenuItem } from '@mui/material';
import { useDisclosure } from '@mantine/hooks';
import { useMemo } from 'react';
import { useRef } from 'react';
import clsx from 'clsx';
export interface Classes {
  root?: string | '';
  paper?: string | '';
  list?: string | '';
  item?: string | '';
}
export interface Props {
  children?: ReactNode | ReactNode[] | undefined;
  opened?: boolean;
  button: JSXElementConstructor<any>;
  classes?: Classes;
}

function DropdownComponent({
  children,
  opened = false,
  classes = {},
  button,
}: Props) {
  const [isOpen, { toggle, close }] = useDisclosure(opened);
  const buttonRef = useRef();
  const ButtonComponent = useMemo(() => {
    return button ?? Button;
  }, [button]);
  return (
    <>
      <ButtonComponent ref={buttonRef} onClick={toggle} />
      <Menu
        open={buttonRef.current && isOpen || false}
        anchorEl={buttonRef.current}
        disablePortal={true}
        disableScrollLock={true}
        hideBackdrop={true}
        onClose={close}
        onClick={close}
        classes={{
          root: clsx(styles.root, classes.root),
          paper: clsx(styles.paper, classes.paper),
          list: clsx(styles.list, classes.list),
        }}
      >
        <ClickAwayListener onClickAway={close}>
          <>{children}</>
        </ClickAwayListener>
      </Menu>
    </>
  );
}
export default memo(DropdownComponent);
