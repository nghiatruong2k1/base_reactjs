import { memo, useMemo, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  Decimation,
  Legend,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  ChartOptions,
  ChartDataset,
  Point,
} from 'chart.js';

Chart.register(
  Decimation,
  Legend,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
);
interface ParsingFace {
  yAxisKey?: string;
  xAxisKey?: string;
}
export interface DatasetPointFace {
  backgroundColor?: string | CanvasGradient | CanvasPattern;
  borderColor?: string | CanvasGradient | CanvasPattern;
  fill?: boolean;
  label?: string | number;
  parsing?: ParsingFace;
  data?: Array<any>;
}
export class DatasetPoint implements DatasetPointFace {
  backgroundColor = 'black';
  borderColor = 'black';
  fill = true;
  label = '';
  parsing = {};
  data = [];
  constructor(props: DatasetPointFace) {
    const _this = this;
    console.log(_this, props);
    Object.keys(props).forEach((key) => {
      _this[key] = props[key];
    });
  }
}

interface Props {
  title: string;
  datasets: Array<DatasetPointFace>;
}
function ChartComponent({ datasets = [], title = '' }: Props) {
  const thisRef = useRef();
  const _datasets: ChartDataset<'line', (number | DatasetPointFace)[]>[] =
    useMemo(() => {
      return datasets as unknown as ChartDataset<
        'line',
        (number | DatasetPointFace)[]
      >[];
    }, [datasets]);
  const _options: ChartOptions<'line'> = useMemo(() => {
    return {
      responsive: true,
      tooltips: {
        borderWidth: 1,
        enabled: true,
        intersect: false,
        mode: 'index',
      },
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          position: 'bottom',
          text: title ?? '',
        },
      },
      scales: {
        y: {
          display: true,
          title: {
            display: false,
          },
          ticks: {
            stepSize: 1,
          },
        },
      },
    };
  }, [title]);
  console.log(_datasets, _options);
  return (
    <Line ref={thisRef} data={{ datasets: _datasets }} options={_options} />
  );
}
export default memo(ChartComponent);
