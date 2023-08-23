import { memo, ReactNode } from 'react';
import { useSelectorGlobal } from '~/stores';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ButtonComponent } from '~/views/components';
import { isLoadingSelector } from '~/hooks/useLoading/selectors.ts';
import styles from './Loading.module.css';
interface Props {
  children: ReactNode;
}

function LoadingModule({ children }: Props) {
  const isLoading = useSelectorGlobal(isLoadingSelector);
  return (
    <>
      {isLoading && (
        <span className={styles.root}>
          <ButtonComponent
            icon
            className={styles.button}
            variant="outlined"
            color="info"
          >
            <FontAwesomeIcon
              rotate={180}
              className={styles.icon}
              icon={['fas', 'rotate']}
            />
          </ButtonComponent>
        </span>
      )}
      {children}
    </>
  );
}

export default memo(LoadingModule);
