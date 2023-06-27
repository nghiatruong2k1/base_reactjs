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
      Object.keys(props).forEach((key) => {
        _this[key] = props[key];
      });
    }
  }