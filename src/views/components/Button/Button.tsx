import {
  JSXElementConstructor,
  ReactNode,
  forwardRef,
  memo,
  useMemo,
} from 'react';
import { NavLink } from 'react-router-dom';
//---------//

import { IconButton, Button, ButtonProps } from '@mui/material';
import styles from './Button.module.css';
import clsx from 'clsx';
import { TypeFace } from '~/assets/types';

export interface ButtonComponentProps extends ButtonProps {
  children: ReactNode;
  icon?: boolean | undefined;
  to?: string;
  className?: string;
  color?: TypeFace | string;
  component?: JSXElementConstructor<any>;
}

function ButtonComponent(
  {
    children,
    icon = false,
    to,
    color = 'default',
    variant = 'text',
    className,
    ...props
  }: ButtonComponentProps,
  ref,
) {
  const BtnComponent: JSXElementConstructor<any> = useMemo(() => {
    if (icon === false) {
      return Button;
    }
    return IconButton;
  }, [icon]);
  const linkProps = useMemo(() => {
    if (to) {
      return {
        to,
        component: NavLink,
      };
    }
    return {};
  }, [to]);
  return (
    <BtnComponent
      ref={ref}
      className={clsx(className, styles.root, styles[color], styles[variant], {
        [styles.icon]: icon,
      })}
      color="inherit"
      variant={variant}
      {...props}
      {...linkProps}
    >
      {children}
    </BtnComponent>
  );
}
export default memo(forwardRef(ButtonComponent));
