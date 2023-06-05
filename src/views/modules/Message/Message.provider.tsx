import { memo, ReactNode, useRef, useCallback } from 'react';
import { SnackbarProvider } from 'notistack';
import styles from './Message.module.css';
import CustomMessageContent from './Message.content.tsx';
import { useMemo } from 'react';
import { TypeFace, typeToast } from '~/assets/types';
import { forwardRef } from 'react';
interface Props {
  children: ReactNode | ReactNode[];
}
function CustomMessageProvider({ children }: Props) {
  const SnackRef = useRef();
  const Components = useMemo(() => {
    return Object.keys(typeToast).reduce((rs, type: TypeFace) => {
      rs[type] = forwardRef((props,ref) => {
        return <CustomMessageContent {...props} ref={ref} variant={type} />;
      });
      return rs;
    }, {});
  }, []);
  return (
    <SnackbarProvider
      ref={SnackRef}
      maxSnack={5}
      className={styles.container}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      preventDuplicate
      autoHideDuration={1000000}
      Components={Components}
    >
      {children}
    </SnackbarProvider>
  );
}
export default memo(CustomMessageProvider);
