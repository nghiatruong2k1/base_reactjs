import { useSnackbar } from 'notistack';
import { memo } from 'react';
import { Fragment, ReactNode } from 'react';
import { useEffect } from 'react';
import { TypeFace, typeToast } from '~/assets/types';

export interface Props {
  children: ReactNode;
}

function MessageParial({ children }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    // return Object.keys(typeToast).forEach((type: TypeFace) => {
    //   enqueueSnackbar(`test: ${type}`, { variant: type });
    // });
  }, []);
  return <Fragment>{children}</Fragment>;
}
export default memo(MessageParial);
