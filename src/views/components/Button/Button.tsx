import {
  ElementType,
  JSXElementConstructor,
  memo,
  forwardRef,
  useMemo,
} from 'react';
//---------//

import { IconButton, Button, ButtonProps } from '@mui/material';
import styles from './Button.module.css';
import clsx from 'clsx';
import { TypeFace } from '~/assets/types';

export type ButtonComponentProps<
  P = {},
  T extends ElementType<any> = 'button',
> = ButtonProps<
  T,
  {
    icon?: boolean | undefined;
    loading?: boolean;
    loadingClass?: string;
    disabled?: boolean;
    disabledClass?: string;
    active?: boolean;
    activeClass?: string;
    download?: boolean | undefined;
    href?: string;
    component?: ElementType;
  } & P
>;

function ButtonComponent(
  {
    children,
    icon = false,
    color = 'inherit',
    variant = 'text',
    className = '',
    classes = {},
    loading = false,
    loadingClass = '',
    disabled = false,
    disabledClass = '',
    active = false,
    activeClass = '',
    component = 'button',
    ...props
  }: ButtonComponentProps,
  ref,
) {
  const BtnComponent: JSXElementConstructor<any> = useMemo(() => {
    if (icon !== true) {
      return Button;
    }
    return IconButton;
  }, [icon]);
  return (
    <BtnComponent
      {...props}
      ref={ref}
      className={clsx(
        styles.root,
        styles[color],
        styles[variant],
        {
          [styles.icon]: icon,
          [styles.loading]: loading,
          [loadingClass]: loading,
          [styles.active]: active,
          [activeClass]: active,
          [styles.disabled]: loading || disabled,
          [disabledClass]: loading || disabled,
        },
        className,
      )}
      classes={{
        ...classes,
        endIcon: clsx(classes.endIcon, styles.endIcon),
        startIcon: clsx(classes.startIcon, styles.startIcon),
      }}
      variant={variant}
      component={component}
    >
      <>{children}</>
    </BtnComponent>
  );
}
export default memo(forwardRef(ButtonComponent));
