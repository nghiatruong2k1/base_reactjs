import { memo, ElementType, useCallback, useMemo, ReactNode } from 'react';
//---------//
import styles from './Image.module.css';
import clsx from 'clsx';
import { Box, Skeleton, BoxProps, SxProps } from '@mui/material';
import { useDisclosure } from '@mantine/hooks';

interface Classes {
  root?: string | '';
  image?: string | '';
}

export type ImageComponentProps<
  P = {},
  T extends ElementType<any> = 'figure',
> = BoxProps<
  T,
  P & {
    src: string;
    className?: string;
    alt?: string;
    classes?: Classes;
    fit?: 'fill' | 'cover' | 'contain';
    ratio?: number | 'auto';
    height?: any;
    width?: any;
    loading?: boolean;
    hidden?: boolean;
  }
>;
const defaultDir = '/imgs/default-img.jpg';
function ImageComponent({
  src = '',
  alt = '',
  className = '',
  fit = 'fill',
  classes = {},
  ratio = 'auto',
  height = 'auto',
  width = 'auto',
  loading = false,
  hidden = false,
  component = 'figure',
  sx = {},
  ...props
}: ImageComponentProps) {
  const [isLoading, { close }] = useDisclosure(true);
  const handleError = useCallback(
    (e) => {
      if (!loading && e.target.src !== defaultDir) {
        e.target.src = defaultDir;
      }
      close();
    },
    [loading],
  );
  return (
    <Box
      {...props}
      component={component}
      style={{ height, width, '--aspect-ratio': ratio }}
      className={clsx(className, styles.root, classes.root, {
        [styles.loading]: loading || isLoading,
      })}
    >
      <img
        alt={alt || src || 'image'}
        loading={'lazy'}
        src={(!loading && src) || ''}
        onLoad={close}
        onError={handleError}
        className={clsx(styles.image, styles[fit], classes.image, {
          [styles.hidden]: hidden,
        })}
      />
      <div className={clsx(styles.overlay)}>
        <Skeleton className={clsx(styles.skeleton)} />
      </div>
    </Box>
  );
}
export default memo(ImageComponent);
