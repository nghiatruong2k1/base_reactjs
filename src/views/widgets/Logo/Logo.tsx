import { memo } from 'react';
//--------//

import { Link } from 'react-router-dom';
import { Controller } from '~/controllers';

import { ImageComponent } from '~/views/components/Image';
import styles from './Logo.module.css';
import { GetAction } from '~/configs/Route.ts';
export interface Props {
  height?: number | string | undefined;
}

function LogoWidget({ height = '3em' }: Props) {
  return (
    <div>
      <Link to={GetAction(Controller['Home'])}>
        <ImageComponent height={height} fit="contain" src="/imgs/logo.png" />
      </Link>
    </div>
  );
}
export default memo(LogoWidget);
