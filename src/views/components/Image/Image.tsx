import { memo } from 'react';
//---------//
import styles from './Image.module.css';
import clsx from 'clsx';

export interface Classes {
  root?: string | '';
  image?: string | '';
}
export interface Props {
  src: string;
  alt?: string;
  classes?: Classes;
  fit?: 'fill' | 'cover' | 'contain';
  height?: number | string | undefined;
  width?: number | string | undefined;
}

function ImageComponent({
  src,
  alt,
  fit = 'fill',
  classes = {},
  height = 'auto',
  width = 'auto',
}: Props) {
  return (
    <figure className={clsx(styles.root, classes.root)}>
      <img
        src={src}
        alt={alt || src || 'image'}
        loading={'lazy'}
        className={clsx(styles.image, styles[fit], classes.image)}
        style={{
          height: height,
          width: width,
        }}
      />
    </figure>
  );
}
export default memo(ImageComponent);
