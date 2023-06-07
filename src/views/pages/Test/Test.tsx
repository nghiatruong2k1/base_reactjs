import { useEffect } from 'react';

import styles from './Test.module.css';
import { Container } from '@mui/material';
import { AccorCardComponent } from '~/views/components/AccorCard';
import { TypeFace, typeToast } from '~/assets/types';

import { ChartComponent } from '~/views/components/Chart/index.js';
import { DatasetPoint } from '~/views/components/Chart/Chart.tsx';
import { useSnackbar } from 'notistack';
import TestItemComponent from './Test.item.tsx';
export interface Props {}

export default function Test({}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    return Object.keys(typeToast).forEach((type: TypeFace) => {
      enqueueSnackbar(`test: ${type}`, { variant: type });
    });
  }, []);
  return (
    <Container component={'main'}>
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
