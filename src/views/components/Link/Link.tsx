import { ElementType, ReactNode, forwardRef, memo, useMemo } from 'react';
//---------//
import styles from './Link.module.css';
import { Link, LinkProps } from '@mui/material';
import { Link as NavLink, LinkProps as NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';
import { RouteConfig } from '~/configs/Route.ts';
import { GetAction } from '~/controllers';

export type LinkComponentProps<
  P = {},
  T extends ElementType<any> = 'a',
> = LinkProps<
  T,
  P & {
    children: ReactNode;
    loading?: boolean;
    loadingClass?: string;
    disabled?: boolean;
    disabledClass?: string;
    active?: boolean;
    activeClass?: string;
    to?: NavLinkProps['to'];
    route?: RouteConfig;
    params?: { [key: string]: any };
  } & NavLinkProps
>;

function LinkComponent(
  {
    children,
    loading = false,
    loadingClass,
    disabled = false,
    disabledClass,
    active = false,
    activeClass,
    underline = 'none',
    className,
    classes = {},
    to = '#',
    route,
    color = 'inherit',
    params = {},
    ...props
  }: LinkComponentProps,
  ref,
) {
  const url = useMemo<string>(() => {
    if (route) {
      let u = GetAction(route, params);
      return u;
    }
    if (to !== undefined) {
      let u = to as string;
      return u;
    }
    return '#';
  }, [to, route, params]);
  return (
    <Link
      to={url}
      {...props}
      ref={ref}
      component={NavLink}
      className={clsx(
        styles.root,
        styles[color],
        {
          [styles.loading]: loading,
          [loadingClass]: loading,
          [styles.active]: active,
          [activeClass]: active,
          [styles.disabled]: loading || disabled,
          [disabledClass]: loading || disabled,
        },
        className,
      )}
      classes={{ ...classes }}
      underline={underline}
      preventScrollReset={true}
      // color={color}
    >
      {children}
    </Link>
  );
}
export default memo(forwardRef(LinkComponent));
