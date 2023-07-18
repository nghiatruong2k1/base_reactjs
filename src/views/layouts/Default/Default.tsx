import { memo, Fragment, ReactNode } from 'react';
import { Container } from '@mui/material';

interface Props {
  children: ReactNode | ReactNode[];
}
function DefaultLayoutComponent({ children }:Props) {
  return (
    <Fragment>
      <Container maxWidth="lg" component={'main'}>
        {children}
      </Container>
    </Fragment>
  );
}
export default memo(DefaultLayoutComponent);
