import { Fragment, ReactNode, memo } from 'react';
//---------//
import styles from './Test.module.css';
import { AccorCardComponent } from '~/views/components/AccorCard';

export interface Props {
  children: ReactNode;
  title: string;
}

function TestItemComponent({ title, children }: Props) {
  return (
    <AccorCardComponent opened={false} title={title}>
      {children}
    </AccorCardComponent>
  );
}
export default memo(TestItemComponent);
