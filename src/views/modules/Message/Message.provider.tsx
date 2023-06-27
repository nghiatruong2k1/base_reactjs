import { memo, ReactNode, useRef, forwardRef, useMemo } from 'react';
import { SnackbarProvider } from 'notistack';
import styles from './Message.module.css';
import CustomMessageContent, {
  CustomMessageProps,
} from './Message.content.tsx';
import { TypeFace, typeToast } from '~/assets/types';
interface Props {
  children: ReactNode | ReactNode[];
}
function CustomMessageProvider({ children }: Props) {
  const SnackRef = useRef();
  const Components = useMemo(() => {
    return Object.keys(typeToast).reduce((rs, type: TypeFace) => {
      rs[type] = forwardRef((props: CustomMessageProps, ref) => {
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
        vertical: 'bottom',
        horizontal: 'left',
      }}
      preventDuplicate
      autoHideDuration={1000}
      Components={Components}
    >
      {children}
    </SnackbarProvider>
  );
}
export default memo(CustomMessageProvider);
