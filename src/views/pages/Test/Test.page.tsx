import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { Button, Container } from '@mui/material';

import { TypeFace, typeToast } from '~/assets/types';
import TestItemComponent from './Test.item.tsx';
import { AccorCardComponent } from '~/views/components/AccorCard';
import { ChartComponent, DatasetPoint } from '~/views/components/Chart';
import styles from './Test.module.css';
export interface Props {}

export default function Test({}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = useCallback((e) => {
    enqueueSnackbar(`test: ${e.target.dataset.type}`, {
      variant: e.target.dataset.type,
    });
  }, []);
  return (
    <Container component={'main'}>
      <TestItemComponent title={'Snackbar'}>
        {Object.keys(typeToast).map((type: TypeFace) => {
          return (
            <Button data-type={type} onClick={handleClick} className={`-${type}`}>
              {type}
            </Button>
          );
        })}
      </TestItemComponent>
      <TestItemComponent title={'AccorCardComponent'}>
        {Object.keys(typeToast).map((type: TypeFace) => {
          return (
            <AccorCardComponent
              title={`AccorCardComponent ${type}`}
              variant={type}
            >
              AccorCardComponent
            </AccorCardComponent>
          );
        })}
      </TestItemComponent>
      <TestItemComponent title="ChartComponent">
        <ChartComponent
          title="ChartComponent"
          datasets={['ya', 'yb'].map((label) => {
            return new DatasetPoint({
              label: label,
              data: [
                'xa',
                'xb',
                'xc',
                'xd',
                'xe',
                'xf',
                'xg',
                'xh',
                'xi',
                'xk',
              ].map((v, i) => {
                return {
                  x: v,
                  [label]: (i + Math.random() * 10) * Math.random() * 10,
                };
              }),
              parsing: {
                yAxisKey: label,
              },
            });
          })}
        />
      </TestItemComponent>
    </Container>
  );
}
