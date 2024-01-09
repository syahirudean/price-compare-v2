import { Routes } from '@angular/router';

import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';

export default <Routes>[
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
              import('../shared-item-editor/item-editor.routes'),
          },
        ],
      },
    ],
  },
];
