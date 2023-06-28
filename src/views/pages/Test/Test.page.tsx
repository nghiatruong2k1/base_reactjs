import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import {
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@mui/material';
import styles from './Test.module.css';
import TestItemComponent from './Test.item.tsx';
import { TypeFace, typeToast } from '~/assets/types';
import { AccorCardComponent } from '~/views/components/AccorCard';
import { ChartComponent, DatasetPoint } from '~/views/components/Chart';
import {
  useSelectorGlobal,
  GlobalStateType,
  useDispatchGlobal,
} from '~/states/init.ts';
import { sliceReducerTheme } from '~/assets/styles/reducers.ts';
export interface Props {}

export default function Test({}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = useCallback((e) => {
    enqueueSnackbar(`test: ${e.target.dataset.type}`, {
      variant: e.target.dataset.type,
    });
  }, []);
  const currentTheme = useSelectorGlobal(
    (state: GlobalStateType) => state.theme,
  );
  const handleChangeTheme = useCallback((e) => {
    dispatch(
      sliceReducerTheme.actions.change((e.target.checked && 'light') || 'dark'),
    );
  }, []);
  const dispatch = useDispatchGlobal();
  return (
    <Container component={'main'}>
      <TestItemComponent title={'Theme'}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={currentTheme === 'light'}
                onChange={handleChangeTheme}
              />
            }
            label={currentTheme === 'light' ? 'Light mode' : 'Dark mode'}
          />
        </FormGroup>
      </TestItemComponent>
      <TestItemComponent title={'Snackbar'}>
        {Object.keys(typeToast).map((type) => {
          return (
            <Button
              key={type}
              data-type={type}
              onClick={handleClick}
              className={`-${type}`}
            >
              {type}
            </Button>
          );
        })}
      </TestItemComponent>
      <TestItemComponent title={'AccorCardComponent'}>
        {Object.keys(typeToast).map((type) => {
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
