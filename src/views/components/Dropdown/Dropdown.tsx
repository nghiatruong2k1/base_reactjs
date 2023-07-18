import {
  JSXElementConstructor,
  ReactNode,
  memo,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import { ClickAwayListener, Menu } from '@mui/material';
import { useDisclosure } from '@mantine/hooks';
import clsx from 'clsx';
//---------//
import styles from './Dropdown.module.css';
import {
  ButtonComponent,
  ButtonComponentProps,
} from '~/views/components/Button';
export interface Classes {
  root?: string | '';
  paper?: string | '';
  list?: string | '';
}
export interface Props extends ButtonComponentProps {
  id: string;
  children?: ReactNode | ReactNode[] | undefined;
  opened?: boolean;
  button: ReactNode;
  buttonComponent?: JSXElementConstructor<any>;
  classes?: Classes;
}

function DropdownComponent({
  id,
  children,
  opened = false,
  classes = {},
  button = 'On Click',
  buttonComponent = ButtonComponent,
  ...props
}: Props) {
  const [isOpen, { toggle, close }] = useDisclosure(opened);
  const buttonRef = useRef();
  const BtnComponent = useMemo(() => {
    return buttonComponent;
  }, [buttonComponent]);
  const handleClose = useCallback(
    (e) => {
      if (e.target?.dataset?.close == `#${id}`) {
        close();
      }
    },
    [id],
  );
  return (
    <>
      <BtnComponent
        {...props}
        data-target={`#${id}`}
        ref={buttonRef}
        onClick={toggle}
      >
        {button}
      </BtnComponent>
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
          paper: clsx(styles.paper, classes.paper),
          list: clsx(styles.list, classes.list),
        }}
      >
        {children}
      </Menu>
    </>
  );
}
export default memo(DropdownComponent);
