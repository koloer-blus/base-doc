import * as compRoute from './component.routes';
import * as docRoute from './doc.routes';

export const routes = [
  {
    path: 'component',
    children: compRoute.routeList
  },
  {
    path: 'doc',
    children: docRoute.routesList
  }
];