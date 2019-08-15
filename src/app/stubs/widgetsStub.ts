import {IWidget} from '../models/iwidget';

export const widgetStub: IWidget[] = [
  {
    id: 1,
    caption: 'Посетители(Все)',
    value: 65022,
    valueDimension: 'чел.',
    delta: 7,
  },
  {
    id: 2,
    caption: 'Длительность',
    value: 53,
    valueDimension: 'мин.',
    delta: -19,
  },
  {
    id: 3,
    caption: 'Доля лояльных',
    value: 65,
    valueDimension: '%',
    delta: 7,
  },
  {
    id: 4,
    caption: 'Доля новых',
    value: 35,
    valueDimension: '%',
    delta: -10,
  },
  {
    id: 5,
    caption: 'Доля вовлеченных',
    value: 72,
    valueDimension: '%',
    delta: -2,
  },
  {
    id: 6,
    caption: 'Shopping Index',
    isDisabled: true,
  }
];
