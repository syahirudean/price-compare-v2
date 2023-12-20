import { Route } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';

export const routes: Route[] = [
  {
    path: '',
    providers: [ProductService],
    children: [
      {
        path: '',
        component: ProductListComponent,
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
