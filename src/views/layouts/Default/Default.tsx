import { memo, Fragment, ReactNode } from 'react';
import { Container } from '@mui/material';
import { ScrollToViewPartial } from '~/views/partials';

interface Props {
  children: ReactNode | ReactNode[];
}
function DefaultLayoutComponent({ children }: Props) {
  return (
    <Fragment>
      <Container maxWidth="lg" component={'main'}>
        {children}
        <ScrollToViewPartial />
      </Container>
    </Fragment>
  );
}
export default memo(DefaultLayoutComponent);
