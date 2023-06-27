import { memo } from 'react';
//--------//

import { Link } from 'react-router-dom';
import { Controller } from '~/controllers';

import { ImageComponent } from '~/views/components/Image';
import styles from './Logo.module.css';
export interface Props {}

function LogoWidget({}: Props) {
  return (
    <div>
      <Link to={Controller.Home.getAction()}>
        <ImageComponent height={'2em'} fit="contain" src="/imgs/logo.png" />
      </Link>
    </div>
  );
}
export default memo(LogoWidget);
