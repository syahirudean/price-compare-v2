import { Route } from '@angular/router';

import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';

export const routes: Route[] = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        component: OrderDashboardComponent,
        children: [
          {
            path: 'item-editor/:name',
            loadChildren: () =>
              import('../shared-item-editor/item-editor.routes').then(
                (f) => f.routes,
              ),
          },
        ],
      },
    ],
  },
];
